
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Building2, Zap, Target } from "lucide-react";

interface ServiceOverviewProps {
  service: {
    title: string;
    whatIs: string;
  };
}

export const ServiceOverview = ({ service }: ServiceOverviewProps) => {
  return (
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
  );
};
