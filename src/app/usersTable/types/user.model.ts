import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
});

export type UserType = z.infer<typeof UserSchema>;
