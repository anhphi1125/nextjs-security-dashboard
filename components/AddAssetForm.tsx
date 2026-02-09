'use client';

import { AssetFormData, assetSchema } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddAssetForm({
    onAdd,
} : {
    onAdd: (data: AssetFormData) => void;
}) {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<AssetFormData>({
        resolver: zodResolver(assetSchema),
    });

    const onSubmit = (data: AssetFormData) => {
        onAdd(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-6 space-y-4">
            <div>
                <input
                {...register('name')}
                placeholder="Asset name"
                className="border p-2 w-full text-black rounded"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>

            <div>
                <input
                {...register('type')}
                placeholder="Asset type"
                className="border p-2 w-full text-black rounded"
                />
                {errors.type && (
                    <p className="text-red-500 text-sm">{errors.type.message}</p>
                )}
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Asset</button>
        </form>
    );
}