"use client";

import { fetchAssets } from "@/app/lib/api";
import AddAssetForm from "@/components/AddAssetForm";
import { useQuery } from "@tanstack/react-query";

type Asset = {
  id: number;
  name: string;
  type: string;
  status: string;
};

export default function AssetsPage() {
  const {
    data: assets,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
  });

  const handleAddAsset = (data: any) => {
    console.log('new asset: ', data);
  }

  if (isLoading) return <p>Loading assets...</p>;

  if (isError) {
    return (
      <div>
        <p>Error loading assets</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }
  return (
    <div className="h-screen">
      <h1 className="text-xl font-bold mb-4 text-black">Assets</h1>

      {/*add asset---------------------*/}
      <AddAssetForm onAdd={handleAddAsset}/>
      
      {/*assets---------------------*/}

      <table className="w-full border border-blue-900">
        <thead className="bg-blue-400">
          <tr className="text-blue-900">
            <th className="border border-blue-900 p-2 text-left">Name</th>
            <th className="border border-blue-900 p-2 text-left">Type</th>
            <th className="border border-blue-900 p-2 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset: Asset) => (
            <tr key={asset.id} className="text-black">
              <td className="border border-blue-900 p-2">{asset.name}</td>
              <td className="border border-blue-900 p-2">{asset.type}</td>
              <td className="border border-blue-900 p-2">{asset.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
