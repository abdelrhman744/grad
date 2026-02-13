import RoleSidebar from "@/components/RoleSidebar";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#F6F7FB] flex">
            <RoleSidebar role="doctor" />
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
