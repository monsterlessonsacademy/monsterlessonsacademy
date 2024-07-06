import { PrismaClient, User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const prisma = new PrismaClient();

export interface ExpressRequest extends Request {
  user?: User;
}

export const authenticate = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.headers.authorization) {
    throw new Error("Unauthorized");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    throw new Error("Token not found");
  }

  try {
    const decode = verify(token, "JWT_SECRET") as { email: string };
    const user = await prisma.user.findUnique({
      where: {
        email: decode.email,
      },
    });
    req.user = user ?? undefined;
    next();
  } catch (err) {
    req.user = undefined;
    next();
  }
};
