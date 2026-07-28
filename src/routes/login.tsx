import React from "react";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/lib/auth";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/login")({
  head: () =>
    createSeoHead({
      title: "Sign in",
      description: "Staff sign-in for the RCMP IT Department admin area.",
      path: "/login",
      noIndex: true,
    }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const login = useServerFn(loginUser);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [busy, setBusy] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      const result = await login({
        data: {
          email: email.trim(),
          password,
        },
      });

      if (!result?.ok) {
        setError(result?.error || "Unable to sign in. Please try again.");
        return;
      }

      await navigate({ to: "/admin" });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message || "Unable to sign in. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F2F2F2] text-neutral-900">
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-8">
        <div className="pt-1">
          <Link
            to="/about"
            className="inline-flex items-center gap-1 py-1 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
          >
            ‹ Back
          </Link>
        </div>

        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <section className="border-b border-neutral-300/70 py-10 lg:border-b-0 lg:border-r lg:py-0 lg:pr-16 xl:pr-24 animate-[loginIn_0.7s_ease-out_both]">
            <img
              src="/unikl-official.png"
              alt="UniKL Royal College of Medicine Perak"
              className="mb-8 h-12 w-auto object-contain sm:h-14"
            />
            <h1 className="text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-neutral-950 sm:text-4xl lg:text-[2.75rem]">
              Authorized staff.
              <br />
              IT Department portal.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-neutral-500 sm:text-[15px] sm:leading-7">
              Sign in to access the Information Technology Department staff area for UniKL Royal College of Medicine Perak.
            </p>
          </section>

          <section className="flex flex-1 flex-col justify-center py-10 lg:py-0 animate-[loginIn_0.7s_ease-out_0.12s_both]">
            <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md space-y-5 lg:mx-0 lg:max-w-sm">
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
                  className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 pr-12 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-400 transition hover:text-neutral-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" strokeWidth={1.75} />
                    ) : (
                      <Eye className="h-4 w-4" strokeWidth={1.75} />
                    )}
                  </button>
                </div>
              </div>

              {error ? (
                <p className="text-sm font-medium text-red-600" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={busy}
                className="inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-60"
              >
                {busy ? "Signing in…" : "Sign in"}
              </button>
            </form>
          </section>
        </div>

        <footer className="border-t border-neutral-300/70 pb-6 pt-8">
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
