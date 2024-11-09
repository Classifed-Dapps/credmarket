import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Message from "@/../public/svg/message.svg";
import Notification from "@/../public/svg/notification.svg";
import Folder from "@/../public/svg/folder.svg";
import Heart from "@/../public/svg/heart.svg";
import User from "@/../public/svg/user.svg";
import Logout from "@/../public/svg/logout.svg";

import Link from "next/link";
import Image from "next/image";

export default function DropdownLayout() {
  const tabs: Tab[] = [
    {
      id: 1,
      route: "#",
      image: Message.src,
      label: "Messages",
    },
    {
      id: 2,
      route: "#",
      image: Notification.src,
      label: "Notifications",
    },
    {
      id: 3,
      route: "#",
      image: Folder.src,
      label: "My ads",
    },
    {
      id: 4,
      route: "#",
      image: Heart.src,
      label: "Favorite",
    },
    {
      id: 5,
      route: "#",
      image: User.src,
      label: "My Profile",
    },
    {
      id: 6,
      route: "#",
      image: Logout.src,
      label: "Logout",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" focus:outline-none cursor-pointer">
        <Image
          src="/svg/menu.svg"
          width={20}
          height={20}
          className="pt-2 cursor-pointer"
          alt="pluscircle"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-6  bg-primary-1 px-6 py-3 rounded-xl">
        <DropdownMenuSeparator />
        {tabs.map((tab) => (
          <DropdownMenuItem key={tab.id}>
            {tab.route && (
              <Link
                href={tab.route}
                className="flex gap-2 items-center font-inter py-1.5 px-3 text-primary-2 rounded-md text-base font-[400] hover:bg-current-100 hover:text-primary-1 duration-500 transition-all"
              >
                <Image
                  src={tab.image}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  alt="pluscircle"
                />
                <p>{tab.label}</p>
              </Link>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
