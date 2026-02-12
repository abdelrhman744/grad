import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function PortalLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-[#F6F7FB]">
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Topbar />
                    <main className="px-8 py-6">{children}</main>
                </div>
            </div>
        </div>
    );
}
