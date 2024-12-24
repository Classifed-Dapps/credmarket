"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (selectedCategories.length > 0)
      params.set("category", selectedCategories.join(","));
    if (selectedConditions.length > 0)
      params.set("condition", selectedConditions.join(","));
    if (selectedLocations.length > 0)
      params.set("location", selectedLocations.join(","));

    router.push(`/ads?${params.toString()}`);
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedCategories([]);
    setSelectedConditions([]);
    setSelectedLocations([]);
    router.push("/ads");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4 items-center">
              <Input
                type="number"
                placeholder="Min"
                className="w-full"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Max"
                className="w-full"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
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
                  <Checkbox
                    id={category.value}
                    checked={selectedCategories.includes(category.value)}
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      if (target.checked) {
                        setSelectedCategories([
                          ...selectedCategories,
                          category.value,
                        ]);
                      } else {
                        setSelectedCategories(
                          selectedCategories.filter((c) => c !== category.value)
                        );
                      }
                    }}
                  />
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
                  <Checkbox
                    id={condition.value}
                    checked={selectedConditions.includes(condition.value)}
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      if ((e.target as HTMLInputElement).checked) {
                        setSelectedConditions([
                          ...selectedConditions,
                          condition.value,
                        ]);
                      } else {
                        setSelectedConditions(
                          selectedConditions.filter(
                            (c) => c !== condition.value
                          )
                        );
                      }
                    }}
                  />
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
                  <Checkbox
                    id={location.value}
                    checked={selectedLocations.includes(location.value)}
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      if ((e.target as HTMLInputElement).checked) {
                        setSelectedLocations([
                          ...selectedLocations,
                          location.value,
                        ]);
                      } else {
                        setSelectedLocations(
                          selectedLocations.filter((c) => c !== location.value)
                        );
                      }
                    }}
                  />
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
        <Button variant="outline" className="w-1/2" onClick={handleReset}>
          Reset
        </Button>
        <Button className="w-1/2 bg-current-100" onClick={handleApplyFilters}>
          Apply
        </Button>
      </div>
    </div>
  );
}
