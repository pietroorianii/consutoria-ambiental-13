import React from "react";
import { TreePine } from "lucide-react";
import { ServiceCategoryData } from "../types/serviceCategoryTypes";

export const authorizationsCategory: ServiceCategoryData = {
  title: "Autorizações Ambientais e Florestais",
  description: "Autorização Ambiental (AA) e Autorização Florestal (AF) para supressão de vegetação nativa, corte de árvores, manejo florestal, reposição florestal (SERFLOR) e intervenções em APP — via SGA do IAT, conforme INs vigentes 2025/2026.",
  icon: React.createElement(TreePine, { className: "h-8 w-8 text-eco-green" }),
  image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=1000&h=600",
  services: [
    {
      title: "AF — Supressão de Vegetação Nativa",
      description: "Autorização Florestal para supressão de vegetação nativa conforme IN IAT nº 05/2026. Inclui laudo técnico, arquivo KMZ (SIRGAS2000 UTM), análise de APP e Reserva Legal e acompanhamento na Câmara Técnica Florestal (IN 10/2025).",
      detailId: "authorizations",
    },
    {
      title: "AF — Corte de Árvore Isolada",
      description: "Autorização para corte de árvores isoladas conforme IN IAT nº 04/2026. Documentação: ART, croqui de localização e justificativa técnica.",
      detailId: "authorizations",
    },
    {
      title: "AF — Manejo Florestal de Bracatinga",
      description: "Manejo Florestal Sustentável de Mimosa scabrella conforme IN IAT nº 02/2026 (vigente). Inclui plano de manejo e SERFLOR.",
      detailId: "authorizations",
    },
    {
      title: "AF — Retirada de Espécies Exóticas em APP",
      description: "Autorização para remoção de espécies exóticas em Áreas de Preservação Permanente conforme IN IAT nº 14/2025. Inclui laudo de identificação e plano de revegetação.",
      detailId: "authorizations",
    },
    {
      title: "AA — Movimentação de Solo / Terraplanagem",
      description: "Autorização Ambiental para movimentação de solo acima do limite de dispensa conforme IN IAT nº 04/2025. Volumes ≤ 1.000 m³: dispensa automática.",
      detailId: "authorizations",
    },
    {
      title: "Anuência Prévia — Parcelamento Rural",
      description: "Anuência do IAT para desmembramento e parcelamento de imóvel rural conforme IN IAT nº 07/2026. Documentação: ART, CAR, arquivo KMZ e matrícula.",
      detailId: "authorizations",
    },
    {
      title: "Reposição Florestal — SERFLOR",
      description: "Regularização e cumprimento de obrigações de reposição florestal conforme IN IAT nº 08/2025 e Decreto Estadual nº 1.940/1996.",
      detailId: "authorizations",
    },
  ],
};
