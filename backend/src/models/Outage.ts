import mongoose, { Document, Schema } from 'mongoose';

export interface IOutage extends Document {
  sourcePostId: string; // The Facebook post ID
  type: "RED_ALERT" | "YELLOW_ALERT" | "MANUAL_LOAD_DROPPING" | "SCHEDULED_INTERRUPTION" | "EMERGENCY_INTERRUPTION" | "POWER_RESUMED" | "GRID_STATUS";
  status: "UPCOMING" | "ON_GOING" | "COMPLETED"; 
  affectedAreas: {
    cityOrMunicipality: string;
    barangays?: string[];
  }[];
  timeWindow: string; 
  datePosted: Date; 
  dateEffective: Date;
  reason: string;
  rawText: string; 
}

const OutageSchema: Schema = new Schema({
  sourcePostId: { type: String, required: true, unique: true },
  type: { 
    type: String, 
    enum: ["RED_ALERT", "YELLOW_ALERT", "MANUAL_LOAD_DROPPING", "SCHEDULED_INTERRUPTION", "EMERGENCY_INTERRUPTION", "POWER_RESUMED", "GRID_STATUS"], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["UPCOMING", "ON_GOING", "COMPLETED"], 
    required: true 
  },
  affectedAreas: [{
    cityOrMunicipality: { type: String, required: true },
    barangays: [{ type: String }]
  }],
  timeWindow: { type: String, required: true },
  datePosted: { type: Date, required: true },
  dateEffective: { type: Date, required: true },
  reason: { type: String, default: '' },
  rawText: { type: String, required: true }
}, {
  timestamps: true 
});

export default mongoose.model<IOutage>('Outage', OutageSchema);
