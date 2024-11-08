import React from "react";
import { Input } from "../ui/input";
import SelectField from "./SelectField";
import Image from "next/image";
import { Button } from "../ui/button";
export default function HeaderInputField({ type }: { type: string }) {
  return (
    <div
      className={`flex justify-between gap-2 bg-primary-1 w-[45%] ${
        type === "left" ? "rounded-l-full" : "rounded-r-full"
      }   p-1.5 `}
    >
      {/* left input */}
      {type === "left" && (
        <Button className="bg-current-200 text-primary-1 rounded-full py-5 px-3 text-center">
          <Image
            src="/svg/SearchIcon.svg"
            alt="search"
            width={40}
            height={40}
          />
        </Button>
      )}
      <Input
        className="border-none text-sm text-tertiary-2 font-inter focus:ring-0 "
        placeholder={
          type === "left" ? "Search credlist..." : "Search Locations..."
        }
      />
      {/* select field */}
      <SelectField
        placeholder={type === "left" ? "All Categories" : "Location"}
        values={
          type === "left"
            ? [
                { name: "Market", value: "market" },
                { name: "Placement", value: "placement" },
              ]
            : [
                { name: "London", value: "london" },
                { name: "US", value: "us" },
                { name: "Nigeria", value: "nigeria" },
              ]
        }
      />
      {/* right input */}
      {type === "right" && (
        <Button className="bg-primary-2/80 text-primary-1 rounded-full py-5 px-3 text-center">
          <Image
            src="/svg/SearchIcon.svg"
            alt="search"
            width={40}
            height={40}
          />
        </Button>
      )}
    </div>
  );
}
