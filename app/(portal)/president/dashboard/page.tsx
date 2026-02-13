import StatCard from "@/components/StatCard";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Hero */}
            <div className="rounded-[28px] overflow-hidden bg-white border border-black/5 shadow-sm">
                <div className="relative h-[220px] bg-gradient-to-r from-[#2C2A68] via-[#3B3AA8] to-[#6C72FF]">
                    <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_30%,white,transparent_50%),radial-gradient(circle_at_80%_60%,white,transparent_50%)]" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold text-white">
                            University Knowledge Hub
                        </h1>
                        <p className="mt-2 text-white/80 max-w-2xl">
                            Access, process, and analyze institutional documents with secure Artificial Intelligence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold text-gray-900">System Overview</h2>
                    <p className="text-gray-500 mt-1">
                        Real-time monitoring of document processing and AI activity.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="px-5 py-3 rounded-2xl bg-white border border-black/5 shadow-sm font-semibold text-gray-700 hover:bg-gray-50">
                        Refresh Data
                    </button>
                    <button className="px-5 py-3 rounded-2xl bg-[#4C3BFF] text-white shadow-sm font-semibold hover:opacity-95">
                        Download Report
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <StatCard title="Total Documents" value="12,482" delta="+12%" icon="📄" />
                <StatCard title="AI Queries" value="45.2k" delta="+24%" icon="🧠" />
                <StatCard title="Active Users" value="2,840" delta="+5%" icon="👥" />
                <StatCard title="Verification Rate" value="98.4%" delta="+0.2%" icon="✅" />
            </div>

            {/* Sections */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="rounded-[28px] bg-white border border-black/5 shadow-sm p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-extrabold text-gray-900">Activity Trends</h3>
                        <button className="px-4 py-2 rounded-xl bg-white border border-black/5 text-sm font-semibold text-gray-700">
                            Last 7 Days ▾
                        </button>
                    </div>
                    <div className="mt-6 h-[220px] rounded-2xl bg-[#F6F7FB] border border-black/5 flex items-center justify-center text-gray-500">
                        Chart Placeholder
                    </div>
                </div>

                <div className="rounded-[28px] bg-white border border-black/5 shadow-sm p-6">
                    <h3 className="text-xl font-extrabold text-gray-900">Recent Uploads</h3>
                    <div className="mt-6 h-[220px] rounded-2xl bg-[#F6F7FB] border border-black/5 flex items-center justify-center text-gray-500">
                        Recent Uploads Placeholder
                    </div>
                </div>
            </div>
        </div>
    );
}
