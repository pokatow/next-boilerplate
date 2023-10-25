"use client";

import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsLogin = (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to sign in.
        </p>
      </div>
      <form
        onSubmit={handleCredentialsLogin}
        className="flex flex-col gap-2 pb-2 border-b"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-xs">
            Password
          </label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button type="submit" variant={"default"}>
          Sign In
        </Button>
      </form>

      <Button onClick={handleGoogleLogin} type="button" variant={"outline"}>
        Google
      </Button>
      <Button onClick={handleGithubLogin} type="button" variant={"outline"}>
        Github
      </Button>
    </div>
  );
};

export default SignInForm;
