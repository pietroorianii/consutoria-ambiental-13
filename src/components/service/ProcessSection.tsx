
import React from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: string;
}

const ProcessStep = ({ number, title, description, delay }: ProcessStepProps) => {
  return (
    <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all animate-fade-up" style={{
      animationDelay: delay
    }}>
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg shadow-lg animate-float">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-4 mt-2" style={{
        fontFamily: "'Poppins', sans-serif"
      }}>{title}</h3>
      <p className="text-muted-foreground" style={{
        fontFamily: "'Lato', sans-serif"
      }}>
        {description}
      </p>
    </div>
  );
};

export const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Diagnóstico",
      description: "Realizamos uma análise detalhada da situação ambiental da empresa, identificando necessidades, pendências e oportunidades de melhoria.",
      delay: "0.2s"
    },
    {
      number: 2,
      title: "Planejamento",
      description: "Desenvolvemos um plano de ação personalizado, com cronograma e definição clara dos entregáveis e responsabilidades.",
      delay: "0.3s"
    },
    {
      number: 3,
      title: "Execução",
      description: "Implementamos as ações definidas, mantendo comunicação constante e transparente sobre o andamento dos trabalhos.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      <div className="container relative">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>Como Trabalhamos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{
            fontFamily: "'Lato', sans-serif"
          }}>Nossa abordagem para projetos ambientais é estruturada e orientada para resultados</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
