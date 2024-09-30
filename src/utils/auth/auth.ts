import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { loginSchema } from '@/shared/schema/login';
import { prisma } from '@/utils/prisma/prisma';
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user?.id) {
        token.sub = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await loginSchema.parseAsync(credentials);

          const user = await prisma.user.findFirst({
            where: {
              email,
            },
            select: {
              id: true,
              password_hash: true,
            },
          });

          const isValid = user && await bcrypt.compare(password, user.password_hash);

          if (!isValid) {
            return null;
          }

          return {
            id: user.id,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
});