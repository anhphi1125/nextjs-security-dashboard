export default function Sidebar() {
    return (
        <aside className="w-64 bg-blue-900 text-blue-100 h-screen p-4">
            <h1 className="text-xl font-bold mb-6">Security Dashboard</h1>
            <ul className="space-y-4">
                <li>Assets</li>
                <li>Alerts</li>
                <li>Metrics</li>
            </ul>
        </aside>
    );
}