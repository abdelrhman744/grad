import RequireRole from "@/components/RequireRole";

export default function PresidentAnalytics() {
    return (
        <RequireRole role="president">
            <div className="max-w-6xl mx-auto space-y-6">
                <h1 className="text-3xl font-extrabold">Analytics</h1>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                    High-level institutional insights — placeholder.
                </div>
            </div>
        </RequireRole>
    );
}
