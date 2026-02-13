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

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState<Role>("student");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        if (loading) return;

        const cleanEmail = email.trim();

        setLoading(true);

        // mock auth
        await new Promise((r) => setTimeout(r, 400));

        setSession({
            email: cleanEmail,
            role,
            name: role[0].toUpperCase() + role.slice(1),
        });

        router.push(roleLanding[role]);
        setLoading(false);
    }

    const roles: { label: string; value: Role }[] = [
        { label: "Student", value: "student" },
        { label: "Doctor", value: "doctor" },
        { label: "Moderator", value: "moderator" },
        { label: "Admin", value: "admin" },
        { label: "President", value: "president" },
    ];

    return (
        <div className="min-h-screen bg-[#F6F7FB] flex items-center justify-center p-6">
            <div className="w-full max-w-5xl rounded-[36px] overflow-hidden bg-white border border-black/5 shadow-xl grid grid-cols-1 lg:grid-cols-2">
                {/* Left */}
                <div className="bg-[#4C3BFF] p-10 text-white relative hidden lg:block">
                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-white/15 flex items-center justify-center font-bold">
                            🛡️
                        </div>
                        <div>
                            <div className="font-extrabold text-xl leading-5">UniDoc</div>
                            <div className="text-xs text-white/70 tracking-wide">INTELLIGENT MS</div>
                        </div>
                    </div>

                    <h1 className="mt-16 text-5xl font-extrabold leading-[1.05]">
                        Empowering University
                        <br />
                        Knowledge with AI.
                    </h1>

                    <p className="mt-6 text-white/80 text-lg max-w-md">
                        Securely access, upload and analyze institutional documents with our intelligent RAG-powered system.
                    </p>

                    <div className="absolute left-10 bottom-10 right-10 rounded-3xl bg-white/10 border border-white/15 p-5">
                        <div className="font-bold">Role-Based Access</div>
                        <div className="text-sm text-white/75">Strict institutional security tiers.</div>
                    </div>

                    <div className="absolute bottom-4 left-10 text-xs text-white/60 tracking-widest">
                        © 2026 UNIVERSITY INTELLIGENCE SYSTEM
                    </div>
                </div>

                {/* Right */}
                <div className="p-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
                    <p className="mt-2 text-gray-500">Log in to access your documents and AI assistant.</p>

                    {/* ✅ Form بدل div */}
                    <form
                        onSubmit={(e) => handleLogin(e)}
                        className="mt-10 space-y-5"
                    >
                        <div>
                            <div className="text-xs font-bold text-gray-500 tracking-widest mb-2">
                                EMAIL ADDRESS
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#F6F7FB] px-4 py-4">
                                <span className="text-gray-400">✉️</span>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent outline-none text-sm"
                                    placeholder="name@university.edu"
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="text-xs font-bold text-gray-500 tracking-widest mb-2">
                                PASSWORD
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#F6F7FB] px-4 py-4">
                                <span className="text-gray-400">🔒</span>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-transparent outline-none text-sm"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="text-xs font-bold text-gray-500 tracking-widest mb-3">
                                ASSIGN ROLE
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {roles.map((r) => {
                                    const active = role === r.value;
                                    return (
                                        <button
                                            key={r.value}
                                            type="button" // ✅ مهم: يمنع submit
                                            onClick={() => setRole(r.value)}
                                            className={[
                                                "px-4 py-2 rounded-full border text-sm font-semibold transition",
                                                active
                                                    ? "bg-[#4C3BFF] border-[#4C3BFF] text-white"
                                                    : "bg-white border-black/10 text-gray-600 hover:bg-[#EEF0FF] hover:text-[#4C3BFF]",
                                            ].join(" ")}
                                        >
                                            {r.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <button
                            type="submit" // ✅ submit مع Enter
                            disabled={loading || !email || !password}
                            className="w-full mt-3 py-4 rounded-2xl bg-[#4C3BFF] text-white font-extrabold text-lg shadow-lg hover:opacity-95 disabled:opacity-60"
                        >
                            {loading ? "Signing In..." : "Sign In  →"}
                        </button>

                        <div className="mt-8 flex items-center justify-between text-sm">
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
                                Forgot Password?
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}
