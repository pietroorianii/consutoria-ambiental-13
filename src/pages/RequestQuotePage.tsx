import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const serviceTypes = [
  { value: "licensing", label: "Licenciamento Ambiental" },
  { value: "monitoring", label: "Monitoramento e Análises" },
  { value: "reports", label: "Planos e Relatórios" },
  { value: "consulting", label: "Consultoria Especializada" },
  { value: "training", label: "Treinamentos Ambientais" },
  { value: "management", label: "Gestão Ambiental" },
  { value: "other", label: "Outro Serviço" },
];

const companySize = [
  { value: "micro", label: "Microempresa (até 9 funcionários)" },
  { value: "small", label: "Pequena Empresa (10 a 49 funcionários)" },
  { value: "medium", label: "Média Empresa (50 a 99 funcionários)" },
  { value: "large", label: "Grande Empresa (100+ funcionários)" },
];

const RequestQuotePage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Solicitação enviada",
        description: "Recebemos sua solicitação de orçamento. Entraremos em contato em breve.",
        variant: "default",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-eco-green/90 to-eco-blue/90 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1200&h=600')" }}>
        </div>
        <div className="absolute inset-0 leaf-pattern mix-blend-overlay opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-blue/20"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm animate-float">
              <FileText className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-up" style={{ 
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0px 2px 4px rgba(0,0,0,0.2)"
              }}>Solicitar Orçamento</h1>
              <p className="text-white/90 mt-4 max-w-3xl animate-fade-up" style={{ 
                fontFamily: "'Roboto', sans-serif", 
                animationDelay: "0.1s"
              }}>
                Preencha o formulário abaixo com os detalhes do seu projeto para receber uma proposta personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quote Request Form */}
      <section className="container py-16 relative">
        <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md border border-eco-green/10 hover:border-eco-green/20 transition-all animate-fade-up">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Informações da Empresa</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Nome da Empresa</Label>
                  <Input id="company" placeholder="Razão social da empresa" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" placeholder="00.000.000/0000-00" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Nome do Contato</Label>
                  <Input id="contact-name" placeholder="Nome completo" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="position">Cargo</Label>
                  <Input id="position" placeholder="Seu cargo na empresa" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company-size">Porte da Empresa</Label>
                <Select required>
                  <SelectTrigger id="company-size">
                    <SelectValue placeholder="Selecione o porte da empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    {companySize.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Detalhes do Serviço</h2>
              
              <div className="space-y-2">
                <Label htmlFor="service-type">Tipo de Serviço</Label>
                <Select required>
                  <SelectTrigger id="service-type">
                    <SelectValue placeholder="Selecione o tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="project-description">Descrição do Projeto</Label>
                <Textarea 
                  id="project-description" 
                  placeholder="Descreva detalhadamente o projeto ou necessidade da sua empresa..." 
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deadline">Prazo Desejado</Label>
                <Input id="deadline" type="date" required />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Concordo com os termos de serviço e política de privacidade
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Seus dados serão utilizados apenas para fins de orçamento.
                  </p>
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full btn-gradient text-white shimmer-button" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Enviar Solicitação
                </span>
              )}
            </Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default RequestQuotePage;
