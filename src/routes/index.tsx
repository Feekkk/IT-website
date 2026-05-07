import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Monitor, GraduationCap, LayoutDashboard, FileText, ScreenShare, Cast, Projector, Mail, Cloud, Shield, Headphones } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

type FloatIcon = {
  Icon: typeof Wifi;
  label: string;
  href: string;
  bg: string;
  fg: string;
  // desktop position (percent)
  top: string;
  left: string;
  delay: string;
  duration: string;
};

const ICONS: FloatIcon[] = [
  { Icon: Wifi, label: "Wi-Fi", href: "#", bg: "bg-[#0A84FF]", fg: "text-white", top: "10%", left: "8%", delay: "0s", duration: "7s" },
  { Icon: Monitor, label: "Systems", href: "#", bg: "bg-neutral-900", fg: "text-white", top: "6%", left: "28%", delay: "1.2s", duration: "8s" },
  { Icon: GraduationCap, label: "UniKL VLE", href: "#", bg: "bg-[#FFCC00]", fg: "text-neutral-900", top: "14%", left: "70%", delay: "0.6s", duration: "9s" },
  { Icon: LayoutDashboard, label: "Portal", href: "#", bg: "bg-[#FF3B30]", fg: "text-white", top: "8%", left: "88%", delay: "2s", duration: "7.5s" },
  { Icon: FileText, label: "MS Office", href: "#", bg: "bg-[#D83B01]", fg: "text-white", top: "42%", left: "4%", delay: "0.4s", duration: "8.5s" },
  { Icon: ScreenShare, label: "MaxHub Share", href: "#", bg: "bg-[#34C759]", fg: "text-white", top: "44%", left: "92%", delay: "1.8s", duration: "9.5s" },
  { Icon: Cast, label: "MaxHub Connect", href: "#", bg: "bg-[#5E5CE6]", fg: "text-white", top: "78%", left: "10%", delay: "0.9s", duration: "8s" },
  { Icon: Projector, label: "Epson iProjection", href: "#", bg: "bg-[#1D1D1F]", fg: "text-white", top: "82%", left: "30%", delay: "1.5s", duration: "7s" },
  { Icon: Mail, label: "Email", href: "#", bg: "bg-white border border-neutral-200", fg: "text-[#0A84FF]", top: "80%", left: "60%", delay: "0.3s", duration: "9s" },
  { Icon: Cloud, label: "Cloud Drive", href: "#", bg: "bg-[#0061FE]", fg: "text-white", top: "76%", left: "84%", delay: "2.2s", duration: "8.2s" },
  { Icon: Shield, label: "Security", href: "#", bg: "bg-neutral-100 border border-neutral-200", fg: "text-neutral-900", top: "30%", left: "82%", delay: "1s", duration: "7.8s" },
  { Icon: Headphones, label: "Helpdesk", href: "#", bg: "bg-[#FF9500]", fg: "text-white", top: "32%", left: "14%", delay: "1.7s", duration: "8.7s" },
];

function FloatingIcon({ item, index }: { item: FloatIcon; index: number }) {
  const { Icon, label, href, bg, fg, top, left, delay, duration } = item;
  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      className="hidden md:flex absolute h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] animate-[float_var(--d)_ease-in-out_infinite]"
      style={{
        top,
        left,
        animationDelay: delay,
        ['--d' as string]: duration,
      } as React.CSSProperties}
    >
      <span className={`flex h-full w-full items-center justify-center rounded-[22px] ${bg}`}>
        <Icon className={`h-7 w-7 lg:h-9 lg:w-9 ${fg}`} strokeWidth={2.2} />
      </span>
      <span className="sr-only">{label}</span>
      {/* keep index referenced */}
      <span className="hidden">{index}</span>
    </a>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-14px) translateX(6px); }
        }
      `}</style>

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-5xl items-center justify-between px-6 pt-6">
        <div className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white">
          IT Dept.
        </div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-700 md:flex">
          <a href="#" className="hover:text-neutral-900">Services</a>
          <a href="#" className="hover:text-neutral-900">Systems</a>
          <a href="#" className="hover:text-neutral-900">Support</a>
        </nav>
        <a href="#" className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
          Get help
        </a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center justify-center px-6">
        {/* Floating icons (desktop only, absolutely positioned) */}
        {ICONS.map((it, i) => (
          <FloatingIcon key={it.label} item={it} index={i} />
        ))}

        {/* Center content */}
        <div className="relative z-10 text-center">
          <p className="mb-4 text-base text-neutral-500">A growing portal for</p>
          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl">
            IT Services
            <br />
            &amp; Support
          </h1>
          <p className="mt-6 text-lg font-medium text-neutral-600 md:text-xl">
            50+ Systems <span className="mx-2 text-neutral-300">|</span> 12 Departments
          </p>
        </div>
      </section>

      {/* Mobile icon grid (no absolute, no overlap) */}
      <section className="md:hidden px-6 pb-16">
        <div className="grid grid-cols-4 gap-4">
          {ICONS.map(({ Icon, label, href, bg, fg }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex flex-col items-center gap-2"
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-[18px] ring-1 ring-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-110 hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] ${bg}`}>
                <Icon className={`h-6 w-6 ${fg}`} strokeWidth={2.2} />
              </span>
              <span className="text-[11px] font-medium text-neutral-600 text-center leading-tight">{label}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
