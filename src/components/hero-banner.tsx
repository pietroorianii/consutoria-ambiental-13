
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export function HeroBanner() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={heroRef} className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469533778263-48d4c5d63fb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
          backgroundPosition: "center center"
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-24 md:py-36 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl opacity-0 translate-y-10 transition-all duration-1000 ease-out animate-fade-in" style={{ animationDelay: "0.1s", fontFamily: "'Poppins', sans-serif" }}>
          Soluções Ambientais para um Futuro Sustentável
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl opacity-0 translate-y-10 transition-all duration-1000 ease-out animate-fade-in" style={{ animationDelay: "0.3s", fontFamily: "'Roboto', sans-serif" }}>
          Consultoria ambiental especializada para empresas que buscam excelência em sustentabilidade e conformidade legal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out animate-fade-in" style={{ animationDelay: "0.5s" }}>
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
