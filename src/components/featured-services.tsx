
import React from "react";
import { serviceCategories } from "@/data/serviceCategories";
import { Sparkles } from "lucide-react";
import { ServiceCard } from "./featured-services/ServiceCard";
import { StatsSection } from "./featured-services/StatsSection";

export function FeaturedServices() {
  const serviceEntries = Object.entries(serviceCategories);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background aprimorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-eco-green/3 to-white"></div>
      <div className="absolute inset-0 organic-pattern opacity-[0.015]"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-eco-green/10 text-eco-green font-medium text-sm uppercase tracking-wider rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            Nossos Serviços
          </div>
          
          <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Soluções Ambientais Completas
          </h2>
          
          <div className="h-1 w-24 bg-eco-accent-teal rounded-full mx-auto mb-8"></div>
          
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Oferecemos soluções ambientais completas para empresas de todos os portes e setores,
            auxiliando no cumprimento das exigências legais e na implementação de práticas sustentáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceEntries.map(([key, serviceData], index) => (
            <ServiceCard 
              key={key}
              serviceKey={key}
              serviceData={serviceData}
              index={index}
            />
          ))}
        </div>
        
        <StatsSection />
      </div>
    </section>
  );
}
