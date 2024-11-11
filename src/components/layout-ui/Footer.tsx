"use client";
import { footerLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ArrowRight from "@/../public/svg/ArrowRight.svg";
import SelectField from "./SelectField";

export default function Footer() {
  const [id, setId] = useState<null | number>(null);
  return (
    <footer className="flex flex-col lg:flex-row  gap-6 items-start justify-between bg-current-700  lg:p-20 px-8 p-8 md:px-12 py-8 font-inter">
      {/* <h1 className="font-[400] text-current-300 text-3xl md:text-4xl font-mansalva">
        Cred<span className="text-orange">List</span>
      </h1> */}
      <Image
        src="/asset/cred_2.png"
        alt="credList logo"
        width={120}
        height={120}
      />
      <div className="grid grid-cols-2 gap-5 md:flex justify-between items-start w-full lg:w-[60%]">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.id} className="flex flex-col gap-4">
            <h3 className="font-[500] text-primary-1 text-sm font-inter">
              {footerLink.title}
            </h3>
            <div className="flex flex-col gap-3">
              {footerLink.links.map((link) => (
                <Link
                  onMouseEnter={() =>
                    setId(() => (id === null ? link.id : null))
                  }
                  onMouseLeave={() => setId(null)}
                  href="#"
                  key={link.id}
                  className={`${
                    id === link.id &&
                    "border-b-2 border-current-400 !text-primary-1"
                  }  font-[400] text-sm text-tertiary-3 flex gap-2 items-center w-max`}
                >
                  <span>{link.name}</span>
                  {id === link.id && (
                    <Image
                      src={ArrowRight}
                      width={20}
                      height={20}
                      alt="arrowright"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full lg:w-max items-end lg:items-center">
        <SelectField
          placeholder="Language"
          type="footer"
          values={[
            { name: "English", value: "english" },
            { name: "French", value: "french" },
          ]}
        />
      </div>
    </footer>
  );
}
