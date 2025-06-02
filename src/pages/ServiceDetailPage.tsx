
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { serviceDetails } from "@/data/serviceDetails";
import { ArrowLeft, CheckCircle, Clock, FileText, Users, AlertCircle } from "lucide-react";

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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-eco-green to-eco-blue py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{backgroundImage: `url('${service.image}')`}}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-blue/20"></div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <Link to="/services" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar aos Serviços
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="p-5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <IconComponent className="h-12 w-12 text-white" />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" 
                  style={{fontFamily: "'Poppins', sans-serif"}}>
                {service.title}
              </h1>
              <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                 style={{fontFamily: "'Montserrat', sans-serif"}}>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 space-y-16">
        {/* O que é */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="h-6 w-6 text-eco-green" />
                O que é este serviço?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {service.whatIs}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Benefícios */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-eco-green" />
                Principais Benefícios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-eco-green mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Etapas do Processo */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-eco-blue" />
                Etapas do Processo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {service.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-eco-green text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <span className="text-sm bg-eco-blue/10 text-eco-blue px-2 py-1 rounded">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Informações Adicionais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Documentos Necessários */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-eco-earth" />
                Documentos Necessários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-eco-earth rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Prazo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-eco-blue" />
                Prazo Estimado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.timeline}</p>
            </CardContent>
          </Card>
        </div>

        {/* Base Legal e Dicas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Base Legal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-eco-green-dark" />
                Base Legal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.legalBasis.map((legal, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-eco-green-dark rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{legal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Dicas Importantes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-eco-accent-orange" />
                Dicas Importantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-eco-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 border-eco-green/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Precisa deste serviço?</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para auxiliar sua empresa a atender todas as exigências ambientais.
                Solicite um orçamento personalizado.
              </p>
              <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
                <Link to="/request-quote">Solicitar Orçamento</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <CTASection />
    </PageWrapper>
  );
};

export default ServiceDetailPage;
