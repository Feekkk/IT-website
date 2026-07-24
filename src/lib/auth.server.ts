import type { RowDataPacket } from "mysql2/promise";
import { deleteCookie, getCookie, setCookie } from "@tanstack/react-start/server";
import { query } from "@/lib/db";

export type AuthUser = {
  id: number;
  email: string;
};

type UserRow = RowDataPacket & AuthUser;

const SESSION_COOKIE = "itd_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export async function loginWithCredentials(input: {
  email: string;
  password: string;
}): Promise<{ ok: true; user: AuthUser } | { ok: false; error: string }> {
  try {
    const rows = await query<UserRow[]>(
      "SELECT id, email FROM users WHERE email = ? AND password = ? LIMIT 1",
      [input.email.trim(), input.password],
    );

    const user = rows[0];
    if (!user) {
      return { ok: false, error: "Invalid email or password." };
    }

    const session: AuthUser = { id: user.id, email: user.email };
    setCookie(SESSION_COOKIE, JSON.stringify(session), {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
    });

    return { ok: true, user: session };
  } catch (error) {
    console.error("loginWithCredentials failed:", error);
    return { ok: false, error: "Unable to sign in. Please try again." };
  }
}

export function readAuthSession(): AuthUser | null {
  const raw = getCookie(SESSION_COOKIE);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<AuthUser>;
    if (typeof parsed.id !== "number" || typeof parsed.email !== "string") {
      return null;
    }
    return { id: parsed.id, email: parsed.email };
  } catch {
    return null;
  }
}

export function clearAuthSession() {
  deleteCookie(SESSION_COOKIE, { path: "/" });
}
