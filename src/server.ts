import express from "express";
import consola from "consola";
import "dotenv/config";
import { client, getUsers, createUser } from "./drizzle/db";

const app = express();

app.use(express.json());

app.get("/users", async (_, res) => {
  const result = await getUsers();
  res.json(result);
});

app.post("/users", async (req, res) => {
  try {
    const result = await createUser(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: "Email or username are not unique" });
  }
});

(async () => {
  await client.connect();
  app.listen(3000, () => {
    consola.info(`Server running at http://localhost:3000`);
  });
})();
