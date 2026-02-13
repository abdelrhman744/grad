import DocumentTable from "@/components/DocumentTable";

export default function DocumentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">Document Repository</h1>
                    <p className="text-gray-500 mt-1">
                        Secure centralized access to all institutional files.
                    </p>
                </div>

                <button className="px-6 py-3 rounded-2xl bg-[#4C3BFF] text-white shadow-sm font-semibold hover:opacity-95">
                    ＋ Upload Document
                </button>
            </div>

            <div className="rounded-[28px] bg-white border border-black/5 shadow-sm p-6">
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    <input
                        placeholder="Search documents, categories, or tags..."
                        className="w-full rounded-2xl border border-black/5 bg-[#F6F7FB] px-5 py-4 outline-none text-sm"
                    />
                    <button className="w-full md:w-auto px-5 py-4 rounded-2xl bg-white border border-black/5 shadow-sm font-semibold text-gray-700">
                        Filters
                    </button>
                </div>

                <div className="mt-6">
                    <DocumentTable />
                </div>
            </div>
        </div>
    );
}
