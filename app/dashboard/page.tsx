import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DashboardPage(){
    return (
        <div className="h-screen flex">
            <Sidebar/>
            <div className="flex-1 flex-col flex">
                <Header/>
                <main className="p-6 bg-gray-100 flex-1 overflow-auto">
                    <p className="text-gray-600">Welcome to the security monitoring dashboard.</p>
                </main>
            </div>
        </div>
    );
}