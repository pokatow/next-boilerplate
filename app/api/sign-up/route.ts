import prisma from "@/lib/prisma";
import { getErrorMessage } from "@/lib/utils";
import { hash } from "bcrypt";

import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  let encryptedPassword = await hash(password, 6);
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: encryptedPassword,
        role: "USER",
      },
    });
    user.password = "";
    return NextResponse.json(user);
  } catch (error: unknown) {
    return NextResponse.json(
      {
        ok: false,
        error: getErrorMessage(error),
      },
      {
        status: 400,
      }
    );
  }
}
