import z from "zod";

export const assetSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    type: z.string().min(2, 'Type is required'),
});

export type AssetFormData = z.infer<typeof assetSchema>;