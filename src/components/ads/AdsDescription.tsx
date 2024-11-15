import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function AdsDescription() {
  return (
    <div className="bg-current-200/5 rounded-3xl border border-current-100/50 p-7 font-inter h-max space-y-4 lg:w-[30%] w-full">
      <div className="space-y-2 flex justify-between items-center">
        <div>
          <p className="text-current-100 text-base">Price</p>
          <h1 className="font-[600] text-primary-2/70 text-3xl">
            $800
            <span className="font-[500] text-2xl">(or best offer)</span>
          </h1>
          <p className="text-base text-black/70">Listed 12 days ago</p>
        </div>
        <Image
          src="/svg/trans-heart.svg"
          alt="Heart-img"
          width={40}
          height={40}
        />
      </div>
      <div className="space-y-2">
        <p className="text-current-100 text-base">Description</p>
        <p className="text-primary-2/80 text-lg">
          Selling a beautiful, genuine Italian leather single chair. Perfect for
          adding a touch of elegance to your sitting room or as a stylish accent
          piece.
        </p>
      </div>

      <div className="mt-2">
        <p className="text-current-100 text-base">
          Condition: <span className="text-primary-2/70"> Used</span>
        </p>
        <p className="text-current-100 text-base">
          Color: <span className="text-primary-2/70"> Rich brown</span>
        </p>
        <p className="text-current-100 text-base">
          Material:{" "}
          <span className="text-primary-2/70">
            {" "}
            Full-grain leather seat, solid wood frame
          </span>
        </p>
        <p className="text-current-100 text-base">
          Condition:{" "}
          <span className="text-primary-2/70">
            {" "}
            Very good - minor wear consistent with age
          </span>
        </p>
        <p className="text-current-100 text-base">
          Age:{" "}
          <span className="text-primary-2/70"> Approximately 10 years old</span>
        </p>
        <p className="text-current-100 text-base">
          Dimensions:{" "}
          <span className="text-primary-2/70">
            {" "}
            Height 90cm, Width 45cm, Depth 50cm
          </span>
        </p>
        <p className="text-current-100 text-base">
          Weight: <span className="text-primary-2/70"> About 5kg</span>
        </p>
      </div>
      <Button className="w-full bg-current-100 text-primary-1 text-xl font-[700] mb-4">
        Contact Seller
      </Button>
    </div>
  );
}
