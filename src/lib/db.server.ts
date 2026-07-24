import mysql from "mysql2/promise";

const globalForDb = globalThis as typeof globalThis & {
  mysqlPool?: mysql.Pool;
};

function env(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function mysqlHost(): string {
  const host = env("MYSQL_HOST", "127.0.0.1");
  return host === "localhost" ? "127.0.0.1" : host;
}

export function getDb(): mysql.Pool {
  if (!globalForDb.mysqlPool) {
    globalForDb.mysqlPool = mysql.createPool({
      host: mysqlHost(),
      port: Number(env("MYSQL_PORT", "3306")),
      user: env("MYSQL_USER"),
      password: env("MYSQL_PASSWORD"),
      database: env("MYSQL_DATABASE"),
      waitForConnections: true,
      connectionLimit: 5,
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

export function formatDbError(error: unknown): string {
  if (typeof error !== "object" || error === null) {
    return String(error);
  }

  const err = error as {
    code?: string | number;
    errno?: number;
    message?: string;
    sqlMessage?: string;
  };

  if (typeof err.message === "string" && err.message.startsWith("Missing required environment variable:")) {
    return err.message;
  }

  const code = err.code ?? err.errno;
  const detail = err.sqlMessage || err.message || "Unknown database error";
  return code ? `[${code}] ${detail}` : detail;
}
