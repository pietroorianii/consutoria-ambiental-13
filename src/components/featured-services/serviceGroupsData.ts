import React from "react";
import { Scale, FileText, Leaf } from "lucide-react";
import { ServiceGroup } from "./types";

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Licenciamento e Autorizações Ambientais",
    description: "Regularize e opere com segurança jurídica total",
    icon: React.createElement(Scale, { className: "h-8 w-8" }),
    color: "prisma-green",
    buttonColor: "bg-prisma-green hover:bg-prisma-green/90",
    badge: "Core",
    services: [
      {
        title: "Licenciamento Ambiental",
        description: "DLAM / LAC / LAS / LP / LI / LO",
        href: "/service/licensing"
      },
      {
        title: "Autorizações AA e AF",
        description: "Supressão de vegetação e manejo florestal",
        href: "/service/authorizations"
      },
      {
        title: "Outorga de Recursos Hídricos",
        description: "Captação e lançamento via SIGARH",
        href: "/service/water_grants"
      }
    ],
    mainDeliverables: [
      "DLAM / LAC / LAS / LP / LI / LO",
      "Autorizações Florestais (AF) e Ambientais (AA)",
      "Outorgas via SIGARH"
    ]
  },
  {
    title: "Estudos Técnicos e Instrumentos de Gestão",
    description: "Documentação técnica especializada para o licenciamento",
    icon: React.createElement(FileText, { className: "h-8 w-8" }),
    color: "prisma-blue",
    buttonColor: "bg-prisma-blue hover:bg-prisma-blue/90",
    badge: "Técnico",
    services: [
      {
        title: "Estudos Ambientais",
        description: "EIA/RIMA, RAS, MCE, PBA, PACUERA",
        href: "/service/technical_studies"
      },
      {
        title: "Planos de Gestão",
        description: "PGRS, PGRSS, PCA, PRAD, PRF",
        href: "/service/technical_studies"
      },
      {
        title: "Emissões Atmosféricas",
        description: "Plano de automonitoramento e SGADEA",
        href: "/service/air_emissions"
      }
    ],
    mainDeliverables: [
      "EIA / RIMA / RAS / MCE",
      "PGRS / PGRSS / PCA / PRAD",
      "Plano de Automonitoramento Atmosférico"
    ]
  },
  {
    title: "Conformidade e Regularização Contínua",
    description: "Manutenção da licença e gestão de obrigações periódicas",
    icon: React.createElement(Leaf, { className: "h-8 w-8" }),
    color: "prisma-yellow",
    buttonColor: "bg-prisma-yellow hover:bg-prisma-yellow/90",
    badge: "Gestão",
    services: [
      {
        title: "Gestão de Conformidade",
        description: "Relatórios SGA IR e renovações",
        href: "/service/compliance"
      },
      {
        title: "Regularização Ambiental",
        description: "LASR / LIR / LOR e TAC",
        href: "/service/compliance"
      }
    ],
    mainDeliverables: [
      "Renovação de LO e outorgas",
      "Relatórios periódicos via SGA IR",
      "TAC e regularização ambiental"
    ]
  }
];
