import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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
    const { loginWithCredentials } = await import("@/lib/auth.server");
    return loginWithCredentials(data);
  });

export const getAuthUser = createServerFn({ method: "GET" }).handler(async () => {
  const { readAuthSession } = await import("@/lib/auth.server");
  return readAuthSession();
});

export const logoutUser = createServerFn({ method: "POST" }).handler(async () => {
  const { clearAuthSession } = await import("@/lib/auth.server");
  clearAuthSession();
  return { ok: true as const };
});
