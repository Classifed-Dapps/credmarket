"use client";
import { useView } from "@/hooks/useView";
import React from "react";
import ViewRow from "./ViewRow";

export default function ViewsContainer() {
  const { views, status, error } = useView();
  if (error) return <p>error</p>;
  if (status === "pending") return <p>loading...</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {views?.map((view: Views) => (
        <ViewRow key={view.id} view={view} />
      ))}
    </div>
  );
}
