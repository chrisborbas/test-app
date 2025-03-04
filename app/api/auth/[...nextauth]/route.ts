import NextAuth from "next-auth";
import options from "./auth";

export async function GET(request: Request) {
  return NextAuth(options)(request);
}

export async function POST(request: Request) {
  return NextAuth(options)(request);
} 