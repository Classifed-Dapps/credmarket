import Image from "next/image";
import React from "react";

export default function ConnectedButton() {
  return (
    <div className="flex items-center gap-1 bg-primary-1 text-primary-4 rounded-xl   font-[700] text-[10px] md:text-sm">
      <p className="pl-3">42.069 ETH</p>
      <div className="bg-black/5 rounded-l-xl flex items-center gap-0.5 py-1.5 px-3">
        <Image src="/asset/Avatar.png" width={20} height={20} alt="avatar" />
        <p>0xhab.eth</p>
      </div>
    </div>
  );
}
