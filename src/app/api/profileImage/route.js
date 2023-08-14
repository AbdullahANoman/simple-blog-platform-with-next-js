import db from "@/db.json";
import { NextResponse } from "next/server";

export const GET = (request) => {
  let profileImage = db.profileImage;
  return NextResponse.json(profileImage);
};
