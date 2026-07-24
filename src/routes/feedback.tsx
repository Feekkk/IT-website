import { createFileRoute } from "@tanstack/react-router";
import FeedbackForm from "../pages/FeedbackForm";
import { listFeedbackQuestions } from "@/lib/feedback-api";

export const Route = createFileRoute("/feedback")({
  loader: async () => {
    try {
      const questions = await listFeedbackQuestions();
      return { questions };
    } catch (error) {
      console.error("Failed to load feedback questions:", error);
      return { questions: [] };
    }
  },
  component: FeedbackForm,
});
