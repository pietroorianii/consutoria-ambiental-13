
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
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
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="bg-muted py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold">Contato</h1>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              Entre em contato com nossa equipe para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços.
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <section className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
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
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <p className="text-muted-foreground mb-8">
                  Estamos à disposição para responder suas dúvidas e fornecer mais informações sobre nossos serviços de consultoria ambiental.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-eco-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Endereço</h3>
                      <p className="text-muted-foreground">
                        Av. Paulista, 1000, 15º andar<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-eco-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Telefone</h3>
                      <p className="text-muted-foreground">
                        +55 (11) 5555-5555<br />
                        +55 (11) 98765-4321
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-eco-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">E-mail</h3>
                      <p className="text-muted-foreground">
                        contato@ecoconsult.com<br />
                        comercial@ecoconsult.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Horário de Atendimento</h2>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 08:00 - 18:00<br />
                  Sábado e Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="container pb-16">
          <h2 className="text-2xl font-bold mb-6">Localização</h2>
          <div className="w-full h-[400px] bg-muted rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1200&h=400"
              alt="Mapa de localização"
              className="w-full h-full object-cover"
            />
            {/* This would be replaced by an actual Google Maps iframe in a real implementation */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
