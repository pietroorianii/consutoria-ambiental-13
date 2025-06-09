
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FormValues, formSchema } from "@/types/quote-request";

export const useQuoteRequest = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Validação em tempo real
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
      
      // Validar tamanho dos arquivos (máximo 10MB por arquivo)
      const maxFileSize = 10 * 1024 * 1024; // 10MB
      const invalidFiles = newFiles.filter(file => file.size > maxFileSize);
      
      if (invalidFiles.length > 0) {
        toast({
          variant: "destructive",
          title: "Arquivo muito grande",
          description: `Os seguintes arquivos excedem 10MB: ${invalidFiles.map(f => f.name).join(', ')}`,
          duration: 5000,
        });
        return;
      }
      
      // Validar tipos de arquivo
      const allowedTypes = [
        'application/pdf', 
        'image/jpeg', 
        'image/png', 
        'image/jpg',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      const invalidTypes = newFiles.filter(file => !allowedTypes.includes(file.type));
      
      if (invalidTypes.length > 0) {
        toast({
          variant: "destructive",
          title: "Tipo de arquivo não suportado",
          description: "Apenas PDF, JPEG, PNG e DOC são permitidos.",
          duration: 5000,
        });
        return;
      }
      
      setSelectedFiles(prev => [...prev, ...newFiles]);
      
      toast({
        title: "Arquivos adicionados",
        description: `${newFiles.length} arquivo(s) adicionado(s) com sucesso.`,
        duration: 3000,
      });
    }
  };

  const removeFile = (index: number) => {
    const removedFile = selectedFiles[index];
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    
    toast({
      title: "Arquivo removido",
      description: `${removedFile.name} foi removido da lista.`,
      duration: 3000,
    });
  };

  const getErrorMessage = (error: any): string => {
    if (!error) return "Erro inesperado. Tente novamente.";
    
    const message = error.message || error.toString();
    
    if (message.includes('duplicate key')) {
      return "Esta solicitação já foi enviada recentemente. Aguarde alguns minutos antes de enviar novamente.";
    }
    
    if (message.includes('connection') || message.includes('network')) {
      return "Problema de conexão. Verifique sua internet e tente novamente.";
    }
    
    if (message.includes('timeout')) {
      return "A solicitação demorou muito para ser processada. Tente novamente.";
    }
    
    if (message.includes('permission') || message.includes('auth')) {
      return "Erro de autorização. Entre em contato conosco diretamente.";
    }
    
    if (message.includes('validation') || message.includes('invalid')) {
      return "Dados inválidos. Verifique as informações e tente novamente.";
    }
    
    return "Erro interno do servidor. Tente novamente em alguns minutos.";
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Preparar anexos de arquivo
      const fileAttachments = selectedFiles.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
      }));
      
      // Inserir dados no Supabase
      const { error } = await supabase
        .from('ORÇAMENTOS')
        .insert({
          full_name: data.fullName,
          company: data.company || null,
          document_id: data.documentId,
          phone: data.phone,
          email: data.email,
          segment: data.segment,
          location: data.location,
          size: data.size,
          description: data.description,
          service: data.service,
          service_details: data.serviceDetails,
          deadline: data.deadline,
          has_license: data.hasLicense,
          license_details: data.licenseDetails || null,
          has_notifications: data.hasNotifications,
          notification_details: data.notificationDetails || null,
          estimated_budget: data.estimatedBudget || null,
          observations: data.observations || null,
          file_attachments: fileAttachments,
          terms_accepted: data.termsAccepted,
          created_at: new Date().toISOString()
        });
      
      if (error) throw error;
      
      setShowSuccess(true);
      
      // Reset form após sucesso
      form.reset();
      setSelectedFiles([]);
      setCurrentStep(1);
      
    } catch (error) {
      console.error("Error submitting quote request:", error);
      
      const errorMessage = getErrorMessage(error);
      
      toast({
        variant: "destructive",
        title: "Erro ao enviar solicitação",
        description: errorMessage,
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    
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
    
    const result = await form.trigger(fieldsToValidate);
    
    if (result) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      
      // Scroll para o topo do formulário
      const formElement = document.querySelector('form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios antes de continuar.",
        duration: 5000,
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    
    // Scroll para o topo do formulário
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return {
    form,
    isSubmitting,
    showSuccess,
    setShowSuccess,
    currentStep,
    totalSteps,
    selectedFiles,
    handleFileChange,
    removeFile,
    onSubmit,
    nextStep,
    prevStep
  };
};
