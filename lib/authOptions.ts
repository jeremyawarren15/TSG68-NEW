import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/prisma/prisma';


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }),
  ],
  callbacks: {
    async session({session, user}) {
      session.user.troopId = user.troopId;
      return session;
    },
    async signIn(params) {
      const { user, account } = params;
      // Check if the user exists in the database
      const existingUser = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      if (existingUser && account) {
        // Check if there is an account with the specified provider for the user
        const existingAccount = await prisma.account.findFirst({
          where: {
            userId: existingUser.id,
            provider: account.provider,
          },
        });

        if (!existingAccount) {
          // If the account doesn't exist, create one and return true to sign in the user
          await prisma.account.create({
            data: {
              userId: existingUser.id,
              provider: account.provider,
              type: account.type,
              providerAccountId: account.providerAccountId,
            },
          });
        }

        return true;
      }

      // If the user does not exist, return false to prevent sign-in
      return false;
    },
  },

}