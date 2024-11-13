import Image from "next/image";
import React from "react";
import demoImg from "@/../public/asset/demo.jpg";
import user from "@/../public/asset/user.png";
import Profile from "../layout-ui/Profile";
export default function ViewRow({ view }: { view: Views }) {
  return (
    <div className="rounded-3xl shadow-md shadow-primary-2/10">
      <div className="relative aspect-square w-full h-[200px] ">
        <Image
          src={demoImg}
          fill
          alt={view.productName}
          className="rounded-t-3xl"
        />

        <div className="absolute flex justify-between w-full font-roboto p-5 ">
          <div className="text-center relative px-2 py-2 -top-[20px] -left-[20px] bg-primary-2/70 rounded-br-3xl rounded-tl-3xl">
            <h1 className=" text-primary-1 font-[500] text-xs ">
              General Items
            </h1>
          </div>
          <div className="bg-primary-1/90 rounded-full p-1.5">
            <Image
              src={
                view.favorite ? "/svg/red-heart.svg" : "/svg/trans-heart.svg"
              }
              alt="Heart-img"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="absolute flex justify-between w-full p-5 bottom-0">
          <div className="flex items-center gap-2 relative px-2 py-2 top-[20px] -left-[20px] bg-primary-2/70 text-primary-1  rounded-tr-3xl p-1">
            <Image
              src="/svg/camera.svg"
              alt="Heart-img"
              width={20}
              height={20}
            />{" "}
            <p className="text-sm font-[600] font-roboto">{view.totalImage}</p>
          </div>
        </div>
      </div>
      <div className="px-5 py-4 space-y-2 text-left  font-[500] pb-8">
        <h3 className="text-tertiary-5/80 font-roboto text-xl ">
          {view.productName}
        </h3>
        <div className="flex justify-between gap-1">
          <div className="font-roboto text-xs font-[400] flex gap-2 items-center">
            <p className=" text-primary-2/50">Posted</p>
            <p className="text-red/50">{view.date}</p>
          </div>

          <div className="flex items-center gap-1.5">
            <Image
              src="/svg/location.svg"
              alt="location-img"
              width={10}
              height={10}
            />
            <p className="text-primary-2/50 font-[500] text-xs">
              {view.location}
            </p>
          </div>
        </div>
        <p className="text-2xl text-primary-2/80 font-[600] font-inter py-1.5">
          ${view.price}
        </p>

        <Profile
          userImg={user}
          name={view.profileName}
          isVerified={view.ticked}
        />
      </div>
    </div>
  );
}
