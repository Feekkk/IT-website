import { createFileRoute } from "@tanstack/react-router";
import FeedbackForm from "../pages/FeedbackForm";

export const Route = createFileRoute("/feedback")({
  component: FeedbackForm,
});
