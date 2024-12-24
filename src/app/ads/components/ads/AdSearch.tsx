"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function AdSearch() {
  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search ads..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
      <Button className="bg-current-100 text-white px-6">Search</Button>
    </div>
  );
}
