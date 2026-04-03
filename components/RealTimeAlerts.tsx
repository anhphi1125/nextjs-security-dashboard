'use client';

import { useEffect, useState } from "react";

type Alert = {
    id: number;
    message: string;
};

export default function RealTimeAlerts() {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newAlert: Alert = {
                id: Date.now(),
                message: `New vulnerability detected on asset ${Math.floor(Math.random() * 10)}`,
            };

            setAlerts((prev) => [newAlert, ...prev]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold mb-2">Real-time Alerts</h2>

            <ul className="space-y-2">
                {alerts.length === 0 && (
                    <p className="text-gray-500 text-sm">No alerts yet</p>
                )}

                {alerts.map((alert) => (
                    <li
                    key={alert.id}
                    className="text-sm bg-red-100 text-red-700 p-2 rounded">
                        {alert.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}