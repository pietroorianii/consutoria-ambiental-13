
import React from "react";
import { Globe } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const esgCategory: ServiceCategoryData = {
  title: "Consultoria ESG",
  description: "Assessoria especializada em critérios ambientais, sociais e de governança para competitividade e sustentabilidade corporativa.",
  icon: React.createElement(Globe, { className: "h-8 w-8 text-eco-accent-teal" }),
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "Diagnóstico e Estratégia ESG",
      description: "Avaliação completa de práticas ESG e desenvolvimento de estratégias customizadas.",
    },
    {
      title: "Relatórios de Sustentabilidade",
      description: "Elaboração conforme padrões GRI, SASB, TCFD e outros frameworks internacionais.",
    },
    {
      title: "Análise de Riscos ESG",
      description: "Identificação de riscos e oportunidades ambientais, sociais e de governança.",
    },
    {
      title: "Engajamento com Stakeholders",
      description: "Estratégias de comunicação com investidores, comunidades e colaboradores.",
    },
    {
      title: "Políticas Corporativas ESG",
      description: "Desenvolvimento de políticas e indicadores de desempenho em sustentabilidade.",
    }
  ]
};
