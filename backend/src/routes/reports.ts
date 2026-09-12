import { Router, Request, Response } from "express";

const router = Router();

export interface UserReport {
  id: string;
  barangay: string;
  municity: string;
  category: "blackout" | "brownout" | "line_spark" | "scheduled";
  description?: string;
  reportedAt: string;
  status: "pending" | "verified" | "resolved";
}

// Initial sample reports
let reports: UserReport[] = [
  {
    id: "rep-1",
    barangay: "Barangay Marangog",
    municity: "Bogo City",
    category: "brownout",
    description: "Low voltage, appliances turning off unexpectedly.",
    reportedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "verified",
  },
  {
    id: "rep-2",
    barangay: "Lamintak Sur",
    municity: "Medellin",
    category: "blackout",
    description: "Transformer blew up near the barangay hall.",
    reportedAt: new Date(Date.now() - 3600000 * 3).toISOString(),
    status: "verified",
  },
];

// GET /api/reports - Fetch all community reports
router.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: reports.length,
    data: reports,
  });
});

// POST /api/reports - Resident submits an outage report
router.post("/", (req: Request, res: Response) => {
  const { barangay, municity, category, description } = req.body;

  if (!barangay || !municity) {
    res.status(400).json({
      success: false,
      message: "Please provide barangay and municipality/city.",
    });
    return;
  }

  const newReport: UserReport = {
    id: `rep-${Date.now()}`,
    barangay,
    municity,
    category: category || "blackout",
    description: description || "",
    reportedAt: new Date().toISOString(),
    status: "pending",
  };

  reports.unshift(newReport);
  res.status(201).json({
    success: true,
    message: "Report submitted successfully. Thank you for informing your community!",
    data: newReport,
  });
});

export default router;
