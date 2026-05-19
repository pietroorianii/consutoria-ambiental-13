import React from "react";
import { Leaf } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const licensingCategory: ServiceCategoryData = {
  title: "Licenciamento Ambiental",
  description: "Todas as modalidades do novo marco regulatório do Paraná — DLAM, LAC, LAS, LP, LI, LO e regularização — conforme Lei Estadual nº 22.252/2024 e INs do IAT vigentes 2025/2026, via SGA do IAT.",
  icon: React.createElement(Leaf, { className: "h-8 w-8 text-eco-green" }),
  image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "DLAM — Declaração de Dispensa",
      description: "Para atividades de baixo impacto ambiental conforme INs do IAT. Prazo: 1 a 15 dias via SGA do IAT.",
      detailId: "dlam",
    },
    {
      title: "LAC — Licença por Adesão e Compromisso",
      description: "Emissão eletrônica imediata para atividades padronizáveis. Sem análise prévia — o responsável assume os compromissos via SGA do IAT.",
      detailId: "lac",
    },
    {
      title: "LAS — Licença Ambiental Simplificada",
      description: "Processo unificado LP+LI+LO para atividades de pequeno porte e baixo impacto. Prazo: até 60 dias.",
      detailId: "las",
    },
    {
      title: "LP — Licença Prévia",
      description: "Aprova a viabilidade ambiental do empreendimento na fase de planejamento. Prazo: 4 a 6 meses.",
      detailId: "lp",
    },
    {
      title: "LI — Licença de Instalação",
      description: "Autoriza a implantação do empreendimento conforme projeto aprovado. Prazo: 4 a 6 meses.",
      detailId: "li",
    },
    {
      title: "LO — Licença de Operação",
      description: "Autoriza o início das atividades após verificação das condicionantes. Prazo: 4 a 6 meses.",
      detailId: "lo",
    },
    {
      title: "Regularização Ambiental — LASR / LIR / LOR",
      description: "Modalidades de regularização para empreendimentos em situação irregular, via Programa de Regularização Ambiental (PRA — Portaria IAT nº 190/2024).",
      detailId: "licensing",
    },
  ],
};
