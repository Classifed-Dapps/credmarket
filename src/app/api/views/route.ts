import { NextResponse } from "next/server";
import demoImg from "@/../public/asset/demo.jpg";
import user from "@/../public/asset/user.png";
import { viewsData } from "@/data/data";

export async function GET() {
  return NextResponse.json<Views[]>(viewsData);
  // viewsData.map((view) => {
  //   return { ...view, profilePhoto: user.src, photo: demoImg.src };
  // })
}
