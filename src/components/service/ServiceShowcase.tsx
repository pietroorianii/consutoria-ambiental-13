
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Beaker, 
  FileText, 
  Users, 
  TreeDeciduous, 
  CloudSun,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <Leaf className="h-12 w-12 text-eco-green" />,
    title: "Licenciamento Ambiental",
    description: "Obtenção completa de licenças e autorizações ambientais",
    features: [
      "Licenças Prévias, de Instalação e Operação",
      "Autorizações para supressão de vegetação",
      "Cadastro Técnico Federal (IBAMA)",
      "Outorgas de recursos hídricos"
    ],
    link: "/service/licensing",
    bgColor: "from-eco-green/10 to-eco-green/5",
    borderColor: "border-eco-green/20"
  },
  {
    icon: <Beaker className="h-12 w-12 text-eco-blue" />,
    title: "Monitoramento e Análises",
    description: "Acompanhamento sistemático das condições ambientais",
    features: [
      "Acompanhamento de condicionantes",
      "Declaração de Carga Poluidora",
      "Monitoramento de emissões",
      "Gestão de amostragens e análises"
    ],
    link: "/service/monitoring",
    bgColor: "from-eco-blue/10 to-eco-blue/5",
    borderColor: "border-eco-blue/20"
  },
  {
    icon: <FileText className="h-12 w-12 text-eco-earth" />,
    title: "Planos e Relatórios",
    description: "Documentos técnicos especializados para gestão ambiental",
    features: [
      "Inventário de Resíduos Sólidos",
      "Planos de Gerenciamento (PGRS, PGRSS)",
      "Estudos de Impacto Ambiental",
      "Programas de Gestão Ambiental"
    ],
    link: "/service/reports",
    bgColor: "from-eco-earth/10 to-eco-earth/5",
    borderColor: "border-eco-earth/20"
  },
  {
    icon: <Users className="h-12 w-12 text-eco-accent-teal" />,
    title: "Consultoria Especializada",
    description: "Assessoria técnica para questões ambientais complexas",
    features: [
      "Acompanhamento de projetos",
      "Relatórios para Auto de Infração",
      "Inspeções e auditorias ambientais",
      "Relatórios de cumprimento"
    ],
    link: "/service/consulting",
    bgColor: "from-eco-accent-teal/10 to-eco-accent-teal/5",
    borderColor: "border-eco-accent-teal/20"
  },
  {
    icon: <TreeDeciduous className="h-12 w-12 text-eco-green" />,
    title: "Treinamentos Ambientais",
    description: "Capacitação especializada para equipes e colaboradores",
    features: [
      "Treinamentos presenciais e remotos",
      "Gerenciamento de Resíduos Sólidos",
      "Capacitações específicas por setor",
      "Certificação de participantes"
    ],
    link: "/service/training",
    bgColor: "from-eco-green/10 to-eco-green/5",
    borderColor: "border-eco-green/20"
  },
  {
    icon: <CloudSun className="h-12 w-12 text-eco-blue" />,
    title: "Gestão Ambiental",
    description: "Serviços continuados de manutenção da conformidade",
    features: [
      "Renovação de licenças e autorizações",
      "Declarações e inventários anuais",
      "Defesas administrativas",
      "Manutenções periódicas"
    ],
    link: "/service/management",
    bgColor: "from-eco-blue/10 to-eco-blue/5",
    borderColor: "border-eco-blue/20"
  }
];

export const ServiceShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-eco-green/3 to-white"></div>
      <div className="absolute top-1/4 right-10 w-40 h-40 bg-eco-green/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-eco-blue/5 rounded-full blur-2xl"></div>
      
      <div className="container relative z-10">
        {/* Header with illustration area */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900" 
                style={{fontFamily: "'Poppins', sans-serif"}}>
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed"
               style={{fontFamily: "'Montserrat', sans-serif"}}>
              Descubra todas as soluções que oferecemos e saiba como podemos ajudar você.
            </p>
          </div>
          
          {/* Illustration placeholder - following the reference image style */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-48 bg-gradient-to-br from-eco-green/10 to-eco-blue/10 rounded-2xl flex items-center justify-center border border-eco-green/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-eco-green" />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Soluções Ambientais</p>
                </div>
              </div>
              
              {/* Floating checklist elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-eco-green rounded flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs text-gray-700">Conformidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border-2 ${service.borderColor} hover:border-opacity-40 h-full`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/80 shadow-sm flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-xl mb-2 group-hover:text-eco-green-dark transition-colors" 
                               style={{fontFamily: "'Poppins', sans-serif"}}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base"
                                   style={{fontFamily: "'Montserrat', sans-serif"}}>
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-eco-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed"
                            style={{fontFamily: "'Montserrat', sans-serif"}}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className="w-full bg-eco-green hover:bg-eco-green-dark text-white group-hover:scale-105 transition-all duration-300"
                >
                  <Link to={service.link} className="flex items-center justify-center gap-2">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-eco-green/10 to-eco-blue/10 rounded-2xl border border-eco-green/20">
            <h3 className="text-2xl font-bold mb-4 text-gray-900"
                style={{fontFamily: "'Poppins', sans-serif"}}>
              Pronto para transformar sua gestão ambiental?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl"
               style={{fontFamily: "'Montserrat', sans-serif"}}>
              Nossa equipe está pronta para desenvolver soluções personalizadas para suas necessidades ambientais.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-eco-blue hover:bg-eco-blue-dark text-white px-8 py-3"
            >
              <Link to="/request-quote" className="flex items-center gap-2">
                Fale conosco
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
