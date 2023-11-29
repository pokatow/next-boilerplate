import SessionDisplayer from "@/components/temp/SessionDisplayer";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Next Boilerplate - Dashboard",
};

export default function Dashboard() {
  return (
    <div className="flex-1 p-4 ">
      Dashboard
      <SessionDisplayer></SessionDisplayer>
    </div>
  );
}
