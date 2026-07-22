import React from "react";
import { Link } from "@tanstack/react-router";
import { Headphones, Monitor, Network, Projector } from "lucide-react";

const FOCUS = [
  {
    key: "av",
    index: "01",
    title: "Audio & Visual",
    description:
      "Meeting rooms, displays, projectors, microphones, and presentation setups kept ready for teaching and events.",
    accent: "#0A84FF",
    Icon: Projector,
  },
  {
    key: "network",
    index: "02",
    title: "Network",
    description:
      "Wi‑Fi and LAN support with practical troubleshooting so students and staff stay connected on campus.",
    accent: "#FF9500",
    Icon: Network,
  },
  {
    key: "system-dev",
    index: "03",
    title: "System Development",
    description:
      "Internal tools and workflow improvements that make campus IT services faster and clearer to use.",
    accent: "#FFCC00",
    Icon: Monitor,
  },
] as const;

export default function AboutUs() {
  const [active, setActive] = React.useState<string | null>(FOCUS[0].key);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-neutral-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 10% -10%, rgba(10,132,255,0.10), transparent 55%), radial-gradient(ellipse 60% 40% at 95% 5%, rgba(255,149,0,0.08), transparent 50%), radial-gradient(ellipse 50% 35% at 70% 100%, rgba(255,59,48,0.06), transparent 55%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="pt-1">
          <Link
            to="/"
            className="inline-flex items-center gap-1 rounded-full px-0 py-1 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
          >
            ‹ Back
          </Link>
        </div>

        <section className="flex min-h-[70vh] flex-col justify-center gap-8 py-12 sm:py-16">
          <div className="space-y-5 animate-[aboutIn_0.7s_ease-out_both]">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              Universiti Kuala Lumpur Royal College Of Medicine Perak
            </p>
            <h1 className="max-w-3xl text-4xl font-light tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Information Technology{" "}
              <span className="font-medium">Department</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              Campus technology support for teaching and learning, events, and daily operations — from AV and
              network to development of internal systems.
            </p>
          </div>
        </section>

        <div className="h-px bg-neutral-200/80" />

        <section className="py-14 sm:py-16">
          <div className="mb-10 max-w-2xl space-y-3 animate-[aboutIn_0.7s_ease-out_0.2s_both]">
            <p className="text-[11px] font-medium uppercase tracking-[0.09em] text-neutral-500">
              What we cover
            </p>
            <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
              Four focus areas.{" "}
              <span className="font-medium">One campus team.</span>
            </h2>
          </div>

          <ul className="flex flex-col">
            {FOCUS.map((item, i) => {
              const open = active === item.key;
              return (
                <li
                  key={item.key}
                  className="border-t border-neutral-200/80 last:border-b animate-[aboutIn_0.65s_ease-out_both]"
                  style={{ animationDelay: `${0.28 + i * 0.07}s` }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(open ? null : item.key)}
                    aria-expanded={open}
                    className="group flex w-full items-start gap-4 py-5 text-left transition sm:gap-6 sm:py-6"
                  >
                    <span
                      className="mt-1 font-mono text-xs font-medium tracking-wider tabular-nums"
                      style={{ color: item.accent }}
                    >
                      {item.index}
                    </span>

                    <span
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${item.accent}18`, color: item.accent === "#FFCC00" ? "#1a1a1a" : item.accent }}
                    >
                      <item.Icon className="h-4 w-4" strokeWidth={2.2} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-3">
                        <span className="text-base font-medium text-neutral-900 sm:text-lg">
                          {item.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="inline-block shrink-0 text-lg text-neutral-400 transition-transform duration-200"
                          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
                        >
                          ›
                        </span>
                      </span>
                      <span
                        className={[
                          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        ].join(" ")}
                      >
                        <span className="overflow-hidden">
                          <span className="mt-2 block max-w-2xl text-sm leading-6 text-neutral-600 sm:text-[15px] sm:leading-7">
                            {item.description}
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <footer className="border-t border-neutral-200/80 pb-6 pt-8">
          <div className="flex flex-col items-end gap-2">
            <p className="text-right text-xs font-medium text-neutral-400">
              © 2026 Information Technology Department RCMP
            </p>
            <Link
              to="/login"
              className="text-right text-xs font-medium text-neutral-400 transition hover:text-neutral-700"
            >
              Are you ITD staff?
            </Link>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes aboutIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
