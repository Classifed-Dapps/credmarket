import mongoose, { Document, Schema } from "mongoose";

interface IAd extends Document {
  title: string;
  description: string;
  price: string;
  category: string;
  subCategory: string;
  location: string;
  condition: string;
  delivery: string;
  images: string[];
  deposit?: string;
  user: mongoose.Types.ObjectId; // Add user reference
}

const adSchema = new Schema<IAd>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    location: { type: String, required: true },
    condition: { type: String, required: true },
    delivery: { type: String, required: true },
    images: { type: [String], default: [] },
    deposit: { type: String, default: null },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Add user reference field
  },
  { timestamps: true }
);

const Ad = mongoose.models.Ad || mongoose.model<IAd>("Ad", adSchema);

export default Ad;
