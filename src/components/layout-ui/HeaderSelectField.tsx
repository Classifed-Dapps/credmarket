import React from "react";
import SelectField from "./SelectField";

export default function HeaderSelectField() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <SelectField
        placeholder="London, UK"
        type="loggedIn"
        values={[
          { name: "London", value: "london" },
          { name: "US", value: "us" },
          { name: "Nigeria", value: "nigeria" },
        ]}
      />
      <SelectField
        placeholder="For Sale"
        type="logged"
        values={[
          { name: "London", value: "london" },
          { name: "US", value: "us" },
          { name: "Nigeria", value: "nigeria" },
        ]}
      />
      <SelectField
        placeholder="General Appliances"
        type="logged"
        values={[
          { name: "London", value: "london" },
          { name: "US", value: "us" },
          { name: "Nigeria", value: "nigeria" },
        ]}
      />
    </div>
  );
}
