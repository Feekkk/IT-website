import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { Link } from "@tanstack/react-router";
import { Wifi, Monitor, GraduationCap, LayoutDashboard, Projector, Cloud, Headphones } from "lucide-react";
const MAXHUB_SHARE_URL = "https://www.maxhub.com/en/screen_share";
const MAXHUB_CONNECT_URL = "https://connect.maxhub.com/downloads";
function MaxhubSection({ onClose }) {
  return /* @__PURE__ */ jsx("section", { id: "maxhub", className: "scroll-mt-24 px-6 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 md:flex-row md:items-start md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-neutral-900", children: "MaxHub" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-sm text-neutral-600", children: "Download the apps for wireless screen sharing and meeting collaboration." })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "inline-flex w-fit items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50",
          children: "Back"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: MAXHUB_SHARE_URL,
          target: "_blank",
          rel: "noreferrer",
          className: "group rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-neutral-900", children: "MAXHUB Screen Share" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-neutral-600", children: "Cast your screen to MAXHUB displays." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-neutral-900 group-hover:translate-x-0.5 transition", children: "Download →" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: MAXHUB_CONNECT_URL,
          target: "_blank",
          rel: "noreferrer",
          className: "group rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-neutral-900", children: "MAXHUB Connect" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-neutral-600", children: "Share, control, and collaborate in meetings." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-neutral-900 group-hover:translate-x-0.5 transition", children: "Download →" })
          ] })
        }
      )
    ] })
  ] }) });
}
const VENUQUIP_URL = "https://vequip.rcmp.edu.my";
const NEXCHECK_URL = "https://nims.rcmp.edu.my";
const HELPDESK_URL = "http://helpdesk.rcmp.unikl.edu.my";
function SystemSection({ onClose }) {
  return /* @__PURE__ */ jsx("section", { id: "systems", className: "scroll-mt-24 px-6 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 md:flex-row md:items-start md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-neutral-900", children: "Internal Systems" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-sm text-neutral-600", children: "Quick links to the department’s internal platforms." })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "inline-flex w-fit items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50",
          children: "Back to top"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: VENUQUIP_URL,
          target: "_blank",
          rel: "noreferrer",
          className: "group rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-neutral-900", children: "VenuQuip" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-neutral-600", children: "Venue booking system." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-neutral-900 group-hover:translate-x-0.5 transition", children: "Open →" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: NEXCHECK_URL,
          target: "_blank",
          rel: "noreferrer",
          className: "group rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-neutral-900", children: "Nexcheck" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-neutral-600", children: "Request for equipment." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-neutral-900 group-hover:translate-x-0.5 transition", children: "Open →" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: HELPDESK_URL,
          target: "_blank",
          rel: "noreferrer",
          className: "group rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-neutral-900", children: "Helpdesk (Coming Soon)" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-neutral-600", children: "Submit and track complaints." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-neutral-900 group-hover:translate-x-0.5 transition", children: "Open →" })
          ] })
        }
      )
    ] })
  ] }) });
}
const ICONS = [{
  Icon: Wifi,
  label: "Wi-Fi",
  href: "#",
  bg: "bg-[#0A84FF]",
  fg: "text-white",
  top: "10%",
  left: "8%",
  delay: "0s",
  duration: "7s"
}, {
  Icon: Monitor,
  label: "Systems",
  href: "#",
  bg: "bg-neutral-900",
  fg: "text-white",
  top: "6%",
  left: "28%",
  delay: "1.2s",
  duration: "8s"
}, {
  Icon: GraduationCap,
  label: "UniKL VLE",
  href: "https://vle.unikl.edu.my/",
  bg: "bg-[#FFCC00]",
  fg: "text-neutral-900",
  top: "14%",
  left: "70%",
  delay: "0.6s",
  duration: "9s"
}, {
  Icon: LayoutDashboard,
  label: "Portal",
  href: "https://cas.unikl.edu.my/",
  bg: "bg-[#FF3B30]",
  fg: "text-white",
  top: "8%",
  left: "88%",
  delay: "2s",
  duration: "7.5s"
}, {
  imgSrc: "/maxhub.png",
  imgAlt: "MaxHub",
  iconClassName: "invert",
  label: "MaxHub Connect",
  href: "#",
  bg: "bg-neutral-950",
  fg: "text-white",
  top: "78%",
  left: "10%",
  delay: "0.9s",
  duration: "8s"
}, {
  Icon: Projector,
  label: "Epson iProjection",
  href: "https://epson.com/support/wireless-projector-support",
  bg: "bg-white border border-neutral-200",
  fg: "text-neutral-900",
  top: "82%",
  left: "30%",
  delay: "1.5s",
  duration: "7s"
}, {
  Icon: Cloud,
  label: "Cloud Drive",
  href: "https://www.office.com/",
  bg: "bg-[#0061FE]",
  fg: "text-white",
  top: "76%",
  left: "84%",
  delay: "2.2s",
  duration: "8.2s"
}, {
  Icon: Headphones,
  label: "Helpdesk",
  href: "http://helpdesk.rcmp.unikl.edu.my",
  bg: "bg-[#FF9500]",
  fg: "text-white",
  top: "70%",
  left: "70%",
  delay: "1.7s",
  duration: "8.7s"
}];
function FloatingIcon({
  item,
  index,
  onClick
}) {
  const {
    Icon,
    imgSrc,
    imgAlt,
    iconClassName,
    label,
    href,
    bg,
    fg,
    top,
    left,
    delay,
    duration
  } = item;
  return /* @__PURE__ */ jsxs("a", { href, title: label, "aria-label": label, onClick: onClick ? (e) => {
    e.preventDefault();
    onClick();
  } : void 0, className: "hidden md:flex absolute h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] animate-[float_var(--d)_ease-in-out_infinite]", style: {
    top,
    left,
    animationDelay: delay,
    ["--d"]: duration
  }, children: [
    /* @__PURE__ */ jsx("span", { className: `flex h-full w-full items-center justify-center rounded-[22px] ${bg}`, children: imgSrc ? /* @__PURE__ */ jsx("img", { src: imgSrc, alt: imgAlt ?? label, className: `h-7 w-7 lg:h-9 lg:w-9 object-contain ${iconClassName ?? ""}` }) : Icon ? /* @__PURE__ */ jsx(Icon, { className: `h-7 w-7 lg:h-9 lg:w-9 ${fg}`, strokeWidth: 2.2 }) : null }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: label }),
    /* @__PURE__ */ jsx("span", { className: "hidden", children: index })
  ] });
}
function Index() {
  const [showMaxhub, setShowMaxhub] = React.useState(false);
  const [showSystems, setShowSystems] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileSystemsOpen, setMobileSystemsOpen] = React.useState(false);
  const openMaxhub = () => {
    setShowMaxhub(true);
    queueMicrotask(() => {
      document.getElementById("maxhub")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };
  const closeMaxhub = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => setShowMaxhub(false), 250);
  };
  const openSystems = () => {
    setShowSystems(true);
    queueMicrotask(() => {
      document.getElementById("systems")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };
  const closeSystems = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => setShowSystems(false), 250);
  };
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen overflow-hidden bg-white", children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-14px) translateX(6px); }
        }
      ` }),
    /* @__PURE__ */ jsxs("header", { className: "relative z-20 mx-auto flex max-w-5xl items-center justify-between px-6 pt-6", children: [
      /* @__PURE__ */ jsx("img", { src: "https://nexcheck.rcmp.edu.my/img/Logo-UniKL-PCM.jpg", alt: "UniKL Logo", className: "h-8 w-auto object-contain md:h-10" }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-7 text-sm font-medium text-neutral-700 md:flex", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-neutral-900", children: "Services" }),
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxs("button", { type: "button", className: "hover:text-neutral-900 focus:outline-none flex items-center gap-1", "aria-haspopup": "true", "aria-expanded": "false", children: [
            "Systems",
            /* @__PURE__ */ jsx("svg", { className: "ml-1 h-4 w-4", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M6 8l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute left-0 mt-2 min-w-[160px] rounded-md bg-white py-2 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity text-neutral-700 z-20 ring-1 ring-black/5", children: [
            /* @__PURE__ */ jsx("a", { href: "https://vequip.rcmp.edu.my", className: "block px-4 py-2 hover:bg-neutral-100", children: "VenuQuip" }),
            /* @__PURE__ */ jsx("a", { href: "https://nims.rcmp.edu.my", className: "block px-4 py-2 hover:bg-neutral-100", children: "Nexcheck" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-neutral-900", children: "About us" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setMobileMenuOpen((v) => !v), className: "inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 md:hidden", "aria-label": "Open menu", "aria-expanded": mobileMenuOpen, children: "Menu" }),
        /* @__PURE__ */ jsx("a", { href: "http://helpdesk.rcmp.unikl.edu.my", className: "rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800", children: "Get help" })
      ] })
    ] }),
    mobileMenuOpen ? /* @__PURE__ */ jsx("div", { className: "relative z-20 mx-auto max-w-5xl px-6 pt-3 md:hidden", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50", onClick: () => setMobileMenuOpen(false), children: "Services" }),
      /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setMobileSystemsOpen((v) => !v), className: "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50", "aria-expanded": mobileSystemsOpen, children: [
        "Systems",
        /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M6 8l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ] }),
      mobileSystemsOpen ? /* @__PURE__ */ jsxs("div", { className: "mt-1 space-y-1 pl-2", children: [
        /* @__PURE__ */ jsx("a", { href: "https://vequip.rcmp.edu.my", className: "block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50", onClick: () => setMobileMenuOpen(false), children: "VenuQuip" }),
        /* @__PURE__ */ jsx("a", { href: "https://nims.rcmp.edu.my", className: "block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50", onClick: () => setMobileMenuOpen(false), children: "Nexcheck" })
      ] }) : null,
      /* @__PURE__ */ jsx(Link, { to: "/about", className: "block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50", onClick: () => setMobileMenuOpen(false), children: "About us" })
    ] }) }) : null,
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto flex min-h-[88vh] max-w-7xl items-center justify-center px-6", children: [
      ICONS.map((it, i) => /* @__PURE__ */ jsx(FloatingIcon, { item: it, index: i, onClick: it.label === "MaxHub Connect" ? openMaxhub : it.label === "Systems" ? openSystems : void 0 }, it.label)),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-base text-neutral-500 font-bold", children: "ONE STOP CENTER" }),
        /* @__PURE__ */ jsx("h1", { className: "font-sans text-4xl font-bold leading-[0.95] tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl", children: "INFORMATION TECHNOLOGY DEPARTMENT" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-lg font-medium text-neutral-600 md:text-xl", children: [
          "10+ Services ",
          /* @__PURE__ */ jsx("span", { className: "mx-2 text-neutral-300", children: "|" }),
          " 3 Internal Systems"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "md:hidden px-6 pb-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-4", children: ICONS.map(({
      Icon,
      imgSrc,
      imgAlt,
      iconClassName,
      label,
      href,
      bg,
      fg
    }) => /* @__PURE__ */ jsxs("a", { href, "aria-label": label, onClick: label === "MaxHub Connect" ? (e) => {
      e.preventDefault();
      openMaxhub();
    } : label === "Systems" ? (e) => {
      e.preventDefault();
      openSystems();
    } : void 0, className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: `flex h-14 w-14 items-center justify-center rounded-[18px] ring-1 ring-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-110 hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] ${bg}`, children: imgSrc ? /* @__PURE__ */ jsx("img", { src: imgSrc, alt: imgAlt ?? label, className: `h-6 w-6 object-contain ${iconClassName ?? ""}` }) : Icon ? /* @__PURE__ */ jsx(Icon, { className: `h-6 w-6 ${fg}`, strokeWidth: 2.2 }) : null }),
      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium text-neutral-600 text-center leading-tight", children: label })
    ] }, label)) }) }),
    showSystems ? /* @__PURE__ */ jsx(SystemSection, { onClose: closeSystems }) : null,
    showMaxhub ? /* @__PURE__ */ jsx(MaxhubSection, { onClose: closeMaxhub }) : null,
    /* @__PURE__ */ jsx("footer", { className: "mx-auto max-w-7xl px-6 pb-8", children: /* @__PURE__ */ jsx("div", { className: "text-right text-xs font-medium text-neutral-400", children: "© 2026 Information Technology Department RCMP" }) })
  ] });
}
export {
  Index as component
};
