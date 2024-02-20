import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      troopId: string;
    };
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    troopId: string;
  }
}
