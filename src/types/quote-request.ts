
import * as z from "zod";

// Form validation schema
export const formSchema = z.object({
  // Dados do Solicitante
  fullName: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  company: z.string().optional(),
  documentId: z.string().min(11, { message: "CPF/CNPJ inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  email: z.string().email({ message: "E-mail inválido" }),

  // Informações do Empreendimento
  segment: z.string({ required_error: "Selecione um segmento" }),
  location: z.string().min(3, { message: "Informe a localização" }),
  size: z.string({ required_error: "Selecione o tamanho" }),
  description: z.string().min(10, { message: "Descreva brevemente sua atividade" }),

  // Serviço Desejado
  service: z.string({ required_error: "Selecione um serviço" }),
  serviceDetails: z.string().min(10, { message: "Forneça detalhes do serviço" }),
  deadline: z.string({ required_error: "Selecione um prazo" }),

  // Contexto Ambiental
  hasLicense: z.string(),
  licenseDetails: z.string().optional(),
  hasNotifications: z.string(),
  notificationDetails: z.string().optional(),

  // Informações Adicionais
  estimatedBudget: z.string().optional(),
  observations: z.string().optional(),
  
  // Confirmação
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos para continuar"
  }),
});

export type FormValues = z.infer<typeof formSchema>;
