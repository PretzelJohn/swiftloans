import { auth } from '@/utils/auth/auth';
import { cache } from 'react';

export const createTRPCContext = cache(async () => {
  const session = await auth();
  return {
    session,
  };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
