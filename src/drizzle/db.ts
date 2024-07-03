import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { eq } from "drizzle-orm";

export const client = new Client({
  host: "0.0.0.0",
  port: 5432,
  user: "postgres",
  password: "123",
  database: "postgres",
});
export const db = drizzle(client, { schema });

const generateJwt = (user: schema.UserWithoutPassword): string => {
  return sign({ email: user.email }, "JWT_SECRET");
};

export const getUsers = async () => await db.select().from(schema.users);

export const createUser = async (
  newUser: schema.NewUser
): Promise<schema.UserWithToken> => {
  const hashedPassword = await hash(newUser.password, 10);
  const [createdUser] = await db
    .insert(schema.users)
    .values({ ...newUser, password: hashedPassword })
    .returning({
      id: schema.users.id,
      username: schema.users.username,
      email: schema.users.email,
    });

  if (!createdUser) {
    throw new Error("Failed to add user");
  }

  return { ...createdUser, token: generateJwt(createdUser) };
};

export const findByEmail = async (
  email: string
): Promise<schema.UserWithToken> => {
  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .limit(1);

  const { password: _password, ...userWithoutPassword } = user;

  return { ...userWithoutPassword, token: generateJwt(user) };
};

export const loginUser = async (
  email: string,
  password: string
): Promise<schema.UserWithToken> => {
  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .limit(1);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordCorrect = await compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new Error("Incorrect password");
  }

  const { password: _password, ...userWithoutPassword } = user;

  return { ...userWithoutPassword, token: generateJwt(user) };
};
