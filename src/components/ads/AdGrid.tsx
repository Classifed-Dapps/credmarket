"use client";
import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { MapPin } from "lucide-react";

interface Ad {
  id: string;
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
  // This would normally fetch from your API
  const ads: Ad[] = []; // Replace with actual data fetching

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ads.map((ad) => (
        <Link href={`/ads/${ad.id}`} key={ad.id}>
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
              <h3 className="font-semibold text-lg mb-2 text-primary-2">
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
