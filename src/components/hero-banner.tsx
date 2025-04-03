
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1469533778263-48d4c5d63fb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
];

export function HeroBanner() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    // Auto-rotate background images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div ref={heroRef} className="relative overflow-hidden h-[85vh]">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url('${image}')`,
              backgroundPosition: "center center"
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      {/* Carousel Controls */}
      <button 
        onClick={prevImage}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
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
