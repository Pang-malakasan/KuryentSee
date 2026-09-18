import Outage from '../models/Outage.js';
import { parse } from 'date-fns';

function toPHT(date: Date): Date {
  // Converts any date to a Date object that reflects Philippine Time locally
  return new Date(date.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
}

export async function updateOutageStatuses() {
  try {
    const outages = await Outage.find({ status: { $ne: 'COMPLETED' } });
    const now = toPHT(new Date());

    for (const outage of outages) {
      if (outage.type === 'POWER_RESUMED') {
        outage.status = 'COMPLETED';
        await outage.save();
        continue;
      }

      let effectiveDate = toPHT(outage.dateEffective || outage.datePosted);
      const timeWindow = outage.timeWindow;

      if (!timeWindow || timeWindow === 'Unknown' || timeWindow === 'None') {
        // Fallback for unknown time windows:
        // Use the end of the effective day as the boundary.
        const endOfDay = new Date(effectiveDate);
        endOfDay.setHours(23, 59, 59, 999);
        
        let changed = false;
        if (now > endOfDay) {
          outage.status = 'COMPLETED';
          changed = true;
        } else if (now >= effectiveDate && outage.status === 'UPCOMING') {
          // If time is unknown but effectiveDate has passed, it's ongoing
          outage.status = 'ON_GOING';
          changed = true;
        }

        if (changed) {
          console.log(`[Status Updater] Updating outage ${outage._id} from UPCOMING to ${outage.status} (Unknown time window fallback)`);
          await outage.save();
        }
        continue;
      }

      // Extract times from timeWindow (e.g., "5:00 PM - 6:00 PM" or "4:00 PM - onwards")
      // Very basic parsing to get start and end times relative to effectiveDate
      const match = timeWindow.match(/(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm))/g);
      
      let startTime = null;
      let endTime = null;

      if (match && match.length >= 1) {
        // Parse start time on the effective date
        const startStr = match[0];
        try {
            startTime = parse(startStr, 'h:mm a', effectiveDate);
            
            // Heuristic for late-scraped posts: If an "onwards" event (like MLD) was scraped 
            // after midnight, the time parses as the coming afternoon instead of yesterday.
            if (timeWindow.toLowerCase().includes('onwards') && (startTime.getTime() - now.getTime() > 12 * 3600 * 1000)) {
                effectiveDate.setDate(effectiveDate.getDate() - 1);
                startTime = parse(startStr, 'h:mm a', effectiveDate);
            }
        } catch(e) {
            console.error("Failed to parse start time", startStr);
        }
        
        if (match.length >= 2) {
          const endStr = match[1];
          try {
             endTime = parse(endStr, 'h:mm a', effectiveDate);
             if (startTime && endTime < startTime) {
               // End time is on the next day
               endTime.setDate(endTime.getDate() + 1);
             }
          } catch(e) {
              console.error("Failed to parse end time", endStr);
          }
        }
      }

      let newStatus: "UPCOMING" | "ON_GOING" | "COMPLETED" = outage.status;

      // Logic from user:
      // if it passes the time and date mark it as completed
      // if it passes the day even its onward mark it as COMPLETED
      // can only be ONGOING when the time is exact as the time and the date of the timwindow

      const endOfDay = new Date(effectiveDate);
      endOfDay.setHours(23, 59, 59, 999);

      if (startTime && endTime) {
        if (now < startTime) {
          newStatus = 'UPCOMING';
        } else if (now >= startTime && now <= endTime) {
          newStatus = 'ON_GOING';
        } else if (now > endTime) {
          newStatus = 'COMPLETED';
        }
      } else if (startTime && !endTime) {
         // "onwards" case
         if (now < startTime) {
             newStatus = 'UPCOMING';
         } else if (now >= startTime && now <= endOfDay) {
             newStatus = 'ON_GOING';
         } else if (now > endOfDay) {
             // Passes the day
             newStatus = 'COMPLETED';
         }
      } else {
         // Could not parse times, fallback to day boundary
         if (now > endOfDay) {
             newStatus = 'COMPLETED';
         } else if (now.getDate() === effectiveDate.getDate() && now.getMonth() === effectiveDate.getMonth() && now.getFullYear() === effectiveDate.getFullYear()) {
             newStatus = 'ON_GOING';
         }
      }

      if (newStatus !== outage.status) {
        console.log(`[Status Updater] Updating outage ${outage._id} from ${outage.status} to ${newStatus}`);
        outage.status = newStatus;
        await outage.save();
      }
    }
  } catch (error) {
    console.error('Error updating outage statuses:', error);
  }
}
