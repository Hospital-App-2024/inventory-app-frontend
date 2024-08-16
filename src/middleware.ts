import type { NextRequest } from "next/server";
import { CookieName } from "./interfaces/auth.interface";

const protectedRoutes = ["/", "/inventory", "/owner"];
const publicRoutes = ["/auth/login"];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = req.cookies.get(CookieName.SESSION);

  if (isProtectedRoute && !token) {
    return Response.redirect(new URL("/auth/login", req.url));
  }

  if (isPublicRoute && token) {
    return Response.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
