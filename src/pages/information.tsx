import React, { useState } from "react";
import { Mic, Projector, Wifi } from "lucide-react";

type Section = {
  id: string;
  title: string;
  meta: string;
  icon: "mic" | "projector" | "wifi";
  iconBg: string;
  iconColor: string;
  tagBg: string;
  tagColor: string;
  tagIcon: string;
  tagLabel: string;
  description: string;
  content: React.ReactNode;
  image?: string;
};

const iconMap = {
  mic: Mic,
  projector: Projector,
  wifi: Wifi,
};

const sections: Section[] = [
  {
    id: "mic-guidelines",
    title: "Wireless Microphone",
    meta: "Usage & care guideline",
    icon: "mic",
    iconBg: "#faeeda",
    iconColor: "#854f0b",
    tagBg: "#faeeda",
    tagColor: "#854f0b",
    tagIcon: "ⓘ",
    tagLabel: "Required before use",
    description: "Guidance and usage details for the IT department wireless microphones.",
    content: (
      <p>
        Please follow the guideline before using the IT department microphone for any
        lecture or event. Improper handling may result in audio issues or equipment damage.
      </p>
    ),
    image: "/mic-guide.jpeg",
  },
];

function InfoCard({ section }: { section: Section }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-[1.125rem] border border-border bg-card text-card-foreground"
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`body-${section.id}`}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition hover:bg-muted/40 sm:px-5 sm:py-[18px]"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: 1, minWidth: 0 }}>
          {/* Icon pill */}
          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-base text-foreground"
          >
            {React.createElement(iconMap[section.icon], { size: 20 })}
          </div>

          <div>
            <div className="text-sm font-medium leading-5 text-foreground sm:text-[15px]">
              {section.title}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {section.meta}
            </div>
          </div>
        </div>

        {/* Chevron */}
        <span
          aria-hidden="true"
          className="inline-block shrink-0 text-lg text-muted-foreground transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ›
        </span>
      </button>

      {/* Body */}
      {open && (
        <div id={`body-${section.id}`} role="region" className="border-t border-border">
          <div className="space-y-4 px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
            {/* Description */}
            <p className="text-sm leading-6 text-muted-foreground">
              {section.description}
            </p>

            {/* Main content */}
            <div className="text-sm leading-7 text-foreground sm:text-[15px]">
              {section.content}
            </div>

            {/* Tag */}
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-primary">
              <span aria-hidden="true">{section.tagIcon}</span>
              {section.tagLabel}
            </span>

            {/* Image */}
            {section.image && (
              <div className="mt-4 flex justify-center">
                <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-muted/30 md:max-w-sm">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="block w-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Information() {
  return (
    <main className="min-h-screen bg-background px-4 py-4 text-foreground sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        {/* Top bar */}
        <div className="pt-1">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1 rounded-full px-0 py-1 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            ‹ Back
          </button>
        </div>

        {/* Hero */}
        <div className="space-y-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            IT Department
          </p>
          <h1 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Guides &amp; <span className="font-medium">Information</span>
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Tap a card to read usage details and equipment guidelines.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Section label */}
        <p className="text-[11px] font-medium uppercase tracking-[0.09em] text-muted-foreground">
          Resources
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {sections.map((s) => (
            <InfoCard key={s.id} section={s} />
          ))}
        </div>
      </div>
    </main>
  );
}
