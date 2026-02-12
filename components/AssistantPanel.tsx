export default function AssistantPanel() {
    return (
        <div className="rounded-[28px] bg-white border border-black/5 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-[#4C3BFF] text-white flex items-center justify-center font-bold">
                        🤖
                    </div>
                    <div>
                        <div className="font-extrabold text-gray-900">Intelligence Assistant</div>
                        <div className="text-xs text-gray-500">
                            ● <span className="text-green-600 font-semibold">POWERED BY RAG ENGINE</span>
                        </div>
                    </div>
                </div>

                <button className="h-10 w-10 rounded-2xl bg-white border border-black/5 flex items-center justify-center">
                    ↻
                </button>
            </div>

            <div className="p-6">
                <div className="rounded-2xl bg-[#F6F7FB] border border-black/5 p-5 text-gray-700">
                    Hello! I am the University Intelligent Assistant. I can answer questions about institutional documents based on your <b>student</b> permissions.
                    <br />
                    What would you like to know today?
                </div>
            </div>

            <div className="p-6 border-t border-black/5">
                <div className="flex items-center gap-3">
                    <input
                        className="flex-1 rounded-2xl border border-black/5 bg-[#F6F7FB] px-5 py-4 outline-none text-sm"
                        placeholder="Ask a question about institutional data..."
                    />
                    <button className="h-12 w-12 rounded-2xl bg-[#4C3BFF] text-white flex items-center justify-center font-bold">
                        ➤
                    </button>
                </div>

                <div className="mt-4 text-[11px] text-gray-400 text-center">
                    AI CAN MAKE MISTAKES. ALWAYS VERIFY IMPORTANT INSTITUTIONAL DATA.
                </div>
            </div>
        </div>
    );
}
