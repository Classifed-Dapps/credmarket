"use client";

import { cn } from "@/lib/utils";
import { TbBulb } from "react-icons/tb";
import Camera from "@/../public/asset/camera.png";
import Image from "next/image";

interface UploadPhotoProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function UploadPhoto({ images, setImages }: UploadPhotoProps) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages((prev) => [...prev, ...Array.from(files)].slice(0, 10));
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="font-poppins text-primary-3 font-[400] text-base">
          Photos
        </p>
        <div className="bg-current-300/10 py-3 px-3.5 flex items-center rounded-lg">
          <TbBulb className="text-xl text-primary-2/70" />
          <div className="ml-2 font-[400] font-inter text-tertiary-5 text-base">
            Ads with good pictures get more views and replies
          </div>
        </div>
      </div>

      {/* Upload Area */}
      <div
        className={cn(
          "border border-dashed border-gray-300 rounded-lg p-4",
          "flex flex-col items-center justify-center text-center",
          "hover:border-gray-400 transition"
        )}
      >
        <label
          htmlFor="image-upload"
          className="cursor-pointer flex flex-col items-center justify-center"
        >
          <div className="border border-primary-2/20  p-5 pl-7 pt-7 bg-primary-2/5 ">
            <Image src={Camera} alt="camera icon" />
          </div>
          <p className="font-[400] font-inter text-primary-2/50 text-sm">
            Add up to 10 images
          </p>
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Display Selected Images */}
      <div className="grid grid-cols-5 gap-2 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="h-20 w-20 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
