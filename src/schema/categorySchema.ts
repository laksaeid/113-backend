import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(2, "نام گروه باید حداقل 2 کاراکتر باشد"),
});

export type CategoryFormType = z.infer<typeof categorySchema>;
