
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/cta-section";
import { serviceDetails } from "@/data/serviceDetails";
import { ArrowLeft, CheckCircle, Clock, FileText, Users, AlertCircle, Target, Lightbulb, Shield } from "lucide-react";

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
      {/* Hero Section with enhanced design */}
      <div className="bg-gradient-to-r from-eco-green to-eco-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" 
             style={{backgroundImage: `url('${service.image}')`}}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-blue/20"></div>
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <Link to="/services" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar aos Serviços
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <div className="p-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-float">
              <IconComponent className="h-16 w-16 text-white" />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-primary">
                {service.title}
              </h1>
              
              <div className="h-1 w-32 bg-white/50 rounded-full mx-auto mb-6"></div>
              
              <p className="text-white/90 text-xl leading-relaxed font-body">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content sections with improved structure */}
      <div className="container py-16 space-y-16">
        {/* Section 1: Understanding the Service */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-primary text-gray-900">
              Entendendo o Serviço: {service.title.split(' ')[0]} {service.title.split(' ')[1]}
            </h2>
            <p className="text-lg text-eco-green-dark font-medium">
              O que é e por que é crucial para sua empresa?
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-eco-green/5 to-eco-blue/5 border-eco-green/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-eco-green/10 rounded-full flex-shrink-0">
                  <FileText className="h-8 w-8 text-eco-green" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6 font-body">
                    {service.whatIs}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-eco-green-dark mb-2">Ideal para:</h4>
                      <p className="text-sm text-gray-600">Empresas que buscam conformidade legal e excelência ambiental</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-semibold text-eco-blue-dark mb-2">Quando contratar:</h4>
                      <p className="text-sm text-gray-600">Antes de iniciar operações ou durante expansões</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Benefits */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-primary text-gray-900">
              Principais Benefícios para o Seu Negócio
            </h2>
            <p className="text-lg text-eco-green-dark font-medium">
              Como a L&P Soluções Ambientais transforma seus desafios em oportunidades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <Card key={index} className="group border-eco-green/20 hover:border-eco-green/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-eco-green/10 rounded-lg group-hover:bg-eco-green/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-eco-green" />
                    </div>
                    <p className="font-body text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 3: Process Timeline */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-primary text-gray-900">
              Nosso Processo Simplificado: Passo a Passo
            </h2>
            <p className="text-lg text-eco-green-dark font-medium">
              Transparência e eficiência em cada etapa
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-eco-green/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {service.steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 group">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-eco-green text-white rounded-full flex items-center justify-center font-bold text-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-grow border-eco-green/20 group-hover:border-eco-green/40 transition-all duration-300 group-hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <h3 className="font-semibold text-xl text-gray-900 font-secondary">{step.title}</h3>
                        <div className="flex items-center gap-2 text-sm bg-eco-blue/10 text-eco-blue px-3 py-1 rounded-full">
                          <Clock className="h-4 w-4" />
                          {step.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-body">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Technical Details in Accordion */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-primary text-gray-900">
              O Que Você Precisa Saber
            </h2>
            <p className="text-lg text-eco-green-dark font-medium">
              Informações importantes para agilizar seu projeto
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="documents" className="border border-eco-green/20 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-green-dark">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-eco-earth" />
                  Documentação Necessária
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <ul className="space-y-2">
                  {service.documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-eco-earth rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-body">{doc}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timeline" className="border border-eco-blue/20 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-blue-dark">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-eco-blue" />
                  Prazos Comuns
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-gray-600 font-body">{service.timeline}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="legal" className="border border-eco-green-dark/20 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-green-dark">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-eco-green-dark" />
                  Base Legal Aplicável
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <ul className="space-y-2">
                  {service.legalBasis.map((legal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-eco-green-dark rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-body">{legal}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tips" className="border border-eco-accent-orange/20 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-accent-orange">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-eco-accent-orange" />
                  Dicas da L&P
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <ul className="space-y-2">
                  {service.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-eco-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-body">{tip}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Section 5: Final CTA */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 border-eco-green/20 overflow-hidden">
            <CardContent className="p-8 text-center relative">
              <div className="absolute inset-0 leaf-pattern opacity-5"></div>
              <div className="relative z-10">
                <div className="p-4 bg-eco-green/10 rounded-full w-fit mx-auto mb-6">
                  <Target className="h-8 w-8 text-eco-green" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-primary text-gray-900">
                  Precisa de {service.title}?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-body">
                  Nossa equipe de especialistas está pronta para auxiliar sua empresa a atender 
                  todas as exigências ambientais com excelência e eficiência.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
                    <Link to="/request-quote">Solicitar Orçamento Detalhado</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-eco-green text-eco-green hover:bg-eco-green/10">
                    <Link to="/contact">Falar com Especialistas</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <CTASection />
    </PageWrapper>
  );
};

export default ServiceDetailPage;
