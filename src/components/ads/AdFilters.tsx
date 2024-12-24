"use client";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { mainCategories, conditions, locations } from "@/lib/selectValues";

export default function AdFilters() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4 items-center">
              <Input type="number" placeholder="Min" className="w-full" />
              <span>-</span>
              <Input type="number" placeholder="Max" className="w-full" />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {mainCategories.map((category) => (
                <div
                  key={category.value}
                  className="flex items-center space-x-2"
                >
                  <Checkbox id={category.value} />
                  <label
                    htmlFor={category.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="condition">
          <AccordionTrigger>Condition</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {conditions.map((condition) => (
                <div
                  key={condition.value}
                  className="flex items-center space-x-2"
                >
                  <Checkbox id={condition.value} />
                  <label
                    htmlFor={condition.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {condition.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {locations.map((location) => (
                <div
                  key={location.value}
                  className="flex items-center space-x-2"
                >
                  <Checkbox id={location.value} />
                  <label
                    htmlFor={location.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {location.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-x-2">
        <Button variant="outline" className="w-1/2">
          Reset
        </Button>
        <Button className="w-1/2 bg-current-100">Apply</Button>
      </div>
    </div>
  );
}
