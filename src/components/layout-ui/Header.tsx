"use client";
import React from "react";
import { CustomConnectButton } from "./CustomConnectButton";
import Image from "next/image";
import InputContainer from "./InputContainer";
import HeaderSelectField from "./HeaderSelectField";

export default function Header() {
  const user: { name: string; id: number } = {
    name: "default",
    id: 24353,
  };
  return (
    <header className="fixed max-w-[144rem] w-full flex justify-between items-center py-4 px-14 bg-current-100 font-inter text-primary-1 font-[500]">
      <div className="flex items-center gap-5">
        <p className="font-[400] text-4xl font-mansalva">
          Cred<span className="text-orange">List</span>
        </p>
        {user ? <InputContainer /> : <HeaderSelectField />}
      </div>

      <div className="flex items-center gap-12">
        <CustomConnectButton />
        <div className="flex items-end gap-9">
          <div className="flex flex-col  items-center">
            <Image
              src="/svg/PlusCircle.svg"
              width={30}
              height={30}
              alt="pluscircle"
            />
            <p>Sell</p>
          </div>
          <div className="flex flex-col gap-2  items-center">
            <Image
              src="/svg/menu.svg"
              width={24}
              height={24}
              alt="pluscircle"
            />
            <p>Menu</p>
          </div>
        </div>
      </div>
    </header>
  );
}
