const questions = [
    "When does the academic calendar start?",
    "What is the current budget status?",
    "Show me the latest lab report findings.",
    "What are the security protocols for campus?",
];

export default function SuggestedQuestions() {
    return (
        <div className="space-y-6">
            <div className="rounded-[28px] bg-white border border-black/5 shadow-sm p-6">
                <h3 className="text-lg font-extrabold text-gray-900">✨ Suggested Questions</h3>

                <div className="mt-4 space-y-3">
                    {questions.map((q) => (
                        <button
                            key={q}
                            className="w-full text-left rounded-2xl border border-black/5 bg-[#F6F7FB] px-4 py-4 text-sm font-semibold text-gray-700 hover:bg-[#EEF0FF] hover:text-[#4C3BFF] transition"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            </div>

            <div className="rounded-[28px] bg-[#4C3BFF] text-white shadow-sm p-6 overflow-hidden relative">
                <div className="text-lg font-extrabold">Context Awareness</div>
                <p className="mt-2 text-white/85 text-sm">
                    You are currently logged in as a <b>student</b>. The AI automatically filters its knowledge base to only include documents your role is authorized to view.
                </p>

                <div className="mt-6 space-y-2 text-sm text-white/90">
                    <div>🛡 ACCESS TIER: LAYERED</div>
                    <div>🔐 ENCRYPTION: AES-256</div>
                </div>

                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/10" />
            </div>
        </div>
    );
}
