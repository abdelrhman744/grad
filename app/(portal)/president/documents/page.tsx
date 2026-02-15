"use client"; // ضروري عشان الـ Hooks تشتغل

import { useRef } from "react";
import DocumentTable from "@/components/DocumentTable";

export default function DocumentsPage() {
    // 1. تعريف الـ Ref للوصول للـ Input المخفي
    const fileInputRef = useRef<HTMLInputElement>(null);

    // 2. دالة تشغيل الزرار
    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    // 3. دالة التعامل مع الملف بعد اختياره
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Uploaded successfully!");
                window.location.reload(); // عشان يحدث الجدول ويظهر الملف الجديد
            } else {
                const err = await response.json();
                alert("Error: " + err.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to connect to the server");
        }
    };

    return (
        <div className="space-y-6">
            {/* Input مخفي عشان يفتح نافذة الملفات */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" 
                accept=".pdf,.doc,.docx,.txt,.md"
            />

            {/* التصميم العلوي كما هو في الكود الأول */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">Document Repository</h1>
                    <p className="text-gray-500 mt-1">
                        Secure centralized access to all institutional files.
                    </p>
                </div>

                {/* الزرار بنفس ستايل الكود الأول لكن بيشغل دالة الرفع */}
                <button 
                    onClick={handleUploadClick}
                    className="px-6 py-3 rounded-2xl bg-[#4C3BFF] text-white shadow-sm font-semibold hover:opacity-95"
                >
                    ＋ Upload Document
                </button>
            </div>

            {/* باقي تصميم الصفحة (البحث والجدول) */}
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