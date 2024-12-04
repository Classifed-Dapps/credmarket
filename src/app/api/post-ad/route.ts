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
    await connectDB(); // Connect to MongoDB

    // Parse the request body
    const body = await req.json();
    const {
      title,
      description,
      price,
      category,
      subCategory,
      location,
      condition,
      delivery,
      images,
      deposit,
      walletAddress, // Add wallet address to the request body
    } = body;

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

    // const imageFiles = body.getAll("images") as File[];
    // const imageUrls: string[] = [];

    // for (const file of imageFiles) {
    //   // Convert File to Buffer
    //   const bytes = await file.arrayBuffer();
    //   const buffer = Buffer.from(bytes);

    //   // Upload to Cloudinary
    //   const uploadResult = await new Promise<{ url: string }>(
    //     (resolve, reject) => {
    //       const uploadStream = cloudinary.uploader.upload_stream(
    //         { folder: "marketplace_ads" },
    //         (error, result) => {
    //           if (error) reject(error);
    //           else resolve(result!);
    //         }
    //       );
    //       uploadStream.end(buffer);
    //     }
    //   );

    //   imageUrls.push(uploadResult.url);
    // }

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
      images,
      deposit,
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
    return NextResponse.json({ error: "Failed to post ad" }, { status: 500 });
  }
}
