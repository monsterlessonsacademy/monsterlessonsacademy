import express from "express";
import { User, PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

const app = express();
const prisma = new PrismaClient();
const generateJwt = (user: User): string => {
  return sign({ email: user.email }, "JWT_SECRET");
};

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await hash(req.body.password, 10);
    const result = await prisma.user.create({
      data: { ...req.body, password: hashedPassword },
    });
    const { password: _password, ...userWithoutPassword } = result;
    res.json({ ...userWithoutPassword, token: generateJwt(result) });
  } catch (err) {
    res.json({ error: "Email or username are not unique" });
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
