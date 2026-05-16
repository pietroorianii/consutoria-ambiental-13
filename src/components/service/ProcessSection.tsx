
import React from "react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Diagnóstico",
      description: "Realizamos uma análise detalhada da situação ambiental da empresa, identificando necessidades, pendências e oportunidades de melhoria."
    },
    {
      number: 2,
      title: "Planejamento",
      description: "Desenvolvemos um plano de ação personalizado, com cronograma e definição clara dos entregáveis e responsabilidades."
    },
    {
      number: 3,
      title: "Execução",
      description: "Implementamos as ações definidas, mantendo comunicação constante e transparente sobre o andamento dos trabalhos."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {steps.map((step, index) => (
        <div 
          key={index}
          className="relative bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-lg transition-all scroll-trigger" 
          style={{ animationDelay: `${0.2 + index * 0.1}s` }}
        >
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-eco-green flex items-center justify-center text-white font-bold text-lg shadow-lg animate-float">
            {step.number}
          </div>
          <h3 
             
            className="font-semibold mb-4 mt-2 text-2xl"
          >
            {step.title}
          </h3>
          <p 
             
            className="text-muted-foreground text-lg"
          >
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
};
