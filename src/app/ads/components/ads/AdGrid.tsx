"use client";
import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Ad {
  _id: string;
  title: string;
  price: string;
  location: string;
  images: string[];
  createdAt: string;
  user: {
    walletAddress: string;
  };
}

export default function AdGrid() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        setError(null);

        // Build query string from search params
        const queryString = searchParams.toString();
        const response = await fetch(
          `/api/ads${queryString ? `?${queryString}` : ""}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch ads");
        }

        const data = await response.json();
        setAds(data);
      } catch (err) {
        console.error("Error fetching ads:", err);
        setError(err instanceof Error ? err.message : "Failed to load ads");
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, [searchParams]);

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-current-100 hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 animate-pulse h-80 rounded-lg" />
        ))}
      </div>
    );
  }

  if (ads.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No ads found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ads.map((ad) => (
        <Link href={`/ads/${ad._id}`} key={ad._id}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={ad.images[0] || "/placeholder.png"}
                alt={ad.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-primary-2 line-clamp-2">
                {ad.title}
              </h3>
              <p className="text-xl font-bold text-current-100 mb-2">
                ${ad.price}
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {ad.location}
              </div>
              <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                <span>
                  {formatDistance(new Date(ad.createdAt), new Date(), {
                    addSuffix: true,
                  })}
                </span>
                <span className="truncate max-w-[150px]">
                  {ad.user.walletAddress}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
