import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ServiceItem } from "@/data/serviceCategories";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getServiceTheme, getThemeClasses } from "@/utils/serviceTheme";

interface ServiceListProps {
  services: ServiceItem[];
  categoryId: string;
}

const categoryToServiceMap: Record<string, string> = {
  licensing: "licensing",
  monitoring: "monitoring", 
  reports: "reports",
  consulting: "consulting",
  training: "training",
  management: "management",
  water_resources: "water_resources",
  degraded_areas: "degraded_areas"
};

// Mapeamento específico para serviços de licenciamento
const licensingServiceMap: Record<string, string> = {
  "DLAM - Declaração de Dispensa": "dlam",
  "LAC - Licença por Adesão e Compromisso": "lac",
  "LAS - Licença Ambiental Simplificada": "las",
  "Licenciamento Trifásico (LP/LI/LO)": "lp", // Vamos usar LP como entrada para o trifásico
  "Modalidades de Regularização": "licensing", // Mantém no serviço geral
  "Autorizações Específicas (AA e AF)": "licensing", // Mantém no serviço geral
};

export const ServiceList = ({ services, categoryId }: ServiceListProps) => {
  const serviceDetailId = categoryToServiceMap[categoryId];

  return (
    <section className="container py-16">
      {/* Category introduction */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 font-primary">
          Serviços Especializados
        </h2>
        <p className="text-gray-600 font-body leading-relaxed">
          Cada serviço é desenvolvido com foco na sua necessidade específica, 
          garantindo soluções eficazes e conformidade total.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          // Para licenciamento, usar mapeamento específico
          let detailServiceId = serviceDetailId;
          if (categoryId === "licensing") {
            detailServiceId = licensingServiceMap[service.title] || serviceDetailId;
          }

          const { icon: Icon, color } = getServiceTheme(detailServiceId);
          const theme = getThemeClasses(color);

          return (
            <Card 
              key={index}
              className={`group ${theme.border} transition-all duration-300 bg-white/95 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 h-full flex flex-col`}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex items-center gap-3 mb-3 justify-center">
                  <div className={`${theme.lightBg} p-3 rounded-xl ${theme.hoverLightBg} transition-colors shadow-sm`}>
                    <Icon className={`h-6 w-6 ${theme.text}`} />
                  </div>
                  <CardTitle className={`text-xl font-secondary text-gray-900 ${theme.hoverText} transition-colors`}>
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base text-center leading-relaxed font-body">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow px-6 pb-0">
                <div className={`${theme.checkBg} rounded-lg p-4 mb-4`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle className={`h-5 w-5 ${theme.checkIcon} mt-0.5 flex-shrink-0`} />
                    <p className="text-gray-600 text-sm font-body">
                      Nossos especialistas fornecem consultoria personalizada e acompanhamento 
                      completo para atender às necessidades específicas do seu negócio.
                    </p>
                  </div>
                </div>
              </CardContent>
              
              <CardContent className="flex justify-between items-center pt-4 pb-6 mt-auto border-t border-gray-100 bg-gray-50/60 gap-4">
                {detailServiceId && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className={`${theme.buttonOutline} transition-all duration-300`}
                  >
                    <Link 
                      to={`/service/${detailServiceId}`}
                      className="flex items-center gap-2"
                    >
                      Ver detalhes <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                
                <Button 
                  asChild
                  className={`${theme.buttonBg} flex-1 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg`}
                >
                  <Link 
                    to="/request-quote"
                    className="flex items-center justify-center gap-2"
                  >
                    Solicitar orçamento <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Seção especial para licenciamento trifásico */}
      {categoryId === "licensing" && (
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 rounded-lg p-8 border border-eco-green/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Licenciamento Trifásico Detalhado
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Para empreendimentos de maior complexidade, oferecemos acompanhamento especializado em cada fase:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Licença Prévia (LP)", id: "lp", description: "Viabilidade e localização" },
                { title: "Licença de Instalação (LI)", id: "li", description: "Autorização para construir" },
                { title: "Licença de Operação (LO)", id: "lo", description: "Autorização para operar" }
              ].map((phase) => {
                const { icon: PhaseIcon, color: phaseColor } = getServiceTheme(phase.id);
                const phaseTheme = getThemeClasses(phaseColor);
                return (
                  <Card key={phase.id} className={`text-center ${phaseTheme.border}`}>
                    <CardContent className="p-4">
                      <div className="flex justify-center mb-3">
                        <PhaseIcon className={`h-8 w-8 ${phaseTheme.text}`} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                      <Button asChild size="sm" variant="outline" className={phaseTheme.buttonOutline}>
                        <Link to={`/service/${phase.id}`}>
                          Ver detalhes <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

