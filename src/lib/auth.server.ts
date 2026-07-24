import type { RowDataPacket } from "mysql2/promise";
import {
  deleteCookie,
  getCookie,
  getRequestProtocol,
  setCookie,
} from "@tanstack/react-start/server";
import { query } from "@/lib/db";

export type AuthUser = {
  id: number;
  email: string;
};

type UserRow = RowDataPacket & AuthUser;

const SESSION_COOKIE = "itd_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function dbErrorMessage(error: unknown): string {
  if (typeof error !== "object" || error === null) {
    return "Unable to sign in. Please try again.";
  }

  const err = error as { code?: string; message?: string };
  if (typeof err.message === "string" && err.message.startsWith("Missing required environment variable:")) {
    return "Database is not configured on the server.";
  }
  if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND" || err.code === "ETIMEDOUT") {
    return "Cannot connect to the database.";
  }
  if (err.code === "ER_ACCESS_DENIED_ERROR") {
    return "Database credentials were rejected.";
  }
  if (err.code === "ER_BAD_DB_ERROR") {
    return "Database name was not found.";
  }
  if (err.code === "ER_NO_SUCH_TABLE") {
    return "Users table was not found. Run the database schema.";
  }

  return "Unable to sign in. Please try again.";
}

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
      secure: getRequestProtocol() === "https",
      maxAge: SESSION_MAX_AGE,
    });

    return { ok: true, user: session };
  } catch (error) {
    console.error("loginWithCredentials failed:", error);
    return { ok: false, error: dbErrorMessage(error) };
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
