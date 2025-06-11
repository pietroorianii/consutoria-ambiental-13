
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PrismaHeroBanner() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Column */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-prisma-green/10 text-prisma-green font-medium text-sm uppercase tracking-wider rounded-full">
                PRISMA SOLUÇÕES AMBIENTAIS
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>
                Conformidade Ambiental que{" "}
                <span className="text-prisma-green">Impulsiona</span> seu Negócio
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl" style={{
                fontFamily: "'Montserrat', sans-serif"
              }}>
                Navegue pela complexidade da legislação com segurança. Oferecemos soluções estratégicas para licenciamento, gestão de resíduos e sustentabilidade, garantindo a tranquilidade que sua empresa precisa para crescer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-prisma-green hover:bg-prisma-green/90 text-white px-8 py-6 text-base font-medium"
              >
                <Link to="/services">Nossos Serviços</Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-prisma-green text-prisma-green hover:bg-prisma-green hover:text-white px-8 py-6 text-base font-medium"
              >
                <Link to="/contact">Fale com um Especialista</Link>
              </Button>
            </div>
          </div>

          {/* Logo - Right Column */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2886d1f7-ded4-4a6e-bd2b-cb94db54d220.png" 
                  alt="PRISMA Soluções Ambientais"
                  className="w-full h-full object-contain animate-fade-in"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-prisma-yellow/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-prisma-blue/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
