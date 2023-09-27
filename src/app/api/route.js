import { NextResponse } from "next/server";

export const GET = (request) => {
  let showThings = { message: "hello blogs" };
  return NextResponse.json(showThings);
};
