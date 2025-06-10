
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1974&auto=format&fit=crop')",
        backgroundPosition: "center center"
      }}>
        {/* Dark overlay melhorado para contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-eco-green/80 via-eco-green/70 to-eco-neutral-dark/60 backdrop-blur-[1px]" />
      </div>
      
      {/* Animated blob shapes com nova paleta */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-eco-accent-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-eco-accent-teal/25 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-organic-pattern opacity-30"></div>
      
      {/* Content com mensagem focada na dor do cliente */}
      <div className="container relative z-10 py-24 md:py-36 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white max-w-5xl animate-fade-in mb-6" style={{
          animationDelay: "0.1s",
          fontFamily: "'Poppins', sans-serif",
          textShadow: "0px 2px 30px rgba(0,0,0,0.5)"
        }}>
          Licenciamento Ambiental sem Complicações
        </h1>

        <div className="w-20 h-1.5 bg-eco-accent-yellow rounded-full mb-8 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}></div>
        
        <p style={{
          animationDelay: "0.4s",
          fontFamily: "'Montserrat', sans-serif",
          textShadow: "0px 1px 10px rgba(0,0,0,0.4)"
        }} className="mt-2 text-lg text-white/95 max-w-2xl animate-fade-in md:text-2xl mb-10 leading-relaxed">
          <strong>Evite multas, embargos e dores de cabeça.</strong> Regularize sua empresa com nossa 
          consultoria especializada em conformidade ambiental e foque no que realmente importa: o crescimento do seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-4 animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
          <Button asChild size="lg" className="bg-eco-accent-primary hover:bg-eco-accent-primary/90 text-white relative overflow-hidden group px-8 py-6 rounded-lg text-base shadow-lg">
            <Link to="/services" className="relative z-10 flex items-center gap-3 transition-all group-hover:scale-105">
              <span className="text-base font-medium">Conhecer Nossos Serviços</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30 hover:border-white/50 px-8 py-6 rounded-lg text-base group backdrop-blur-sm">
            <Link to="/request-quote" className="relative z-10 flex items-center gap-3 transition-all group-hover:scale-105">
              Solicitar Diagnóstico Gratuito
            </Link>
          </Button>
        </div>

        {/* Indicador de valor adicional */}
        <div className="mt-12 flex flex-col items-center text-white/80 animate-fade-in" style={{
          animationDelay: "0.8s"
        }}>
          <p className="text-sm mb-2">✓ Diagnóstico gratuito em 24h</p>
          <p className="text-sm">✓ Garantia de aprovação ou reembolso total</p>
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
