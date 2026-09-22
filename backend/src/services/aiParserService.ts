import { GoogleGenAI } from '@google/genai';
import Outage from '../models/Outage.js';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are a highly accurate AI assistant that parses Facebook posts from a power distribution utility (Cebeco II) and extracts structured data about power outages, advisories, and load dropping.

Your goal is to return a JSON array where each object matches this schema:
{
  "type": "RED_ALERT" | "YELLOW_ALERT" | "MANUAL_LOAD_DROPPING" | "SCHEDULED_INTERRUPTION" | "EMERGENCY_INTERRUPTION" | "POWER_RESUMED" | "GRID_STATUS",
  "status": "UPCOMING", // ALWAYS set to UPCOMING initially, backend will calculate current status
  "affectedAreas": [
    {
      "cityOrMunicipality": "Name of the City or Municipality",
      "barangays": ["Barangay 1", "Barangay 2"] // Array of strings, or empty if none specified
    }
  ],
  "timeWindow": "The time window or duration (e.g., '6:00 AM - 4:00 PM', '10 hours', 'Unknown')",
  "reason": "A short 1-sentence summary of WHY this outage or advisory is happening, extracted from the post. For example: 'Pole replacement and line maintenance', 'Damaged transformer due to storm', 'High electricity demand across Visayas grid', 'Repair of damaged power lines in the area'. If no specific reason is mentioned, use 'No reason specified'.",
  "datePostedISO": "Calculate the exact ISO 8601 date of the post. Use 'Post Date String' and 'Current Time (Scraped At)' to calculate relative times like 'Yesterday at 3:41 pm' or '4h ago'. If it is an absolute date without a year, assume the year from the scraped time. Return a valid ISO string.",
  "dateEffectiveISO": "The ISO 8601 formatted date of when the scheduled power interruption or alert will take effect. If the text mentions a specific date (e.g. '13 September 2026', 'September 10'), use that. If not explicitly mentioned, default to the datePostedISO."
}

