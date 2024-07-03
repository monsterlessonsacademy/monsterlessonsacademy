import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";

export const client = new Client({
  host: "0.0.0.0",
  port: 5432,
  user: "postgres",
  password: "123",
  database: "postgres",
});
export const db = drizzle(client, { schema });

export const getUsers = async () => await db.select().from(schema.users);

export const createUser = async (newUser: schema.NewUser) =>
  await db.insert(schema.users).values(newUser).returning();
