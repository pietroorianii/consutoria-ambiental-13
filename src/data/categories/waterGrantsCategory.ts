import React from "react";
import { Waves } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const waterGrantsCategory: ServiceCategoryData = {
  title: "Outorga de Recursos Hídricos",
  description: "Direito legal de uso de águas superficiais e subterrâneas no Paraná — captação, lançamento de efluentes e estruturas hídricas — via SIGARH. A outorga pode ser condicionante obrigatória da Licença de Operação (LO).",
  icon: React.createElement(Waves, { className: "h-8 w-8 text-eco-blue" }),
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "Outorga de Captação Subterrânea",
      description: "Direito de uso de água de poço artesiano. Documentação: ART, teste de bombeamento, análise físico-química e dominialidade. Processo integrado com licenciamento conforme IN IAT nº 09/2026.",
      detailId: "water_grants",
    },
    {
      title: "Outorga de Captação Superficial — Irrigação",
      description: "Direito de captação em rios e lagos para fins de irrigação agrícola. Inclui estudo de disponibilidade hídrica e croqui de localização.",
      detailId: "water_grants",
    },
    {
      title: "Outorga de Captação Superficial — Criação de Animais",
      description: "Direito de uso de água superficial para dessedentação animal em propriedades rurais.",
      detailId: "water_grants",
    },
    {
      title: "Outorga de Captação Superficial — Aquicultura",
      description: "Direito de captação para piscicultura e aquicultura, integrada ao licenciamento ambiental conforme IN IAT nº 51/2025.",
      detailId: "water_grants",
    },
    {
      title: "Outorga de Lançamento de Efluentes",
      description: "Direito de lançar efluentes tratados em corpos hídricos. Requer caracterização do efluente (Declaração de Carga Poluidora) e licença ambiental vigente.",
      detailId: "water_grants",
    },
    {
      title: "Outorga de Barragem",
      description: "Direito de barramento de curso d'água. Requer projeto executivo, ART e estudo de disponibilidade hídrica da bacia.",
      detailId: "water_grants",
    },
  ],
};
