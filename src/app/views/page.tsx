import ViewInput from "@/components/views/ViewInput";
import ViewsContainer from "@/components/views/ViewsContainer";
import { getViewsData } from "@/lib/action";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["views"],
    queryFn: getViewsData,
  });
  return (
    <div className="space-y-7">
      <ViewInput />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ViewsContainer />
      </HydrationBoundary>
    </div>
  );
};

export default page;
