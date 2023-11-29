import SessionDisplayer from "@/components/temp/SessionDisplayer";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Next Boilerplate - Setting",
};

export default function Setting() {
  return <div className="flex-1 p-4 ">Setting</div>;
}
