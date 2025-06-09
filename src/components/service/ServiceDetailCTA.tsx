
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

interface ServiceDetailCTAProps {
  serviceTitle: string;
}

export const ServiceDetailCTA = ({ serviceTitle }: ServiceDetailCTAProps) => {
  return (
    <section className="max-w-5xl mx-auto">
      <Card className="bg-gradient-to-br from-eco-green/10 via-white to-eco-blue/10 border-eco-green/30 overflow-hidden shadow-xl">
        <CardContent className="p-12 text-center relative">
          <div className="absolute inset-0 leaf-pattern opacity-[0.03]"></div>
          <div className="relative z-10">
            <div className="p-6 bg-eco-green/15 rounded-full w-fit mx-auto mb-8">
              <Target className="h-12 w-12 text-eco-green" />
            </div>
            <h3 className="text-3xl font-bold mb-6 font-primary text-gray-900">
              Pronto para Implementar {serviceTitle}?
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
  );
};
