import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  out: "./src/drizzle",
  schema: "./src/drizzle/schema.ts",
  dbCredentials: {
    host: "0.0.0.0",
    port: 5432,
    user: "postgres",
    password: "123",
    database: "postgres",
    ssl: false,
  },
  verbose: true,
  strict: true,
});
