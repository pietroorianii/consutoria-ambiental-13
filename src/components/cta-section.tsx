import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export function CTASection() {
  return <section className="container py-20 md:py-28 relative z-10">
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
        <div className="absolute top-10 left-10 leaf-decoration animate-spin-slow opacity-30"></div>
        <div className="absolute bottom-10 right-10 leaf-decoration animate-spin-slow opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 p-12 sm:p-16 md:p-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-up" style={{
            animationDelay: "0.1s"
          }}>
              <div className="flex justify-center mb-8">
                <div className="p-5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M2 22c1.25-1.67 2.04-3.92 6-7 3 4 5 5 14 0-4.87 8.68-15 10-20 7z"></path>
                    <path d="M22 8c0 5-3 7-8 7s-8-2-8-7c0-3.31 1.79-6 4-6 1 0 2.83 1.67 4 2 1.17-.33 3-2 4-2 2.21 0 4 2.69 4 6z"></path>
                  </svg>
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
              <Button asChild size="lg" className="bg-white text-eco-green hover:bg-white/90 relative overflow-hidden shimmer py-6 px-10 rounded-lg">
                <Link to="/request-quote" className="relative z-10 flex items-center gap-2 text-base font-medium">
                  <span>Solicitar Orçamento</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm py-6 px-10 rounded-lg">
                <Link to="/services" className="relative z-10 flex items-center gap-2 text-base font-medium">
                  Conhecer Serviços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}