import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Check if already connected
    if (mongoose.connections[0].readyState === 1) {
      return;
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || "", {
      // Remove deprecated options
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Optionally, you might want to exit the process on connection failure
    process.exit(1);
  }
};

export default connectDB;
