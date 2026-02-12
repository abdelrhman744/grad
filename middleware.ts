import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const protectedPaths = ["/dashboard", "/documents", "/assistant"];
    const isProtected = protectedPaths.some((p) => pathname.startsWith(p));
    if (!isProtected) return NextResponse.next();

    // TODO: switch to cookie/JWT
    // const ok = req.cookies.get("unidoc_auth")?.value === "1";
    // if (!ok) return NextResponse.redirect(new URL("/login", req.url));

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/documents/:path*", "/assistant/:path*"],
};
