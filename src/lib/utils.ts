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
    price: z.string(),
    category: z.string(),
    subCategory: z.string(),
    condition: z.string(),
    delivery: z.string(),
    location: z.string(),
  });
