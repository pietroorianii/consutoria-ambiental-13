
import React from "react";
import { Users } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const consultingCategory: ServiceCategoryData = {
  title: "Consultoria Ambiental Especializada",
  description: "Assessoria técnica estratégica para questões ambientais complexas, auditorias e adequações regulatórias.",
  icon: React.createElement(Users, { className: "h-8 w-8 text-eco-blue-dark" }),
  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "Auditorias Ambientais",
      description: "Auditorias de conformidade legal, desempenho ambiental e due diligence.",
    },
    {
      title: "Defesas e Recursos Ambientais",
      description: "Elaboração de defesas para autos de infração e recursos administrativos.",
    },
    {
      title: "Assessoria para TAC",
      description: "Suporte técnico em Termos de Ajuste de Conduta ambiental.",
    },
    {
      title: "Perícia Ambiental",
      description: "Avaliação técnica especializada para processos judiciais e administrativos.",
    },
    {
      title: "Geotecnologias (SIG)",
      description: "Mapeamento e análise ambiental com Sistemas de Informação Geográfica.",
    },
    {
      title: "Certificações Ambientais",
      description: "Assessoria para ISO 14001 e outras certificações de gestão ambiental.",
    }
  ]
};
