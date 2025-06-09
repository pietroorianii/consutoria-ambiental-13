
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { contactSchema, ContactFormData } from "@/types/contact-form";
import { getErrorMessage } from "@/utils/error-handler";

export const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('CONTATOS')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          subject: data.subject,
          message: data.message,
          created_at: new Date().toISOString()
        });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      const errorMessage = getErrorMessage(error);
      
      toast({
        variant: "destructive",
        title: "Erro ao enviar mensagem",
        description: errorMessage,
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    handleSubmit
  };
};
