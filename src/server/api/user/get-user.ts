'use server';

import { privateProcedure } from '@/utils/trpc/init';
import { z } from 'zod';
import { prisma } from '@/utils/prisma/prisma';
import { TRPCError } from '@trpc/server';

export const getUser = privateProcedure
  .input(z.object({
    id: z.string(),
  }))
  .query(async (opts) => {
    const { id } = opts.input;

    const currentUser = await prisma.user.findFirst({
      where: {
        id: opts.ctx.user.id,
      },
      select: {
        id: true,
        roles: true,
      }
    });

    const targetUser = await prisma.user.findFirst({
      where: {
        id: id
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        avatar_url: true,
        job_title: true,
        roles: true,
      }
    });

    if (!currentUser) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    if (currentUser.id !== targetUser?.id && !currentUser.roles.find(role => role.name === 'admin')) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return {
      user: targetUser,
    };
  });