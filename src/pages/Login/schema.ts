import { z } from 'zod';

export const createUserFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  password: z.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres'),
});

export type CreateUserFormData = z.infer<typeof createUserFormSchema>
