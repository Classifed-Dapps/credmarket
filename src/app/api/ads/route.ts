import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Ad from "@/models/Ads";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // Get query parameters
    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const condition = url.searchParams.get("condition");
    const location = url.searchParams.get("location");
    const minPrice = url.searchParams.get("minPrice");
    const maxPrice = url.searchParams.get("maxPrice");
    const search = url.searchParams.get("search");

    // Build query
    const query: any = {};

    if (category) query.category = category;
    if (condition) query.condition = condition;
    if (location) query.location = location;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }

    // Fetch ads with populated user data
    const ads = await Ad.find(query)
      .populate("user", "walletAddress")
      .sort({ createdAt: -1 }) // Sort by newest first
      .limit(50); // Limit to 50 ads per page for now

    return NextResponse.json(ads);
  } catch (error) {
    console.error("Error fetching ads:", error);
    return NextResponse.json({ error: "Failed to fetch ads" }, { status: 500 });
  }
}
