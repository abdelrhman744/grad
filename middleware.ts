import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 1. قراءة الكوكيز اللي خزنّاها في صفحة الـ Login
    const auth = req.cookies.get("unidoc_auth")?.value;
    const role = req.cookies.get("user_role")?.value?.toLowerCase(); // بنحولها لسمول عشان تطابق الـ idToRole

    // المسارات التي تحتاج حماية
    const protectedPaths = ["/student", "/admin", "/doctor", "/president", "/moderator"];
    const isProtected = protectedPaths.some((p) => pathname.startsWith(p));

    if (!isProtected) return NextResponse.next();

    // 2. إذا حاول الدخول لمسار محمي وهو مش مسجل دخول
    if (auth !== "true") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // 3. منع تغيير الـ URL يدوياً بناءً على الرتبة
    // لو طالب وحاول يكتب /admin أو أي مسار مش بيبدأ بـ /student
    if (role === "student" && !pathname.startsWith("/student")) {
        return NextResponse.redirect(new URL("/student/assistant", req.url));
    }

    if (role === "admin" && !pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    if (role === "doctor" && !pathname.startsWith("/doctor")) {
        return NextResponse.redirect(new URL("/doctor/assistant", req.url));
    }

    if (role === "president" && !pathname.startsWith("/president")) {
        return NextResponse.redirect(new URL("/president/dashboard", req.url));
    }

    if (role === "moderator" && !pathname.startsWith("/moderator")) {
        return NextResponse.redirect(new URL("/moderator/review", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/student/:path*", "/admin/:path*", "/doctor/:path*", "/president/:path*", "/moderator/:path*"],
};