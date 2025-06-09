
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  duration: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export const ServiceProcess = ({ steps }: ServiceProcessProps) => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary text-gray-900">
          Nosso Processo Simplificado: Passo a Passo
        </h2>
        <p className="text-lg text-eco-green-dark font-medium">
          Transparência e eficiência em cada etapa
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-0.5 top-8 bottom-8 w-1 bg-gradient-to-b from-eco-green via-eco-blue to-eco-green rounded-full hidden lg:block"></div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              
              <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-eco-green to-eco-blue text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <Card className="border-eco-green/20 hover:border-eco-green/40 transition-all duration-300 hover:shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h3 className="font-semibold text-xl text-gray-900 font-secondary">{step.title}</h3>
                      <div className="flex items-center gap-2 text-sm bg-eco-blue/10 text-eco-blue px-3 py-1 rounded-full whitespace-nowrap">
                        <Clock className="h-4 w-4" />
                        {step.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-body">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden lg:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
