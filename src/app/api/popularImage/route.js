import db from "@/db.json";
import { NextResponse } from "next/server";

export const GET = (request) => {
  let popularImages = db.popularImages;
  return NextResponse.json(popularImages);
};
