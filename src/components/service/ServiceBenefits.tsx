
import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: string[];
}

export const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
          Benefícios para o Seu Negócio
        </h2>
        <p className="text-base text-eco-green-dark font-medium">
          Como a SOLARI Soluções Ambientais transforma seus desafios em oportunidades
        </p>
        <div className="h-1 w-16 bg-eco-green rounded-full mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => {
          // Separar título (antes dos dois pontos) do corpo
          const colonIndex = benefit.indexOf(':');
          const hasTitle = colonIndex > 0 && colonIndex < 60;
          const title = hasTitle ? benefit.substring(0, colonIndex) : null;
          const body = hasTitle ? benefit.substring(colonIndex + 1).trim() : benefit;

          return (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-eco-green/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-2 bg-eco-green/10 rounded-lg group-hover:bg-eco-green/20 transition-colors flex-shrink-0 mt-0.5">
                <CheckCircle2 className="h-4 w-4 text-eco-green" />
              </div>
              <div>
                {title && (
                  <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
