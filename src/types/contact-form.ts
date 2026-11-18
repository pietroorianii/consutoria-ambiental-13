
import * as z from "zod";

export const contactSchema = z.object({
  name: z.string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" })
    // aceita acentos, hífen, apóstrofo e ponto (ex.: "Ana-Maria D'Ávila Jr.")
    .regex(/^[\p{L}\s'.-]+$/u, { message: "Use apenas letras no nome" }),
  email: z.string()
    .email({ message: "Digite um e-mail válido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\d\s()\-+]+$/.test(val), { 
      message: "Digite um telefone válido" 
    }),
  company: z.string()
    .optional()
    .refine((val) => !val || val.length <= 100, { 
      message: "Nome da empresa deve ter no máximo 100 caracteres" 
    }),
  subject: z.string()
    .min(5, { message: "Assunto deve ter pelo menos 5 caracteres" })
    .max(200, { message: "Assunto deve ter no máximo 200 caracteres" }),
  message: z.string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(2000, { message: "Mensagem deve ter no máximo 2000 caracteres" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
