import { documents } from "@/lib/mock";

export default function DocumentTable() {
    return (
        <div className="overflow-hidden rounded-2xl border border-black/5">
            <table className="w-full text-sm">
                <thead className="bg-[#FBFBFE] text-gray-500">
                    <tr className="text-left">
                        <th className="px-5 py-4">DOCUMENT NAME</th>
                        <th className="px-5 py-4">CATEGORY</th>
                        <th className="px-5 py-4">UPLOAD DATE</th>
                        <th className="px-5 py-4">UPLOADER</th>
                        <th className="px-5 py-4">ACCESS LEVEL</th>
                        <th className="px-5 py-4 text-right">ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {documents.map((d) => (
                        <tr key={d.name} className="border-t border-black/5">
                            <td className="px-5 py-4">
                                <div className="font-semibold text-gray-800">{d.name}</div>
                                <div className="text-xs text-gray-400">{d.type}</div>
                            </td>

                            <td className="px-5 py-4">
                                <span className="px-3 py-1 rounded-full bg-[#F3F4FF] text-[#4C3BFF] font-semibold text-xs">
                                    {d.category}
                                </span>
                            </td>

                            <td className="px-5 py-4 text-gray-600">{d.date}</td>
                            <td className="px-5 py-4 text-gray-600">{d.uploader}</td>

                            <td className="px-5 py-4">
                                <span className="px-3 py-1 rounded-full bg-[#FFF1F2] text-[#E11D48] font-extrabold text-xs">
                                    {d.access}
                                </span>
                            </td>

                            <td className="px-5 py-4">
                                <div className="flex justify-end gap-3 text-gray-500">
                                    <button className="hover:text-[#4C3BFF]">👁</button>
                                    <button className="hover:text-[#4C3BFF]">⬇</button>
                                    <button className="hover:text-[#E11D48]">🗑</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
