"use client"; // مهم جداً عشان نستخدم الـ Hooks
import { useEffect, useState } from "react";

// تعريف شكل البيانات اللي جاية من الباك إند (TypeScript)
interface Document {
  id: number;
  title: string;
  status: string;
  createdAt: string;
  user: {
    name: string;
  };
}

export default function DocumentTable() {
    const [docs, setDocs] = useState<Document[]>([]); // مخزن البيانات
    const [loading, setLoading] = useState(true);   // حالة التحميل

    // فنكشن بتجيب البيانات من الـ API
    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await fetch("/api/documents");
                const data = await response.json();
                setDocs(data);
            } catch (error) {
                console.error("Error fetching documents:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    if (loading) return <div className="p-5 text-center">Loading Documents...</div>;

    return (
        <div className="overflow-hidden rounded-2xl border border-black/5">
            <table className="w-full text-sm">
                <thead className="bg-[#FBFBFE] text-gray-500">
                    <tr className="text-left">
                        <th className="px-5 py-4">DOCUMENT NAME</th>
                        <th className="px-5 py-4">STATUS</th>
                        <th className="px-5 py-4">UPLOAD DATE</th>
                        <th className="px-5 py-4">UPLOADER</th>
                        <th className="px-5 py-4 text-right">ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {docs.length === 0 ? (
                        <tr><td colSpan={5} className="p-5 text-center text-gray-400">No documents found.</td></tr>
                    ) : (
                        docs.map((d) => (
                            <tr key={d.id} className="border-t border-black/5">
                                <td className="px-5 py-4">
                                    <div className="font-semibold text-gray-800">{d.title}</div>
                                    <div className="text-xs text-gray-400">PDF</div> {/* ممكن نغير دي لاحقاً */}
                                </td>

                                <td className="px-5 py-4">
                                    <span className="px-3 py-1 rounded-full bg-[#F3F4FF] text-[#4C3BFF] font-semibold text-xs">
                                        {d.status}
                                    </span>
                                </td>

                                <td className="px-5 py-4 text-gray-600">
                                    {new Date(d.createdAt).toLocaleDateString()}
                                </td>

                                <td className="px-5 py-4 text-gray-600">
                                    {d.user?.name || "System"}
                                </td>

                                <td className="px-5 py-4">
                                    <div className="flex justify-end gap-3 text-gray-500">
                                        <button className="hover:text-[#4C3BFF]">👁</button>
                                        <button className="hover:text-[#4C3BFF]">⬇</button>
                                        <button className="hover:text-[#E11D48]">🗑</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}