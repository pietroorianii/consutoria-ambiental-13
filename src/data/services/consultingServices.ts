
import { Users } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const consultingServices: ServiceDetailData = {
  id: "consulting",
  title: "Acompanhamento e Consultoria Ambiental",
  description: "Assessoria técnica especializada para questões ambientais e conformidade legal.",
  icon: Users,
  image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A consultoria ambiental oferece assessoria técnica especializada para auxiliar empresas no cumprimento da legislação ambiental, gestão de riscos e implementação de boas práticas sustentáveis.",
  benefits: [
    "Expertise técnica especializada",
    "Redução de riscos ambientais",
    "Otimização de processos",
    "Conformidade legal garantida",
    "Suporte na tomada de decisões",
    "Acompanhamento contínuo"
  ],
  steps: [
    {
      title: "Diagnóstico Ambiental",
      description: "Avaliação completa da situação ambiental atual da empresa",
      duration: "1 a 2 semanas"
    },
    {
      title: "Plano de Ação",
      description: "Desenvolvimento de estratégias e cronograma de adequações",
      duration: "1 a 2 semanas"
    },
    {
      title: "Implementação",
      description: "Acompanhamento da execução das ações propostas",
      duration: "Conforme cronograma"
    },
    {
      title: "Monitoramento",
      description: "Acompanhamento contínuo dos resultados e ajustes necessários",
      duration: "Processo contínuo"
    }
  ],
  documents: [
    "Relatório de diagnóstico ambiental",
    "Plano de adequação ambiental",
    "Cronograma de implementação",
    "Relatórios de acompanhamento",
    "Registros de não conformidades",
    "Propostas de melhorias",
    "Documentação legal atualizada"
  ],
  timeline: "O acompanhamento pode ser pontual (2-4 semanas) ou contínuo conforme necessidade da empresa.",
  legalBasis: [
    "Legislação ambiental federal, estadual e municipal",
    "Resoluções CONAMA aplicáveis",
    "Normas técnicas NBR",
    "Condicionantes de licenças ambientais",
    "Termos de ajuste de conduta"
  ],
  tips: [
    "Mantenha comunicação clara sobre objetivos",
    "Documente todas as ações realizadas",
    "Estabeleça indicadores de desempenho",
    "Promova capacitação das equipes",
    "Revise estratégias periodicamente"
  ]
};
