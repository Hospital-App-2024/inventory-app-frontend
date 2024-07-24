import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="bg-gray-100 w-full p-2">{children}</main>
    </div>
  );
}
