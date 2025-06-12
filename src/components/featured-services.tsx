
import React from "react";
import { Sparkles } from "lucide-react";
import { ServiceCategories } from "./featured-services/ServiceCategories";
import { StatsSection } from "./featured-services/StatsSection";

export function FeaturedServices() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background moderno com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-prisma-gray-light/20 to-white"></div>
      
      {/* Elementos decorativos sutis */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-prisma-green/5 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-prisma-blue/5 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20 scroll-trigger">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-prisma-green/10 text-prisma-green font-medium text-sm uppercase tracking-wider rounded-full mb-8 hover:bg-prisma-green/15 transition-colors">
            <Sparkles className="h-4 w-4" />
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-prisma-gray-text" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
            Soluções Ambientais{" "}
            <span className="text-prisma-green">Completas</span>
          </h2>
          
          <div className="h-1.5 w-32 bg-gradient-to-r from-prisma-green to-prisma-yellow rounded-full mx-auto mb-10"></div>
          
          <p className="text-prisma-gray-text/80 max-w-3xl mx-auto text-lg leading-relaxed mb-12" style={{
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: "1.8"
          }}>
            Oferecemos soluções ambientais completas organizadas em três áreas estratégicas 
            para atender empresas de todos os portes e setores. Cada serviço é desenvolvido 
            com excelência técnica e foco na conformidade legal.
          </p>
        </div>
        
        <ServiceCategories />
        
        <StatsSection />
      </div>
    </section>
  );
}
