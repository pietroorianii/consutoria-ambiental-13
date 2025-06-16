
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image with nature and technology */}
      <div className="absolute inset-0 bg-cover bg-center" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=2000&h=1200')"}}>
      </div>
      
      {/* Overlay gradient integrating brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/70 via-eco-blue/60 to-eco-accent-yellow/50"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-eco-accent-yellow/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Content */}
      <div className="container relative z-10 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="text-sm font-medium tracking-wider uppercase text-white/90" style={{
                fontFamily: "'Montserrat', sans-serif"
              }}>
                SOLARI SOLUÇÕES AMBIENTAIS
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white" style={{
              animationDelay: "0.1s",
              fontFamily: "'Playfair Display', 'Poppins', serif",
              textShadow: "0px 2px 4px rgba(0,0,0,0.3)"
            }}>
              Solari: Clareza e Segurança para sua{" "}
              <span className="text-eco-accent-yellow">Conformidade Ambiental</span>
            </h1>

            <div className="w-20 h-1.5 rounded-full mb-8 animate-fade-in bg-eco-accent-yellow" style={{
              animationDelay: "0.3s"
            }}></div>
            
            <p style={{
              animationDelay: "0.4s",
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "0px 1px 2px rgba(0,0,0,0.3)"
            }} className="text-lg max-w-2xl animate-fade-in md:text-xl mb-10 leading-relaxed text-white/95">
              Navegue pela complexidade da legislação ambiental com a parceria de especialistas. 
              Transformamos desafios regulatórios em oportunidades estratégicas, garantindo a segurança 
              e o crescimento sustentável da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-4 animate-fade-in" style={{
              animationDelay: "0.6s"
            }}>
              <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark text-white px-8 py-6 rounded-lg text-base ripple-button transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link to="/services" className="relative z-10 flex items-center gap-3 group">
                  <span className="text-base font-medium">Conheça Nossas Soluções</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-eco-green px-8 py-6 rounded-lg text-base group transition-all duration-300">
                <Link to="/contact" className="relative z-10 flex items-center gap-3">
                  Fale com um Especialista
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Logo with glassmorphism effect */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glass card effect for the logo */}
              <div className="glass-blur p-8 rounded-3xl animate-float shadow-glass">
                <img 
                  src="/lovable-uploads/d411c434-c49d-4917-ae05-49dc59580547.png" 
                  alt="Solari Soluções Ambientais - Logo" 
                  className="w-80 h-auto"
                />
              </div>
              
              {/* Subtle pulsing elements around the logo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-eco-accent-yellow/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-eco-blue/30 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-eco-green/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
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
