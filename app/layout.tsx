import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "UniDoc",
  description: "University Intelligent MS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
