"use client";
import React, { useEffect, useState } from "react";
import { ViewsForm } from "./ViewsForm";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export default function ViewMobile() {
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <div className="">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-[87vh] z-[500] right-[40%]  bg-primary-2/60 text-primary-1 rounded-3xl text-lg"
      >
        <p>Sort</p>
        <ArrowUpDown />
      </Button>
      <div
        className={`${
          !isOpen ? "-bottom-[110%]" : "bottom-[0%]"
        } h-screen duration-1000 transition-all lg:hidden px-6 left-0 pt-48 py-24  w-full fixed backdrop-blur-sm z-[100] flex items-center justify-center flex-col  bg-primary-1/95  `}
      >
        <div>
          <ViewsForm />
        </div>
      </div>
    </div>
  );
}
