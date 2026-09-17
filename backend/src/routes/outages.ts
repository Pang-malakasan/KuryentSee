import { Router, Request, Response } from "express";
import { mockOutages, OutageLocation } from "../data/outagesData.js";

const router = Router();

// In-memory state for outages
let outages: OutageLocation[] = [...mockOutages];



// GET /api/outages - List all active outage areas
router.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: outages.length,
    data: outages,
  });
});

// GET /api/outages/:id - Get details of a single outage
router.get("/:id", (req: Request, res: Response) => {
  const outage = outages.find((o) => o.id === req.params.id);
  if (!outage) {
    res.status(404).json({ success: false, message: "Outage not found" });
    return;
  }
  res.json({ success: true, data: outage });
});

// POST /api/outages - Admin or cooperative adds a new outage area
router.post("/", (req: Request, res: Response) => {
  const { id, name, city, status, timeRemaining, coordinates, markerOffset, geoJson } = req.body;

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
  };

  outages.unshift(newOutage);
  res.status(201).json({ success: true, data: newOutage });
});

// PATCH /api/outages/:id - Update outage status or restoration time
router.patch("/:id", (req: Request, res: Response) => {
  const index = outages.findIndex((o) => o.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ success: false, message: "Outage not found" });
    return;
  }

  outages[index] = { ...outages[index], ...req.body };
  res.json({ success: true, data: outages[index] });
});

export default router;
