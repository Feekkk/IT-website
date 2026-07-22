import React from "react";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-4 sm:px-6 sm:py-6">
        <div className="pt-1">
          <Link
            to="/about"
            className="inline-flex items-center gap-1 rounded-full px-0 py-1 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
          >
            ‹ Back
          </Link>
        </div>

        <section className="flex flex-1 flex-col justify-center py-12">
          <div className="mb-10 space-y-5 animate-[loginIn_0.7s_ease-out_both]">
            <img
              src="/unikl-official.png"
              alt="UniKL Royal College of Medicine Perak"
              className="h-12 w-auto object-contain sm:h-14"
            />
            <div className="space-y-3">
              <h1 className="text-4xl font-light tracking-tight text-neutral-900">
                ITD <span className="font-medium">STAFF</span>
              </h1>
              <p className="text-base leading-7 text-neutral-600">
                Login to access the IT Department staff portal.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="animate-[loginIn_0.7s_ease-out_0.12s_both] space-y-5"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#0077C8] focus:ring-2 focus:ring-[#0077C8]/20"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#0077C8] focus:ring-2 focus:ring-[#0077C8]/20"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0077C8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0066AD]"
            >
              Sign in
            </button>
          </form>
        </section>

        <footer className="border-t border-neutral-200/80 pb-6 pt-8">
          <p className="text-right text-xs font-medium text-neutral-400">
            © 2026 Information Technology Department RCMP
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes loginIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
