import { Router, Request, Response } from "express";
import Outage from '../models/Outage.js';

const router = Router();

// GET /api/advisories - List all Facebook AI-parsed advisories
router.get("/", async (_req: Request, res: Response) => {
  try {
    const advisories = await Outage.find().sort({ datePosted: -1, createdAt: -1 });
    res.json({ success: true, count: advisories.length, data: advisories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching advisories" });
  }
});

// GET /api/advisories/current - List only active AI-parsed advisories
router.get("/current", async (_req: Request, res: Response) => {
  try {
    const advisories = await Outage.find({ status: { $in: ["UPCOMING", "ON_GOING"] } }).sort({ datePosted: -1, createdAt: -1 });
    res.json({ success: true, count: advisories.length, data: advisories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching current advisories" });
  }
});

// GET /api/advisories/city/:city - List advisories for a specific city or municipality
router.get("/city/:city", async (req: Request, res: Response) => {
  try {
    const city = req.params.city;
    // Use regex for case-insensitive matching
    const advisories = await Outage.find({
      "affectedAreas.cityOrMunicipality": { $regex: new RegExp(`^${city}$`, "i") }
    }).sort({ datePosted: -1, createdAt: -1 });
    
    res.json({ success: true, count: advisories.length, data: advisories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching advisories for city" });
  }
});

export default router;
