import { ObservationStatus } from "@/interfaces/inventory";
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

export const ItemFormSchema = z.object({
  images: z.custom<File[]>(),
  name: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres"),
  tool: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres"),
  quantity: z.number().int().min(1, "Mínimo 1").max(10000, "Máximo 10000"),
  status: z.nativeEnum(ObservationStatus),
});

export type ItemFormValue = z.infer<typeof ItemFormSchema>;