IMPORTANT INSTRUCTIONS:
- If the post lists MULTIPLE different time schedules/windows (e.g., 5:00 PM - 6:00 PM, 6:00 PM - 7:00 PM) for outages OR for alerts (like YELLOW ALERT and RED ALERT), you MUST create a SEPARATE JSON object in the array for EACH time window/alert, containing ONLY the affected areas that fall under that specific time window. Do not merge them into a single object.
- If the post indicates a start time but no end time (e.g., "Power went off: 3:36 PM" or "Starts at 4:00 PM"), set the timeWindow to that time followed by "- onwards" (e.g., "3:36 PM - onwards"). Do not leave it as "Unknown".
- If the post says "POWER RESUMED" or "Power Resumed", set type to POWER_RESUMED and status to COMPLETED.
- If the post says "STATUS: ON-GOING", set status to ON_GOING.
- If the post states that an area has been removed from the affected areas (e.g. "Carmen and Catmon removed from affected areas"), DO NOT include those areas in the affectedAreas array.
- Extract all municipalities/cities (like Bogo City, Tabuelan, San Remigio, Sogod, Catmon, Carmen, Tabogon, Borbon, Tuburan, etc.) and group their barangays under them.
- Return ONLY the JSON array, no markdown formatting (\`\`\`json) or extra text.
`;

export async function processPostsWithAI(posts: any[]) {
    if (!process.env.GEMINI_API_KEY) {
        console.warn("⚠️ GEMINI_API_KEY is not set in .env. Skipping AI Parsing.");
        return;
    }

    let parsedCount = 0;
    let skippedCount = 0;

    for (const post of posts) {
        try {
            // Check if post already exists in MongoDB (matching base ID)
            const existingOutage = await Outage.findOne({ sourcePostId: { $regex: `^${post.id}` } });

            // If it exists and the text hasn't changed, skip it
            if (existingOutage && existingOutage.rawText === post.text) {
                skippedCount++;
                continue;
            }

            console.log(`Sending post to Gemini for parsing: ${post.id}`);

            // If it exists but text is different, or if it's brand new, send to AI
            const response = await ai.models.generateContent({
                model: 'gemini-3.5-flash',
                contents: `Current Time (Scraped At): ${post.scrapedAt || new Date().toISOString()}\nPost Date String: ${post.timePosted}\n\nPost Text:\n${post.text}`,
                config: {
                    systemInstruction: SYSTEM_PROMPT,
                    temperature: 0.1, // Keep it deterministic
                    responseMimeType: "application/json",
                }
            });

            const responseText = response.text || "[]";
            let parsedData;
            try {
                parsedData = JSON.parse(responseText);
                // Ensure it's always an array even if the AI returned a single object
                if (!Array.isArray(parsedData)) {
                    parsedData = [parsedData];
                }
            } catch (e) {
                console.error(`Failed to parse JSON from Gemini for ${post.id}: ${responseText}`);
                continue;
            }

            // If the AI didn't find any outages, still save a dummy record so we don't parse it again
            if (parsedData.length === 0) {
                parsedData.push({
                    type: "GRID_STATUS",
                    status: "COMPLETED",
                    affectedAreas: [],
                    timeWindow: "None",
                    datePostedISO: post.scrapedAt || new Date().toISOString()
                });
            }

            // Wipe out any old records for this post before inserting the new ones (in case post was edited)
            await Outage.deleteMany({ sourcePostId: { $regex: `^${post.id}` } });

            // A single post might contain multiple outage updates. We give them unique IDs.
            for (let i = 0; i < parsedData.length; i++) {
                const data = parsedData[i];
                let parsedDate = new Date();
                if (data.datePostedISO) {
                    const tempDate = new Date(data.datePostedISO);
                    if (!isNaN(tempDate.getTime())) {
                        parsedDate = tempDate;
                    }
                }

                let effectiveDate = parsedDate; // Default to datePosted
                if (data.dateEffectiveISO) {
                    const tempEffDate = new Date(data.dateEffectiveISO);
                    if (!isNaN(tempEffDate.getTime())) {
                        effectiveDate = tempEffDate;
                    }
                }

                const updateData = {
                    // Append index to make each schedule unique in MongoDB
                    sourcePostId: parsedData.length > 1 ? `${post.id}_${i}` : post.id,
                    type: data.type || "GRID_STATUS",
                    status: data.status || "UPCOMING",
                    affectedAreas: data.affectedAreas || [],
                    timeWindow: data.timeWindow || "Unknown",
                    datePosted: parsedDate,
                    dateEffective: effectiveDate,
                    reason: data.reason || '',
                    rawText: post.text
                };

                await Outage.create(updateData);
            }
            parsedCount++;
            
            // Be nice to the API rate limit (even though it's high, it's good practice)
            await new Promise(r => setTimeout(r, 1000)); 

        } catch (error) {
            console.error(`Error processing post ${post.id} with AI:`, error);
        }
    }

    console.log(`✅ AI Parsing Complete. Parsed: ${parsedCount} | Skipped (No Changes): ${skippedCount}`);
}

/**
 * Backfill reasons for existing outages that don't have one.
 * Uses the stored rawText to ask the AI for a short reason.
 */
export async function backfillReasons() {
    if (!process.env.GEMINI_API_KEY) {
        console.warn("⚠️ GEMINI_API_KEY is not set. Skipping reason backfill.");
        return { updated: 0, skipped: 0 };
    }

    // Find all outages with no reason or empty reason
    const outagesWithoutReason = await Outage.find({
        $or: [{ reason: { $exists: false } }, { reason: '' }, { reason: null }]
    });

    console.log(`Found ${outagesWithoutReason.length} outages without a reason. Backfilling...`);

    let updated = 0;
    let skipped = 0;

    for (const outage of outagesWithoutReason) {
        try {
            if (!outage.rawText || outage.rawText.trim() === '') {
                skipped++;
                continue;
            }

            // Retry up to 3 times on rate limit errors
            let reason = 'No reason specified';
            for (let attempt = 0; attempt < 3; attempt++) {
                try {
                    const response = await ai.models.generateContent({
                        model: 'gemini-3.5-flash',
                        contents: `Extract the main reason WHY this power outage or advisory is happening from the following post. Return ONLY a short 1-sentence reason (no quotes, no JSON, just the sentence). If no specific reason is mentioned, return "No reason specified".\n\nPost:\n${outage.rawText}`,
                        config: {
                            temperature: 0.1,
                        }
                    });
                    reason = (response.text || 'No reason specified').trim().replace(/^["']|["']$/g, '');
                    break; // Success, exit retry loop
                } catch (err: any) {
                    if (err.status === 429 && attempt < 2) {
                        console.log(`  ⏳ Rate limited, waiting 30s before retry (attempt ${attempt + 2}/3)...`);
                        await new Promise(r => setTimeout(r, 30000));
                    } else {
                        throw err;
                    }
                }
            }

            await Outage.updateOne({ _id: outage._id }, { $set: { reason } });
            updated++;
            console.log(`  ✅ ${outage.sourcePostId}: ${reason}`);

            // 5s delay = ~12 requests/min, safely under 15 RPM limit
            await new Promise(r => setTimeout(r, 5000));

        } catch (error) {
            console.error(`  ❌ Error backfilling ${outage.sourcePostId}:`, error);
            skipped++;
        }
    }

    console.log(`✅ Reason Backfill Complete. Updated: ${updated} | Skipped: ${skipped}`);
    return { updated, skipped };
}
