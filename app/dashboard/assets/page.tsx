"use client";

import { fetchAssets } from "@/app/lib/api";
import { AssetFormData } from "@/app/lib/schema";
import AddAssetForm from "@/components/AddAssetForm";
import AssetsTable from "@/components/AssetsTable";
import AssetsTableSkeleton from "@/components/AssetsTableSkeleton";
import { useQuery, useQueryClient } from "@tanstack/react-query";

type Asset = {
  id: number;
  name: string;
  type: string;
  status: string;
};

export default function AssetsPage() {
  const queryClient = useQueryClient();

  const {
    data: assets,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
  });

  const handleAddAsset = (data: AssetFormData) => {
    const newAsset: Asset = {
      id: Date.now(), //fake id
      name: data.name,
      type: data.type,
      status: 'Active',
    };

    queryClient.setQueryData<Asset[]>(['assets'], (old) => {
      return old ? [newAsset, ...old] : [newAsset];
    });
  }

  if (isLoading) return <AssetsTableSkeleton/>;

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
      <AssetsTable assets={assets}/>
    </div>
  );
}
