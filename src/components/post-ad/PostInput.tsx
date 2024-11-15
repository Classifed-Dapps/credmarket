import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { adFormSchema } from "@/lib/utils";
const formSchema = adFormSchema();
interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

export default function PostInput({
  label,
  name,
  placeholder,
  control,
}: CustomInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full md:w-[50%]">
          <FormLabel className="font-poppins text-primary-2/70 font-[400] text-base">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className="text-primary-4 rounded-lg border border-primary-11"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
