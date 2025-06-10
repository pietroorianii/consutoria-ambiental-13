
import React from "react";
import { FileText } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const reportsCategory: ServiceCategoryData = {
  title: "Estudos e Relatórios Ambientais",
  description: "Elaboração de estudos ambientais especializados conforme exigências do IAT e legislação ambiental vigente.",
  icon: React.createElement(FileText, { className: "h-8 w-8 text-eco-green-dark" }),
  image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "EIA/RIMA",
      description: "Estudos de Impacto Ambiental para empreendimentos de significativo impacto.",
    },
    {
      title: "RAP e RAS",
      description: "Relatórios Ambientais Prévios e Simplificados conforme complexidade da atividade.",
    },
    {
      title: "Planos de Gerenciamento (PGRS/PGRSS/PGRCC)",
      description: "Planos especializados para gestão de resíduos sólidos por setor.",
    },
    {
      title: "Estudos de Fauna e Flora",
      description: "Conforme Portaria IAT nº 012/2024 para licenciamentos e autorizações florestais.",
    },
    {
      title: "PCA e PRAD",
      description: "Planos de Controle Ambiental e Recuperação de Áreas Degradadas.",
    },
    {
      title: "Inventários Ambientais",
      description: "Inventários de resíduos sólidos e emissões de gases de efeito estufa.",
    }
  ]
};
