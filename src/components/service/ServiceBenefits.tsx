
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: string[];
}

export const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary text-gray-900">
          Principais Benefícios para o Seu Negócio
        </h2>
        <p className="text-lg text-eco-green-dark font-medium">
          Como a L&P Soluções Ambientais transforma seus desafios em oportunidades
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="group border-eco-green/20 hover:border-eco-green/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eco-green/10 rounded-lg group-hover:bg-eco-green/20 transition-colors flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-eco-green" />
                </div>
                <p className="font-body text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
