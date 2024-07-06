import express from "express";
import { User, PrismaClient } from "@prisma/client";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ExpressRequest, authenticate } from "./middlewares/auth";

const app = express();
const prisma = new PrismaClient();
const generateJwt = (user: User): string => {
  return sign({ email: user.email }, "JWT_SECRET");
};

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await hash(req.body.password, 10);
    const user = await prisma.user.create({
      data: { ...req.body, password: hashedPassword },
    });
    const { password: _password, ...userWithoutPassword } = user;
    res.json({ ...userWithoutPassword, token: generateJwt(user) });
  } catch (err) {
    res.json({ error: "Email or username are not unique" });
  }
});

app.post("/users/login", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await compare(req.body.password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Incorrect password");
    }

    const { password: _password, ...userWithoutPassword } = user;
    res.json({ ...userWithoutPassword, token: generateJwt(user) });
  } catch (err) {
    res.json({ error: "Email or password are wrong" });
  }
});

app.get("/user", authenticate, async (req: ExpressRequest, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const { password: _password, ...userWithoutPassword } = req.user;
    res.json(userWithoutPassword);
  } catch (err) {
    next(err);
  }
});

async function main() {
  app.listen(3000, () => {
    console.info(`Server running at http://localhost:3000`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
