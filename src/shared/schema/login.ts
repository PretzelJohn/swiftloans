import { z } from 'zod';

export const loginMessages: Record<string, string> = {
  credentials:
    'An account with that email/password combination does not exist.',
  reset_success: 'Password changed successfully.',
  none: 'Something went wrong.',
};

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
