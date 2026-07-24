import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { FeedbackStats } from "@/lib/feedback.server";

export type { FeedbackStats };
export type { FeedbackEntry, FeedbackQuestion } from "@/lib/feedback.server";

const statsFilterSchema = z.object({
  year: z.number().int().min(2000).max(2100),
  month: z.number().int().min(1).max(12),
});

export const getFeedbackStats = createServerFn({ method: "GET" })
  .inputValidator(statsFilterSchema)
  .handler(async ({ data }) => {
    const { getFeedbackStats: loadStats } = await import("@/lib/feedback.server");
    return loadStats(data);
  });

export const listFeedbackEntries = createServerFn({ method: "GET" }).handler(async () => {
  const { listFeedbackEntries: loadEntries } = await import("@/lib/feedback.server");
  return loadEntries();
});

export const listFeedbackQuestions = createServerFn({ method: "GET" }).handler(async () => {
  const { listFeedbackQuestions: loadQuestions } = await import("@/lib/feedback.server");
  return loadQuestions();
});

export const createFeedbackQuestion = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      question: z.string().min(1),
      sortOrder: z.number().int().min(1).max(255).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const { createFeedbackQuestion: createQuestion } = await import("@/lib/feedback.server");
    return createQuestion(data);
  });

export const updateFeedbackQuestion = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      id: z.number().int().positive(),
      question: z.string().min(1),
      sortOrder: z.number().int().min(1).max(255),
    }),
  )
  .handler(async ({ data }) => {
    const { updateFeedbackQuestion: saveQuestion } = await import("@/lib/feedback.server");
    return saveQuestion(data);
  });

export const deleteFeedbackQuestion = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.number().int().positive() }))
  .handler(async ({ data }) => {
    const { deleteFeedbackQuestion: removeQuestion } = await import("@/lib/feedback.server");
    return removeQuestion(data.id);
  });

export const submitFeedback = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      category: z.enum(["Academic Staff", "Non-Academic Staff", "Student"]),
      suggestion: z.string().min(1),
      ratings: z.array(z.number().int().min(1).max(5)).min(1),
    }),
  )
  .handler(async ({ data }) => {
    const { submitFeedback: saveFeedback } = await import("@/lib/feedback.server");
    return saveFeedback(data);
  });
