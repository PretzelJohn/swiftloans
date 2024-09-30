import { createTRPCRouter } from '@/utils/trpc/init';
import { getUser } from '@/server/api/user/get-user';
import { forgotPassword } from '@/server/api/auth/forgot-password';

export const appRouter = createTRPCRouter({
  forgotPassword,
  getUser,
});

export type AppRouter = typeof appRouter;
