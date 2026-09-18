import { Router, Request, Response } from "express";
import Outage from '../models/Outage.js';

const router = Router();

// GET /api/advisories - List all Facebook AI-parsed advisories
router.get("/", async (_req: Request, res: Response) => {
  try {
    const advisories = await Outage.find().sort({ dateEffective: -1, datePosted: -1 });
    res.json({ success: true, count: advisories.length, data: advisories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching advisories" });
  }
});

// GET /api/advisories/current - List only active AI-parsed advisories
router.get("/current", async (_req: Request, res: Response) => {
  try {
    const advisories = await Outage.find({ status: { $in: ["UPCOMING", "ON_GOING"] } }).sort({ dateEffective: -1, datePosted: -1 });
    res.json({ success: true, count: advisories.length, data: advisories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching current advisories" });
  }
});

// GET /api/advisories/grid-alerts - List only active Grid Alerts (RED or YELLOW)
router.get("/grid-alerts", async (_req: Request, res: Response) => {
  try {
    const alerts = await Outage.find({ 
      type: { $in: ["RED_ALERT", "YELLOW_ALERT"] },
      status: { $in: ["UPCOMING", "ON_GOING"] } 
    }).sort({ dateEffective: -1, datePosted: -1 });
    
    res.json({ success: true, count: alerts.length, data: alerts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching grid alerts" });
  }
});

// GET /api/advisories/city/:city - List advisories for a specific city or municipality
router.get("/city/:city", async (req: Request, res: Response) => {
  try {
    const city = req.params.city;
    // Use regex for case-insensitive matching
    const advisories = await Outage.find({
      "affectedAreas.cityOrMunicipality": { $regex: new RegExp(`^${city}$`, "i") }
    }).sort({ dateEffective: -1, datePosted: -1 });
    
    res.json({ success: true, count: advisories.length, data: advisories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching advisories for city" });
  }
});

// POST /api/advisories/backfill-reasons - Backfill reasons for outages that don't have one
router.post("/backfill-reasons", async (_req: Request, res: Response) => {
  try {
    const { backfillReasons } = await import('../services/aiParserService.js');
    const result = await backfillReasons();
    res.json({ success: true, message: "Reason backfill complete", ...result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error backfilling reasons" });
  }
});

export default router;
