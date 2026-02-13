"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clearSession, getSessionClient } from "@/lib/auth";

type Role = "student" | "doctor" | "moderator" | "admin" | "president";

type SidebarItem = {
    label: string;
    href: string;
    icon: string;
};

type Props = {
    title?: string;
    role?: Role; // لو متبعتش role هنجيبه من session
};

function buildItems(role: Role): SidebarItem[] {
    // ✅ Student/Doctor: مفيش Dashboard
    if (role === "student" || role === "doctor") {
        return [
            { label: "AI Assistant", href: `/${role}/assistant`, icon: "💬" },
            { label: "Documents", href: `/${role}/documents`, icon: "📄" },
        ];
    }

    // ✅ Moderator
    if (role === "moderator") {
        return [
            { label: "Dashboard", href: "/moderator/dashboard", icon: "📊" },
            { label: "Review Queue", href: "/moderator/review", icon: "✅" },
            { label: "Documents", href: "/moderator/documents", icon: "📄" },
        ];
    }

    // ✅ Admin
    if (role === "admin") {
        return [
            { label: "Dashboard", href: "/admin/dashboard", icon: "📊" },
            { label: "Documents", href: "/admin/documents", icon: "📄" },
            { label: "AI Assistant", href: "/admin/assistant", icon: "👥" },
        ];
    }

    // ✅ President
    return [
        { label: "Dashboard", href: "/president/dashboard", icon: "🏛️" },
        { label: "Analytics", href: "/president/analytics", icon: "📈" },
        { label: "Documents", href: "/president/documents", icon: "📄" },
    ];
}

export default function RoleSidebar({ title = "UniDoc", role }: Props) {
    const pathname = usePathname();
    const router = useRouter();

    const session = getSessionClient();
    const effectiveRole = role ?? session?.role ?? "student";

    const items = buildItems(effectiveRole);

    function handleSignOut() {
        clearSession();
        router.replace("/login");
    }

    return (
        <aside className="w-[280px] shrink-0 bg-white border-r border-black/5 p-6 hidden lg:flex flex-col">
            {/* Brand */}
            <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-[#4C3BFF]/10 flex items-center justify-center font-bold text-[#4C3BFF]">
                    🛡️
                </div>
                <div className="min-w-0">
                    <div className="font-extrabold text-lg leading-5">{title}</div>
                    <div className="text-xs text-gray-400 tracking-wide">
                        ACTIVE ROLE: <span className="font-semibold capitalize">{effectiveRole}</span>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="mt-10 space-y-2">
                {items.map((it) => {
                    const active =
                        pathname === it.href || pathname.startsWith(it.href + "/");

                    return (
                        <Link
                            key={it.href}
                            href={it.href}
                            className={[
                                "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition border",
                                active
                                    ? "bg-[#4C3BFF] text-white border-[#4C3BFF]"
                                    : "bg-white text-gray-700 border-black/5 hover:bg-[#F6F7FB]",
                            ].join(" ")}
                        >
                            <span>{it.icon}</span>
                            <span>{it.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="mt-auto space-y-3">
                <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-3 rounded-2xl border border-black/10 text-sm font-extrabold text-gray-700 hover:bg-[#F6F7FB]"
                >
                    Sign Out
                </button>

                <div className="text-xs text-gray-400 text-center">
                    © 2026 UNIVERSITY INTELLIGENCE SYSTEM
                </div>
            </div>
        </aside>
    );
}
