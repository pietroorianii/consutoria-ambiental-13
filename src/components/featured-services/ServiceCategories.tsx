
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, FileText, Leaf, CheckCircle, ExternalLink } from "lucide-react";

interface ServiceGroup {
  title: string;
  description: string;
  icon: React.ReactNode;
  services: Array<{
    title: string;
    description: string;
    href: string;
  }>;
  color: string;
  buttonColor: string;
  mainDeliverables?: string[];
  badge: string;
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Licenciamento e Conformidade Legal",
    description: "Garanta a operação legal do seu negócio",
    icon: <Scale className="h-8 w-8" />,
    color: "prisma-green",
    buttonColor: "bg-prisma-green hover:bg-prisma-green/90",
    badge: "Essencial",
    services: [
      {
        title: "Licenciamento Ambiental",
        description: "LP, LI, LO e autorizações",
        href: "/services/licensing"
      },
      {
        title: "Outorga e Recursos Hídricos",
        description: "Direito de uso da água",
        href: "/services/water_resources"
      },
      {
        title: "Gestão Ambiental Contínua",
        description: "Manutenção e renovações",
        href: "/services/management"
      }
    ],
    mainDeliverables: [
      "Licenças Ambientais (LP, LI, LO)",
      "Outorgas de Uso da Água",
      "Autorizações e Dispensas"
    ]
  },
  {
    title: "Estudos Técnicos e Diagnósticos",
    description: "Análise técnica especializada",
    icon: <FileText className="h-8 w-8" />,
    color: "prisma-blue",
    buttonColor: "bg-prisma-blue hover:bg-prisma-blue/90",
    badge: "Técnico",
    services: [
      {
        title: "Planos e Relatórios",
        description: "EIA/RIMA, PGRS e documentos",
        href: "/services/reports"
      },
      {
        title: "Monitoramento Ambiental",
        description: "Acompanhamento e análises",
        href: "/services/monitoring"
      },
      {
        title: "Recuperação de Áreas",
        description: "PRAD e GAC",
        href: "/services/degraded_areas"
      }
    ],
    mainDeliverables: [
      "Planos de Gerenciamento (PGRS, PGRSS)",
      "Estudos de Impacto (EIA/RIMA)",
      "Inventários de Áreas Contaminadas"
    ]
  },
  {
    title: "Consultoria Estratégica e ESG",
    description: "Visão de futuro e sustentabilidade",
    icon: <Leaf className="h-8 w-8" />,
    color: "prisma-yellow",
    buttonColor: "bg-prisma-yellow hover:bg-prisma-yellow/90",
    badge: "Inovação",
    services: [
      {
        title: "Consultoria ESG",
        description: "Estratégias de sustentabilidade",
        href: "/services/esg"
      },
      {
        title: "Mudanças Climáticas",
        description: "Descarbonização e carbono",
        href: "/services/climate"
      },
      {
        title: "Treinamentos",
        description: "Capacitação de equipes",
        href: "/services/training"
      }
    ],
    mainDeliverables: [
      "Diagnóstico e Estratégia ESG",
      "Inventários de Gases de Efeito Estufa",
      "Relatórios de Sustentabilidade"
    ]
  }
];

