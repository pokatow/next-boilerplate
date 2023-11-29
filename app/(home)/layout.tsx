import Navigation from "@/components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation></Navigation>
      <main className="flex flex-col w-full min-h-screen mt-14 relative">
        {children}
      </main>
    </>
  );
}
