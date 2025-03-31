
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
      // Process file uploads (simplified for this example)
      let fileUrls: string[] = [];
      
      if (selectedFiles.length > 0) {
        // Here we would implement the real upload to Supabase Storage
        fileUrls = selectedFiles.map(file => file.name); 
      }
      
      // Prepare data for Supabase
      const quoteData = {
        full_name: data.fullName,
        company: data.company,
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
        license_details: data.licenseDetails,
        has_notifications: data.hasNotifications,
        notification_details: data.notificationDetails,
        estimated_budget: data.estimatedBudget,
        observations: data.observations,
        file_attachments: fileUrls,
        terms_accepted: data.termsAccepted,
        created_at: new Date().toISOString()
      };
      
      // Save data to Supabase using type assertion to bypass type checking temporarily
      // This is a workaround until the Supabase types are properly updated
      const { error } = await (supabase as any)
        .from('quote_requests')
        .insert(quoteData);
      
      if (error) throw error;
      
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error submitting request",
        description: "There was a problem processing your request. Please try again later."
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
