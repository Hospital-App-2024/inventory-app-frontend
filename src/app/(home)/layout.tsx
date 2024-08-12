import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex w-screen">
      <Sidebar />
      <main className="bg-gray-100 p-2 md:p-4 lg:p-6 w-full overflow-hidden ml-14">
        {children}
      </main>
    </div>
  );
}
