
import React from "react";
import { Recycle } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const climateCategory: ServiceCategoryData = {
  title: "Mudanças Climáticas e Descarbonização",
  description: "Soluções especializadas para gestão de riscos climáticos, redução de emissões e adaptação às mudanças climáticas.",
  icon: React.createElement(Recycle, { className: "h-8 w-8 text-eco-accent-sage" }),
  image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "Inventários de Gases de Efeito Estufa",
      description: "Elaboração de inventários GEE corporativos conforme ISO 14064 e verificação terceirizada.",
    },
    {
      title: "Planos de Descarbonização",
      description: "Estratégias de redução de emissões e roadmap para neutralidade carbônica.",
    },
    {
      title: "Análise de Vulnerabilidade Climática",
      description: "Avaliação de riscos físicos e de transição climática para adaptação empresarial.",
    },
    {
      title: "Projetos de Crédito de Carbono",
      description: "Desenvolvimento e consultoria em projetos desde concepção até comercialização.",
    },
    {
      title: "Economia Circular",
      description: "Implementação de estratégias circulares e modelos de negócio sustentáveis.",
    }
  ]
};
