import { Suspense } from "react";
import AdFilters from "@/components/ads/AdFilters";
import AdGrid from "@/components/ads/AdGrid";
import AdSearch from "@/components/ads/AdSearch";
import { Skeleton } from "@/app/ads/components/ui/skeleton";

export default function AdsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filters Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary-2 mb-6">Browse Ads</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-3/4">
            <AdSearch />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4">
          <AdFilters />
        </div>

        {/* Ads Grid */}
        <div className="w-full lg:w-3/4">
          <Suspense fallback={<AdGridSkeleton />}>
            <AdGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function AdGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md p-4">
          <Skeleton className="h-48 w-full mb-4" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  );
}
