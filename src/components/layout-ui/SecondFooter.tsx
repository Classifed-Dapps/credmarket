"use client";
import { footerLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import PLaystore from "@/../public/asset/playstore.png";
import Applestore from "@/../public/asset/apple.png";
import React, { ReactNode, useState } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import SelectField from "./SelectField";

export default function SecondFooter() {
  const socialLink: Array<{ link: ReactNode; route: string; id: number }> = [
    {
      link: <FaFacebookF />,
      route: "#",
      id: 1,
    },
    {
      link: <FaInstagram />,
      route: "#",
      id: 2,
    },
    {
      link: <FaLinkedinIn />,
      route: "#",
      id: 3,
    },
    {
      link: <FaTwitter />,
      route: "#",
      id: 4,
    },
    {
      link: <FaYoutube />,
      route: "#",
      id: 5,
    },
  ];
  const [id, setId] = useState<null | number>(null);
  const date: Date = new Date();
  return (
    <div className="bg-primary-2 pt-20 px-16  font-inter flex flex-col">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-7 pb-20 w-[32%]">
          <h1 className="text-4xl font-[600] text-primary-1">CredList</h1>
          <p className="font-[400] text-sm text-primary-4">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>

          <div className="flex gap-3">
            {socialLink.map((link) => (
              <Link
                key={link.id}
                href={link.route}
                className="bg-primary-5 text-primary-1 p-3 text-lg transition duration-500 hover:bg-secondary-1 hover:shadow-xl hover:shadow-secondary-1"
              >
                {link.link}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-around">
          <div className="flex justify-between items-start w-[50%]">
            {footerLinks.map((footerLink) => (
              <div key={footerLink.id} className="flex flex-col gap-5">
                <h3 className="font-[500] text-primary-1 text-sm">
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
                        id === link.id && "border-b-2 border-secondary-1"
                      }  font-[400] text-sm text-primary-4 flex gap-2 items-center w-max`}
                    >
                      <span>{link.name}</span>
                      {id === link.id && (
                        <FaArrowRight className="text-primary-1" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col  items-center">
            <h3 className="font-[500] text-primary-1 text-sm">
              DOWNLOAD OUR APP
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3.5 px-4 py-3 items-center">
                <Image src={Applestore} width={32} height={32} alt="apple" />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-[400] text-primary-6">
                    Download now
                  </p>
                  <p className="text-base text-[500] text-primary-1">
                    App Store
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5 px-4 py-3 items-center">
                <Image src={PLaystore} width={32} height={32} alt="playstore" />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-[400] text-primary-6">
                    Download now
                  </p>
                  <p className="text-base text-[500] text-primary-1">
                    Play Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-16 text-primary-4 p-6">
        <p className="text-sm font-[400]">
          © {date.getFullYear()} - Eduflex. Designed by{" "}
          <span className="text-primary-1"> Templatecookie. </span> All rights
          reserved
        </p>
        <SelectField
          placeholder="Language"
          type="footer"
          values={[
            { name: "English", value: "english" },
            { name: "French", value: "french" },
          ]}
        />
      </div>
    </div>
  );
}
