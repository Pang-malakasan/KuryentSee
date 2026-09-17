import { Router, Request, Response } from "express";
import { scrapeFacebookPage } from "../services/scraperService.js";

const router = Router();

// GET /api/scraper/facebook
// Example usage: /api/scraper/facebook?url=https://www.facebook.com/cebeco2.official
router.get("/facebook", async (req: Request, res: Response) => {
  const url = req.query.url as string;

  if (!url) {
    res.status(400).json({ success: false, message: "Missing 'url' query parameter" });
    return;
  }

  try {
    // Extract the username/page name from the URL
    // e.g., https://www.facebook.com/cebeco2.official -> cebeco2.official
    let pageName = url;
    if (url.includes("facebook.com/")) {
      pageName = url.split("facebook.com/")[1].replace(/\/$/, "");
    }

    console.log(`Starting scraper for Page: ${pageName}`);
    const posts = await scrapeFacebookPage(pageName);
    

    // Also run the AI parser immediately so we can test it!
    const { processPostsWithAI } = await import('../services/aiParserService.js');
    await processPostsWithAI(posts);
    
    res.json({
      success: true,
      message: "Scraping completed, saved to JSON, and parsed by AI into MongoDB!",
      data: posts,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to scrape",
    });
  }
});

export default router;
