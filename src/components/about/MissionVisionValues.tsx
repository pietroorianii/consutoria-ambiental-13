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
  return <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 leaf-pattern -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
          fontFamily: "'Poppins', sans-serif"
        }}>Nossa Missão, Visão e Valores</h2>
          <div className="h-1 w-24 bg-eco-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Missão */}
          <div ref={missionRef} className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-eco-green/10 hover:border-eco-green/20 transition-all opacity-0" style={{
          animationDelay: "0.1s"
        }}>
            <div className="mb-6 flex justify-center">
              <div className="bg-eco-green/10 p-4 rounded-full">
                <Target className="h-10 w-10 text-eco-green" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Missão</h3>
            <p className="text-muted-foreground text-center">
              Oferecer soluções ambientais inovadoras e sustentáveis que atendam às necessidades de nossos clientes, 
              contribuindo para a preservação do meio ambiente e o desenvolvimento sustentável.
            </p>
          </div>
          
          {/* Visão */}
          <div ref={visionRef} className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-eco-blue/10 hover:border-eco-blue/20 transition-all opacity-0" style={{
          animationDelay: "0.2s"
        }}>
            <div className="mb-6 flex justify-center">
              <div className="bg-eco-blue/10 p-4 rounded-full">
                <Eye className="h-10 w-10 text-eco-blue" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Visão</h3>
            <p className="text-muted-foreground">
              Ser reconhecida como referência nacional em consultoria ambiental, expandindo nossa atuação para 
              diferentes regiões do país e contribuindo para a formação de uma sociedade mais consciente e sustentável.
            </p>
          </div>
          
          {/* Valores */}
          <div ref={valuesRef} className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-eco-earth/10 hover:border-eco-earth/20 transition-all opacity-0" style={{
          animationDelay: "0.3s"
        }}>
            <div className="mb-6 flex justify-center">
              <div className="bg-eco-earth/10 p-4 rounded-full">
                <Award className="h-10 w-10 text-eco-earth" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Valores</h3>
            <ul ref={valuesItemsRef} className="space-y-2">
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span>Comprometimento com a ética e transparência</span>
              </li>
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span>Excelência na prestação de serviços</span>
              </li>
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span>Respeito ao meio ambiente</span>
              </li>
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span>Inovação e melhoria contínua</span>
              </li>
              <li className="flex items-center gap-2 opacity-0">
                <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span>Responsabilidade social</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
}