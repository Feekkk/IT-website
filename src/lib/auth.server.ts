import type { RowDataPacket } from "mysql2/promise";
import {
  deleteCookie,
  getCookie,
  getRequestProtocol,
  setCookie,
} from "@tanstack/react-start/server";
import { formatDbError, query } from "@/lib/db";

export type AuthUser = {
  id: number;
  email: string;
};

type UserRow = RowDataPacket & AuthUser;

const SESSION_COOKIE = "itd_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function encodeSession(session: AuthUser): string {
  return Buffer.from(JSON.stringify(session), "utf8").toString("base64url");
}

function decodeSession(raw: string): AuthUser | null {
  try {
    const parsed = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as Partial<AuthUser>;
    if (typeof parsed.id !== "number" || typeof parsed.email !== "string") {
      return null;
    }
    return { id: parsed.id, email: parsed.email };
  } catch {
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
}

export async function loginWithCredentials(input: {
  email: string;
  password: string;
}): Promise<{ ok: true; user: AuthUser } | { ok: false; error: string }> {
  let user: AuthUser;

  try {
    const rows = await query<UserRow[]>(
      "SELECT id, email FROM users WHERE email = ? AND password = ? LIMIT 1",
      [input.email.trim(), input.password],
    );

    const row = rows[0];
    if (!row) {
      return { ok: false, error: "Invalid email or password." };
    }

    user = { id: Number(row.id), email: String(row.email) };
  } catch (error) {
    console.error("loginWithCredentials query failed:", error);
    return { ok: false, error: `Database error: ${formatDbError(error)}` };
  }

  try {
    setCookie(SESSION_COOKIE, encodeSession(user), {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: getRequestProtocol() === "https",
      maxAge: SESSION_MAX_AGE,
    });
  } catch (error) {
    console.error("loginWithCredentials cookie failed:", error);
    return {
      ok: false,
      error: `Session cookie failed: ${error instanceof Error ? error.message : String(error)}`,
    };
  }

  return { ok: true, user };
}

export function readAuthSession(): AuthUser | null {
  const raw = getCookie(SESSION_COOKIE);
  if (!raw) return null;
  return decodeSession(raw);
}

export function clearAuthSession() {
  deleteCookie(SESSION_COOKIE, { path: "/" });
}
