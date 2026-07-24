import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import mysql from "mysql2/promise";

const globalForDb = globalThis as typeof globalThis & {
  mysqlPool?: mysql.Pool;
  mysqlEnvLoaded?: boolean;
};

function loadEnvFile() {
  if (globalForDb.mysqlEnvLoaded) return;
  globalForDb.mysqlEnvLoaded = true;

  try {
    const path = resolve(process.cwd(), ".env");
    if (!existsSync(path)) return;

    for (const line of readFileSync(path, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;

      const key = trimmed.slice(0, eq).trim();
      if (!key.startsWith("MYSQL_")) continue;
      if (process.env[key] !== undefined) continue;

      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  } catch {
    // Cloudflare / non-Node runtimes may not support fs — ignore.
  }
}

function env(name: string, fallback?: string): string {
  loadEnvFile();
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getDb(): mysql.Pool {
  if (!globalForDb.mysqlPool) {
    globalForDb.mysqlPool = mysql.createPool({
      host: env("MYSQL_HOST", "127.0.0.1"),
      port: Number(env("MYSQL_PORT", "3306")),
      user: env("MYSQL_USER"),
      password: env("MYSQL_PASSWORD"),
      database: env("MYSQL_DATABASE"),
      waitForConnections: true,
      connectionLimit: 10,
    });
  }

  return globalForDb.mysqlPool;
}

export async function query<T extends mysql.RowDataPacket[]>(
  sql: string,
  params?: (string | number | boolean | null | Date)[],
): Promise<T> {
  const [rows] = await getDb().execute<T>(sql, params);
  return rows;
}
