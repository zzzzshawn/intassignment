import MobileNav from "@/components/Mobile/MobileNav";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen border flex max-sm:flex-col bg-white text-black font-inter">
      <Sidebar />
      <MobileNav/>
      <div className="sm:p-5 w-full border-l">{children}</div>
    </main>
  );
}
