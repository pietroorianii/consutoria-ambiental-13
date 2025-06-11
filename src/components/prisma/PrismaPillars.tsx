
import React from "react";
import { Shield, FileText, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Conformidade e Licenciamento",
    description: "Garantimos que sua empresa opere em total conformidade com a legislação, gerenciando licenças e outorgas do início ao fim."
  },
  {
    icon: FileText,
    title: "Estudos e Laudos Técnicos",
    description: "Elaboramos a documentação técnica essencial, como PRAD, GAC e inventários de resíduos, com rigor e precisão."
  },
  {
    icon: TrendingUp,
    title: "Estratégia e Sustentabilidade",
    description: "Transformamos a agenda ambiental em vantagem competitiva através de consultoria ESG e planejamento estratégico."
  }
];

export function PrismaPillars() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 border-t-4 border-prisma-green shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-prisma-green/10 rounded-full flex items-center justify-center group-hover:bg-prisma-green/20 transition-colors duration-300">
                  <pillar.icon className="h-8 w-8 text-prisma-green" />
                </div>
                
                <h3 className="text-xl font-bold text-prisma-text font-poppins">
                  {pillar.title}
                </h3>
                
                <p className="text-prisma-text/80 leading-relaxed font-lato">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
