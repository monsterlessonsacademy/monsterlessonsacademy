import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/users", async (req, res) => {
  try {
    const result = await prisma.user.create({
      data: req.body,
    });
    res.json(result);
  } catch (err) {
    res.json({ error: "Email or username are not unique" });
  }
});

app.get("/users", async (_, res) => {
  const result = await prisma.user.findMany();
  res.json(result);
});

app.get("/users/:id", async (req, res) => {
  const result = await prisma.user.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });

  res.json(result);
});

app.put("/users/:id", async (req, res) => {
  const result = await prisma.user.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(result);
});

app.delete("/users/:id", async (req, res) => {
  const result = await prisma.user.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(result);
});

app.listen(3000, () => console.log(`API started`));
