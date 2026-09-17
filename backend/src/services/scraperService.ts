import { createRequire } from 'module';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const TARGET_POSTS = 15;

export async function scrapeFacebookPage(urlOrPageName: string): Promise<any[]> {
  const url = urlOrPageName.includes('facebook.com') ? urlOrPageName : `https://www.facebook.com/${urlOrPageName}`;

  console.log(`Starting headless browser for: ${url}`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-notifications'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 2000 });

    // Load cookies from .env
    const cookiesString = process.env.FACEBOOK_COOKIES;
    if (cookiesString) {
      try {
        console.log('Found FACEBOOK_COOKIES in .env, injecting cookies into browser...');
        const cookies = JSON.parse(cookiesString);
        await page.setCookie(...cookies);
      } catch (e: any) {
        console.error('Failed to parse FACEBOOK_COOKIES from .env:', e.message);
      }
    } else {
      console.warn('⚠️ No FACEBOOK_COOKIES found in .env. Facebook will likely block this request.');
    }

    console.log('Navigating to Facebook...');
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }).catch((e: any) => console.log('Timeout caught, continuing...', e.message));

    console.log('Waiting for initial page load...');
    await new Promise(r => setTimeout(r, 5000));
    
    // Wait for at least one post wrapper to appear before we start scrolling, otherwise we might just be scrolling a loading screen or a login wall
    await page.waitForSelector('div[aria-posinset], div[role="article"]', { timeout: 10000 })
        .catch(() => console.log('⚠️ Warning: No posts found after 15s. Facebook might be blocking us with a login wall or captcha. Check facebook_debug.png!'));

    // Facebook lazy-unloads old posts as you scroll, so we must extract DURING each scroll
    const allPosts: { text: string, timePosted: string }[] = [];
    const MAX_SCROLLS = 50;

    for (let i = 0; i < MAX_SCROLLS; i++) {
      // Click any "See more" buttons currently visible
      await page.evaluate(() => {
        document.querySelectorAll('div[role="button"], span, a').forEach((el: any) => {
          const t = el.textContent?.trim().toLowerCase();
          if (t === 'see more' || t === '…see more' || t === '… see more' || t === 'see more…') {
            el.click();
          }
        });
      });
      await new Promise(r => setTimeout(r, 1000)); // Give it a second to expand the text

      // Extract post body and time
      const currentPosts: { text: string, timePosted: string }[] = await page.evaluate(() => {
        // Find all posts on the page, avoiding reliance on a specific feed container
        let postWrappers = Array.from(document.querySelectorAll('div[aria-posinset]'));
        if (postWrappers.length === 0) {
            postWrappers = Array.from(document.querySelectorAll('div[role="article"]'));
        }

        // Filter out comments (which are nested inside the main post articles)
        postWrappers = postWrappers.filter(wrapper => {
            let parent = wrapper.parentElement;
            while (parent) {
                if (parent.getAttribute('role') === 'article' || parent.hasAttribute('aria-posinset')) {
                    return false; // It's a nested comment, skip it
                }
                parent = parent.parentElement;
            }
            return true;
        });

        const results: { text: string, timePosted: string }[] = [];

        postWrappers.forEach(wrapper => {
          // Skip if we already extracted this post in a previous scroll
          if (wrapper.getAttribute('data-extracted') === 'true') {
            return;
          }

          let text = "";
          
          // Strategy 1: Look for the dedicated message container (most reliable for text posts)
          const messageDiv = wrapper.querySelector('div[data-ad-preview="message"]');
          if (messageDiv) {
            text = (messageDiv as HTMLElement).innerText?.trim() || "";
          } 
          // Strategy 2: Fallback for Photo/Shared posts that don't use the standard message container
          else {
            const rawText = (wrapper as HTMLElement).innerText || "";
            const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            const validLines: string[] = [];
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                
                // Ignore standard Facebook UI buttons
                const isJunk = line === 'Like' || line === 'Reply' || line === 'Share' || line === 'Comment' || line === 'Send' || line.includes('See original') || line.includes('Rate this translation') || line.includes('LikeReply');
                
                // Ignore headers, author names, and timestamps that Facebook puts above the post
                const absoluteDateRegex = /^(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec)\s+\d+(,\s*\d{4})?(\s*at\s*\d{1,2}:\d{2}\s*[ap]m)?$/i;
                const isHeader = line.includes('Cebu II Electric') || line.includes('Cebeco II') || line === 'Follow' || line.includes('Just now') || line.includes('Yesterday') || /^\d+[mhdwy]$/.test(line) || /^\d+ (hr|min|day)s? ago/.test(line) || absoluteDateRegex.test(line) || line.includes('Shared with Public') || line.includes('Suggested for you');
                
                // Ignore engagement numbers (e.g., 92, 1.2k, 42 Comments, 10 Shares)
                const isEngagement = /^\d+(?:\.\d+)?[km]?(\s*(comments?|shares?|likes?))?$/i.test(line) || /^\d+$/.test(line);

                if (!isJunk && !isHeader && !isEngagement) {
                    validLines.push(line);
                }
            }
            text = validLines.join('\n').trim();
          }

          // Extract the time
          let timePosted = "Unknown";
          // We define robust regexes to extract the time from the text, instead of relying on strict start/end matches
          const timeRegexes = [
              /\b\d+\s*(m|h|d|w|y|min|mins|minute|minutes|hr|hrs|hour|hours|day|days|week|weeks|month|months|year|years)\s*ago\b/i,
              /\byesterday(\s+at\s+\d{1,2}:\d{2}\s*[ap]m)?\b/i,
              /\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)(\s+at\s+\d{1,2}:\d{2}\s*[ap]m)?\b/i,
              /\bjust now\b/i,
              /\b(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec)\s+([1-9]|[12]\d|3[01])\b(,\s*\d{4}|\s+\d{4})?(\s*at\s*\d{1,2}:\d{2}\s*[ap]m)?/i,
              /\b([1-9]|[12]\d|3[01])\s+(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec)\b(,\s*\d{4}|\s+\d{4})?(\s*at\s*\d{1,2}:\d{2}\s*[ap]m)?/i,
              /(?:^|\s)(\d+[mhdwy])\b/i // matches "45m"
          ];

          // Facebook timestamps are sometimes a link, sometimes a span with aria-label, sometimes just plain text.
          const elements = Array.from(wrapper.querySelectorAll('a, span'));
          for (const el of elements) {
             const ariaLabel = el.getAttribute('aria-label');
             const inner = (el as HTMLElement).innerText?.trim();
             
             // Check aria-label first, it's often more accurate
             const textToTest = (ariaLabel || inner || "").split('\n')[0].trim();
             if (!textToTest || textToTest.length > 60) continue;
             
             const lower = textToTest.toLowerCase();
             
             for (const regex of timeRegexes) {
                 const match = lower.match(regex);
                 if (match) {
                     let extracted = match[1] && regex.toString().includes('mhdwy') ? match[1] : match[0];
                     timePosted = extracted.trim();
                     timePosted = timePosted.charAt(0).toUpperCase() + timePosted.slice(1);
                     break;
                 }
             }
             if (timePosted !== "Unknown") break;
          }

          // Fallback: If still unknown, scan the raw text lines of the entire wrapper from top to bottom
          if (timePosted === "Unknown") {
              const rawLines = ((wrapper as HTMLElement).innerText || "").split('\n').map(l => l.trim());
              for (const line of rawLines) {
                  const lower = line.toLowerCase();
                  if (lower.length > 60) continue; // Skip long paragraphs to avoid false positives
                  
                  for (const regex of timeRegexes) {
                      const match = lower.match(regex);
                      if (match) {
                          let extracted = match[1] && regex.toString().includes('mhdwy') ? match[1] : match[0];
                          timePosted = extracted.trim();
                          timePosted = timePosted.charAt(0).toUpperCase() + timePosted.slice(1);
                          break;
                      }
                  }
                  if (timePosted !== "Unknown") break;
              }
          }

          // Fallback: If still unknown, scan the raw text lines of the entire wrapper from top to bottom
          if (timePosted === "Unknown") {
              const rawLines = ((wrapper as HTMLElement).innerText || "").split('\n').map(l => l.trim());
              for (const line of rawLines) {
                  const lower = line.toLowerCase();
                  if (lower.length > 60) continue; // Skip long paragraphs to avoid false positives
                  
                  for (const regex of timeRegexes) {
                      const match = lower.match(regex);
                      if (match) {
                          let extracted = match[1] && regex.toString().includes('mhdwy') ? match[1] : match[0];
                          timePosted = extracted.trim();
                          timePosted = timePosted.charAt(0).toUpperCase() + timePosted.slice(1);
                          break;
                      }
                  }
                  if (timePosted !== "Unknown") break;
              }
          }
          
          if (text && text.length > 20) {
            // Normalize text to convert Facebook's special bold/unicode fonts into standard text
            const normalizedText = text.normalize("NFKD").toLowerCase();
            
            console.log("DEBUG POST FOUND:", text.substring(0, 100).replace(/\n/g, ' '));

            // Check if the post contains any of the required keywords
            const isRelevant = normalizedText.includes('power advisory') || 
                               normalizedText.includes('manual load dropping') ||
                               normalizedText.includes('mld') ||
                               normalizedText.includes('power update') ||
                               normalizedText.includes('scheduled power interruption') ||
                               normalizedText.includes('emergency power interruption') ||
                               normalizedText.includes('power interruption') ||
                               normalizedText.includes('grid status');
                               
            if (isRelevant) {
                // Mark it as extracted so we don't process it again on the next scroll tick
                wrapper.setAttribute('data-extracted', 'true');
                results.push({ text, timePosted });
            } else {
                // Also mark irrelevant posts as extracted so we don't keep checking them
                wrapper.setAttribute('data-extracted', 'true');
            }
          }
        });

        return results;
      });

      // Add posts while checking for text duplicates
      for (const post of currentPosts) {
        const isDuplicate = allPosts.some(p => p.text === post.text);
        if (!isDuplicate) {
          allPosts.push(post);
        }
      }

      console.log(`Scroll ${i + 1}/${MAX_SCROLLS} — collected ${allPosts.length} unique posts so far...`);

      if (allPosts.length >= TARGET_POSTS) {
        console.log(`✅ Reached ${allPosts.length} posts, stopping!`);
        break;
      }

      // Scroll down for next batch
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(r => setTimeout(r, 2500));
    }

    console.log('Taking debug screenshot...');
    await page.screenshot({ path: 'facebook_debug.png', fullPage: false });
    const html = await page.content();
    fs.writeFileSync('debug_html.html', html);

    console.log(`Final count: ${allPosts.length} unique posts extracted.`);

    // Map into structured JSON objects
    const structuredPosts = allPosts.slice(0, TARGET_POSTS).map((post) => {
      // Clean up random Facebook junk text that sometimes gets scraped (like "Facebook\nFacebook\n·")
      let cleanText = post.text.replace(/(Facebook\s*)+/gi, '').replace(/^·\s*/, '').trim();
      
      // Create a deterministic ID by hashing the cleaned text. This prevents duplicate insertions on subsequent scrapes.
      const textHash = crypto.createHash('md5').update(cleanText).digest('hex');
      return {
        id: `fb_post_${textHash}`,
        source: urlOrPageName,
        timePosted: post.timePosted,
        text: cleanText, // Save the cleaned text
        scrapedAt: new Date().toISOString()
      };
    });

    return structuredPosts;
  } catch (error: any) {
    console.error('Error scraping Facebook:', error);
    throw new Error(`Failed to scrape Facebook: ${error.message}`);
  } finally {
    await browser.close();
  }
}
