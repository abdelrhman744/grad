import Link from "next/link";

const nav = [
    { name: "Dashboard", href: "/dashboard", icon: "▦" },
    { name: "Documents", href: "/documents", icon: "📄" },
    { name: "AI Assistant", href: "/assistant", icon: "💬" },
];

export default function Sidebar() {
    return (
        <aside className="w-[280px] min-h-screen bg-white border-r border-black/5 px-5 py-6 flex flex-col">
            {/* Brand */}
            <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-[#4C3BFF] flex items-center justify-center text-white font-bold">
                    🛡️
                </div>
                <div>
                    <div className="font-extrabold text-lg leading-5">UniDoc</div>
                    <div className="text-xs text-gray-500 tracking-wide">INTELLIGENT MS</div>
                </div>
            </div>

            {/* Nav */}
            <nav className="mt-10 space-y-2">
                {nav.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium text-gray-600 hover:bg-[#F3F4FF] hover:text-[#4C3BFF] transition"
                    >
                        <span className="flex items-center gap-3">
                            <span className="opacity-70">{item.icon}</span>
                            {item.name}
                        </span>
                        <span className="h-6 w-1 rounded-full bg-transparent group-hover:bg-[#4C3BFF]" />
                    </Link>
                ))}
            </nav>

            <div className="flex-1" />

            {/* User */}
            <div className="mt-6 border-t border-black/5 pt-5">
                <div className="flex items-center gap-3 rounded-2xl bg-[#F7F8FF] p-4">
                    <div className="h-10 w-10 rounded-full bg-white border border-black/5 flex items-center justify-center font-semibold text-gray-700">
                        S
                    </div>
                    <div className="leading-4">
                        <div className="font-semibold text-sm text-gray-800">Student</div>
                        <div className="text-xs text-gray-500">user@university.edu</div>
                    </div>
                </div>

                <button className="mt-3 w-full text-left rounded-2xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-[#F3F4FF] hover:text-[#4C3BFF] transition">
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
