import AdDetails from "@/components/ads/AdDetails";
import AdsDescription from "@/components/ads/AdsDescription";
import React from "react";

const page = () => {
  return (
    <div className="h-full px-4 md:px-10 w-full md:w-[90%] mx-auto  gap-14 pb-10 flex flex-col lg:flex-row items-start justify-center font-[500] font-inter my-10 md:my-20">
      <AdDetails />
      <AdsDescription />
    </div>
  );
};

export default page;
