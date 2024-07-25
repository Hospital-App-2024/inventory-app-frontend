import { ProductStatus } from "@/interfaces/product.interface";
import { z } from "zod";

export const areas = z.object({
  name: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres"),
});

export type AreaFormValue = z.infer<typeof areas>;

export const workers = z.object({
  name: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres"),
  areaId: z.string(),
});

export type WorkerFormValue = z.infer<typeof workers>;

export const ProductFormSchema = z.object({
  file: z.custom<File>().optional(),
  name: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres"),
  resourceId: z.string().uuid(),
  quantity: z.number().int().min(1, "Mínimo 1").max(10000, "Máximo 10000"),
  status: z.enum([
    ProductStatus.GOOD,
    ProductStatus.BAD,
    ProductStatus.DISCONTINUED,
    ProductStatus.TRANSFERRED,
  ]),
});

export type ProductFormValue = z.infer<typeof ProductFormSchema>;
