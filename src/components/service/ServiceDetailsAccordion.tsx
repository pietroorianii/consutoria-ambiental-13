
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Clock, Shield, Lightbulb } from "lucide-react";

interface ServiceDetailsAccordionProps {
  service: {
    documents: string[];
    timeline: string;
    legalBasis: string[];
    tips: string[];
  };
}

export const ServiceDetailsAccordion = ({ service }: ServiceDetailsAccordionProps) => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary text-gray-900">
          O Que Você Precisa Saber
        </h2>
        <p className="text-lg text-eco-green-dark font-medium">
          Informações importantes para agilizar seu projeto
        </p>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="documents" className="border border-eco-green/20 rounded-lg px-6 bg-white shadow-sm">
          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-green-dark">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-eco-earth" />
              Documentação Necessária
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-eco-earth/5 rounded-lg">
                  <div className="w-2 h-2 bg-eco-earth rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 font-body text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="timeline" className="border border-eco-blue/20 rounded-lg px-6 bg-white shadow-sm">
          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-blue-dark">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-eco-blue" />
              Prazos e Cronograma
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="bg-eco-blue/5 rounded-lg p-4">
              <p className="text-gray-600 font-body leading-relaxed">{service.timeline}</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="legal" className="border border-eco-green-dark/20 rounded-lg px-6 bg-white shadow-sm">
          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-green-dark">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-eco-green-dark" />
              Base Legal Aplicável
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-1 gap-3">
              {service.legalBasis.map((legal, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-eco-green/5 rounded-lg">
                  <div className="w-2 h-2 bg-eco-green-dark rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 font-body text-sm">{legal}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tips" className="border border-eco-accent-orange/20 rounded-lg px-6 bg-white shadow-sm">
          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-eco-accent-orange">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-eco-accent-orange" />
              Dicas Especializadas da L&P
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-1 gap-3">
              {service.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-eco-accent-orange/5 rounded-lg">
                  <div className="w-2 h-2 bg-eco-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 font-body text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
