import ClientSession from "@/components/ClientSession";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col flex-1 p-4">
      <h1>Server</h1>
      <pre>{JSON.stringify(session)}</pre>
      <ClientSession />
    </div>
  );
}
