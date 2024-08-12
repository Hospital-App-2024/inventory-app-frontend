import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Debes ingresar un correo válido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export type LoginFormValue = z.infer<typeof loginFormSchema>;
