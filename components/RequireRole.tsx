"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSessionClient } from "@/lib/auth";

type Role = "student" | "doctor" | "moderator" | "admin" | "president";

export default function RequireRole({
    role,
    children,
}: {
    role: Role;
    children: React.ReactNode;
}) {
    const router = useRouter();

    useEffect(() => {
        const session = getSessionClient();
        if (!session) {
            router.replace("/login");
            return;
        }
        if (session.role !== role) {
            router.replace(`/${session.role}`);
            return;
        }
    }, [router, role]);

    return <>{children}</>;
}
