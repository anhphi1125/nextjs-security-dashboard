'use client';

import { useEffect, useState } from "react";

type Asset = {
    id: number;
    name: string;
    type: string;
    status: string;
};

export default function AssetsPage(){
    const [assetsList, setAssetsList] = useState<Asset[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/assets')
        .then((res) => res.json())
        .then((data) => {
            setAssetsList(data);
            setLoading(false);
        });
    }, []);
    return (
        <div className="h-screen bg-white p-4">
            <h1 className="text-xl font-bold mb-4 text-black">Assets</h1>

            {loading ? (<p>Loading assets...</p>) : (
                <table className="w-full border border-blue-900">
                    <thead className="bg-blue-400">
                        <tr className="text-blue-900">
                            <th className="border border-blue-900 p-2 text-left">Name</th>
                            <th className="border border-blue-900 p-2 text-left">Type</th>
                            <th className="border border-blue-900 p-2 text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {assetsList.map((asset) => (
                            <tr key={asset.id} className="text-black">
                                <td className="border border-blue-900 p-2">{asset.name}</td>
                                <td className="border border-blue-900 p-2">{asset.type}</td>
                                <td className="border border-blue-900 p-2">{asset.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}