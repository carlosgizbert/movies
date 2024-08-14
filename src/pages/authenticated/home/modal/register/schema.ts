import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(3, "Digite um nome maior")
      .max(30, "Digite um nome menor")
      .regex(/^[A-Za-z\s]+$/, "O nome deve conter apenas letras")
      .refine((value) => value.trim().split(" ").length >= 2, {
        message: "Digite pelo menos um nome e um sobrenome",
      }),
    email: z.string().email("Digite um email válido"),
    password: z.string().min(6, "Digite pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Digite pelo menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type RegisterFormType = z.infer<typeof registerFormSchema>;
