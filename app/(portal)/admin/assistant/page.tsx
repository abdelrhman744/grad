import AssistantPanel from "@/components/AssistantPanel";
import SuggestedQuestions from "@/components/SuggestedQuestions";

export default function AssistantPage() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
            <AssistantPanel role="admin"/>
            <SuggestedQuestions />
        </div>
    );
}
