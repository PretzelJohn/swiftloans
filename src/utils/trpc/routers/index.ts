import { createTRPCRouter } from '@/utils/trpc/init';
import { getUser } from '@/server/api/user/get-user';
import { forgotPassword } from '@/server/api/auth/forgot-password';
import { getToken } from '@/server/api/auth/get-token';
import { resetPassword } from '@/server/api/auth/reset-password';

export const appRouter = createTRPCRouter({
  forgotPassword,
  getToken,
  getUser,
  resetPassword,
});

export type AppRouter = typeof appRouter;
