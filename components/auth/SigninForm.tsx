"use client";

import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
      // callbackUrl: `${window.location.origin}/dashboard`,
    });

    console.log(res);
  };

  const handleGoogleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleGithubLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    let response = await signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col pb-2 space-y-1 text-left">
        <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to sign in.
        </p>
      </div>
      <form
        onSubmit={handleCredentialsLogin}
        className="flex flex-col gap-2 pb-4 border-b"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-xs">
            Password
          </label>
          <Input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button type="submit" variant={"default"}>
          Sign In
        </Button>
      </form>

      {/* <Button
        onClick={handleGoogleLogin}
        type="button"
        variant={"outline"}
        className="mt-2"
      >
        Google
      </Button>
      <Button onClick={handleGithubLogin} type="button" variant={"outline"}>
        Github
      </Button> */}
    </div>
  );
};

export default SignInForm;
