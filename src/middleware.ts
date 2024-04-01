import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const headerdata = request.headers;
  console.log("Header data:", headerdata);
  return ;
}

export const config = {
  matcher: ["/"],
};
