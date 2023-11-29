import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ClientSession from "./ClientSession";

const SessionDisplayer = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Server</h1>
      <pre>{JSON.stringify(session)}</pre>
      <ClientSession />
    </div>
  );
};

export default SessionDisplayer;
