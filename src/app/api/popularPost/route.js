import db from "@/db.json";
import { NextResponse } from "next/server";

export const GET = (request) => {
  let popularPost = db.popularPost;
  return NextResponse.json(popularPost);
};
