import { z } from "zod";

export const subCategorySchema = z.object({
  name: z.string().min(2, "نام گروه باید حداقل 2 کاراکتر باشد"),
  category: z.string(),
});

export type SubCategoryFormType = z.infer<typeof subCategorySchema>;
