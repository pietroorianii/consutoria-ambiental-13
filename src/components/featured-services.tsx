
import React from "react";
import { Sparkles } from "lucide-react";
import { ServiceCategories } from "./featured-services/ServiceCategories";
import { StatsSection } from "./featured-services/StatsSection";

export function FeaturedServices() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background moderno com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-prisma-gray-light/30 to-white"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-prisma-green/10 text-prisma-green font-medium text-sm uppercase tracking-wider rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-prisma-gray-text" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
            Soluções Ambientais Completas
          </h2>
          
          <div className="h-1 w-24 bg-prisma-yellow rounded-full mx-auto mb-8"></div>
          
          <p className="text-prisma-gray-text/80 max-w-2xl mx-auto text-lg leading-relaxed mb-12" style={{
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: "1.8"
          }}>
            Oferecemos soluções ambientais completas organizadas em três áreas estratégicas 
            para atender empresas de todos os portes e setores.
          </p>
        </div>
        
        <ServiceCategories />
        
        <StatsSection />
      </div>
    </section>
  );
}
