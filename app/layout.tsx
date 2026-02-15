import "./globals.css";
import type { ReactNode } from "react";
import HistoryGuard from "@/components/HistoryGuard"; // استيراد المكون الجديد

export const metadata = {
  title: "UniDoc",
  description: "University Intelligent MS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body suppressHydrationWarning>
        {/* نغلف الـ children بمكون الـ HistoryGuard */}
        <HistoryGuard>
          {children}
        </HistoryGuard>
      </body>
    </html>
  );
}