
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Leaf } from "lucide-react";
import { useEffect, useRef } from "react";

export function CompanyIntro() {
  const highlightsRef = useRef<HTMLUListElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (highlightsRef.current) {
      const listItems = highlightsRef.current.querySelectorAll('li');
      listItems.forEach((item) => {
        observer.observe(item);
      });
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const highlights = [
    "Equipe técnica especializada e multidisciplinar",
    "Mais de 15 anos de experiência no mercado",
    "Atendimento personalizado para cada cliente",
    "Soluções ambientais adaptadas às necessidades específicas"
  ];

  return (
    <section className="container py-16 md:py-24 leaf-pattern relative overflow-hidden">
      <div className="absolute top-10 right-10 text-eco-green/10">
        <Leaf className="h-32 w-32 animate-float" />
      </div>
      <div className="absolute -bottom-20 -left-20 text-eco-green/10 rotate-45">
        <Leaf className="h-40 w-40 animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div ref={imageRef} className="transform transition-all duration-700 opacity-0">
          <div className="relative rounded-lg overflow-hidden h-full max-h-[500px] shadow-xl">
            <img 
              src="/lovable-uploads/9a64c487-4744-489a-9762-3739eb5961ad.png" 
              alt="Sustentabilidade ambiental" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="transform transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="bg-eco-green/10 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-eco-green" />
              </span>
              Consultoria Ambiental Especializada
            </h2>
            <div className="h-1 w-20 bg-eco-green mt-4 transform origin-left transition-all duration-500 hover:w-40"></div>
          </div>
          
          <p className="text-muted-foreground transform transition-all duration-700 delay-100">
            A EcoConsult é uma empresa de consultoria ambiental que oferece soluções completas para empresas que buscam sustentabilidade e conformidade legal em seus processos. Com uma equipe técnica altamente qualificada, trabalhamos para garantir que nossos clientes estejam em dia com todas as exigências ambientais, otimizando recursos e promovendo práticas sustentáveis.
          </p>
          
          <ul className="space-y-3" ref={highlightsRef}>
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-2 opacity-0" style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span style={{ fontFamily: "'Lato', sans-serif" }}>{item}</span>
              </li>
            ))}
          </ul>
          
          <Button asChild className="mt-4 btn-gradient text-white transform transition-all duration-500 hover:scale-105">
            <Link to="/about">Conheça Nossa Equipe</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
