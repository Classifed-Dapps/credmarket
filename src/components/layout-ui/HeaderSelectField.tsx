import React, { useState } from "react";
import SelectField from "./SelectField";

const mainCategories = [
  { name: "For Sale", value: "for_sale" },
  { name: "Jobs", value: "jobs" },
  { name: "Pets", value: "pets" },
  { name: "Community", value: "community" },
  { name: "Real Estate", value: "real_estate" },
  { name: "Free Stuff", value: "free_stuff" },
  { name: "Services", value: "services" },
];

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
      <SelectField
        placeholder="US"
        type="loggedIn"
        values={[
          { name: "Alabama", value: "al" },
          { name: "Alaska", value: "ak" },
          { name: "Arizona", value: "az" },
          { name: "Arkansas", value: "ar" },
          { name: "California", value: "ca" },
          { name: "Colorado", value: "co" },
          { name: "Connecticut", value: "ct" },
          { name: "Delaware", value: "de" },
          { name: "Florida", value: "fl" },
          { name: "Georgia", value: "ga" },
          { name: "Hawaii", value: "hi" },
          { name: "Idaho", value: "id" },
          { name: "Illinois", value: "il" },
          { name: "Indiana", value: "in" },
          { name: "Iowa", value: "ia" },
          { name: "Kansas", value: "ks" },
          { name: "Kentucky", value: "ky" },
          { name: "Louisiana", value: "la" },
          { name: "Maine", value: "me" },
          { name: "Maryland", value: "md" },
          { name: "Massachusetts", value: "ma" },
          { name: "Michigan", value: "mi" },
          { name: "Minnesota", value: "mn" },
          { name: "Mississippi", value: "ms" },
          { name: "Missouri", value: "mo" },
          { name: "Montana", value: "mt" },
          { name: "Nebraska", value: "ne" },
          { name: "Nevada", value: "nv" },
          { name: "New Hampshire", value: "nh" },
          { name: "New Jersey", value: "nj" },
          { name: "New Mexico", value: "nm" },
          { name: "New York", value: "ny" },
          { name: "North Carolina", value: "nc" },
          { name: "North Dakota", value: "nd" },
          { name: "Ohio", value: "oh" },
          { name: "Oklahoma", value: "ok" },
          { name: "Oregon", value: "or" },
          { name: "Pennsylvania", value: "pa" },
          { name: "Rhode Island", value: "ri" },
          { name: "South Carolina", value: "sc" },
          { name: "South Dakota", value: "sd" },
          { name: "Tennessee", value: "tn" },
          { name: "Texas", value: "tx" },
          { name: "Utah", value: "ut" },
          { name: "Vermont", value: "vt" },
          { name: "Virginia", value: "va" },
          { name: "Washington", value: "wa" },
          { name: "West Virginia", value: "wv" },
          { name: "Wisconsin", value: "wi" },
          { name: "Wyoming", value: "wy" },
        ]}
      />

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
