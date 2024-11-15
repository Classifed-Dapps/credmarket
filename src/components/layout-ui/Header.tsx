"use client";
import React, { useEffect, useState } from "react";
import { CustomConnectButton } from "./CustomConnectButton";
import Image from "next/image";
import InputContainer from "./InputContainer";
import HeaderSelectField from "./HeaderSelectField";
import DropdownLayout from "./DropdownLayout";
import Link from "next/link";

export default function Header() {
  const user: { name: string; id: number } = {
    name: "default",
    id: 24353,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  useEffect(
    function () {
      if (isOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
      return () => {
        document.body.style.overflow = "";
      };
    },
    [isOpen]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = window.setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      setTimeoutId(newTimeoutId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY, timeoutId]);

  return (
    <header className="fixed z-[900] max-w-[144rem] w-full flex justify-between items-center gap-4 py-4 px-5  lg:px-14 bg-current-100 font-inter text-primary-1 font-[500]">
      <div className="flex w-max lg:w-[70%] items-center gap-7 ">
        <p className="font-[400] text-3xl md:text-4xl font-mansalva">
          Cred<span className="text-orange">List</span>
        </p>

        <div className="hidden lg:block">
          {user.name === "sam" ? <InputContainer /> : <HeaderSelectField />}
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-12 ">
        <CustomConnectButton />
        <div className="flex items-end text-xs md:text-sm gap-4 md:gap-9 cursor-pointer">
          <Link href="/post-ad" legacyBehavior>
            <a className="flex flex-col items-center">
              <Image
                src="/svg/PlusCircle.svg"
                width={30}
                height={30}
                alt="pluscircle"
              />
              <p>Sell</p>
            </a>
          </Link>
          <div className="flex flex-col gap-2  items-center">
            <DropdownLayout />
            <p>Menu</p>
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className={`flex flex-col  items-center duration-500 transition-all lg:hidden absolute top-[85vh] rounded-full p-4 bg-current-200 left-[85%]  ${
              isVisible ? "opacity-100 visible" : "opacity-0 invisible"
            } `}
          >
            <Image
              src="/svg/SearchIcon.svg"
              alt="search"
              className=""
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="h-screen lg:hidden  w-full fixed backdrop-blur-sm z-[1000] bg-primary-2/70 top-0 left-0">
          <div className=" mt-8  h-full mx-auto max-w-[90%] flex flex-col ">
            <p
              onClick={() => setIsOpen(false)}
              className="relative left-[90%] cursor-pointer font-inter bg-orange shadow-md  font-bold p-2 px-4 mb-8 rounded-full w-max"
            >
              x
            </p>
            {user.name === "sam" ? <InputContainer /> : <HeaderSelectField />}
          </div>
        </div>
      )}
    </header>
  );
}
