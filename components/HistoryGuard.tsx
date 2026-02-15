"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function HistoryGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // قراءة الرتبة من الكوكيز
    const role = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user_role="))
      ?.split("=")[1];

    if (role) {
      // إذا حاول المستخدم الرجوع لمسار لا يخصه، نقوم بعمل replace فوراً
      // هذا يمسح المسار "الخاطئ" من سجل المتصفح (History)
      const isTryingAdmin = pathname.startsWith("/admin");
      const isTryingStudent = pathname.startsWith("/student");
      const isTryingDoctor = pathname.startsWith("/doctor");

      if (role === "student" && isTryingAdmin) {
        router.replace("/student/assistant");
      } else if (role === "admin" && isTryingStudent) {
        router.replace("/admin/dashboard");
      } else if (role === "doctor" && (isTryingAdmin || isTryingStudent)) {
        router.replace("/doctor/assistant");
      }
      // يمكنك إضافة بقية الرتب هنا بنفس الطريقة
    }
  }, [pathname, router]);

  return <>{children}</>;
}