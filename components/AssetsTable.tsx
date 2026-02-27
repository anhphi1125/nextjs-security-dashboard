type Asset = {
  id: number;
  name: string;
  type: string;
  status: string;
};

export default function AssetsTable({ assets }: { assets: Asset[] }) {
  return (
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
  );
}
