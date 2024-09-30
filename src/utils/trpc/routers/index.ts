import { createTRPCRouter } from '@/utils/trpc/init';
import { getUser } from '@/server/api/user/get-user';

export const appRouter = createTRPCRouter({
  getUser,
});

export type AppRouter = typeof appRouter;
