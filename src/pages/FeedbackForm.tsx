import React from "react";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import Lottie from "lottie-react";
import { Progress } from "@/components/ui/progress";
import {
  CATEGORIES,
  QUESTIONS,
  RATING_LABELS,
  SUGGESTION_QUESTION,
  TOTAL_STEPS,
  type Category,
  type Ratings,
} from "@/lib/feedback";

const LOADING_MS = 3000;
const LOTTIE_SRC = "/Wow%20rate.json";

function StarRating({
  value,
  onChange,
  name,
}: {
  value: number;
  onChange: (rating: number) => void;
  name: string;
}) {
  const [hovered, setHovered] = React.useState(0);
  const active = hovered || value;

  return (
    <div className="space-y-3">
      <div
        className="flex items-center justify-center gap-2 sm:gap-3"
        role="radiogroup"
        aria-label={name}
        onMouseLeave={() => setHovered(0)}
      >
        {RATING_LABELS.map((label, i) => {
          const rating = i + 1;
          const filled = rating <= active;
          return (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={value === rating}
              aria-label={`${rating} — ${label}`}
              onMouseEnter={() => setHovered(rating)}
              onFocus={() => setHovered(rating)}
              onBlur={() => setHovered(0)}
              onClick={() => onChange(rating)}
              className="rounded-md p-1 transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC00]/40"
            >
              <Star
                className={`h-9 w-9 sm:h-10 sm:w-10 ${
                  filled ? "fill-[#FFCC00] text-[#FFCC00]" : "fill-transparent text-neutral-300"
                }`}
                strokeWidth={1.6}
              />
            </button>
          );
        })}
      </div>
      <p className="min-h-[1.25rem] text-center text-sm text-neutral-500">
        {active ? RATING_LABELS[active - 1] : "Select a rating"}
      </p>
    </div>
  );
}

