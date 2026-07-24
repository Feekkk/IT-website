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
