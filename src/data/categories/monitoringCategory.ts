
import React from "react";
import { Beaker } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const monitoringCategory: ServiceCategoryData = {
  title: "Monitoramento e Análises Ambientais",
  description: "Monitoramento contínuo e análises técnicas especializadas para garantir conformidade ambiental e atendimento às condicionantes.",
  icon: React.createElement(Beaker, { className: "h-8 w-8 text-eco-blue" }),
  image: "",
  services: [
    {
      title: "Monitoramento de Emissões Atmosféricas",
      description: "Controle de poluentes atmosféricos conforme condicionantes de licenças.",
    },
    {
      title: "Monitoramento de Efluentes Líquidos",
      description: "Análise e controle da qualidade de efluentes industriais e sanitários.",
    },
    {
      title: "Monitoramento da Qualidade da Água",
      description: "Acompanhamento de águas superficiais e subterrâneas.",
    },
    {
      title: "Gestão de Análises Laboratoriais",
      description: "Coordenação de coletas e análises com laboratórios credenciados.",
    },
    {
      title: "Acompanhamento de Condicionantes",
      description: "Gestão sistemática do cumprimento de condicionantes ambientais.",
    }
  ]
};
