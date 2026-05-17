
import React from "react";
import { CheckCircle } from "lucide-react";

interface ServiceOverviewProps {
  service: {
    title: string;
    whatIs: string;
  };
}

export const ServiceOverview = ({ service }: ServiceOverviewProps) => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-eco-green/6 to-eco-blue/4 rounded-2xl border border-eco-green/15 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Faixa lateral verde */}
          <div className="bg-eco-green w-full md:w-1.5 h-1.5 md:h-auto flex-shrink-0" />

          <div className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-5">
              <div className="p-2.5 bg-eco-green/15 rounded-xl flex-shrink-0 mt-0.5">
                <CheckCircle className="h-5 w-5 text-eco-green" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  O que é este serviço?
                </h2>
                <p className="text-sm text-eco-green-dark font-semibold uppercase tracking-wide">
                  Entenda em detalhes
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {service.whatIs}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
