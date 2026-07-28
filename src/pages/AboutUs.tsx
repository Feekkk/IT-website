import React from "react";
import { Link } from "@tanstack/react-router";

const ACCENT = "#171717";

const FOCUS = [
  {
    key: "av",
    index: "01",
    title: "Audio & Visual",
    description:
      "Meeting rooms, displays, projectors and presentation setups kept ready for teaching and events.",
  },
  {
    key: "network",
    index: "02",
    title: "Network",
    description:
      "Wi‑Fi and LAN support with practical troubleshooting so campus stays connected.",
  },
  {
    key: "system-dev",
    index: "03",
    title: "System Development",
    description:
      "Internal systems and tools built to improve the efficiency of university services.",
  },
  {
    key: "helpdesk",
    index: "04",
    title: "Helpdesk",
    description:
      "Day-to-day support for staff and students when technology gets in the way.",
  },
] as const;

export default function AboutUs() {
  const [active, setActive] = React.useState<(typeof FOCUS)[number]["key"]>(FOCUS[0].key);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F2F2F2] text-neutral-900">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-8">
        <div className="pt-1">
          <Link
            to="/"
            className="inline-flex items-center gap-1 py-1 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
          >
            ‹ Back
          </Link>
        </div>

        <section className="border-b border-neutral-300/70 pb-10 pt-10 sm:pb-14 sm:pt-14 animate-[aboutIn_0.7s_ease-out_both]">
          <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-start sm:gap-10">
            <h1 className="text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-neutral-950 sm:text-4xl lg:text-[2.75rem]">
              Support is what people feel.
              <br />
              Systems are what keep campus running.
            </h1>
            <p className="max-w-xs text-sm leading-6 text-neutral-500 sm:ml-auto sm:text-right sm:text-[15px] sm:leading-7">
              Information Technology Department — UniKL Royal College of Medicine Perak. We shape both: day-to-day help and the infrastructure behind it.
            </p>
          </div>
        </section>

        <section className="relative py-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 sm:block"
            style={{ backgroundColor: ACCENT }}
          />

          <ul className="flex flex-col">
            {FOCUS.map((item, i) => {
              const open = active === item.key;
              return (
                <li
                  key={item.key}
                  className="border-b border-neutral-300/70 animate-[aboutIn_0.65s_ease-out_both]"
                  style={{ animationDelay: `${0.15 + i * 0.07}s` }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(item.key)}
                    onMouseEnter={() => setActive(item.key)}
                    aria-pressed={open}
                    className="group grid w-full grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 py-6 text-left sm:grid-cols-[1fr_auto_1fr] sm:gap-x-0 sm:py-7"
                  >
                    <span
                      className={[
                        "order-2 text-lg font-semibold tracking-tight transition-colors duration-200 sm:order-1 sm:pr-8 sm:text-right sm:text-xl",
                        open ? "text-neutral-950" : "text-neutral-400",
                      ].join(" ")}
                    >
                      {item.title}
                    </span>

                    <span
                      className="order-1 flex h-8 w-8 shrink-0 items-center justify-center font-mono text-[11px] font-semibold tabular-nums transition-colors duration-200 sm:order-2 sm:relative sm:z-10"
                      style={
                        open
                          ? { backgroundColor: ACCENT, color: "#fff" }
                          : { backgroundColor: "#F2F2F2", color: ACCENT, border: `1px solid ${ACCENT}` }
                      }
                    >
                      {item.index}
                    </span>

                    <span
                      className={[
                        "order-3 col-span-2 max-w-md text-sm leading-6 transition-colors duration-200 sm:col-span-1 sm:pl-8 sm:text-[15px] sm:leading-7",
                        open ? "text-neutral-600" : "text-neutral-400",
                      ].join(" ")}
                    >
                      {item.description}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="relative py-12 sm:py-16 animate-[aboutIn_0.7s_ease-out_0.45s_both]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 sm:block"
            style={{ backgroundColor: ACCENT }}
          />

          <div className="grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-0">
            <div className="sm:pr-10 sm:text-right">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                Support
              </p>
              <p className="text-sm leading-6 text-neutral-600 sm:text-[15px] sm:leading-7">
                AV, network and helpdesk that keep teaching, events and daily campus work clear and usable.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="relative z-10 mx-auto hidden h-7 w-7 items-center justify-center bg-[#F2F2F2] font-mono text-[10px] text-neutral-500 sm:flex"
              style={{ color: ACCENT }}
            >
              [■]
            </div>

            <div className="sm:pl-10">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                Systems
              </p>
              <p className="text-sm leading-6 text-neutral-600 sm:text-[15px] sm:leading-7">
                Architecture, tools and internal development that keep services stable, efficient and ready to grow.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-neutral-300/70 pb-6 pt-8">
          <p className="text-right text-xs font-medium text-neutral-400">
            © 2026 Information Technology Department RCMP
            <span className="mx-2 text-neutral-300" aria-hidden="true">
              ·
            </span>
            <Link
              to="/login"
              className="text-neutral-300 transition hover:text-neutral-500"
            >
              Staff
            </Link>
          </p>
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
