import { PrismaClient } from "@prisma/client";
import { env } from "~/env";

const createPrismaClient = () =>
  new PrismaClient({
    log: env.NODE_ENV === "production" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

/**
 * Helper function to ensure the database connection is explicitly opened before
 * executing the provided function and then closed afterward.
 *
 * @param fn - A function that performs database operations and returns a Promise.
 * @returns The result of the provided function.
 */
export async function withDb<T>(fn: () => Promise<T>): Promise<T> {
  try {
    // Open the connection explicitly
    await db.$connect();
    return await fn();
  } finally {
    // Always disconnect after the task completes (or errors)
    await db.$disconnect();
  }
}
