import 'server-only';
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { cache } from 'react';
import { createCallerFactory } from '@/utils/trpc/init';
import { makeQueryClient } from '@/utils/trpc/query-client';
import { type AppRouter, appRouter } from '@/utils/trpc/routers';
import { createTRPCContext } from '@/utils/trpc/context';

// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);

const caller = createCallerFactory(appRouter)(createTRPCContext);

export const { trpc, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient,
);