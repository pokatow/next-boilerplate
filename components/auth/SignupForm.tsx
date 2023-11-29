"use client";

import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    let res = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.ok) {
      return router.push("/auth/sign-in");
    } else {
      let data = await res.json();
      setErrorMessage(data.error);
    }
  };

  const handleGoogleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleGithubLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    let res = await signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <Link href="/">Boilerplate</Link>
        <div className="flex flex-col pb-2 space-y-1 text-left">
          <h1 className="text-xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground ">
            Enter your email below to create your account
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
          {errorMessage && (
            <span className="text-sm text-red-500">{errorMessage}</span>
          )}
          <Button type="submit" variant={"default"} className="mt-2">
            Create
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
    </>
  );
};

export default SignUpForm;
