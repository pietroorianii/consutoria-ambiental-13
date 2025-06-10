
import React from "react";
import { Leaf } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const licensingCategory: ServiceCategoryData = {
  title: "Licenciamento e Autorizações Ambientais",
  description: "Serviços completos de licenciamento conforme Decreto Estadual nº 9.541/2025 e normas do IAT-PR, desde dispensas até licenciamento trifásico.",
  icon: React.createElement(Leaf, { className: "h-8 w-8 text-eco-green" }),
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "DLAM - Declaração de Dispensa",
      description: "Para atividades de baixo impacto ambiental conforme critérios do IAT (1-15 dias).",
    },
    {
      title: "LAC - Licença por Adesão e Compromisso",
      description: "Emissão eletrônica para atividades padronizáveis via SGA do IAT.",
    },
    {
      title: "LAS - Licença Ambiental Simplificada",
      description: "Processo unificado para atividades de pequeno porte (até 60 dias).",
    },
    {
      title: "Licenciamento Trifásico (LP/LI/LO)",
      description: "Processo completo para empreendimentos de maior complexidade.",
    },
    {
      title: "Modalidades de Regularização",
      description: "LASR, LIR e LOR para adequação de empreendimentos em operação irregular.",
    },
    {
      title: "Autorizações Específicas (AA e AF)",
      description: "Autorizações Ambientais e Florestais para atividades e intervenções específicas.",
    }
  ]
};
