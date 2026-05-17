import React from "react";
import { Leaf, FileText, Globe2 } from "lucide-react";
import { ServiceGroup } from "./types";

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Licenciamento e Conformidade Legal",
    description: "Garanta a operação legal do seu negócio",
    icon: React.createElement(Leaf, { className: "h-8 w-8" }),
    color: "prisma-green",
    buttonColor: "bg-prisma-green hover:bg-prisma-green/90",
    badge: "Essencial",
    services: [
      {
        title: "Licenciamento Ambiental",
        description: "LP, LI, LO e autorizações",
        href: "/services/licensing"
      },
      {
        title: "Outorga e Recursos Hídricos",
        description: "Direito de uso da água",
        href: "/services/water_resources"
      },
      {
        title: "Gestão Ambiental Contínua",
        description: "Manutenção e renovações",
        href: "/services/management"
      }
    ],
    mainDeliverables: [
      "Licenças Ambientais (LP, LI, LO)",
      "Outorgas de Uso da Água",
      "Autorizações e Dispensas"
    ]
  },
  {
    title: "Estudos Técnicos e Diagnósticos",
    description: "Análise técnica especializada",
    icon: React.createElement(FileText, { className: "h-8 w-8" }),
    color: "prisma-blue",
    buttonColor: "bg-prisma-blue hover:bg-prisma-blue/90",
    badge: "Técnico",
    services: [
      {
        title: "Planos e Relatórios",
        description: "EIA/RIMA, PGRS e documentos",
        href: "/services/reports"
      },
      {
        title: "Monitoramento Ambiental",
        description: "Acompanhamento e análises",
        href: "/services/monitoring"
      },
      {
        title: "Recuperação de Áreas",
        description: "PRAD e GAC",
        href: "/services/degraded_areas"
      }
    ],
    mainDeliverables: [
      "Planos de Gerenciamento (PGRS, PGRSS)",
      "Estudos de Impacto (EIA/RIMA)",
      "Inventários de Áreas Contaminadas"
    ]
  },
  {
    title: "Consultoria Estratégica e ESG",
    description: "Visão de futuro e sustentabilidade",
    icon: React.createElement(Globe2, { className: "h-8 w-8" }),
    color: "prisma-yellow",
    buttonColor: "bg-prisma-yellow hover:bg-prisma-yellow/90",
    badge: "Inovação",
    services: [
      {
        title: "Consultoria ESG",
        description: "Estratégias de sustentabilidade",
        href: "/services/esg"
      },
      {
        title: "Mudanças Climáticas",
        description: "Descarbonização e carbono",
        href: "/services/climate"
      },
      {
        title: "Treinamentos",
        description: "Capacitação de equipes",
        href: "/services/training"
      }
    ],
    mainDeliverables: [
      "Diagnóstico e Estratégia ESG",
      "Inventários de Gases de Efeito Estufa",
      "Relatórios de Sustentabilidade"
    ]
  }
];
