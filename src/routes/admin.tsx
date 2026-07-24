import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { getAuthUser } from "@/lib/auth";

export const Route = createFileRoute("/admin")({
  beforeLoad: async () => {
    const user = await getAuthUser();
    if (!user) {
      throw redirect({ to: "/login" });
    }
    return { user };
  },
  component: () => <Outlet />,
});
