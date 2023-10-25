import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col w-full min-h-screen ">{children}</main>;
}
