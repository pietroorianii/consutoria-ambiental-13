
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
      <Card className="axis-navy-surface overflow-hidden rounded-[1.5rem] border-0 text-white">
        <CardContent className="p-12 text-center relative">
          <div className="absolute inset-0 leaf-pattern opacity-[0.03]"></div>
          <div className="relative z-10">
            <h3 className="font-display text-3xl font-medium mb-6 text-white">
              Vamos cuidar de {serviceTitle.toLowerCase()} para você?
            </h3>
            <p className="text-brand-silver/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Conte sua atividade e localização. Em até 1 dia útil você recebe a análise inicial, sem custo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote" className="axis-btn-solid justify-center px-7 py-3.5 text-base">Solicitar orçamento</Link>
              <Link to="/contact" className="axis-btn-ghost justify-center px-7 py-3.5 text-base">Falar com a equipe</Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
