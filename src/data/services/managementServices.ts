
import { CloudSun } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const managementServices: ServiceDetailData = {
  id: "management",
  title: "Gestão Ambiental Contínua",
  description: "Serviços continuados para manutenção da conformidade ambiental e gestão sistemática de requisitos legais.",
  icon: CloudSun,
  image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A gestão ambiental contínua é um sistema estruturado para manter sua empresa em permanente conformidade com a legislação ambiental. Inclui controle de prazos, renovação de licenças, gestão de condicionantes e acompanhamento de mudanças regulatórias, garantindo operação segura e livre de penalidades.",
  benefits: [
    "Conformidade legal permanente",
    "Controle sistemático de prazos",
    "Prevenção de multas e penalidades",
    "Otimização de custos ambientais",
    "Redução de riscos operacionais",
    "Tranquilidade para focar no negócio"
  ],
  steps: [
    {
      title: "Diagnóstico da Situação Atual",
      description: "Levantamento completo de licenças, autorizações e obrigações ambientais",
      duration: "1 a 2 semanas"
    },
    {
      title: "Estruturação do Sistema",
      description: "Implementação de sistema de gestão de requisitos legais ambientais",
      duration: "2 a 3 semanas"
    },
    {
      title: "Operação Contínua",
      description: "Acompanhamento mensal de obrigações e prazos conforme cronograma",
      duration: "Processo contínuo"
    },
    {
      title: "Renovações e Atualizações",
      description: "Gestão proativa de renovações e adequações a mudanças regulatórias",
      duration: "Conforme vencimentos"
    }
  ],
  documents: [
    "Sistema de gestão de requisitos legais",
    "Calendário ambiental personalizado",
    "Relatórios mensais de conformidade",
    "Documentação de renovações",
    "Registros de mudanças regulatórias",
    "Cronograma de obrigações anuais",
    "Alertas preventivos de vencimentos"
  ],
  timeline: "Serviço contínuo com diagnóstico inicial (1-2 semanas) e acompanhamento mensal permanente.",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025",
    "Resolução CEMA nº 107/2020",
    "Lei nº 12.305/2010 (PNRS)",
    "Instruções Normativas do IAT",
    "Resoluções CONAMA aplicáveis"
  ],
  tips: [
    "Mantenha sistema de gestão sempre atualizado",
    "Solicite renovações com 120 dias de antecedência",
    "Acompanhe mudanças na legislação ambiental",
    "Documente todas as ações realizadas",
    "Estabeleça rotinas de verificação mensal"
  ]
};
