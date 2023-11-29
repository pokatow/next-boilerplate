"use client";
import { useSession } from "next-auth/react";
import React from "react";

const ClientSession = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Client </h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};

export default ClientSession;
