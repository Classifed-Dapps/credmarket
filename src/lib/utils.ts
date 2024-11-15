import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const adFormSchema = () =>
  z.object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    description: z.string(),
    // description: z.object({
    //   bio: z
    //     .string()
    //     .min(10, {
    //       message: "Bio must be at least 10 characters.",
    //     })
    //     .max(160, {
    //       message: "Bio must not be longer than 30 characters.",
    //     }),
    // }),
    price: z.string(),
    category: z.string(),
    condition: z.string(),
    delivery: z.string(),
    location: z.string(),
  });
