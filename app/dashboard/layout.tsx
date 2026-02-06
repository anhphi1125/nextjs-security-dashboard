import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
