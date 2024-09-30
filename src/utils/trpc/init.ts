import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import type { Context } from '@/utils/trpc/context';

const trpc = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createCallerFactory = trpc.createCallerFactory;
export const createTRPCRouter = trpc.router;
export const publicProcedure = trpc.procedure;
export const privateProcedure = trpc.procedure.use(async (opts) => {
  if (!opts.ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return opts.next({
    ctx: {
      user: opts.ctx.session.user,
    }
  })
});