"use server";
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export async function getViewsData() {
  try {
    const res = await fetch(`${BASE_URL}/api/views`);
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
