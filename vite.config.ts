import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv, type Plugin } from "vite";

function mysqlEnvPlugin(): Plugin {
  return {
    name: "mysql-env",
    config(_, { mode }) {
      const env = loadEnv(mode, process.cwd(), "");
      for (const [key, value] of Object.entries(env)) {
        if (key.startsWith("MYSQL_") && process.env[key] === undefined) {
          process.env[key] = value;
        }
      }
    },
  };
}

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      filter: ({ path }) =>
        path !== "/feedback" &&
        !path.startsWith("/feedback/") &&
        !path.startsWith("/admin"),
    },
    server: { entry: "server" },
  },
  vite: {
    plugins: [mysqlEnvPlugin()],
  },
});
