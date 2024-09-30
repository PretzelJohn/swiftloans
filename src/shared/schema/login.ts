import { z } from 'zod';

export const loginErrors: Record<string, string> = {
  credentials: 'An account with that email/password combination does not exist.',
  none: 'Something went wrong.'
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;