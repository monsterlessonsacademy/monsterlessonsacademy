import { InferModel } from "drizzle-orm";
import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").notNull().unique(),
  username: text("username").notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
