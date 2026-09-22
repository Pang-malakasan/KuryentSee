import { Router, Request, Response } from "express";
import { mockOutages, OutageLocation } from "../data/outagesData.js";
import Outage from "../models/Outage.js";
import { parse } from "date-fns";

const router = Router();

// In-memory manual overrides/additions
let customOutages: OutageLocation[] = [];

function cleanName(str: string): string {
  return str
    .toLowerCase()
    .replace(/^barangay\s+/i, "")
    .replace(/^part\s+of\s+/i, "")
    .replace(/,\s*cebu/i, "")
    .replace(/[^a-z0-9]/gi, "")
    .trim();
}

/**
 * Parses time window string (e.g. "7:00 AM – 12:00 NN", "8:00 AM - 5:00 PM", "4:00 PM - onwards")
 * relative to the base date.
 */
function parseTimeWindow(timeWindow: string, baseDate: Date) {
  if (!timeWindow || timeWindow === "Unknown" || timeWindow === "None") {
    return { startTime: null, endTime: null };
  }

  const normalized = timeWindow
    .replace(/[–—]/g, "-")
    .replace(/\bNN\b/gi, "PM")
    .replace(/\bnoon\b/gi, "PM");

  const match = normalized.match(/(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm))/g);
  let startTime: Date | null = null;
  let endTime: Date | null = null;

  if (match && match.length >= 1) {
    try {
      startTime = parse(match[0], "h:mm a", baseDate);
    } catch {
      startTime = null;
    }

    if (match.length >= 2) {
      try {
        endTime = parse(match[1], "h:mm a", baseDate);
        if (startTime && endTime < startTime) {
          endTime.setDate(endTime.getDate() + 1);
        }
      } catch {
        endTime = null;
      }
    }
  }

  return { startTime, endTime };
}

/**
 * Merges the 306-barangay GeoJSON foundation with active CEBECO II Facebook advisories from MongoDB.
 * Computes live countdowns, durations, and advance warnings for incoming outages.
 */
