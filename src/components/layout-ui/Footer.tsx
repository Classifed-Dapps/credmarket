import React from "react";
import SelectField from "./SelectField";
import Link from "next/link";

export default function Footer() {
  const links: { id: number; route: string; name: string }[] = [
    { id: 1, route: "#", name: "about credlist" },
    { id: 2, route: "#", name: "What's new" },
    { id: 3, route: "#", name: "Help center" },
    { id: 4, route: "#", name: "Report abuse" },
    { id: 5, route: "#", name: "Safety tips" },
  ];
  return (
    <div className="bg-secondary-1/5 flex items-center justify-between py-12 px-[133px] gap-16">
      <h1 className="font-mansalva font-[400] text-5xl text-secondary-1">
        CredList
      </h1>
      <div className="flex gap-8 flex-wrap items-center justify-center">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.route}
            className="font-inter font-[400] text-2xl underline underline-offset-8 text-secondary-1 "
          >
            {link.name}
          </Link>
        ))}
      </div>
      <SelectField
        placeholder="English"
        type="first-footer"
        values={[
          { name: "English", value: "english" },
          { name: "French", value: "french" },
        ]}
      />
    </div>
  );
}
