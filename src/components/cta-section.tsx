
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1000&h=600')" 
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para transformar sua gestão ambiental?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa a atingir a conformidade ambiental com soluções personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark text-white">
              <Link to="/contact">Solicitar Orçamento</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link to="/services">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
