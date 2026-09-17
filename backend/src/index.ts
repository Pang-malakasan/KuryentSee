import "dotenv/config";
import express from "express";
import cors from "cors";
import cron from "node-cron";
import outagesRouter from "./routes/outages.js";
import advisoriesRouter from "./routes/advisories.js";
import reportsRouter from "./routes/reports.js";
import scraperRouter from "./routes/scraper.js";
import { scrapeFacebookPage } from "./services/scraperService.js";

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
app.use("/api/advisories", advisoriesRouter);
app.use("/api/reports", reportsRouter);
app.use("/api/scraper", scraperRouter);

import mongoose from "mongoose";
import { processPostsWithAI } from "./services/aiParserService.js";

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/kuryentsee";
mongoose.connect(mongoURI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Start Background Jobs
console.log('⏳ Scheduling background Facebook scraper (runs every 30 minutes)...');
import fs from 'fs';
import path from 'path';

import { updateOutageStatuses } from "./services/statusUpdaterService.js";

cron.schedule("*/30 * * * *", async () => {
  console.log(`[CRON] ${new Date().toISOString()} - Running scheduled Facebook scraper...`);
  try {
    const pageId = process.env.FACEBOOK_PAGE_ID || 'cebeco2.official';
    const posts = await scrapeFacebookPage(pageId);
    console.log(`[CRON] Successfully scraped ${posts.length} posts for ${pageId}.`);
    
    // Run the AI Parser to update MongoDB
    await processPostsWithAI(posts);
    
  } catch (error: any) {
    console.error(`[CRON] Scraper failed:`, error.message);
  }
});

// Run status updater every minute
cron.schedule("* * * * *", async () => {
  await updateOutageStatuses();
});

// Start server
app.listen(PORT, () => {
  console.log(`⚡ KuryentSee Backend API running at http://localhost:${PORT}`);
  console.log(`   - Advisories: http://localhost:${PORT}/api/advisories`);
  console.log(`   - Outages: http://localhost:${PORT}/api/outages`);
  console.log(`   - Reports: http://localhost:${PORT}/api/reports`);
  console.log(`   - Scraper: http://localhost:${PORT}/api/scraper/facebook?url=...`);
  console.log(`   - Health:  http://localhost:${PORT}/api/health`);
});
