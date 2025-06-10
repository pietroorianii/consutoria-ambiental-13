
import { Leaf, Beaker, FileText, Users, TreeDeciduous, CloudSun, LucideIcon } from "lucide-react";
import React from "react";

export interface ServiceCategoryData {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  link: string;
}

export const serviceCategories: ServiceCategoryData[] = [
  {
    icon: Leaf,
    title: "Licenciamento Ambiental",
    description: "Regularize sua empresa e evite multas com nosso licenciamento completo e atualizado conforme Decreto 9.541/2025.",
    items: [
      "DLAM - Declaração de Dispensa (1-15 dias)",
      "LAC - Licença por Adesão (emissão imediata)",
      "LAS - Licença Simplificada (até 60 dias)",
      "LP/LI/LO - Licenciamento Trifásico Completo"
    ],
    link: "/service/licensing"
  },
  {
    icon: Beaker,
    title: "Monitoramento e Análises",
    description: "Acompanhamento especializado de condicionantes ambientais e gestão do MTR online para total conformidade.",
    items: [
      "Acompanhamento de condicionantes ambientais",
      "Gestão do MTR (Manifesto de Transporte de Resíduos)",
      "Declaração de Carga Poluidora (DCP)",
      "Monitoramento de emissões e efluentes"
    ],
    link: "/service/monitoring"
  },
  {
    icon: FileText,
    title: "PGRS e Relatórios Técnicos",
    description: "Elaboração de PGRS obrigatório para diversos setores e estudos ambientais completos.",
    items: [
      "PGRS para hospitais, indústrias e comércios",
      "EIA/RIMA - Estudos de Impacto Ambiental",
      "Inventário de Resíduos Sólidos",
      "Programas de Gestão Ambiental"
    ],
    link: "/service/reports"
  },
  {
    icon: Users,
    title: "Defesas e Consultoria Especializada",
    description: "Resolva notificações, embargos e passivos ambientais com nossa equipe especializada.",
    items: [
      "Defesas para autos de infração (95% de sucesso)",
      "Regularização de passivos ambientais",
      "Termos de Ajustamento de Conduta (TAC)",
      "Consultoria para situações críticas"
    ],
    link: "/service/consulting"
  },
  {
    icon: TreeDeciduous,
    title: "CAR e Regularização Rural",
    description: "Regularize seu CAR e adeque-se ao PRA para proprietários rurais com passivos identificados.",
    items: [
      "Regularização de CAR com pendências",
      "Adesão ao PRA (Programa de Regularização Ambiental)",
      "Estudos para recuperação de áreas degradadas",
      "Adequação às novas exigências rurais"
    ],
    link: "/service/training"
  },
  {
    icon: CloudSun,
    title: "Gestão Contínua",
    description: "Nunca mais perca um prazo! Sistema completo de gestão de licenças e obrigações ambientais.",
    items: [
      "Alertas automáticos de vencimentos",
      "Renovação proativa de licenças",
      "Gestão de declarações anuais",
      "Monitoramento de mudanças na legislação"
    ],
    link: "/service/management"
  }
];