export default function FeedbackForm() {
  const [step, setStep] = React.useState(0);
  const [category, setCategory] = React.useState<Category | "">("");
  const [ratings, setRatings] = React.useState<Ratings>({});
  const [suggestions, setSuggestions] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");
  const [animKey, setAnimKey] = React.useState(0);
  const [lottieData, setLottieData] = React.useState<object | null>(null);
  const loadingTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    let active = true;
    fetch(LOTTIE_SRC)
      .then((res) => res.json())
      .then((data) => {
        if (active) setLottieData(data);
      })
      .catch(() => {
        if (active) setLottieData(null);
      });
    return () => {
      active = false;
      if (loadingTimer.current) window.clearTimeout(loadingTimer.current);
    };
  }, []);

  const progress = ((step + 1) / TOTAL_STEPS) * 100;
  const isCategoryStep = step === 0;
  const isSuggestionsStep = step === TOTAL_STEPS - 1;
  const questionIndex = step - 1;

  const goTo = (next: number) => {
    setError("");
    setStep(next);
    setAnimKey((k) => k + 1);
  };

  const handleNext = () => {
    if (isCategoryStep) {
      if (!category) {
        setError("Please select a category.");
        return;
      }
      goTo(1);
      return;
    }

    if (!isSuggestionsStep) {
      if (!ratings[questionIndex]) {
        setError("Please select a rating to continue.");
        return;
      }
      goTo(step + 1);
      return;
    }

    if (!suggestions.trim()) {
      setError("Please share a suggestion before submitting.");
      return;
    }
    setError("");
    setLoading(true);
    loadingTimer.current = window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, LOADING_MS);
  };

  const handleBack = () => {
    if (step === 0) return;
    goTo(step - 1);
  };

  const handleRating = (rating: number) => {
    setError("");
    setRatings((prev) => ({ ...prev, [questionIndex]: rating }));
    window.setTimeout(() => goTo(step + 1), 280);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-neutral-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 10% -10%, rgba(0,119,200,0.10), transparent 55%), radial-gradient(ellipse 60% 40% at 95% 5%, rgba(10,132,255,0.08), transparent 50%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="pt-1">
          <Link
            to="/"
            className="inline-flex items-center gap-1 rounded-full px-0 py-1 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
          >
            ‹ Back
          </Link>
        </div>

        <section className="flex flex-1 flex-col justify-center py-10 sm:py-14">
          {!submitted && !loading ? (
            <div className="mb-8 space-y-3">
              <div className="flex items-end justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                    Feedback
                  </p>
                  <p className="text-sm font-medium text-neutral-700">
                    Step {step + 1} of {TOTAL_STEPS}
                  </p>
                </div>
                <p className="text-sm tabular-nums text-neutral-500">{Math.round(progress)}%</p>
              </div>
              <Progress
                value={progress}
                className="h-2 bg-neutral-200 [&>div]:bg-[#0077C8]"
              />
            </div>
          ) : null}

          {loading ? (
            <div className="flex flex-col items-center justify-center gap-4 animate-[feedbackIn_0.4s_ease-out_both]">
              <div className="mx-auto w-full max-w-xs">
                {lottieData ? (
                  <Lottie animationData={lottieData} loop autoplay />
                ) : (
                  <div className="mx-auto h-40 w-40 animate-pulse rounded-full bg-neutral-100" />
                )}
              </div>
              <p className="text-sm font-medium text-neutral-500">Submitting your feedback…</p>
            </div>
          ) : submitted ? (
            <div className="animate-[feedbackIn_0.5s_ease-out_both] space-y-5 text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                Complete
              </p>
              <h1 className="text-4xl font-light tracking-tight text-neutral-900 sm:text-5xl">
                Thank <span className="font-medium">you</span>
              </h1>
              <p className="mx-auto max-w-md text-base leading-7 text-neutral-600">
                Your feedback has been received. We appreciate your feedback and will use it to improve our services.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Home
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              <div key={animKey} className="min-h-[220px] animate-[feedbackIn_0.4s_ease-out_both]">
                {isCategoryStep ? (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h1 className="text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
                        Who are <span className="font-medium">you?</span>
                      </h1>
                      <p className="text-base leading-7 text-neutral-600">
                        Select the category that best describes you.
                      </p>
                    </div>
                    <div className="grid gap-3">
                      {CATEGORIES.map((c) => {
                        const selected = category === c;
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() => {
                              setError("");
                              setCategory(c);
                            }}
                            className={`rounded-xl border px-4 py-4 text-left text-sm font-medium transition ${
                              selected
                                ? "border-[#0077C8] bg-[#0077C8]/5 text-neutral-900 ring-2 ring-[#0077C8]/20"
                                : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
                            }`}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {!isCategoryStep && !isSuggestionsStep ? (
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <p className="font-mono text-xs font-medium text-[#0077C8] tabular-nums">
                        Question {String(questionIndex + 1).padStart(2, "0")}
                      </p>
                      <h1 className="text-2xl font-light leading-snug tracking-tight text-neutral-900 sm:text-3xl">
                        {QUESTIONS[questionIndex]}
                      </h1>
                    </div>
                    <StarRating
                      name={`question-${questionIndex + 1}`}
                      value={ratings[questionIndex] ?? 0}
                      onChange={handleRating}
                    />
                    <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] text-neutral-400">
                      {RATING_LABELS.map((label, i) => (
                        <li key={label}>
                          {i + 1} {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {isSuggestionsStep ? (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p className="font-mono text-xs font-medium text-[#0077C8] tabular-nums">
                        Question 13
                      </p>
                      <h1 className="text-2xl font-light leading-snug tracking-tight text-neutral-900 sm:text-3xl">
                        {SUGGESTION_QUESTION}
                      </h1>
                    </div>
                    <textarea
                      id="suggestions"
                      rows={6}
                      value={suggestions}
                      onChange={(e) => {
                        setError("");
                        setSuggestions(e.target.value);
                      }}
                      className="w-full resize-y rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#0077C8] focus:ring-2 focus:ring-[#0077C8]/20"
                      placeholder="Your suggestions…"
                    />
                  </div>
                ) : null}
              </div>

              {error ? (
                <p className="text-sm font-medium text-red-600" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0}
                  className="rounded-full px-4 py-2.5 text-sm font-semibold text-neutral-600 transition hover:text-neutral-900 disabled:pointer-events-none disabled:opacity-30"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full bg-[#0077C8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0066AD]"
                >
                  {isSuggestionsStep ? "Submit feedback" : "Continue"}
                </button>
              </div>
            </div>
          )}
        </section>

        <footer className="border-t border-neutral-200/80 pb-6 pt-8">
          <p className="text-right text-xs font-medium text-neutral-400">
            © 2026 Information Technology Department RCMP
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes feedbackIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
