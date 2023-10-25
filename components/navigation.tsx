"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const { data: session } = useSession();

  const [showDropDown, setshowDropDown] = useState(false);

  return (
    <nav className="fixed top-0 flex items-center justify-between w-full p-2 border-b border-border ">
      <span>Next Boilerplate</span>
      {session ? (
        <div className="relative">
          <button
            onClick={() => setshowDropDown(true)}
            className="relative flex items-center justify-center w-12 h-12 overflow-hidden border rounded-full"
          >
            <Image
              src={session?.user?.image ?? ""}
              fill={true}
              alt={`${session?.user?.name} avatar`}
            ></Image>
          </button>
          {showDropDown && (
            <div
              onMouseLeave={() => {
                setshowDropDown(false);
              }}
              className="absolute right-0 flex flex-col p-1 text-sm border rounded shadow w-36 top-16 bg-background border-border"
            >
              <a
                href="/dashboard"
                className="p-2 text-center rounded hover:bg-neutral-200"
              >
                Dashboard
              </a>
              <button
                onClick={() => {
                  signOut();
                }}
                className="p-2 rounded hover:bg-neutral-200"
              >
                Sign Out
              </button>
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