export default function StatCard({
    title,
    value,
    delta,
    icon,
}: {
    title: string;
    value: string;
    delta: string;
    icon: string;
}) {
    return (
        <div className="rounded-[24px] bg-white border border-black/5 shadow-sm p-6">
            <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-[#F3F4FF] flex items-center justify-center text-xl">
                    {icon}
                </div>
                <div className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {delta}
                </div>
            </div>

            <div className="mt-5 text-gray-500 font-semibold">{title}</div>
            <div className="mt-2 text-3xl font-extrabold text-gray-900">{value}</div>
        </div>
    );
}
