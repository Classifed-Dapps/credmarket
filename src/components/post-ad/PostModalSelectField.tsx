import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PostModalSelectField() {
  return (
    <Select>
      <SelectTrigger className="bg-current-100/5 text-primary-2/80 text-xl font-[500] rounded-3xl w-[140px] border-none text-center px-6 py-6">
        <SelectValue placeholder="MAND" />
      </SelectTrigger>
      <SelectContent className="text-center bg-primary-1">
        <SelectItem
          className="duration-500 cursor-pointer transition-all hover:bg-current-200 hover:text-primary-1"
          value="MAND"
        >
          MAND
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
