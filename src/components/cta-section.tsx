import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
export function CTASection() {
  return <section className="container py-16 md:py-24">
      <div className="rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/a408d92a-4d31-4b65-a964-b21fa9920041.png')"
      }}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center bg-[#267126]/[0.82]">
          <div className="animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full backdrop-blur-sm bg-gray-100">
                <Leaf className="h-12 w-12 text-eco-green" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
              Pronto para transformar sua gestão ambiental?
            </h2>
            <p style={{
            fontFamily: "'Roboto', sans-serif"
          }} className="max-w-2xl mx-auto mb-8 text-slate-50">
              Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa a atingir a conformidade ambiental com soluções personalizadas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button asChild size="lg" className="btn-gradient text-white relative overflow-hidden group">
              <Link to="/request-quote" className="relative z-10 flex items-center gap-2 mx-[25px]">
                <span>Solicitar Orçamento</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg font-medium">→</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
              <Link to="/services" className="my-0 mx-[25px]">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
}