import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Next Boilerplate - Authenticated",
};

export default function Auth() {
  const session = getServerSession();
  return <div className="flex-1 p-4 ">Dashboard</div>;
}
