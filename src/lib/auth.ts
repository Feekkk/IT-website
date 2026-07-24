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
  .handler(async ({ data }) => loginWithCredentials(data));

export const getAuthUser = createServerFn({ method: "GET" }).handler(async () =>
  readAuthSession(),
);

export const logoutUser = createServerFn({ method: "POST" }).handler(async () => {
  clearAuthSession();
  return { ok: true as const };
});
