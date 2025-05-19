
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1974&auto=format&fit=crop')",
          backgroundPosition: "center center"
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 backdrop-blur-[1px]" />
      </div>
      
      {/* Animated blob shapes */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-eco-green/10 eco-blob blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-eco-blue/15 eco-blob blur-3xl animate-pulse-slow"></div>
      
      {/* Textura de folhas */}
      <div className="absolute inset-0 leaf-pattern opacity-20"></div>
      
      {/* Content */}
      <div className="container relative z-10 py-24 md:py-36 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white max-w-5xl animate-fade-in mb-6"
            style={{
              animationDelay: "0.1s",
              fontFamily: "'Poppins', sans-serif",
              textShadow: "0px 2px 30px rgba(0,0,0,0.3)"
            }}>
          Soluções Ambientais para um Futuro Sustentável
        </h1>

        <div className="w-20 h-1.5 bg-eco-accent-yellow rounded-full mb-8 animate-fade-in"
             style={{animationDelay: "0.3s"}}></div>
        
        <p style={{
            animationDelay: "0.4s",
            fontFamily: "'Montserrat', sans-serif",
            textShadow: "0px 1px 10px rgba(0,0,0,0.3)"
          }} 
          className="mt-2 text-lg text-white/90 max-w-2xl animate-fade-in md:text-2xl mb-10 leading-relaxed">
          Consultoria ambiental especializada para empreendimentos e empresas que buscam 
          excelência em sustentabilidade e conformidade legal.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-4 animate-fade-in"
             style={{animationDelay: "0.6s"}}>
          <Button asChild size="lg" className="btn-gradient relative overflow-hidden group ripple-button px-8 py-6 rounded-lg text-base">
            <Link to="/services" className="relative z-10 flex items-center gap-3 hover:underline transition-all group-hover:scale-105">
              <span className="text-base font-medium">Nossos Serviços</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" 
                  className="bg-eco-green text-white hover:bg-eco-green-dark border-eco-green hover:border-eco-green-dark px-8 py-6 rounded-lg text-base group">
            <Link to="/request-quote" className="flex items-center gap-2 hover:underline transition-all group-hover:scale-105">
              Solicitar Orçamento
            </Link>
          </Button>
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
