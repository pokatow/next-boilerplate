"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getErrorMessage } from "@/lib/utils";

const SignInForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (response?.ok) {
      return router.push("/dashboard");
    } else {
      setErrorMessage(getErrorMessage(response?.error));
    }
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
      <Link href="/">Boilerplate</Link>
      <div className="flex flex-col pb-2 space-y-1 text-left">
        <h1 className="text-xl font-semibold tracking-tight">Sign In</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to sign in.
        </p>
      </div>
      <form
        onSubmit={handleCredentialsLogin}
        className="flex flex-col gap-2 pb-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs">
            Email
          </label>
          <Input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1 pb-2">
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
        {errorMessage && (
          <span className="text-xs text-red-500">{errorMessage}</span>
        )}
        <Button type="submit" variant={"default"} className="mt-2">
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
