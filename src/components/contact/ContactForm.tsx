
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulate form submission success
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
  };

  return (
    <div className="bg-background rounded-lg border border-border/50 p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo*</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail*</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input 
              id="company" 
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Assunto*</Label>
          <Input 
            id="subject" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Mensagem*</Label>
          <Textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5} 
            required 
          />
        </div>
        
        <Button type="submit" className="w-full bg-eco-green hover:bg-eco-green-dark">
          Enviar Mensagem
        </Button>
      </form>
    </div>
  );
}
