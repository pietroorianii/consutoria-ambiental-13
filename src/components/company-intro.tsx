
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Leaf } from "lucide-react";
import { useEffect, useRef } from "react";

export function CompanyIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLUListElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add more granular animations
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            
            if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-fade-in');
            }
            
            if (entry.target === highlightsRef.current) {
              const listItems = highlightsRef.current?.querySelectorAll('li');
              listItems?.forEach((item, index) => {
                item.style.transitionDelay = `${0.2 + index * 0.1}s`;
                item.classList.add('opacity-100', 'translate-x-0');
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [
      sectionRef.current, 
      highlightsRef.current, 
      imageRef.current
    ];

    elements.forEach(el => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-10');
        observer.observe(el);
      }
    });

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
    <section ref={sectionRef} className="container py-16 md:py-24 leaf-pattern relative overflow-hidden transition-all duration-700">
      <div className="absolute top-10 right-10 text-eco-green/10">
        <Leaf className="h-32 w-32 animate-float" />
      </div>
      <div className="absolute -bottom-20 -left-20 text-eco-green/10 rotate-45">
        <Leaf className="h-40 w-40 animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div ref={imageRef} className="transform transition-all duration-700 opacity-0">
          <div className="relative rounded-lg overflow-hidden h-full max-h-[500px] shadow-xl hover:scale-[1.02] transition-transform duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2 hover:text-eco-green transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
          
          <ul ref={highlightsRef} className="space-y-3">
            {highlights.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center gap-2 opacity-0 translate-x-[-20px] transition-all duration-500 ease-out"
              >
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