export function ServiceCategories() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {serviceGroups.map((group, index) => {
        // Definir classes específicas para cada cor
        const getHoverClasses = (color: string) => {
          switch(color) {
            case 'prisma-green':
              return {
                cardBorder: 'hover:border-prisma-green/50',
                topBar: 'from-prisma-green to-prisma-green/70',
                titleHover: 'group-hover:text-prisma-green',
                iconColor: 'text-prisma-green',
                badgeColor: 'bg-prisma-green/15 text-prisma-green group-hover:bg-prisma-green/25',
                checkIcon: 'text-prisma-green',
                serviceHover: 'group-hover/service:text-prisma-green',
                externalLinkHover: 'group-hover/service:text-prisma-green',
                exploreButton: 'border-prisma-green/30 text-prisma-green hover:bg-prisma-green hover:text-white'
              };
            case 'prisma-blue':
              return {
                cardBorder: 'hover:border-prisma-blue/50',
                topBar: 'from-prisma-blue to-prisma-blue/70',
                titleHover: 'group-hover:text-prisma-blue',
                iconColor: 'text-prisma-blue',
                badgeColor: 'bg-prisma-blue/15 text-prisma-blue group-hover:bg-prisma-blue/25',
                checkIcon: 'text-prisma-blue',
                serviceHover: 'group-hover/service:text-prisma-blue',
                externalLinkHover: 'group-hover/service:text-prisma-blue',
                exploreButton: 'border-prisma-blue/30 text-prisma-blue hover:bg-prisma-blue hover:text-white'
              };
            case 'prisma-yellow':
              return {
                cardBorder: 'hover:border-prisma-yellow/50',
                topBar: 'from-prisma-yellow to-prisma-yellow/70',
                titleHover: 'group-hover:text-prisma-yellow',
                iconColor: 'text-prisma-yellow',
                badgeColor: 'bg-prisma-yellow/15 text-prisma-yellow group-hover:bg-prisma-yellow/25',
                checkIcon: 'text-prisma-yellow',
                serviceHover: 'group-hover/service:text-prisma-yellow',
                externalLinkHover: 'group-hover/service:text-prisma-yellow',
                exploreButton: 'border-prisma-yellow/30 text-prisma-yellow hover:bg-prisma-yellow hover:text-white'
              };
            default:
              return {
                cardBorder: 'hover:border-prisma-green/50',
                topBar: 'from-prisma-green to-prisma-green/70',
                titleHover: 'group-hover:text-prisma-green',
                iconColor: 'text-prisma-green',
                badgeColor: 'bg-prisma-green/15 text-prisma-green group-hover:bg-prisma-green/25',
                checkIcon: 'text-prisma-green',
                serviceHover: 'group-hover/service:text-prisma-green',
                externalLinkHover: 'group-hover/service:text-prisma-green',
                exploreButton: 'border-prisma-green/30 text-prisma-green hover:bg-prisma-green hover:text-white'
              };
          }
        };

        const hoverClasses = getHoverClasses(group.color);

        return (
          <Card 
            key={index} 
            className={`group relative overflow-hidden transition-all duration-500 bg-white/95 backdrop-blur-sm border-2 border-prisma-gray-light/30 ${hoverClasses.cardBorder} h-full flex flex-col hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.03] scroll-trigger shadow-lg`}
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            {/* Linha de acento animada no topo com cor específica do grupo */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${hoverClasses.topBar} opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}></div>
            
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center pb-4 relative z-10">
              {/* Container do ícone com animação especial */}
              <div className="relative mb-4 mx-auto w-20 h-20">
                <div className={`absolute inset-0 bg-${group.color}/10 rounded-2xl group-hover:bg-${group.color}/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}></div>
                <div className="relative w-full h-full flex items-center justify-center bg-white/80 rounded-2xl group-hover:bg-white transition-all duration-500 group-hover:-rotate-6 shadow-lg group-hover:shadow-xl">
                  {React.cloneElement(group.icon as React.ReactElement, {
                    className: `h-8 w-8 ${hoverClasses.iconColor} group-hover:scale-110 transition-all duration-500`
                  })}
                </div>
              </div>
              
              {/* Badge animado */}
              <div className="mb-3">
                <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full ${hoverClasses.badgeColor} group-hover:scale-105 transition-all duration-300 uppercase tracking-wider`} style={{
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  {group.badge}
                </span>
              </div>
              
              <CardTitle className={`text-xl ${hoverClasses.titleHover} transition-colors duration-300 leading-tight mb-2`} style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#333333"
              }}>
                {group.title}
              </CardTitle>
              
              <p className="text-sm text-prisma-gray-text/80 leading-relaxed" style={{
                fontFamily: "'Montserrat', sans-serif"
              }}>
                {group.description}
              </p>
            </CardHeader>
            
            <CardContent className="px-6 pb-6 flex-grow relative z-10 flex flex-col">
              {/* Principais Entregas com animação */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-prisma-gray-text mb-3 font-secondary">
                  Principais Entregas:
                </h4>
                <ul className="space-y-2">
                  {group.mainDeliverables?.map((deliverable, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-3 group/item opacity-90 group-hover:opacity-100 transition-all duration-300"
                      style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
                    >
                      <CheckCircle className={`h-4 w-4 ${hoverClasses.checkIcon} mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-sm text-prisma-gray-text/90 leading-relaxed group-hover/item:text-prisma-gray-text transition-colors" style={{
                        fontFamily: "'Montserrat', sans-serif"
                      }}>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Serviços em lista compacta */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-prisma-gray-text mb-3">
                  Principais Serviços:
                </h4>
                <div className="space-y-1">
                  {group.services.slice(0, 2).map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.href}
                      className="block p-2 rounded-lg hover:bg-prisma-gray-light/30 transition-all duration-200 group/service"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium text-prisma-gray-text ${hoverClasses.serviceHover} transition-colors`}>
                          {service.title}
                        </span>
                        <ExternalLink className={`h-3 w-3 text-prisma-gray-text/50 ${hoverClasses.externalLinkHover} transition-colors`} />
                      </div>
                    </Link>
                  ))}
                  <div className="text-xs text-prisma-gray-text/60 pt-1">
                    + {group.services.length - 2} outros serviços
                  </div>
                </div>
              </div>
            </CardContent>
            
            {/* Footer com botões animados */}
            <div className="mt-auto p-6 pt-4 border-t border-prisma-gray-light/40 bg-prisma-gray-light/10 group-hover:bg-prisma-gray-light/20 transition-all duration-300 relative z-10">
              <div className="flex gap-3">
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className={`flex-1 ${hoverClasses.exploreButton} transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}
                >
                  <Link to={`/services`} className="flex items-center justify-center gap-2">
                    Explorar 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  size="sm"
                  className={`${group.buttonColor} text-white transition-all duration-300 group-hover:scale-105 shadow-md group-hover:shadow-xl`}
                >
                  <Link to="/request-quote">
                    Orçamento
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
