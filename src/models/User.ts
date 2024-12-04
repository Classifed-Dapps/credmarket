import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  walletAddress: string;
  username?: string;
  email?: string;
  profileImage?: string;
  ads: mongoose.Types.ObjectId[];
  createdAt: Date;
  lastLogin: Date;
}

const userSchema = new Schema<IUser>(
  {
    walletAddress: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    username: {
      type: String,
      unique: true,
      sparse: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    profileImage: { type: String },
    ads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ad",
      },
    ],
    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
