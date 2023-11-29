"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const { data: session } = useSession();

  const [showDropDown, setshowDropDown] = useState(false);

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-4 py-2 border-b border-border bg-background ">
      <Link href={`/`}>Boilerplate</Link>
      {session ? (
        <div className="relative flex">
          <button
            onClick={() => setshowDropDown(!showDropDown)}
            className="relative flex items-center justify-center w-10 h-10 overflow-hidden border rounded-full bg-gradient-to-t from-blue-500 to-indigo-500"
          ></button>

          {showDropDown && (
            <div
              onMouseLeave={() => {
                setshowDropDown(false);
              }}
              className="absolute right-0 flex flex-col p-1 overflow-hidden text-sm border rounded shadow w-36 top-16 bg-background border-border"
            >
              <Button asChild variant={"secondary"}>
                <Link href="/setting">Setting</Link>
              </Button>
              <Button
                variant={"outline"}
                onClick={() => {
                  signOut();
                }}
                className="p-2 rounded "
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
      {/* <AuthButton /> */}
    </nav>
  );
}
