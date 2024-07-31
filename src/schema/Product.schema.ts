import { z } from "zod";

export const ProductFormSchema = z.object({
  name: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres"),
  ownerId: z.string().uuid({
    message: "Propietario no válido",
  }),
  quantity: z.coerce
    .number()
    .min(1, "Valor mínimo 1")
    .transform((val) => Number(val.toFixed(0))),
  status: z.enum(["GOOD", "BAD", "DISCONTINUED", "TRANSFERRED"], {
    message: "Estado no válido",
  }),
  inventoryNumber: z.string().min(3, "Mínimo 3 caracteres"),
  file: z.custom<File>().optional(),
});

export type ProductFormValue = z.infer<typeof ProductFormSchema>;
