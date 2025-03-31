
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl animate-fade-in">
          Soluções Ambientais para um Futuro Sustentável
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Consultoria ambiental especializada para empresas que buscam excelência em sustentabilidade e conformidade legal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark text-white">
            <Link to="/services">Nossos Serviços</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
            <Link to="/contact">Fale Conosco</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
