import { getSessionClient } from "@/lib/auth";

export default function Topbar() {
    const session = getSessionClient(); // client-safe mock (localStorage)
    const roleLabel = session?.role ? session.role[0].toUpperCase() + session.role.slice(1) : "Student";
    const avatar = roleLabel[0] ?? "S";

    return (
        <header className="sticky top-0 z-10 bg-[#F6F7FB]/80 backdrop-blur border-b border-black/5">
            <div className="px-8 py-4 flex items-center gap-4">
                {/* Search */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 bg-white border border-black/5 rounded-2xl px-4 py-3 shadow-sm">
                        <span className="text-gray-400">🔎</span>
                        <input
                            placeholder="Universal search..."
                            className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Role */}
                <div className="hidden md:flex items-center gap-2 bg-white border border-black/5 rounded-2xl px-4 py-3 shadow-sm">
                    <span className="text-xs font-semibold text-[#4C3BFF] bg-[#EEF0FF] px-2 py-1 rounded-full">
                        ACTIVE ROLE
                    </span>
                    <span className="text-sm font-semibold text-gray-800">{roleLabel}</span>
                    <span className="text-gray-400">▾</span>
                </div>

                <button className="h-11 w-11 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center">
                    🔔
                </button>

                <button className="h-11 w-11 rounded-2xl bg-[#4C3BFF] text-white shadow-sm flex items-center justify-center font-bold">
                    {avatar}
                </button>
            </div>
        </header>
    );
}
