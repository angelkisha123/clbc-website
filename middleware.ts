import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Allow login page always
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // ✅ Protect admin routes (no auth logic here)
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    // Just let it pass — auth is checked server-side
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
