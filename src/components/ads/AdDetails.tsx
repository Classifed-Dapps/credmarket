"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import demoImg from "@/../public/asset/demo.jpg";
import userImg from "@/../public/asset/user.png";
import Profile from "../layout-ui/Profile";
export default function AdDetails() {
  const images: StaticImageData[] = [demoImg, demoImg, demoImg];
  const [imgSrc, setImgSrc] = useState<StaticImageData | string>(
    images?.at(0) ?? ""
  );
  return (
    <div className="w-full lg:w-[55%]">
      <div className="flex items-center justify-between pb-4">
        <div className="space-y-1">
          <h6 className="text-black/70 font-[600] text-2xl">Chair For Sale</h6>
          <p className="font-[400] text-lg text-black/70">London, Uk</p>
        </div>
        <Profile isVerified={true} userImg={userImg} name="0xhab.eth" />
      </div>
      <div className="space-y-4">
        <div className="w-full relative aspect-square h-[331px] lg:h-[411px]">
          <Image
            src={imgSrc}
            alt="demo img"
            fill
            className="object-fit object-top rounded-3xl"
            quality={80}
          />
        </div>
        <div className="flex w-full justify-between">
          {images.map((img, i) => (
            <div
              key={i}
              className="cursor-pointer w-[32%] md:w-[30%] relative aspect-square h-[118px]"
            >
              <Image
                src={img}
                onClick={() => setImgSrc(img)}
                alt="demo img"
                className=" rounded-xl md:rounded-3xl"
                fill
                quality={80}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
