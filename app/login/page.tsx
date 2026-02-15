"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setSession } from "@/lib/auth";

type Role = "student" | "doctor" | "moderator" | "admin" | "president";

const roleLanding: Record<Role, string> = {
    student: "/student/assistant",
    doctor: "/doctor/assistant",
    moderator: "/moderator/review",
    admin: "/admin/dashboard",
    president: "/president/dashboard",
};

// مؤقت: ID ثابت لكل رول
const idToRole: Record<string, Role> = {
    "111": "student",
    "222": "admin",
    "333": "doctor",
    "444": "moderator",
    "555": "president",
};

export default function LoginPage() {
    const router = useRouter();

    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        if (loading) return;

        setError("");
        const cleanId = userId.trim();

        const role = idToRole[cleanId];
        if (!role) {
            setError("Invalid User ID (try 111/222/333/444/555)");
            return;
        }

        setLoading(true);

        // mock delay
        await new Promise((r) => setTimeout(r, 350));

        // --- التعديل هنا: تخزين الكوكيز ---
        // 1. حالة تسجيل الدخول
        document.cookie = `unidoc_auth=true; path=/; max-age=3600`; 
        // 2. رتبة المستخدم
        document.cookie = `user_role=${role}; path=/; max-age=3600`;
        // 3. (جديد) رقم المستخدم ID ليتم استخدامه في الـ Backend/Prisma
        document.cookie = `user_id=${cleanId}; path=/; max-age=3600`;

        setSession({
            email: `${role}@university.edu`,
            role,
            name: role[0].toUpperCase() + role.slice(1),
        });

        router.replace(roleLanding[role]);
        setLoading(false);
    }

    return (
        <div className="min-h-screen bg-[#F6F7FB] flex items-center justify-center p-6">
            <div className="w-full max-w-6xl rounded-[40px] overflow-hidden bg-white/70 backdrop-blur border border-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT */}
                <div className="relative p-12 text-white hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#3F2BFF] via-[#4C3BFF] to-[#6B5BFF]">
                    {/* Decorative blobs */}
                    <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-black/10 blur-2xl" />
                    <div className="pointer-events-none absolute top-1/2 -right-20 h-52 w-52 rounded-full bg-white/10 blur-2xl" />

                    {/* Top */}
                    <div className="relative">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center font-bold">
                                🛡️
                            </div>
                            <div>
                                <div className="font-extrabold text-xl leading-5">UniDoc</div>
                                <div className="text-xs text-white/70 tracking-wide">
                                    INTELLIGENT MS
                                </div>
                            </div>
                        </div>

                        <h1 className="mt-20 text-[52px] font-extrabold leading-[1.02] drop-shadow-sm">
                            Empowering
                            <br />
                            University
                            <br />
                            Knowledge with AI.
                        </h1>

                        <p className="mt-7 text-lg text-white/80 max-w-md leading-relaxed">
                            Securely access, upload and analyze institutional documents with
                            our intelligent RAG-powered system.
                        </p>

                        {/* Quick role hint pills */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {["Student", "Doctor", "Moderator", "Admin", "President"].map((x) => (
                                <span
                                    key={x}
                                    className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wide"
                                >
                                    {x}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom card */}
                    <div className="relative">
                        <div className="rounded-3xl bg-white/10 border border-white/15 p-6 backdrop-blur-sm">
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <div className="font-extrabold text-base leading-5">
                                        Role-Based Access
                                    </div>
                                    <p className="mt-3 text-sm text-white/80 leading-relaxed">
                                        Strict institutional security tiers with multi-level
                                        permissions and controlled institutional visibility.
                                    </p>
                                </div>

                                <div className="shrink-0 h-11 w-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                                    🔐
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-xs text-white/60 tracking-widest">
                            © 2026 UNIVERSITY INTELLIGENCE SYSTEM
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="p-12">
                    <h2 className="text-4xl font-extrabold text-gray-900">Welcome Back!</h2>
                    <p className="mt-2 text-gray-500">
                        Log in with your University User ID.
                    </p>

                    <form onSubmit={handleLogin} className="mt-10 space-y-6">
                        <div>
                            <div className="text-xs font-bold text-gray-500 tracking-widest mb-2">
                                USER ID
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#F6F7FB] px-4 py-4 focus-within:ring-2 focus-within:ring-[#4C3BFF]/30">
                                <span className="text-[#4C3BFF] font-bold">ID</span>
                                <input
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="w-full bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
                                    placeholder="Enter your ID (111/222/333/444/555)"
                                    inputMode="numeric"
                                />
                            </div>

                            {error && (
                                <div className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                                    {error}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !userId.trim()}
                            className="w-full py-4 rounded-2xl bg-[#4C3BFF] text-white font-extrabold text-lg shadow-[0_12px_30px_-12px_rgba(76,59,255,0.8)] hover:opacity-95 disabled:opacity-60"
                        >
                            {loading ? "Signing In..." : "Sign In  →"}
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-black/10" />
                            <div className="text-xs text-gray-400 font-semibold tracking-widest">
                                HELP
                            </div>
                            <div className="h-px flex-1 bg-black/10" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <button
                                type="button"
                                className="text-[#4C3BFF] font-semibold hover:underline"
                            >
                                New here? Register Account
                            </button>
                            <button
                                type="button"
                                className="text-gray-400 font-semibold hover:underline"
                            >
                                Forgot User ID?
                            </button>
                        </div>

                        {/* صغير تحت للتجربة */}
                        <div className="text-xs text-gray-400">
                            Demo IDs: <span className="font-semibold">111</span> student,{" "}
                            <span className="font-semibold">333</span> doctor,{" "}
                            <span className="font-semibold">444</span> moderator,{" "}
                            <span className="font-semibold">222</span> admin,{" "}
                            <span className="font-semibold">555</span> president
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}