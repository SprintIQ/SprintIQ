import { COOKIE_KEY } from "@src/utils/constants/constants";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const currentUser = request.cookies.get(COOKIE_KEY)?.value;
  // console.log("current user", currentUser);
  // if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return Response.redirect(new URL("/dashboard/game", request.url));
  // }
  // if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
  //   return Response.redirect(new URL("/login", request.url));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
