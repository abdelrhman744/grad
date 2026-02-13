import RequireRole from "@/components/RequireRole";

export default function ModeratorReview() {
    return (
        <RequireRole role="moderator">
            <div className="max-w-6xl mx-auto space-y-6">
                <h1 className="text-3xl font-extrabold">Review Queue</h1>
                <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                    Documents pending approval/rejection — placeholder.
                </div>
            </div>
        </RequireRole>
    );
}
