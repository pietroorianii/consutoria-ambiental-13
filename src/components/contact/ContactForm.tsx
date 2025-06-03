
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // Validação em tempo real
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
          phone: data.phone,
          company: data.company,
          subject: data.subject,
          message: data.message,
          created_at: new Date().toISOString()
        });
      
      if (error) {
        // Feedback mais específico baseado no tipo de erro
        const errorMessage = error.message.includes('duplicate') 
          ? "Este e-mail já foi cadastrado recentemente" 
          : error.message.includes('connection')
          ? "Problema de conexão. Tente novamente"
          : "Erro interno do servidor. Tente novamente mais tarde";
        
        throw new Error(errorMessage);
      }
      
      toast({
        title: "Mensagem enviada!",
        description: "Em breve entraremos em contato.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar mensagem",
        description: error instanceof Error ? error.message : "Ocorreu um erro inesperado. Por favor, tente novamente.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background rounded-lg border border-border/50 p-8 shadow-sm transform transition-all duration-500 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-6 relative">
        Envie uma mensagem
        <span className="block h-1 w-16 bg-eco-green mt-2 transform origin-left transition-all duration-300 group-hover:w-full"></span>
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Nome completo*</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Seu nome completo"
                      className="border-eco-green/30 focus:border-eco-green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>E-mail*</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="border-eco-green/30 focus:border-eco-green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(00) 00000-0000"
                      className="border-eco-green/30 focus:border-eco-green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Nome da empresa"
                      className="border-eco-green/30 focus:border-eco-green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
                <FormLabel>Assunto*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Assunto da sua mensagem"
                    className="border-eco-green/30 focus:border-eco-green"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
                <FormLabel>Mensagem*</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva sua solicitação ou dúvida"
                    rows={5}
                    className="border-eco-green/30 focus:border-eco-green"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-eco-green hover:bg-eco-green-dark transition-all duration-300 transform hover:scale-[1.01]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
