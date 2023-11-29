import prisma from "@/lib/prisma";
import { hash } from "bcrypt";

import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  let encryptedPassword = await hash(password, 6);
  const user = await prisma.user.create({
    data: {
      email: email,
      password: encryptedPassword,
    },
  });
  user.password = "";
  return Response.json(user);
}
