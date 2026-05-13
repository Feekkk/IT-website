import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { Link } from "@tanstack/react-router";
const TOPICS = [
  {
    key: "av",
    label: "AUDIO & VISUAL",
    title: "Audio & Visual",
    description: "Support for meeting room setups, displays, projectors, microphones, and presentation equipment."
  },
  {
    key: "network",
    label: "NETWORK",
    title: "Network",
    description: "Connectivity support for Wi‑Fi, LAN, and basic troubleshooting to keep users online and productive."
  },
  {
    key: "operation",
    label: "OPERATION",
    title: "IT Operations",
    description: "Day‑to‑day IT support including accounts, endpoints, software requests, and service coordination."
  },
  {
    key: "system-dev",
    label: "SYSTEM DEVELOPMENT",
    title: "System Development",
    description: "Internal tools and systems improvements to streamline workflows and enhance service delivery."
  }
];
function AboutUs() {
  const [active, setActive] = React.useState("av");
  const topic = TOPICS.find((t) => t.key === active) ?? TOPICS[0];
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex min-h-screen w-full max-w-6xl flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col px-6 py-10 md:px-10", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "inline-flex w-fit items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-bold text-neutral-900 hover:bg-neutral-50",
          children: "Back"
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-5xl font-extrabold tracking-tight text-neutral-900 md:text-6xl", children: "ABOUT" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 max-w-2xl rounded-2xl border border-neutral-200 bg-white p-7", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-neutral-900", children: topic.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-bold leading-relaxed text-neutral-600", children: topic.description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("aside", { className: "border-t border-neutral-200 md:w-[300px] md:border-l md:border-t-0", children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-col px-6 py-10 md:px-8", children: /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-2", children: TOPICS.map((t) => {
      const isActive = t.key === active;
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setActive(t.key),
          className: [
            "flex-1 w-full rounded-xl px-4 py-4 text-left text-base font-bold transition md:text-lg",
            isActive ? "bg-neutral-900 text-white" : "text-neutral-900 hover:bg-neutral-50"
          ].join(" "),
          children: t.label
        },
        t.key
      );
    }) }) }) })
  ] }) });
}
const SplitComponent = AboutUs;
export {
  SplitComponent as component
};
