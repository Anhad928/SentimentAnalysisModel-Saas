"use server";

import { hash } from "bcryptjs";
import { signupSchema } from "~/schemas/auth";
import type { SignupSchema } from "~/schemas/auth";
import { withDb, db } from "~/server/db"; // Updated import to include withDb
import crypto from "crypto";

export async function registerUser(data: SignupSchema) {
  return await withDb(async () => {
    try {
      // Validate the data using your signup schema
      const result = signupSchema.safeParse(data);
      if (!result.success) {
        return { error: "Invalid data" };
      }

      const { name, email, password } = data;

      // Check if the user already exists
      const existingUser = await db.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        return { error: "User already exist" };
      }

      // Hash the password before storing it
      const hashedPassword = await hash(password, 12);

      // Create the new user with an associated apiQuota record
      await db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          apiQuota: {
            create: {
              secretKey: `sa_live_${crypto.randomBytes(24).toString("hex")}`,
            },
          },
        },
      });

      return { success: true };
    } catch (error) {
      console.error("Error in registerUser:", error);
      return { error: "Something went wrong" };
    }
  });
}
