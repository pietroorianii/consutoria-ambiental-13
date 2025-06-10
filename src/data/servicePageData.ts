
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
    title: "Licenciamento e Autorizações",
    description: "Obtenção de licenças e autorizações ambientais em conformidade com a legislação vigente.",
    items: ["Licenciamentos Ambientais (LP, LI, LO, AA, LAS)", "Autorizações Ambientais", "Cadastro Técnico Federal (IBAMA)", "Outorgas de Recursos Hídricos"],
    link: "/services/licensing"
  },
  {
    icon: Beaker,
    title: "Monitoramento e Análises",
    description: "Acompanhamento de condicionantes ambientais e análises de conformidade.",
    items: ["Acompanhamento de condicionantes ambientais", "Declaração de Carga Poluidora (DCP)", "Monitoramento de emissões de poluentes", "Gestão de amostragens e análises"],
    link: "/services/monitoring"
  },
  {
    icon: FileText,
    title: "Planos e Relatórios",
    description: "Elaboração de documentos técnicos para sua empresa atender às exigências legais.",
    items: ["Inventário de Resíduos Sólidos", "Planos de Gerenciamento de Resíduos", "Estudos de Impacto Ambiental (EIA/RIMA, EIV/RIV)", "Programas de Gestão Ambiental"],
    link: "/services/reports"
  },
  {
    icon: Users,
    title: "Acompanhamento e Consultoria",
    description: "Assessoria técnica para questões ambientais e acompanhamento de projetos.",
    items: ["Acompanhamento de projetos ambientais", "Elaboração de relatórios para TAC e notificações", "Inspeções ambientais e auditorias", "Relatórios de cumprimento de condicionantes"],
    link: "/services/consulting"
  },
  {
    icon: TreeDeciduous,
    title: "Treinamentos e Capacitações",
    description: "Capacitação e treinamentos especializados para equipes e colaboradores.",
    items: ["Treinamentos presenciais e remotos", "Treinamento em Gerenciamento de Resíduos Sólidos", "Capacitações específicas para cada setor"],
    link: "/services/training"
  },
  {
    icon: CloudSun,
    title: "Gestão e Manutenção Ambiental",
    description: "Serviços continuados de gestão e manutenção de requisitos ambientais.",
    items: ["Renovação de licenças e autorizações", "Declarações e inventários anuais", "Defesas ambientais", "Manutenções e atualizações periódicas"],
    link: "/services/management"
  }
];
