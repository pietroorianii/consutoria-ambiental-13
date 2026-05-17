
import React from "react";
import { Waves } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const waterResourcesCategory: ServiceCategoryData = {
  title: "Outorga e Recursos Hídricos",
  description: "Garanta o direito de uso da água e gerencie este recurso vital de forma sustentável e em conformidade com a lei.",
  icon: React.createElement(Waves, { className: "h-8 w-8 text-eco-blue" }),
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    { title: "Outorga de Uso da Água (Superficial e Subterrânea)", description: "Direito de uso para captação em rios, lagos e poços artesianos." },
    { title: "Estudos de Disponibilidade Hídrica", description: "Análises técnicas para fundamentar a solicitação de outorga." },
    { title: "Plano de Uso Racional da Água", description: "Estratégias para otimizar o consumo e reduzir custos." },
    { title: "Monitoramento de Qualidade e Vazão", description: "Coleta e análise de dados para atender às condicionantes da outorga." },
  ]
};
