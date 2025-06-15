
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Fundo com gradiente personalizado */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/80 via-yellow-300/75 to-eco-green/60"></div>
      
      {/* Elementos decorativos abstratos modernos */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Content */}
      <div className="container relative z-10 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto à esquerda */}
          <div className="text-left">
            <div className="mb-6">
              <span className="text-sm font-medium tracking-wider uppercase text-yellow-700/90" style={{
                fontFamily: "'Montserrat', sans-serif"
              }}>
                SOLARI SOLUÇÕES AMBIENTAIS
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-yellow-900" style={{
              animationDelay: "0.1s",
              fontFamily: "'Playfair Display', 'Poppins', serif",
              textShadow: "0px 2px 4px rgba(0,0,0,0.15)"
            }}>
              Conformidade Ambiental que{" "}
              <span className="text-eco-green">Impulsiona</span>{" "}
              seu Negócio com a Solari
            </h1>

            <div className="w-20 h-1.5 rounded-full mb-8 animate-fade-in bg-eco-green" style={{
              animationDelay: "0.3s"
            }}></div>
            
            <p style={{
              animationDelay: "0.4s",
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "0px 1px 2px rgba(255,255,255,0.08)"
            }} className="text-lg max-w-2xl animate-fade-in md:text-xl mb-10 leading-relaxed text-yellow-900/95">
              Com a Solari, a complexidade da legislação ambiental se transforma em segurança para suas operações. Foco no seu crescimento, com a tranquilidade de estar em plena conformidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-4 animate-fade-in" style={{
              animationDelay: "0.6s"
            }}>
              <Button asChild size="lg" className="prisma-btn-primary px-8 py-6 rounded-lg text-base ripple-button">
                <Link to="/services" className="relative z-10 flex items-center gap-3 transition-all group-hover:scale-105">
                  <span className="text-base font-medium">Nossos Serviços</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="prisma-btn-secondary px-8 py-6 rounded-lg text-base group border-2 border-white/30 text-yellow-900 hover:bg-white hover:text-eco-green">
                <Link to="/contact" className="relative z-10 flex items-center gap-3 transition-all group-hover:scale-105">
                  Fale com um Especialista
                </Link>
              </Button>
            </div>
          </div>

          {/* Logo à direita */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/lovable-uploads/2841475c-8c0a-45ba-b310-8788db19c7ea.png" 
                alt="Solari Soluções Ambientais" 
                className="relative w-80 h-auto"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(255, 255, 255, 0.3))"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="wave-divider">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>
    </div>
  );
}
