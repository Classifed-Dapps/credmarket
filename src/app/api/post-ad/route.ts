import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Ad from "@/models/Ads";
import User from "@/models/User";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    console.log("Received form data:", Object.fromEntries(formData.entries())); // Debug log

    // Extract form data
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const category = formData.get("category") as string;
    const subCategory = formData.get("subCategory") as string;
    const location = formData.get("location") as string;
    const condition = formData.get("condition") as string;
    const delivery = formData.get("delivery") as string;
    const walletAddress = formData.get("walletAddress") as string;

    // Validate required fields
    if (
      !title ||
      !description ||
      !price ||
      !category ||
      !location ||
      !walletAddress
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Handle image uploads
    const imageFiles = formData.getAll("images") as File[];
    const imageUrls: string[] = [];

    try {
      for (const file of imageFiles) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise<{ secure_url: string }>(
          (resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { folder: "marketplace_ads" },
              (error, result) => {
                if (error) reject(error);
                else resolve(result as { secure_url: string });
              }
            );
            uploadStream.end(buffer);
          }
        );

        imageUrls.push(uploadResult.secure_url);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      return NextResponse.json(
        { error: "Failed to upload images" },
        { status: 500 }
      );
    }

    // Validate wallet address
    if (!walletAddress) {
      return NextResponse.json(
        { error: "Invalid wallet address" },
        { status: 400 }
      );
    }

    // Find or create user
    let user = await User.findOne({
      walletAddress: walletAddress.toLowerCase(),
    });

    if (!user) {
      // Create new user if not exists
      user = new User({
        walletAddress: walletAddress.toLowerCase(),
        lastLogin: new Date(),
      });
      await user.save();
    }

    // Create a new ad instance
    const newAd = new Ad({
      title,
      description,
      price,
      category,
      subCategory,
      location,
      condition,
      delivery,
      images: imageUrls,
      user: user._id, // Link ad to user
    });

    // Save the ad to the database
    await newAd.save();
    console.log("Ad saved successfully:", newAd);

    // Add the ad to user's ads array
    user.ads.push(newAd._id);
    await user.save();
    console.log("User ads updated successfully:", user);

    return NextResponse.json(
      {
        message: "Ad posted successfully",
        ad: newAd,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error posting ad:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to post ad" },
      { status: 500 }
    );
  }
}
