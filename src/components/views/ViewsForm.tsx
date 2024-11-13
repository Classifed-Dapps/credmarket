"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  miles: z.string().min(2),
  postalCode: z.string().min(2),
  priceLow: z.string().min(2),
  priceHigh: z.string().min(2),
  model: z.string().min(2),
  condition: z.string().min(2),
  items: z.string(),
});

export function ViewsForm() {
  const items = [
    {
      id: "titles",
      label: "Search titles only",
    },
    {
      id: "image",
      label: "has image",
    },
    {
      id: "today",
      label: "posted today",
    },
    {
      id: "duplicate",
      label: "hide duplicate",
    },
  ] as const;
  const conditions = [
    {
      condition: "Good",
      id: 1,
    },
    {
      condition: "Bad",
      id: 2,
    },
    {
      condition: "Poor",
      id: 3,
    },
  ] as const;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-current-200/5 rounded-3xl border border-current-200/50 p-10 font-inter h-max"
      >
        <h1 className="font-[600] text-2xl text-current-100 tracking-wider">
          General Appliances
        </h1>

        <div className="my-4">
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              className="w-6 h-6 border-primary-2/70 rounded-md bg-primary-1"
                              checked={field.value?.includes(item.id)}
                            />
                          </FormControl>
                          <FormLabel className="font-[500] font-inter text-primary-2/70 text-lg">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <h4 className="text-primary-2/70 font-inter text-xl font-[400] tracking-wide">
              Distance
            </h4>
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="miles"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="miles"
                        className="bg-primary-1 font-[500] w-[70%]  rounded-md text-center border border-tertiary-1/40 text-tertiary-1/75  text-lg placeholder:text-tertiary-1/75"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="postal code"
                        className="bg-primary-1 font-[500 w-full  rounded-md text-center border border-tertiary-1/40 text-tertiary-1/75  text-lg placeholder:text-tertiary-1/75"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-primary-2/70 font-inter text-xl font-[400] tracking-wide">
              Price
            </h4>
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="priceLow"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="text-primary-2/70 text-xl font-[400]">
                      $
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="240"
                        className="bg-primary-1 font-[500] w-[60%]  rounded-md border border-tertiary-1/40 text-tertiary-1/75  text-lg placeholder:text-tertiary-1/75"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priceHigh"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="text-primary-2/70 text-xl font-[400]">
                      -$
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="500"
                        className="bg-primary-1 font-[500] w-[60%]  rounded-md border border-tertiary-1/40 text-tertiary-1/75  text-lg placeholder:text-tertiary-1/75"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-primary-2/70 font-inter text-xl font-[400] tracking-wide">
              Condition
            </h4>
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-primary-1 font-[500] w-full  rounded-md border border-tertiary-1/40 text-tertiary-1/75  text-lg placeholder:text-tertiary-1/75">
                          <SelectValue placeholder="Condition" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-primary-1">
                        {conditions.map(
                          (condition: { id: number; condition: string }) => (
                            <SelectItem
                              key={condition.id}
                              className="duration-500 cursor-pointer transition-all hover:bg-current-200 hover:text-primary-1"
                              value={condition.condition}
                            >
                              {condition.condition}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-primary-2/70 font-inter text-xl font-[400] tracking-wide">
              Make and Model
            </h4>
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <Input
                        placeholder="type model here"
                        className="bg-primary-1 font-[500] w-full  rounded-md border border-tertiary-1/40 text-tertiary-1/75  text-lg placeholder:text-tertiary-1/75"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-9 mt-10">
          <Button
            className="text-current-100 border border-current-100 font-[600] text-lg bg-primary-1 py-4 px-5"
            type="reset"
          >
            Reset
          </Button>
          <Button
            type="submit"
            className="bg-current-100 font-[600] text-lg text-primary-1 py-4 px-5"
          >
            Apply
          </Button>
        </div>
      </form>
    </Form>
  );
}
