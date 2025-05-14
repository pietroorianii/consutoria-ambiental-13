
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout } from "lucide-react"; // Adicionando import do ícone Sprout

export function CTASection() {
  return (
    <section className="container py-20 md:py-28 relative z-10">
      <div className="rounded-2xl overflow-hidden relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/lovable-uploads/a408d92a-4d31-4b65-a964-b21fa9920041.png')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-br from-eco-green/90 via-eco-green/80 to-eco-blue/80 backdrop-blur-[1px]"></div>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-organic-pattern opacity-15 mix-blend-overlay"></div>
        
        {/* Decorative elements */}
        {/* Elementos giratórios foram removidos se existiam aqui, mantendo outros se necessário */}
        
        {/* Content */}
        <div className="relative z-10 p-12 sm:p-16 md:p-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-up" style={{
              animationDelay: "0.1s"
            }}>
              <div className="flex justify-center mb-8">
                <div className="p-5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  {/* Ícone alterado para Sprout */}
                  <Sprout className="text-white" size={32} />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>
                Pronto para transformar sua gestão ambiental?
              </h2>
              
              <div className="h-1 w-24 bg-white/50 rounded-full mx-auto mb-8"></div>
              
              <p className="max-w-2xl mx-auto mb-10 text-white/90 text-lg leading-relaxed">
                Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa 
                a atingir a conformidade ambiental com soluções personalizadas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-up" style={{
              animationDelay: "0.4s"
            }}>
              {/* Botão "Solicitar Orçamento" atualizado para estilo primário do HeroBanner */}
              <Button asChild size="lg" className="btn-gradient relative overflow-hidden group ripple-button px-8 py-6 rounded-lg text-base">
                <Link to="/request-quote" className="relative z-10 flex items-center gap-3">
                  <span className="text-base font-medium">Solicitar Orçamento</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
              
              {/* Botão "Conhecer Serviços" atualizado para estilo secundário do HeroBanner */}
              <Button asChild size="lg" variant="outline" className="bg-eco-green text-white hover:bg-eco-green-dark border-eco-green hover:border-eco-green-dark px-8 py-6 rounded-lg text-base">
                <Link to="/services" className="flex items-center gap-2">
                  Conhecer Serviços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
