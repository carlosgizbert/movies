import { z } from 'zod';

export const registerFormSchema = z.object({
  username: z.string().min(1, 'Preencha o nome completo'),
  email: z.string().email('Digite um email válido'),
  password: z.string().min(6, 'Digite pelo menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'Digite pelo menos 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],  
});

export type RegisterFormType = z.infer<typeof registerFormSchema>;
