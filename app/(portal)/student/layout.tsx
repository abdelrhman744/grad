import RoleSidebar from "@/components/RoleSidebar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#F6F7FB] flex">
            <RoleSidebar role="student" />
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
