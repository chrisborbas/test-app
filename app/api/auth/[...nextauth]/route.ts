import NextAuth from "next-auth";
import { authOptions } from "./auth";

export async function GET(request: Request) {
  return NextAuth(authOptions)(request);
}

export async function POST(request: Request) {
  return NextAuth(authOptions)(request);
} 