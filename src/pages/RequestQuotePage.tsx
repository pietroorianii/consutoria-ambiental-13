
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, Leaf, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Form validation schema
const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

const RequestQuotePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      documentId: "",
      phone: "",
      email: "",
      segment: "",
      location: "",
      size: "",
      description: "",
      service: "",
      serviceDetails: "",
      deadline: "",
      hasLicense: "não",
      licenseDetails: "",
      hasNotifications: "não",
      notificationDetails: "",
      estimatedBudget: "",
      observations: "",
      termsAccepted: false,
    },
  });

  const totalSteps = 5;
  const watchHasLicense = form.watch("hasLicense");
  const watchHasNotifications = form.watch("hasNotifications");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Processar upload de arquivos (simulado para este exemplo)
      let fileUrls: string[] = [];
      
      if (selectedFiles.length > 0) {
        // Aqui implementaríamos o upload real para o Supabase Storage
        fileUrls = selectedFiles.map(file => file.name); // Simplificado 
      }
      
      // Salvar dados no Supabase (implementação real quando as tabelas forem criadas)
      const { error } = await supabase.from('quote_requests').insert({
        ...data,
        file_attachments: fileUrls,
        created_at: new Date().toISOString()
      });
      
      if (error) throw error;
      
      setShowSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar a solicitação",
        description: "Ocorreu um problema ao processar seu pedido. Tente novamente mais tarde."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: string[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ["fullName", "documentId", "phone", "email"];
        break;
      case 2:
        fieldsToValidate = ["segment", "location", "size", "description"];
        break;
      case 3:
        fieldsToValidate = ["service", "serviceDetails", "deadline"];
        break;
      case 4:
        fieldsToValidate = ["hasLicense", "hasNotifications"];
        if (watchHasLicense === "sim") fieldsToValidate.push("licenseDetails");
        if (watchHasNotifications === "sim") fieldsToValidate.push("notificationDetails");
        break;
      default:
        break;
    }
    
    const result = await form.trigger(fieldsToValidate as any);
    if (result) setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-eco-green to-eco-blue p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Leaf className="h-8 w-8" />
            Solicitação de Orçamento
          </h1>
          <p className="mt-2 opacity-90">
            Preencha o formulário abaixo para solicitar um orçamento personalizado para seu projeto.
          </p>
        </div>

        {/* Barra de progresso */}
        <div className="px-6 pt-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div 
              className="bg-eco-green h-2.5 rounded-full transition-all duration-300 ease-in-out" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mb-6">
            <span className={currentStep >= 1 ? "text-eco-green font-medium" : ""}>Dados</span>
            <span className={currentStep >= 2 ? "text-eco-green font-medium" : ""}>Empreendimento</span>
            <span className={currentStep >= 3 ? "text-eco-green font-medium" : ""}>Serviço</span>
            <span className={currentStep >= 4 ? "text-eco-green font-medium" : ""}>Contexto</span>
            <span className={currentStep >= 5 ? "text-eco-green font-medium" : ""}>Finalizar</span>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6">
            {/* Etapa 1: Dados do Solicitante */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold text-eco-green">
                  Dados do Solicitante
                </h2>
                
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="documentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF/CNPJ</FormLabel>
                      <FormControl>
                        <Input placeholder="000.000.000-00 ou 00.000.000/0000-00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Etapa 2: Informações do Empreendimento */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold text-eco-green">
                  Informações do Empreendimento
                </h2>
                
                <FormField
                  control={form.control}
                  name="segment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Segmento da Atividade</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o segmento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="industria">Indústria</SelectItem>
                          <SelectItem value="construcao">Construção Civil</SelectItem>
                          <SelectItem value="agricultura">Agricultura</SelectItem>
                          <SelectItem value="outorga">Outorga</SelectItem>
                          <SelectItem value="mineracao">Mineração</SelectItem>
                          <SelectItem value="energia">Energia</SelectItem>
                          <SelectItem value="saneamento">Saneamento</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Localização (Cidade/Estado)</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: São Paulo/SP" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tamanho do Empreendimento</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tamanho" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pequeno">Pequeno</SelectItem>
                          <SelectItem value="medio">Médio</SelectItem>
                          <SelectItem value="grande">Grande</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição Breve da Atividade</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva resumidamente a atividade do seu empreendimento" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Etapa 3: Serviço Desejado */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold text-eco-green">
                  Serviço Desejado
                </h2>
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Serviço</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o serviço" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="licenciamento">Licenciamento Ambiental</SelectItem>
                          <SelectItem value="pgrs">PGRS - Plano de Gerenciamento de Resíduos Sólidos</SelectItem>
                          <SelectItem value="eia-rima">EIA/RIMA - Estudo e Relatório de Impacto Ambiental</SelectItem>
                          <SelectItem value="outorga">Outorga de Uso da Água</SelectItem>
                          <SelectItem value="recuperacao">Recuperação de Áreas Degradadas</SelectItem>
                          <SelectItem value="consultoria">Consultoria Ambiental</SelectItem>
                          <SelectItem value="auditoria">Auditoria Ambiental</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Detalhamento do Serviço</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva com mais detalhes o serviço que você precisa" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prazo Desejado</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o prazo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="imediato">Imediato</SelectItem>
                          <SelectItem value="30dias">30 dias</SelectItem>
                          <SelectItem value="60dias">60 dias</SelectItem>
                          <SelectItem value="90dias">90 dias ou mais</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Etapa 4: Contexto Ambiental */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold text-eco-green">
                  Contexto Ambiental
                </h2>
                
                <FormField
                  control={form.control}
                  name="hasLicense"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Já possui licenciamento ambiental?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sim" id="license-yes" />
                            <label htmlFor="license-yes">Sim</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="não" id="license-no" />
                            <label htmlFor="license-no">Não</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {watchHasLicense === "sim" && (
                  <FormField
                    control={form.control}
                    name="licenseDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detalhes do licenciamento atual</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Informe o tipo de licença, órgão emissor, validade, etc." 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                
                <FormField
                  control={form.control}
                  name="hasNotifications"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Responde a notificações ambientais?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sim" id="notification-yes" />
                            <label htmlFor="notification-yes">Sim</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="não" id="notification-no" />
                            <label htmlFor="notification-no">Não</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {watchHasNotifications === "sim" && (
                  <FormField
                    control={form.control}
                    name="notificationDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detalhes das notificações</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva as notificações recebidas, órgão emissor, status, etc." 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            )}

            {/* Etapa 5: Informações Adicionais e Confirmação */}
            {currentStep === 5 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold text-eco-green">
                  Informações Adicionais
                </h2>
                
                <FormField
                  control={form.control}
                  name="estimatedBudget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Orçamento Estimado (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: R$ 5.000,00" {...field} />
                      </FormControl>
                      <FormDescription>
                        Valor aproximado que você espera investir neste serviço
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="observations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Observações Adicionais (opcional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Informações complementares que possam ser relevantes" 
                          className="min-h-[80px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Anexos (opcional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        multiple
                        id="file-upload"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center cursor-pointer"
                      >
                        <Upload className="h-10 w-10 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500">
                          Arraste arquivos ou clique para selecionar
                        </span>
                        <span className="text-xs text-gray-400 mt-1">
                          (PDF, DOC, JPG, PNG - Max 10MB)
                        </span>
                      </label>
                    </div>
                    
                    {selectedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium">Arquivos anexados:</p>
                        <ul className="text-sm">
                          {selectedFiles.map((file, index) => (
                            <li key={index} className="flex justify-between items-center py-1">
                              <span>{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 text-xs"
                              >
                                Remover
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Aceito os termos de uso e política de privacidade
                          </FormLabel>
                          <FormDescription>
                            Seus dados serão utilizados apenas para o atendimento da sua solicitação.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              {currentStep > 1 ? (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevStep}
                >
                  Voltar
                </Button>
              ) : (
                <div></div>
              )}
              
              {currentStep < totalSteps ? (
                <Button 
                  type="button" 
                  onClick={nextStep}
                >
                  Próximo
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  className="bg-eco-green hover:bg-eco-green/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>

      {/* Modal de sucesso */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-eco-green">
              <Check className="h-6 w-6" />
              Solicitação Enviada com Sucesso!
            </DialogTitle>
            <DialogDescription>
              Recebemos sua solicitação de orçamento e entraremos em contato em até 48 horas.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg my-4">
            <p className="text-sm text-green-800 dark:text-green-300">
              Um e-mail de confirmação foi enviado para o endereço informado com um resumo da sua solicitação.
            </p>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                setShowSuccess(false);
                navigate("/");
              }}
            >
              Voltar para a Página Inicial
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestQuotePage;
