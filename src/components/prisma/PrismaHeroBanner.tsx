
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PrismaHeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-prisma-green/5 to-prisma-blue/5 py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto (à esquerda) */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-prisma-blue uppercase tracking-wider font-montserrat">
                PRISMA SOLUÇÕES AMBIENTAIS
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-prisma-text leading-tight font-poppins">
                Conformidade Ambiental que{" "}
                <span className="text-prisma-green">Impulsiona</span>{" "}
                seu Negócio
              </h1>
              
              <p className="text-lg text-prisma-text/80 leading-relaxed font-lato max-w-2xl">
                Navegue pela complexidade da legislação com segurança. Oferecemos soluções 
                estratégicas para licenciamento, gestão de resíduos e sustentabilidade, 
                garantindo a tranquilidade que sua empresa precisa para crescer.
              </p>
            </div>
            
            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-prisma-green hover:bg-prisma-green-dark text-white px-8 py-3 rounded-lg text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/services">
                  Nossos Serviços
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-prisma-green text-prisma-green hover:bg-prisma-green hover:text-white px-8 py-3 rounded-lg text-base font-medium transition-all duration-300"
              >
                <Link to="/contact">
                  Fale com um Especialista
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Logo da PRISMA (à direita) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/510063e3-c0ae-41ce-88e9-a835f4ecffcd.png" 
                alt="PRISMA Soluções Ambientais" 
                className="w-80 h-auto max-w-full animate-float"
              />
              {/* Efeito de fundo sutil */}
              <div className="absolute -inset-8 bg-gradient-to-r from-prisma-green/10 to-prisma-blue/10 rounded-full blur-3xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-prisma-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-prisma-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
