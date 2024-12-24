"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import PostSelect from "./PostSelect";
import { adFormSchema } from "@/lib/utils";
import UploadPhoto from "./UploadPhoto";
import PostInput from "./PostInput";
import PostModal from "./PostModal";
import {
  locations,
  deliveryMethods,
  conditions,
  mainCategories,
} from "@/lib/selectValues";
import { useAccount } from "wagmi";
import { v2 as cloudinary } from "cloudinary";
import { toast } from "react-toastify";

const formSchema = adFormSchema();

const subCategories: Record<
  | "for_sale"
  | "jobs"
  | "pets"
  | "community"
  | "real_estate"
  | "free_stuff"
  | "services",
  { name: string; value: string }[]
> = {
  for_sale: [
    { name: "General Items", value: "general_items" },
    { name: "Clothing & Accessories", value: "clothing_accessories" },
    { name: "Cars & Vehicles", value: "cars_vehicles" },
  ],
  jobs: [
    { name: "Full-Time/Remote", value: "full_time_remote" },
    { name: "Advertisement and Hire", value: "advertisement_hire" },
    { name: "Freelance", value: "freelance" },
  ],
  pets: [
    { name: "Pets for Sale", value: "pets_for_sale" },
    { name: "Pet Services", value: "pet_services" },
  ],
  community: [
    { name: "Events", value: "events" },
    { name: "Activities", value: "activities" },
    { name: "Missed Connections", value: "missed_connections" },
    { name: "Lost + Found", value: "lost_found" },
  ],
  real_estate: [
    { name: "Rentals", value: "rentals" },
    { name: "For Sale", value: "real_estate_for_sale" },
  ],
  free_stuff: [
    { name: "Free to Collect", value: "free_to_collect" },
    { name: "Giveaways", value: "giveaways" },
  ],
  services: [
    { name: "Cleaning Services", value: "cleaning_services" },
    { name: "Moving & Transportation", value: "moving_transportation" },
  ],
};

export function PostForm() {
  const { address } = useAccount();
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredSubCategories, setFilteredSubCategories] = useState<
    { name: string; value: string }[]
  >([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      subCategory: "",
      location: "",
      condition: "",
      walletAddress: address,
    },
  });

  const handleCategoryChange = (categoryValue: string) => {
    const categoryKey = categoryValue
      .replace(" ", "_")
      .toLowerCase() as keyof typeof subCategories;
    setFilteredSubCategories(subCategories[categoryKey] || []);
    form.setValue("subCategory", ""); // Reset subCategory when category changes
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submission started", values); // Debug log

    if (!address) {
      toast.error("Please connect your wallet before posting.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();

      // Add all form fields to FormData
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      // Add wallet address explicitly
      formData.append("walletAddress", address);

      // Add images
      images.forEach((image) => {
        formData.append("images", image);
      });

      console.log("Sending request to API..."); // Debug log

      const response = await fetch("/api/post-ad", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        toast.error("Failed to post ad. Please try again.");
      }

      const result = await response.json();
      console.log("API Response:", result); // Debug log

      toast.success("Ad posted successfully!");
      form.reset();
      setImages([]);
    } catch (error) {
      console.error("Error submitting ad:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred while posting the ad."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6"
        encType="multipart/form-data" // Add this
      >
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12">
          <PostInput
            label="Item Title"
            placeholder="Add title"
            name="title"
            control={form.control}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12">
          <PostSelect
            control={form.control}
            name="category"
            label="Choose Category"
            placeholder=""
            values={mainCategories.map((category) => ({
              id: category.value, // Using value as id for now, can be a number if preferred
              label: category.name,
              value: category.value,
            }))}
            onValueChange={handleCategoryChange}
          />
          <PostSelect
            control={form.control}
            name="subCategory"
            label="subCategories"
            placeholder=""
            values={filteredSubCategories.map((sub) => ({
              id: sub.value,
              label: sub.name,
              value: sub.value,
            }))}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12">
          <PostInput
            label="Price"
            placeholder="$"
            name="price"
            control={form.control}
          />
          <PostSelect
            control={form.control}
            name="condition"
            label="Condition"
            placeholder=""
            values={conditions}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12">
          <PostSelect
            control={form.control}
            name="delivery"
            label="Delivery Method"
            placeholder="Shipping"
            values={deliveryMethods}
          />
          <PostSelect
            control={form.control}
            name="location"
            label="Choose Location"
            placeholder=""
            values={locations}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-poppins text-primary-2/70 font-[400] text-base">
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none h-[180px] text-primary-4 rounded-lg border border-primary-11"
                  placeholder="Add Description"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <UploadPhoto images={images} setImages={setImages} />

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4  lg:gap-16 font-inter">
          <div className="flex flex-col gap-1">
            <p className="text-primary-2/90 text-base font-[400]">
              Ad Deposit <span className="text-red">(Optional)</span>
            </p>
            <p className="text-primary-2/70 font-[400] text-base ">
              Increase buyer confidence by staking a deoposit in cryptocurrency.
            </p>
          </div>
          <PostModal />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-current-100 py-2.5 cursor-pointer w-full font-inter text-primary-1 font-[500] text-lg"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span>Posting...</span>
            </span>
          ) : (
            "Post my ad"
          )}
        </Button>
      </form>
    </Form>
  );
}
