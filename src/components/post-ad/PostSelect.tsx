import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { adFormSchema } from "@/lib/utils";
const formSchema = adFormSchema();
interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  values: { id: number; label: string; value: string }[];
}

export default function PostSelect({
  name,
  control,
  label,
  values,
  placeholder,
}: CustomInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full md:w-[50%]">
          <FormLabel className="text-primary-2/70 font-[400] font-poppins text-base">
            {label}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="text-primary-2/70 border border-tertiary-6 bg-primary-1 w-full">
                <SelectValue
                  className="text-primary-4 cursor-pointer rounded-lg w-full"
                  placeholder={placeholder}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-primary-1">
              {values.map((val) => (
                <SelectItem
                  key={val.id}
                  className="transition-all duration-500 hover:bg-current-100 cursor-pointer hover:text-primary-1"
                  value={val.value}
                >
                  {val.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
