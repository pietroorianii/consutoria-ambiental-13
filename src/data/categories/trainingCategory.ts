
import React from "react";
import { TreeDeciduous } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const trainingCategory: ServiceCategoryData = {
  title: "Treinamentos e Capacitações Ambientais",
  description: "Programas de educação ambiental e capacitação técnica para equipes e colaboradores.",
  icon: React.createElement(TreeDeciduous, { className: "h-8 w-8 text-eco-green" }),
  image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "Treinamento em Legislação Ambiental",
      description: "Capacitação sobre Decreto nº 9.541/2025 e normas aplicáveis por setor.",
    },
    {
      title: "Gerenciamento de Resíduos Sólidos",
      description: "Treinamento certificado em PGRS conforme Lei nº 12.305/2010.",
    },
    {
      title: "Atendimento a Emergências Ambientais",
      description: "Capacitação para resposta rápida e adequada a incidentes ambientais.",
    },
    {
      title: "Capacitações Setoriais",
      description: "Programas específicos para indústria, agronegócio, serviços e construção civil.",
    }
  ]
};
