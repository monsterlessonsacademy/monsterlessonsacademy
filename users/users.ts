import { api, APIError } from "encore.dev/api";
import { db } from "./db";
import { hash } from "bcrypt";
import knex from "knex";

// Initialize knex
const k = knex({
  client: "pg",
  connection: db.connectionString,
});

// Define our interfaces
interface CreateUserParams {
  email: string;
  name: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  created_at: Date;
}

// Interface for updating user
interface UpdateUserParams {
  id: number;
  name?: string;
  email?: string;
}

// Define response interface for get endpoint
interface GetUserResponse {
  user: User | null;
}

// Create user endpoint
export const create = api(
  {
    method: "POST",
    path: "/users",
    expose: true,
  },
  async (params: CreateUserParams): Promise<User> => {
    // Hash the password
    const password = await hash(params.password, 10);

    // Insert the user
    const [user] = await k("users")
      .insert({
        email: params.email,
        name: params.name,
        password,
      })
      .returning(["id", "email", "name", "created_at"]);

    return user;
  }
);

// Get single user endpoint
export const get = api(
  {
    method: "GET",
    path: "/users/:id",
    expose: true,
  },
  async ({ id }: { id: number }): Promise<GetUserResponse> => {
    const user = await k("users")
      .select(["id", "email", "name", "created_at"])
      .where({ id })
      .first();

    return { user: user || null };
  }
);

// List users endpoint
export const list = api(
  {
    method: "GET",
    path: "/users",
    expose: true,
  },
  async (): Promise<{ users: User[] }> => {
    const users = await k("users")
      .select(["id", "email", "name", "created_at"])
      .orderBy("created_at", "desc");

    return { users };
  }
);

// Update user endpoint
export const update = api(
  {
    method: "PUT",
    path: "/users/:id",
    expose: true,
  },
  async (params: UpdateUserParams): Promise<User> => {
    const updateData: Partial<User> = {};
    if (params.name) updateData.name = params.name;
    if (params.email) updateData.email = params.email;

    const [user] = await k("users")
      .where({ id: params.id })
      .update(updateData)
      .returning(["id", "email", "name", "created_at"]);

    if (!user) {
      throw APIError.notFound("user not found");
    }

    return user;
  }
);

// Delete user endpoint
export const delete_ = api(
  {
    method: "DELETE",
    path: "/users/:id",
    expose: true,
  },
  async ({ id }: { id: number }): Promise<void> => {
    const deleted = await k("users").where({ id }).delete();

    if (!deleted) {
      throw APIError.notFound("user not found");
    }
  }
);
