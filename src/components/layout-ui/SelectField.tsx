import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Value = {
  name: string;
  value: string;
};

export default function SelectField({
  placeholder,
  type,
  values,
}: {
  placeholder: string;
  type?: string;
  values: Array<Value>;
}) {
  return (
    <Select>
      <SelectTrigger
        className={`${
          type === "footer"
            ? "text-tertiary-3 border border-tertiary-4 rounded-none bg-primary-3 w-[150px]"
            : "text-tertiary-1 border-none "
        } focus:ring-0 focus:ring-offset-0`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-primary-1">
        {values.map((value) => (
          <SelectItem
            className="duration-500 cursor-pointer transition-all hover:bg-current-200 hover:text-primary-1"
            key={value.name}
            value={value.value}
          >
            {value.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
// className={` ${
//   type === "first-footer"
//     ? " border border-secondary-1 bg-primary-1 !text-primary-4 text-8xl"
//     : type === "second-footer"
//     ? "text-base border border-primary-5 bg-primary-7 !text-primary-4 "
//     : type?.startsWith("logged")
//     ? "bg-primary-1 rounded-none space-y-2 !w-[200px]"
//     : ""
// } w-[180px]  text-xs text-tertiary-1  font-inter shadow-none border-none  ${
//   type === "loggedIn" && "text-secondary-1 "
// }  `}
// type === "second-footer"
// ? "bg-primary-2 text-primary-4 border-primary-3 "
// : "bg-primary-1"

// className="hover:bg-secondary-1 font-inter cursor-pointer transition-all duration-500 hover:text-primary-1 shadow-none"
