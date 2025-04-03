
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1974&auto=format&fit=crop')",
          backgroundPosition: "center center"
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-24 md:py-36 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl animate-fade-in" style={{ animationDelay: "0.1s", fontFamily: "'Poppins', sans-serif" }}>
          Soluções Ambientais para um Futuro Sustentável
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s", fontFamily: "'Roboto', sans-serif" }}>
          Consultoria ambiental especializada para empresas que buscam excelência em sustentabilidade e conformidade legal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button asChild size="lg" className="btn-gradient text-white relative overflow-hidden group">
            <Link to="/services" className="relative z-10 flex items-center gap-2">
              <span>Nossos Serviços</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
            <Link to="/request-quote">Solicitar Orçamento</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
