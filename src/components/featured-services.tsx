
import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
            <span className="relative group">
              Nossos Serviços
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-prisma-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-prisma-gray-text" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
            Soluções Ambientais{" "}
            <span className="text-prisma-green relative group hover:text-prisma-green/90 transition-colors duration-300 cursor-default">
              Completas
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-prisma-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
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

          {/* Quadro de destaque com gradiente verde */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-prisma-green to-green-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-prisma-green/10 via-green-50 to-prisma-green/5 rounded-2xl p-8 border border-prisma-green/20 group-hover:border-prisma-green/40 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-prisma-green mb-3 group-hover:text-prisma-green/90 transition-colors" style={{
                      fontFamily: "'Poppins', sans-serif"
                    }}>
                      Precisa de uma Solução Personalizada?
                    </h3>
                    <p className="text-prisma-gray-text/80 leading-relaxed" style={{
                      fontFamily: "'Montserrat', sans-serif"
                    }}>
                      Nossa equipe de especialistas desenvolve estratégias sob medida para as necessidades específicas da sua empresa.
                    </p>
                  </div>
                  <Button asChild size="lg" className="bg-gradient-to-r from-prisma-green to-green-400 hover:from-green-400 hover:to-prisma-green text-white px-8 py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <Link to="/request-quote" className="flex items-center gap-3">
                      <span className="relative">
                        Solicitar Orçamento
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ServiceCategories />
        
        <StatsSection />
      </div>
    </section>
  );
}
