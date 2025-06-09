
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/cta-section";
import { serviceDetails } from "@/data/serviceDetails";
import { ArrowLeft, CheckCircle, Clock, FileText, Users, AlertCircle, Target, Lightbulb, Shield, Building2, Zap } from "lucide-react";

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetails[serviceId] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <PageWrapper>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Serviço não encontrado</h1>
          <p className="text-muted-foreground mb-8">O serviço solicitado não existe ou foi removido.</p>
          <Button asChild>
            <Link to="/services">Voltar aos Serviços</Link>
          </Button>
        </div>
      </PageWrapper>
    );
  }

  const IconComponent = service.icon;

  return (
    <PageWrapper>
      {/* Banner Heroico Melhorado */}
      <div className="bg-gradient-to-r from-eco-green via-eco-green-dark to-eco-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" 
             style={{backgroundImage: `url('${service.image}')`}}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-eco-green/20"></div>
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm">
              <Link to="/services" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar aos Serviços
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col items-center gap-8 text-center max-w-5xl mx-auto">
            <div className="p-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-float shadow-2xl">
              <IconComponent className="h-20 w-20 text-white" />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-primary leading-tight">
                {service.title}
              </h1>
              
              <div className="h-1 w-32 bg-white/60 rounded-full mx-auto mb-8"></div>
              
              <p className="text-white/95 text-xl md:text-2xl leading-relaxed font-body max-w-4xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container py-20 space-y-20">
        
        {/* Seção 1: Entendendo o Serviço */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary text-gray-900">
              Entendendo o Serviço: {service.title.split(' ').slice(0, 3).join(' ')}
            </h2>
            <p className="text-lg text-eco-green-dark font-medium">
              O que é e por que é crucial para sua empresa?
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-eco-green/8 to-eco-blue/5 border-eco-green/30 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-eco-green/15 rounded-xl flex-shrink-0">
                      <FileText className="h-8 w-8 text-eco-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 font-secondary">
                        Definição e Importância
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 font-body">
                        {service.whatIs}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-white border-eco-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="h-5 w-5 text-eco-blue" />
                    <h4 className="font-semibold text-eco-blue-dark">Ideal para:</h4>
                  </div>
                  <p className="text-sm text-gray-600">Empresas que buscam conformidade legal e excelência ambiental</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-eco-accent-orange/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="h-5 w-5 text-eco-accent-orange" />
                    <h4 className="font-semibold text-eco-accent-orange">Quando contratar:</h4>
                  </div>
                  <p className="text-sm text-gray-600">Antes de iniciar operações ou durante expansões</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-eco-green/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="h-5 w-5 text-eco-green" />
                    <h4 className="font-semibold text-eco-green-dark">Resultado:</h4>
                  </div>
                  <p className="text-sm text-gray-600">Operação legal, redução de riscos e vantagem competitiva</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção 2: Principais Benefícios */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary text-gray-900">
              Principais Benefícios para o Seu Negócio
            </h2>
            <p className="text-lg text-eco-green-dark font-medium">
              Como a L&P Soluções Ambientais transforma seus desafios em oportunidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <Card key={index} className="group border-eco-green/20 hover:border-eco-green/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-eco-green/10 rounded-lg group-hover:bg-eco-green/20 transition-colors flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-eco-green" />
                    </div>
                    <p className="font-body text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seção 3: Processo Simplificado com Timeline Visual */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary text-gray-900">
              Nosso Processo Simplificado: Passo a Passo
            </h2>
            <p className="text-lg text-eco-green-dark font-medium">
              Transparência e eficiência em cada etapa
            </p>
          </div>
          
          {/* Timeline visual melhorada */}
          <div className="relative">
            {/* Linha central da timeline */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-8 bottom-8 w-1 bg-gradient-to-b from-eco-green via-eco-blue to-eco-green rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {service.steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Número da etapa (centro da timeline) */}
                  <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-eco-green to-eco-blue text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Conteúdo da etapa */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="border-eco-green/20 hover:border-eco-green/40 transition-all duration-300 hover:shadow-lg bg-white">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <h3 className="font-semibold text-xl text-gray-900 font-secondary">{step.title}</h3>
                          <div className="flex items-center gap-2 text-sm bg-eco-blue/10 text-eco-blue px-3 py-1 rounded-full whitespace-nowrap">
                            <Clock className="h-4 w-4" />
                            {step.duration}
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-body">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Espaço vazio no lado oposto para manter o layout balanceado */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 4: Informações Técnicas e Práticas */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary text-gray-900">
              O Que Você Precisa Saber
            </h2>
            <p className="text-lg text-eco-green-dark font-medium">
              Informações importantes para agilizar seu projeto
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="documents" className="border border-eco-green/20 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-green-dark">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-eco-earth" />
                  Documentação Necessária
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.documents.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-eco-earth/5 rounded-lg">
                      <div className="w-2 h-2 bg-eco-earth rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-body text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timeline" className="border border-eco-blue/20 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-blue-dark">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-eco-blue" />
                  Prazos e Cronograma
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="bg-eco-blue/5 rounded-lg p-4">
                  <p className="text-gray-600 font-body leading-relaxed">{service.timeline}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legal" className="border border-eco-green-dark/20 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-green-dark">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-eco-green-dark" />
                  Base Legal Aplicável
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 gap-3">
                  {service.legalBasis.map((legal, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-eco-green/5 rounded-lg">
                      <div className="w-2 h-2 bg-eco-green-dark rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-body text-sm">{legal}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tips" className="border border-eco-accent-orange/20 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-accent-orange">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-eco-accent-orange" />
                  Dicas Especializadas da L&P
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 gap-3">
                  {service.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-eco-accent-orange/5 rounded-lg">
                      <div className="w-2 h-2 bg-eco-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-body text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Seção 5: CTA Final Aprimorado */}
        <section className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-eco-green/10 via-white to-eco-blue/10 border-eco-green/30 overflow-hidden shadow-xl">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 leaf-pattern opacity-[0.03]"></div>
              <div className="relative z-10">
                <div className="p-6 bg-eco-green/15 rounded-full w-fit mx-auto mb-8">
                  <Target className="h-12 w-12 text-eco-green" />
                </div>
                <h3 className="text-3xl font-bold mb-6 font-primary text-gray-900">
                  Pronto para Implementar {service.title}?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-body text-lg leading-relaxed">
                  Nossa equipe de especialistas está pronta para auxiliar sua empresa a atender 
                  todas as exigências ambientais com excelência, eficiência e total transparência no processo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark text-lg px-8 py-6">
                    <Link to="/request-quote">Solicitar Orçamento Detalhado</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-eco-green text-eco-green hover:bg-eco-green/10 text-lg px-8 py-6">
                    <Link to="/contact">Falar com Especialistas</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* CTA Section final */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 via-eco-blue/3 to-eco-earth/10"></div>
        <CTASection />
      </div>
    </PageWrapper>
  );
};

export default ServiceDetailPage;
