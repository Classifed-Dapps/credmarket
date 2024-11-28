import Image from "next/image";
import React from "react";

export default function AdSent() {
  return (
    <div className="flex flex-col gap-2 overflow-scroll overflow-x-hidden max-h-[10rem] mt-6">
      <div className="grid grid-cols-[1fr_0.4fr_0.5fr] items-center justify-between gap-4  ">
        <div className="flex items-center gap-3">
          <Image
            src="/svg/ArrowWithdraw.svg"
            width={32}
            height={32}
            alt="money"
          />
          <div className="space-y-0.5">
            <h4 className="text-black/80 font-[500] text-base">
              Deposit for this Ad
            </h4>
            <p className="text-primary-2/50 text-sm">Furniture (3-Seater)</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-0.5 w-max">
          <p className="font-[500] text-base text-red">+$50</p>
          <p className="text-primary-2/50 text-sm">12 Mande</p>
        </div>

        <div className="flex items-center gap-1.5 bg-current-100/5 rounded-2xl py-0.5 px-2 w-max">
          <div className="w-1.5 h-1.5 bg-current-100 rounded-full" />
          <p className="text-sm font-[400] text-current-100">Confirmed</p>
        </div>
      </div>
    </div>
  );
}
