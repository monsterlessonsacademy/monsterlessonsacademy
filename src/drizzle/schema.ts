import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").notNull().unique(),
  username: text("username").notNull(),
  password: text("password").notNull(),
});

export type User = typeof users.$inferSelect;
export type UserWithoutPassword = Omit<User, "password">;
export type UserWithToken = UserWithoutPassword & { token: string };
export type NewUser = typeof users.$inferInsert;
