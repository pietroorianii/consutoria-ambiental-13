
import React from "react";
import { Map, ClipboardList } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const managementCategory: ServiceCategoryData = {
  title: "Gestão Ambiental Contínua",
  description: "Serviços continuados para manutenção da conformidade ambiental e gestão de requisitos legais.",
  icon: React.createElement(ClipboardList, { className: "h-8 w-8 text-eco-blue" }),
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "Gestão de Requisitos Legais",
      description: "Sistema de gestão de obrigações ambientais e controle de prazos.",
    },
    {
      title: "Renovação de Licenças",
      description: "Acompanhamento e renovação de licenças e autorizações com antecedência.",
    },
    {
      title: "Declarações Anuais",
      description: "Elaboração de inventários e declarações obrigatórias aos órgãos ambientais.",
    },
    {
      title: "Suporte Técnico Contínuo",
      description: "Assessoria permanente para questões ambientais do dia a dia.",
    }
  ]
};
