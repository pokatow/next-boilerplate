import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <div className="flex flex-1 ">
        <div className="hidden w-1/2 md:flex bg-foreground"></div>
        <div className="flex flex-col items-center justify-center w-full p-4 md:w-1/2">
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
