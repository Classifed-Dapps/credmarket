import { PostForm } from "@/components/post-ad/PostForm";
import React from "react";

const page = () => {
  return (
    <div className="px-4 p-8 md:p-10 md:px-16 lg:px-20 font-inter rounded-3xl border border-current-100/50 space-y-6 lg:space-y-12 my-14 lg:my-20 max-w-[90%] md:max-w-[80%] w-full mx-auto bg-current-200/5">
      <h1 className="font-[600] text-2xl text-primary-2/90">Post an ad</h1>
      <PostForm />
    </div>
  );
};

export default page;
