
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout } from "lucide-react";

export function CTASection() {
  return (
    <section className="container py-20 md:py-28 relative z-10">
      <div className="rounded-2xl overflow-hidden relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/lovable-uploads/a408d92a-4d31-4b65-a964-b21fa9920041.png')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-br from-eco-green/90 via-eco-green/80 to-eco-accent-primary/80 backdrop-blur-[1px]"></div>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-organic-pattern opacity-15 mix-blend-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 p-12 sm:p-16 md:p-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-up" style={{
              animationDelay: "0.1s"
            }}>
              <div className="flex justify-center mb-8">
                <div className="p-5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <Sprout className="text-white" size={32} />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>
                Recebeu uma Notificação Ambiental?
              </h2>
              
              <div className="h-1 w-24 bg-eco-accent-yellow rounded-full mx-auto mb-8"></div>
              
              <p className="max-w-2xl mx-auto mb-10 text-white/95 text-lg leading-relaxed">
                <strong>Não entre em pânico!</strong> Nossa equipe especializada pode ajudar você a resolver 
                qualquer problema ambiental. Oferecemos <strong>diagnóstico gratuito em 24h</strong> e garantia 
                de resultado em todas as nossas defesas.
              </p>

              {/* Benefícios destacados */}
              <div className="grid md:grid-cols-3 gap-6 mb-10 text-white/90">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium">Resposta em 24h</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <p className="text-sm font-medium">Garantia de Resultado</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl">💰</span>
                  </div>
                  <p className="text-sm font-medium">Diagnóstico Gratuito</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-up" style={{
              animationDelay: "0.4s"
            }}>
              <Button asChild size="lg" className="bg-eco-accent-yellow hover:bg-eco-accent-yellow/90 text-eco-neutral-dark relative overflow-hidden group px-8 py-6 rounded-lg text-base font-semibold">
                <Link to="/request-quote" className="relative z-10 flex items-center gap-3 transition-all group-hover:scale-105">
                  <span className="text-base font-medium">Solicitar Diagnóstico Gratuito</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30 hover:border-white/50 px-8 py-6 rounded-lg text-base group backdrop-blur-sm">
                <Link to="/services" className="flex items-center gap-2 transition-all group-hover:scale-105">
                  Ver Todos os Serviços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
