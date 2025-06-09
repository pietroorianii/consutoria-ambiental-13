
import * as z from "zod";

// Form validation schema com validações mais específicas
export const formSchema = z.object({
  // Dados do Solicitante
  fullName: z.string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, { message: "Nome deve conter apenas letras e espaços" }),
  company: z.string().optional(),
  documentId: z.string()
    .min(11, { message: "CPF deve ter 11 dígitos ou CNPJ 14 dígitos" })
    .regex(/^[\d.-/]+$/, { message: "Apenas números, pontos, hífens e barras são permitidos" }),
  phone: z.string()
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
    .max(15, { message: "Telefone deve ter no máximo 15 dígitos" })
    .regex(/^[\d\s()\-+]+$/, { message: "Formato de telefone inválido" }),
  email: z.string()
    .email({ message: "Digite um e-mail válido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),

  // Informações do Empreendimento
  segment: z.string({ required_error: "Selecione um segmento" }),
  location: z.string()
    .min(3, { message: "Informe a localização completa (cidade/estado)" })
    .max(100, { message: "Localização deve ter no máximo 100 caracteres" }),
  size: z.string({ required_error: "Selecione o tamanho do empreendimento" }),
  description: z.string()
    .min(10, { message: "Descrição deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Descrição deve ter no máximo 1000 caracteres" }),

  // Serviço Desejado
  service: z.string({ required_error: "Selecione um serviço" }),
  serviceDetails: z.string()
    .min(10, { message: "Forneça detalhes específicos do serviço (mínimo 10 caracteres)" })
    .max(2000, { message: "Detalhes do serviço devem ter no máximo 2000 caracteres" }),
  deadline: z.string({ required_error: "Selecione um prazo desejado" }),

  // Contexto Ambiental
  hasLicense: z.string(),
  licenseDetails: z.string()
    .optional()
    .refine((val, ctx) => {
      if (ctx.parent.hasLicense === "sim" && (!val || val.trim().length < 10)) {
        return false;
      }
      return true;
    }, { message: "Forneça detalhes sobre as licenças existentes (mínimo 10 caracteres)" }),
  hasNotifications: z.string(),
  notificationDetails: z.string()
    .optional()
    .refine((val, ctx) => {
      if (ctx.parent.hasNotifications === "sim" && (!val || val.trim().length < 10)) {
        return false;
      }
      return true;
    }, { message: "Forneça detalhes sobre as notificações existentes (mínimo 10 caracteres)" }),

  // Informações Adicionais
  estimatedBudget: z.string().optional(),
  observations: z.string()
    .optional()
    .refine((val) => !val || val.length <= 2000, { 
      message: "Observações devem ter no máximo 2000 caracteres" 
    }),
  
  // Confirmação
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos e condições para continuar"
  }),
});

export type FormValues = z.infer<typeof formSchema>;
