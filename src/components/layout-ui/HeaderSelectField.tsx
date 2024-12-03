import React, { useState } from "react";
import SelectField from "./SelectField";
import {
  categories,
  locations,
  mainCategories,
  stateData,
} from "@/lib/selectValues";

const subCategories = {
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

type CategoryKey = keyof typeof subCategories;

export default function HeaderSelectField() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | "">(
    ""
  );

  const handleMainCategoryChange = (value: string) => {
    setSelectedCategory(value as CategoryKey);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <SelectField placeholder="US" type="loggedIn" values={stateData} />

      <SelectField
        placeholder="Select Category"
        type="logged"
        values={mainCategories}
        onValueChange={handleMainCategoryChange} // Handle value change here
      />

      <SelectField
        placeholder=""
        type="logged"
        values={selectedCategory ? subCategories[selectedCategory] : []}
        onValueChange={(value) => console.log(value)} // Handle subcategory value change
      />
    </div>
  );
}
