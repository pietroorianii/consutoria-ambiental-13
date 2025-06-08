
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Beaker, FileText, Users, TreeDeciduous, CloudSun, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const services = [{
  icon: <Leaf className="h-10 w-10 text-eco-green" />,
  title: "Licenciamento Ambiental",
  description: "Navegue pela burocracia ambiental e opere legalmente com nosso suporte especializado",
  highlights: [
    "Obtenção de todas as licenças necessárias",
    "Acompanhamento em órgãos ambientais",
    "Garantia de conformidade legal total"
  ],
  link: "/service/licensing",
  bgGradient: "from-eco-green/5 via-eco-green/2 to-transparent",
  borderColor: "border-eco-green/20 hover:border-eco-green/40",
  iconBg: "bg-eco-green/10",
  buttonColor: "bg-eco-green hover:bg-eco-green-dark"
}, {
  icon: <Beaker className="h-10 w-10 text-eco-blue" />,
  title: "Monitoramento Ambiental",
  description: "Mantenha sua empresa em conformidade com acompanhamento sistemático e análises precisas",
  highlights: [
    "Monitoramento contínuo de condicionantes",
    "Análises laboratoriais especializadas",
    "Relatórios técnicos detalhados"
  ],
  link: "/service/monitoring",
  bgGradient: "from-eco-blue/5 via-eco-blue/2 to-transparent",
  borderColor: "border-eco-blue/20 hover:border-eco-blue/40",
  iconBg: "bg-eco-blue/10",
  buttonColor: "bg-eco-blue hover:bg-eco-blue-dark"
}, {
  icon: <FileText className="h-10 w-10 text-eco-earth-dark" />,
  title: "Planos e Relatórios",
  description: "Documentação técnica completa para gestão ambiental eficiente e conformidade",
  highlights: [
    "Planos de gerenciamento de resíduos",
    "Estudos de impacto ambiental",
    "Programas de gestão customizados"
  ],
  link: "/service/reports",
  bgGradient: "from-eco-earth-medium/5 via-eco-earth-medium/2 to-transparent",
  borderColor: "border-eco-earth-medium/20 hover:border-eco-earth-medium/40",
  iconBg: "bg-eco-earth-medium/10",
  buttonColor: "bg-eco-earth-dark hover:bg-eco-earth-dark/90"
}, {
  icon: <Users className="h-10 w-10 text-eco-accent-teal" />,
  title: "Consultoria Especializada",
  description: "Assessoria técnica personalizada para resolver questões ambientais complexas",
  highlights: [
    "Consultoria para questões específicas",
    "Acompanhamento de projetos",
    "Defesas em processos ambientais"
  ],
  link: "/service/consulting",
  bgGradient: "from-eco-accent-teal/5 via-eco-accent-teal/2 to-transparent",
  borderColor: "border-eco-accent-teal/20 hover:border-eco-accent-teal/40",
  iconBg: "bg-eco-accent-teal/10",
  buttonColor: "bg-eco-accent-teal hover:bg-eco-accent-teal/90"
}, {
  icon: <TreeDeciduous className="h-10 w-10 text-eco-accent-sage" />,
  title: "Treinamentos Ambientais",
  description: "Capacite sua equipe com conhecimento especializado em gestão ambiental",
  highlights: [
    "Treinamentos personalizados",
    "Certificação profissional",
    "Capacitação em legislação atual"
  ],
  link: "/service/training",
  bgGradient: "from-eco-accent-sage/5 via-eco-accent-sage/2 to-transparent",
  borderColor: "border-eco-accent-sage/20 hover:border-eco-accent-sage/40",
  iconBg: "bg-eco-accent-sage/10",
  buttonColor: "bg-eco-accent-sage hover:bg-eco-accent-sage/90"
}, {
  icon: <CloudSun className="h-10 w-10 text-eco-blue-muted" />,
  title: "Gestão Ambiental",
  description: "Mantenha a conformidade com serviços continuados de gestão e manutenção",
  highlights: [
    "Renovação automática de licenças",
    "Gestão de declarações anuais",
    "Suporte técnico permanente"
  ],
  link: "/service/management",
  bgGradient: "from-eco-blue-muted/5 via-eco-blue-muted/2 to-transparent",
  borderColor: "border-eco-blue-muted/20 hover:border-eco-blue-muted/40",
  iconBg: "bg-eco-blue-muted/10",
  buttonColor: "bg-eco-blue-muted hover:bg-eco-blue-muted/90"
}];

export const ServiceShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background with subtle textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-eco-green/2 to-eco-earth-light/20"></div>
      <div className="absolute inset-0 leaf-pattern opacity-[0.02]"></div>
      
      {/* Floating organic shapes */}
      <div className="absolute top-1/4 right-10 w-60 h-60 bg-eco-green/3 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-eco-blue/3 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-eco-green/10 text-eco-green font-medium text-sm uppercase tracking-wider rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            Soluções Completas
          </div>
          
          <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Nossos Serviços
          </h2>
          
          <div className="h-1 w-24 bg-eco-accent-teal rounded-full mx-auto mb-8"></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-lg text-gray-600 leading-relaxed mb-6">
              Na <strong className="text-eco-green-dark">L&P Soluções Ambientais</strong>, oferecemos consultoria 
              especializada que transforma desafios ambientais em oportunidades de crescimento sustentável para sua empresa.
            </p>
            <p className="font-body text-base text-gray-500 leading-relaxed">
              Nossa abordagem integrada garante conformidade legal, eficiência operacional e excelência ambiental 
              em todos os aspectos do seu negócio.
            </p>
          </div>
        </div>
        
        {/* Services grid with enhanced design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border-2 ${service.borderColor} hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]`}
            >
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${service.iconBg} shadow-sm flex-shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="font-secondary text-xl mb-3 group-hover:text-eco-green-dark transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-body text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                {/* Main highlights */}
                <div className="mb-6">
                  <h4 className="font-secondary font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wide">
                    Principais Entregas
                  </h4>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-3 group/item transition-all duration-300"
                      >
                        <CheckCircle className="h-4 w-4 text-eco-green mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="font-body text-gray-700 text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild
                    className={`flex-1 ${service.buttonColor} text-white group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium`}
                  >
                    <Link to={service.link} className="flex items-center justify-center gap-2">
                      Saiba mais
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="flex-1 border-eco-green/30 text-eco-green hover:bg-eco-green/10 hover:border-eco-green/50 transition-all duration-300"
                  >
                    <Link to="/request-quote" className="flex items-center justify-center gap-2">
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom section with trust indicators */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-eco-green/20">
              <CheckCircle className="h-5 w-5 text-eco-green" />
              <span className="font-medium text-gray-700">+500 Projetos Realizados</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-eco-blue/20">
              <CheckCircle className="h-5 w-5 text-eco-blue" />
              <span className="font-medium text-gray-700">98% Taxa de Sucesso</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-eco-accent-teal/20">
              <CheckCircle className="h-5 w-5 text-eco-accent-teal" />
              <span className="font-medium text-gray-700">Conformidade Garantida</span>
            </div>
          </div>
          
          <p className="font-body text-gray-500 text-sm">
            Transformando desafios ambientais em oportunidades de crescimento sustentável
          </p>
        </div>
      </div>
    </section>
  );
};
