import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

export default options; 