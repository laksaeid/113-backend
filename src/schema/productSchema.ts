import { z } from "zod";

export const productSchema = z.object({
  category: z.string(),
  subcategory: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  brand: z.string(),
  description: z.string(),
  thumbnail: z.any(),
  images: z.any(),
});
export type ProductFormType = z.infer<typeof productSchema>;
