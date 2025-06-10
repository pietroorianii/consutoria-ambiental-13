
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, CheckCircle } from "lucide-react";
import { ServiceItem } from "@/data/serviceCategories";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  esg: "esg",
  climate: "climate",
  water_resources: "water_resources",
  degraded_areas: "degraded_areas"
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
        {services.map((service, index) => (
          <Card 
            key={index}
            className="group border-eco-green/30 hover:border-eco-green/60 transition-all duration-300 bg-white/95 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 h-full flex flex-col"
          >
            <CardHeader className="text-center pb-4">
              <div className="flex items-center gap-3 mb-3 justify-center">
                <div className="bg-eco-green/15 p-3 rounded-xl group-hover:bg-eco-green/25 transition-colors shadow-sm">
                  <Leaf className="h-6 w-6 text-eco-green" />
                </div>
                <CardTitle className="text-xl font-secondary text-gray-900 group-hover:text-eco-green-dark transition-colors">
                  {service.title}
                </CardTitle>
              </div>
              <CardDescription className="text-base text-center leading-relaxed font-body">
                {service.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow px-6 pb-0">
              <div className="bg-eco-green/8 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-eco-green mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm font-body">
                    Nossos especialistas fornecem consultoria personalizada e acompanhamento 
                    completo para atender às necessidades específicas do seu negócio.
                  </p>
                </div>
              </div>
            </CardContent>
            
            <CardContent className="flex justify-between items-center pt-4 pb-6 mt-auto border-t border-gray-100 bg-gray-50/60 gap-4">
              {serviceDetailId && (
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="border-eco-green/40 text-eco-green hover:bg-eco-green hover:text-white transition-all duration-300"
                >
                  <Link 
                    to={`/service/${serviceDetailId}`}
                    className="flex items-center gap-2"
                  >
                    Ver detalhes <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              
              <Button 
                asChild
                className="bg-eco-green hover:bg-eco-green-dark text-white flex-1 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
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
        ))}
      </div>
    </section>
  );
};
