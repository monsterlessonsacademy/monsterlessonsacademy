import express from "express";
import consola from "consola";
import "dotenv/config";
import { client, getUsers, createUser, loginUser } from "./drizzle/db";
import { ExpressRequest, authenticate } from "./middlewares/auth";

const app = express();

app.use(express.json());

app.get("/users", async (_, res) => {
  const result = await getUsers();
  res.json(result);
});

app.post("/users", async (req, res, next) => {
  try {
    const result = await createUser(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.post("/users/login", async (req, res, next) => {
  try {
    const result = await loginUser(req.body.email, req.body.password);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.post("/user", authenticate, async (req: ExpressRequest, res, next) => {
  try {
    console.log("got user", req.user);
    res.json(req.user);
  } catch (err) {
    next(err);
  }
});

(async () => {
  await client.connect();
  app.listen(3000, () => {
    consola.info(`Server running at http://localhost:3000`);
  });
})();
