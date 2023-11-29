import SessionDisplayer from "@/components/temp/SessionDisplayer";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 p-4">
      <SessionDisplayer></SessionDisplayer>
    </div>
  );
}
