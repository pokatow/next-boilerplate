import { User } from "next-auth";
import prisma from "./prisma";

import { compare, hash } from "bcrypt";

type SignInFn = (email: string, password: string) => Promise<User>;

export const signIn: SignInFn = async (email, password) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user && (await compare(password, user.password ?? ""))) {
    user.password = "";
    return user;
  } else {
    throw new Error(
      "The email and password you entered doesn't match our records!"
    );
  }
};
