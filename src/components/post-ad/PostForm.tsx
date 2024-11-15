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

const formSchema = adFormSchema();
export function PostForm() {
  const [images, setImages] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      location: "",
      condition: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, images);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12">
          <PostInput
            label="Item Title"
            placeholder="Add title"
            name="title"
            control={form.control}
          />
          <PostSelect
            control={form.control}
            name="category"
            label="Choose Category"
            placeholder="Household items"
            values={[
              {
                id: 1,
                label: "Chairs",
                value: "chair",
              },
              {
                id: 2,
                label: "Clothes",
                value: "clothes",
              },
              {
                id: 3,
                label: "Shoes",
                value: "shoes",
              },
            ]}
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
            placeholder="Used"
            values={[
              {
                id: 1,
                label: "Chairs",
                value: "chair",
              },
              {
                id: 2,
                label: "Clothes",
                value: "clothes",
              },
              {
                id: 3,
                label: "Shoes",
                value: "shoes",
              },
            ]}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12">
          <PostSelect
            control={form.control}
            name="delivery"
            label="Delivery Method"
            placeholder="Shipping"
            values={[
              {
                id: 1,
                label: "Chairs",
                value: "chair",
              },
              {
                id: 2,
                label: "Clothes",
                value: "clothes",
              },
              {
                id: 3,
                label: "Shoes",
                value: "shoes",
              },
            ]}
          />
          <PostSelect
            control={form.control}
            name="location"
            label="Choose Location"
            placeholder="London, UK"
            values={[
              {
                id: 1,
                label: "Nigeria",
                value: "nigeria",
              },
              {
                id: 2,
                label: "France",
                value: "france",
              },
              {
                id: 3,
                label: "Ethopia",
                value: "ethopia",
              },
            ]}
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
          className="bg-current-100 py-2.5 cursor-pointer w-full font-inter text-primary-1 font-[500] text-lg"
          type="submit"
        >
          Post my ad
        </Button>
      </form>
    </Form>
  );
}
