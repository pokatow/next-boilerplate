import Navigation from "@/components/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation></Navigation>
      <main className="flex flex-col w-full min-h-screen pt-16">
        {children}
      </main>
    </>
  );
}
