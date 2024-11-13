"use server";

export async function getViewsData() {
  try {
    const res = await fetch("http://localhost:3000/api/views");
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
