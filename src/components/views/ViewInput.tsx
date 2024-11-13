import React from "react";
import SelectField from "../layout-ui/SelectField";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

export default function ViewInput() {
  return (
    <div>
      <div
        className={`flex border border-secondary-1/40 justify-between gap-2 bg-primary-1 max-w-full md:max-w-[80%] rounded-l-full rounded-r-full  p-2 `}
      >
        <Button className="bg-current-200 text-primary-1 rounded-full py-6  px-3.5 text-center">
          <Image
            src="/svg/SearchIcon.svg"
            alt="search"
            className=""
            width={40}
            height={40}
          />
        </Button>

        <Input
          className="border-none text-lg text-primary-2/50 focus:ring-0 font-inter shadow-none  "
          placeholder="Search credlist..."
        />

        <SelectField
          placeholder="All Categories"
          type="views"
          values={[
            { name: "Market", value: "market" },
            { name: "Placement", value: "placement" },
          ]}
        />
      </div>
    </div>
  );
}
