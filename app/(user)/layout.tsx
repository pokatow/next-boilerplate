import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <>
      <Navigation></Navigation>
      <main className="relative flex w-full gap-4 p-4 mt-14">
        <div className="sticky top-0 w-64 p-0 bg-red-200 shadow-sm h-fit">
          <div className="p-4 ">
            <span className="">{session?.user?.email}</span>
          </div>
          <div className="flex flex-col items-start w-full px-4 ">
            <Button asChild variant={`link`} className="px-0">
              <Link href={`/setting`}>Setting</Link>
            </Button>
            <Button asChild variant={`link`} className="px-0">
              <Link href={`/`}>back</Link>
            </Button>
          </div>
        </div>

        <Card className="w-full p-0">
          <CardContent className="p-0">{children}</CardContent>
        </Card>
      </main>
    </>
  );
}
