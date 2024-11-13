import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Profile({
  userImg,
  isVerified,
  name,
}: {
  name: string;
  isVerified: boolean;
  userImg: StaticImageData;
}) {
  return (
    <div className="flex items-center gap-2 justify-between">
      <div className="flex items-center gap-2">
        <div className="relative aspect-square w-[35px]">
          <Image src={userImg} className="rounded-full" alt="user-img" fill />
          <Image
            src="/svg/Badge.svg"
            className="rounded-full absolute left-[70%]"
            width={12}
            height={12}
            alt="user-img"
          />
        </div>
        <p className="text-primary-2/80 font-[700] font-inter text-xs">
          {name}
        </p>
      </div>
      <Button className="bg-primary-2/20 py-1 px-2.5 text-primary-2/80 font-poppins text-xs rounded-3xl font-[500]">
        User history
      </Button>
    </div>
  );
}
