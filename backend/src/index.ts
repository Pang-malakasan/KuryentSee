import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import outagesRouter from "./routes/outages.js";
import reportsRouter from "./routes/reports.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "10mb" }));

// Healthcheck
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    app: "KuryentSee API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/outages", outagesRouter);
app.use("/api/reports", reportsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`⚡ KuryentSee Backend API running at http://localhost:${PORT}`);
  console.log(`   - Outages: http://localhost:${PORT}/api/outages`);
  console.log(`   - Reports: http://localhost:${PORT}/api/reports`);
  console.log(`   - Health:  http://localhost:${PORT}/api/health`);
});