export async function getLiveOutages(): Promise<OutageLocation[]> {
  try {
    const activeAdvisories = await Outage.find({
      status: { $in: ["ON_GOING", "UPCOMING"] },
      type: { $in: ["EMERGENCY_INTERRUPTION", "MANUAL_LOAD_DROPPING", "SCHEDULED_INTERRUPTION"] },
    }).sort({ dateEffective: -1, datePosted: -1 });

    // Initialize all 306 barangays default to Normal Power
    const liveOutages: OutageLocation[] = mockOutages.map((bgy) => ({
      ...bgy,
      status: "Normal Power",
      timeRemaining: "Operational",
      duration: undefined,
      isUpcoming: false,
      reason: "",
      sourcePostId: undefined,
    }));

    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));

    for (const advisory of activeAdvisories) {
      const isUpcoming = advisory.status === "UPCOMING";
      const isEmergency =
        advisory.type === "EMERGENCY_INTERRUPTION" ||
        advisory.type === "MANUAL_LOAD_DROPPING";

      const effectiveDate = new Date(advisory.dateEffective || advisory.datePosted);
      const { startTime, endTime } = parseTimeWindow(advisory.timeWindow, effectiveDate);

      let statusType = isEmergency ? "Brownout" : "Scheduled Maintenance";
      let timeDisplay = "";
      let durationDisplay = "";

      // Calculate total duration if both start and end time exist
      if (startTime && endTime) {
        const totalMinutes = Math.round((endTime.getTime() - startTime.getTime()) / 60000);
        const hrs = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        durationDisplay = mins > 0 ? `${hrs}h ${mins}m` : `${hrs} hours`;
      }

      if (isUpcoming) {
        statusType = "Scheduled Maintenance";
        const dayDiff = Math.ceil((effectiveDate.getTime() - now.getTime()) / (1000 * 3600 * 24));
        const dateStr = effectiveDate.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        });

        if (dayDiff > 1) {
          timeDisplay = `Starts ${dateStr} · ${advisory.timeWindow} (in ${dayDiff} days)`;
        } else if (dayDiff === 1) {
          timeDisplay = `Starts Tomorrow (${dateStr} · ${advisory.timeWindow})`;
        } else {
          timeDisplay = `Starts Today (${advisory.timeWindow})`;
        }
      } else {
        // ON_GOING Outage
        statusType = isEmergency ? "Brownout" : "Scheduled Maintenance";

        if (endTime && now < endTime) {
          const remainingMinutes = Math.round((endTime.getTime() - now.getTime()) / 60000);
          const hrs = Math.floor(remainingMinutes / 60);
          const mins = remainingMinutes % 60;
          const endStr = endTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
          timeDisplay = hrs > 0 ? `${hrs}h ${mins}m left (Until ${endStr})` : `${mins}m left (Until ${endStr})`;
        } else if (startTime && now >= startTime) {
          const elapsedMinutes = Math.round((now.getTime() - startTime.getTime()) / 60000);
          const hrs = Math.floor(elapsedMinutes / 60);
          timeDisplay = hrs > 0 ? `Ongoing (~${hrs}h elapsed)` : `Ongoing (Just started)`;
        } else {
          const elapsedMinutes = Math.max(0, Math.round((now.getTime() - effectiveDate.getTime()) / 60000));
          const hrs = Math.floor(elapsedMinutes / 60);
          if (hrs > 0 && hrs < 72) {
            timeDisplay = `Ongoing (~${hrs}h elapsed)`;
            durationDisplay = `Active for ~${hrs} hours`;
          } else {
            timeDisplay = advisory.timeWindow && advisory.timeWindow !== "Unknown"
              ? advisory.timeWindow
              : isEmergency
              ? "Active Emergency Interruption"
              : "Active Interruption";
          }
        }
      }

      for (const area of advisory.affectedAreas || []) {
        const cityKey = cleanName(area.cityOrMunicipality);
        const specificBarangays = (area.barangays || [])
          .map((b) => cleanName(b))
          .filter(
            (b) =>
              b.length > 0 &&
              !["all", "whole", "entire", "wholecarmen", "entiremunicipality"].includes(b)
          );

        const isWholeCity = specificBarangays.length === 0;

        for (const bgy of liveOutages) {
          const bgyCityKey = cleanName(bgy.city);
          if (!bgyCityKey.includes(cityKey) && !cityKey.includes(bgyCityKey)) {
            continue;
          }

          let isMatch = false;
          if (isWholeCity) {
            isMatch = true;
          } else {
            const bgyNameKey = cleanName(bgy.name);
            isMatch = specificBarangays.some(
              (spec) => bgyNameKey.includes(spec) || spec.includes(bgyNameKey)
            );
          }

          if (isMatch) {
            // Brownout takes precedence over upcoming/scheduled
            if (bgy.status !== "Brownout") {
              bgy.status = statusType;
            }
            bgy.timeRemaining = timeDisplay;
            if (durationDisplay) {
              bgy.duration = durationDisplay;
            }
            bgy.isUpcoming = isUpcoming;
            bgy.dateEffective = effectiveDate.toISOString();
            bgy.reason = advisory.reason;
            bgy.sourcePostId = advisory.sourcePostId;
          }
        }
      }
    }

    // Include any manual/custom outages prepended by POST /api/outages
    if (customOutages.length > 0) {
      return [...customOutages, ...liveOutages];
    }

    return liveOutages;
  } catch (error) {
    console.error("[Outages API] MongoDB error, falling back to mock data:", error);
    return mockOutages;
  }
}

// GET /api/outages - List all active outage areas (connected to CEBECO II MongoDB advisories)
router.get("/", async (_req: Request, res: Response) => {
  const data = await getLiveOutages();
  res.json({
    success: true,
    count: data.length,
    data,
  });
});

// GET /api/outages/:id - Get details of a single outage
router.get("/:id", async (req: Request, res: Response) => {
  const data = await getLiveOutages();
  const outage = data.find((o) => o.id === req.params.id);
  if (!outage) {
    res.status(404).json({ success: false, message: "Outage not found" });
    return;
  }
  res.json({ success: true, data: outage });
});

// POST /api/outages - Admin or cooperative adds a new outage area
router.post("/", (req: Request, res: Response) => {
  const { id, name, city, status, timeRemaining, coordinates, markerOffset, geoJson, reason } = req.body;

  if (!name || !city || !coordinates || !geoJson) {
    res.status(400).json({
      success: false,
      message: "Missing required fields: name, city, coordinates, geoJson",
    });
    return;
  }

  const newOutage: OutageLocation = {
    id: id || name.toLowerCase().replace(/\s+/g, "-"),
    name,
    city,
    status: status || "Reported Outage",
    timeRemaining: timeRemaining || "Under Investigation",
    coordinates,
    markerOffset: markerOffset || coordinates,
    geoJson,
    reason: reason || "",
  };

  customOutages.unshift(newOutage);
  res.status(201).json({ success: true, data: newOutage });
});

// PATCH /api/outages/:id - Update outage status or restoration time
router.patch("/:id", (req: Request, res: Response) => {
  const index = customOutages.findIndex((o) => o.id === req.params.id);
  if (index !== -1) {
    customOutages[index] = { ...customOutages[index], ...req.body };
    res.json({ success: true, data: customOutages[index] });
    return;
  }

  res.json({ success: true, message: "Outage status acknowledged" });
});

export default router;
