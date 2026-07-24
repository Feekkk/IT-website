import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  clearAuthSession,
  loginWithCredentials,
  readAuthSession,
} from "@/lib/auth.server";

export type AuthUser = {
  id: number;
  email: string;
};

export const loginUser = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().email(),
      password: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    try {
      return await loginWithCredentials(data);
    } catch (error) {
      console.error("loginUser handler failed:", error);
      const message = error instanceof Error ? error.message : String(error);
      return { ok: false as const, error: `Login failed: ${message}` };
    }
  });

export const getAuthUser = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return readAuthSession();
  } catch (error) {
    console.error("getAuthUser failed:", error);
    return null;
  }
});

export const logoutUser = createServerFn({ method: "POST" }).handler(async () => {
  try {
    clearAuthSession();
  } catch (error) {
    console.error("logoutUser failed:", error);
  }
  return { ok: true as const };
});
