
import React, { useRef, useEffect } from "react";
import { Target, Eye, Award, CheckCircle } from "lucide-react";

export function MissionVisionValues() {
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    if (valuesItemsRef.current) {
      const listItems = valuesItemsRef.current.querySelectorAll('li');
      listItems.forEach((item, index) => {
        item.style.animationDelay = `${0.3 + index * 0.1}s`;
        observer.observe(item);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/10 relative overflow-hidden">
      {/* Elementos decorativos fluidos */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 -z-10"></div>
      
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">Nossa Missão, Visão e Valores</h2>
          <div className="h-1 w-24 bg-brand-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Missão */}
          <div ref={missionRef} className="bg-background/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-brand-accent/10 hover:border-brand-accent/30 transition-all duration-300 opacity-0 hover:-translate-y-1" style={{
            animationDelay: "0.1s"
          }}>
            <div className="mb-6 flex justify-center">
              <div className="bg-brand-accent/10 p-4 rounded-full">
                <Target className="h-10 w-10 text-brand-accent" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Missão</h3>
            <p className="text-center text-gray-950">
              Oferecer soluções ambientais inovadoras e sustentáveis que atendam às necessidades de nossos clientes, 
              contribuindo para a preservação do meio ambiente e o desenvolvimento sustentável.
            </p>
          </div>
          
          {/* Visão */}
          <div ref={visionRef} className="bg-background/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 opacity-0 hover:-translate-y-1" style={{
            animationDelay: "0.2s"
          }}>
            <div className="mb-6 flex justify-center">
              <div className="bg-brand-primary/10 p-4 rounded-full">
                <Eye className="h-10 w-10 text-brand-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Visão</h3>
            <p className="text-center text-gray-950">
              Ser reconhecida como referência nacional em consultoria ambiental, expandindo nossa atuação para 
              diferentes regiões do país e contribuindo para a formação de uma sociedade mais consciente e sustentável.
            </p>
          </div>
          
          {/* Valores */}
          <div ref={valuesRef} className="bg-background/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-brand-secondary/10 hover:border-brand-secondary/30 transition-all duration-300 opacity-0 hover:-translate-y-1" style={{
            animationDelay: "0.3s"
          }}>
            <div className="mb-6 flex justify-center">
              <div className="bg-brand-secondary/10 p-4 rounded-full">
                <Award className="h-10 w-10 text-brand-secondary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Valores</h3>
            <ul ref={valuesItemsRef} className="space-y-2">
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span className="text-gray-950">Comprometimento com a ética e transparência</span>
              </li>
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span className="text-gray-950">Excelência na prestação de serviços</span>
              </li>
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span className="text-gray-950">Respeito ao meio ambiente</span>
              </li>
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span className="text-gray-950">Inovação e melhoria contínua</span>
              </li>
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span className="text-gray-950">Responsabilidade social</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
