
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert contact data into Supabase
      const { error } = await supabase
        .from('contacts')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message
        });
      
      if (error) throw error;
      
      toast({
        title: "Mensagem enviada!",
        description: "Em breve entraremos em contato.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
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
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
            <Label htmlFor="name">Nome completo*</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              className="border-eco-green/30 focus:border-eco-green"
            />
          </div>
          
          <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
            <Label htmlFor="email">E-mail*</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              className="border-eco-green/30 focus:border-eco-green"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
            <Label htmlFor="phone">Telefone</Label>
            <Input 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-eco-green/30 focus:border-eco-green"
            />
          </div>
          
          <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
            <Label htmlFor="company">Empresa</Label>
            <Input 
              id="company" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border-eco-green/30 focus:border-eco-green"
            />
          </div>
        </div>
        
        <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
          <Label htmlFor="subject">Assunto*</Label>
          <Input 
            id="subject" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required 
            className="border-eco-green/30 focus:border-eco-green"
          />
        </div>
        
        <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
          <Label htmlFor="message">Mensagem*</Label>
          <Textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5} 
            required 
            className="border-eco-green/30 focus:border-eco-green"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-eco-green hover:bg-eco-green-dark transition-all duration-300 transform hover:scale-[1.01]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </div>
  );
}
