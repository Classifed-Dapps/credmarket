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

interface SelectFieldProps {
  placeholder: string;
  type?: string;
  values: Array<Value>;
  onValueChange?: (value: string) => void;
}

export default function SelectField({
  placeholder,
  type,
  values = [], // Provide default empty array
  onValueChange,
}: SelectFieldProps) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger
        className={`${
          type === "footer"
            ? "text-tertiary-3 border border-tertiary-4 rounded-none bg-primary-3 w-[150px]"
            : type === "views"
            ? "w-[300px] text-tertiary-1 border-none"
            : type === "loggedIn"
            ? "!text-current-100 bg-primary-1 font-[500] rounded-none w-full md:w-[200px]"
            : type?.startsWith("logged")
            ? "bg-primary-1 !text-black/70 text-base font-[500] !rounded-none w-full md:w-[200px]"
            : "text-tertiary-1 border-none"
        } focus:ring-0 focus:ring-offset-0 relative`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        position="popper"
        side="bottom"
        sideOffset={5}
        align="start"
        className="z-[99999] bg-primary-1 shadow-lg"
      >
        {Array.isArray(values) &&
          values.map((value) => (
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
