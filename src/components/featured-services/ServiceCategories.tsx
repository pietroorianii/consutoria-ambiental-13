
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, FileText, Leaf } from "lucide-react";

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
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Licenciamento e Conformidade Legal",
    description: "Foco em obter e manter a permissão para operar",
    icon: <Scale className="h-6 w-6" />,
    color: "eco-green",
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
    ]
  },
  {
    title: "Estudos Técnicos e Diagnósticos",
    description: "Foco na análise e documentação técnica",
    icon: <FileText className="h-6 w-6" />,
    color: "eco-blue",
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
    ]
  },
  {
    title: "Consultoria Estratégica e Sustentabilidade",
    description: "Foco em visão de futuro e valor de marca",
    icon: <Leaf className="h-6 w-6" />,
    color: "eco-accent-teal",
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
        title: "Consultoria Especializada",
        description: "Assessoria e treinamentos",
        href: "/services/consulting"
      },
      {
        title: "Treinamentos",
        description: "Capacitação de equipes",
        href: "/services/training"
      }
    ]
  }
];

export function ServiceCategories() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {serviceGroups.map((group, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-opacity-60 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-${group.color}/15 flex items-center justify-center group-hover:bg-${group.color}/25 transition-colors`}>
              <div className={`text-${group.color}`}>
                {group.icon}
              </div>
            </div>
            <CardTitle className="text-xl font-secondary text-gray-900">
              {group.title}
            </CardTitle>
            <p className="text-sm text-gray-600 font-body">
              {group.description}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-3">
            {group.services.map((service, serviceIndex) => (
              <Link
                key={serviceIndex}
                to={service.href}
                className="block p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-200 group/service"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover/service:text-eco-green-dark transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover/service:text-eco-green transform group-hover/service:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100">
              <Button asChild className={`w-full bg-${group.color} hover:bg-${group.color}-dark`}>
                <Link to="/services">
                  Ver Todos os Serviços
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
