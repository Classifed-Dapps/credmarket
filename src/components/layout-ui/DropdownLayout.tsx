import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineNotifications } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { LuFolderOpen } from "react-icons/lu";
import Link from "next/link";
import {
  FaRegEnvelope,
  // FaRegFolderOpen,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa6";

export default function DropdownLayout() {
  const tabs: Tab[] = [
    {
      id: 1,
      route: "#",
      svg: <FaRegEnvelope />,
      label: "Messages",
    },
    {
      id: 2,
      route: "#",
      svg: <MdOutlineNotifications />,
      label: "Notidications",
    },
    {
      id: 3,
      route: "#",
      svg: <LuFolderOpen />,
      label: "My ads",
    },
    {
      id: 4,
      route: "#",
      svg: <FaRegHeart />,
      label: "Favorite",
    },
    {
      id: 5,
      route: "#",
      svg: <FaRegUser />,
      label: "My Profile",
    },
    {
      id: 6,
      route: "#",
      svg: <BiLogOut />,
      label: "Logout",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" focus:outline-none cursor-pointer">
        <TiArrowSortedDown className="text-primary-1 text-3xl cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3  bg-primary-10 px-6 py-3 rounded-none border-[0.5px] border-secondary-1">
        <DropdownMenuSeparator />
        {tabs.map((tab) => (
          <DropdownMenuItem key={tab.id}>
            {tab.route && (
              <Link
                href={tab.route}
                className="flex gap-2 items-center font-inter py-1.5 px-3 text-primary-2 rounded-md text-base font-[400] hover:bg-secondary-1 hover:text-primary-1 duration-500 transition-all"
              >
                <div className="text-xl ">{tab.svg}</div>
                <p>{tab.label}</p>
              </Link>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
