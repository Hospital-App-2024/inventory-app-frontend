import { z } from "zod";

export const ownerFormSchema = z.object({
  name: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres"),
  type: z.string(),
});

export type OwnerFormValue = z.infer<typeof ownerFormSchema>;
