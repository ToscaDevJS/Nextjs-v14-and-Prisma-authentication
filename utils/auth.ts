
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
//import { PrismaAdapter } from "@auth/prisma-adapter"; ---> adapter: PrismaAdapter(prisma) as any, utilizar con este adaptador ;
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "./db";

export const authOptions = {
  adapter: PrismaAdapter(prisma) ,
 // adapter: PrismaAdapter(prisma) as any,
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
} satisfies NextAuthOptions;
