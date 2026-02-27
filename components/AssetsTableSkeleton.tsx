export default function AssetsTableSkeleton() {
    return (
        <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
                <div
                key={i}
                className="h-10 bg-gray-200 rounded animate-pulse"
                />
            ))}
        </div>
    );
}