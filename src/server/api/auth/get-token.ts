'use server';

import { publicProcedure } from '@/utils/trpc/init';
import { z } from 'zod';
import { prisma } from '@/utils/prisma/prisma';

export const getToken = publicProcedure
  .input(
    z.object({
      email: z.string().email(),
      token: z.string().regex(/[0-9a-f]{32}/),
    })
  )
  .query(async (opts) => {
    const { email, token } = opts.input;

    await prisma.userToken.deleteMany({
      where: {
        expires_at: {
          lte: new Date(),
        },
      },
    });

    const userToken = await prisma.userToken.findFirst({
      where: {
        user_email: email,
        token,
      },
      select: {
        id: true,
        expires_at: true,
        user: true,
      },
    });

    // Skip if token is invalid or expired
    const now = Date.now();
    if (!userToken || now >= userToken.expires_at.getTime()) {
      return {
        token: null,
      };
    }

    return {
      token: {
        id: userToken.id,
      },
    };
  });
