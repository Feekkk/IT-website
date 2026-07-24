import { createFileRoute } from "@tanstack/react-router";
import ManageFeedback from "@/admin/manageFeedback";
import { listFeedbackQuestions } from "@/lib/feedback-api";

export const Route = createFileRoute("/admin/manage-feedback")({
  loader: async () => {
    const questions = await listFeedbackQuestions();
    return { questions };
  },
  component: ManageFeedback,
});
