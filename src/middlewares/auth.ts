import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { findByEmail } from "../drizzle/db";
import { UserWithToken } from "../drizzle/schema";

export interface ExpressRequest extends Request {
  user?: UserWithToken;
}

export const authenticate = async (
  req: ExpressRequest,
  _: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    throw new Error("Unauthorized");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    throw new Error("Token not found");
  }

  try {
    const decode = verify(token, "JWT_SECRET") as { email: string };
    const user = await findByEmail(decode.email);
    req.user = user;
    next();
  } catch (err) {
    req.user = undefined;
    next();
  }
};
