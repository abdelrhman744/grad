import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import DocumentTable from "../../components/DocumentTable";
import StatCard from "../../components/StatCard";
import AssistantPanel from "../../components/AssistantPanel";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#F8F9FC]">
      <Sidebar />

      {/* الجزء اللي في النص: التوب بار + المحتوى */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <div className="max-w-5xl mx-auto space-y-6">
            
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

            {/* كروت الإحصائيات */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard title="Total Documents" value="1" delta="+1" icon="document" />
              <StatCard title="Processed" value="1" delta="0" icon="check" />
              <StatCard title="Pending" value="0" delta="0" icon="clock" />
            </div>

            {/* الجدول الحقيقي المرتبط بالداتا بيز */}
            <div className="bg-white rounded-2xl shadow-sm border border-black/5">
               <h2 className="p-5 font-bold border-b border-black/5">Recent Documents</h2>
               <DocumentTable />
            </div>

          </div>
        </main>
      </div>

      {/* المساعد الذكي على اليمين */}
      <div className="w-96 border-l border-black/5 hidden xl:block">
         <AssistantPanel />
      </div>
    </div>
  );
}