
import { CloudSun } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const managementServices: ServiceDetailData = {
  id: "management",
  title: "Gestão e Manutenção Ambiental",
  description: "Serviços continuados para manutenção da conformidade ambiental.",
  icon: CloudSun,
  image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A gestão ambiental continuada envolve o acompanhamento sistemático das obrigações ambientais, renovação de licenças, atualização de documentos e manutenção da conformidade legal ao longo do tempo.",
  benefits: [
    "Conformidade legal permanente",
    "Redução de custos operacionais",
    "Prevenção de penalidades",
    "Otimização de processos",
    "Melhoria contínua",
    "Tranquilidade operacional"
  ],
  steps: [
    {
      title: "Diagnóstico da Situação",
      description: "Avaliação do status atual das obrigações ambientais",
      duration: "1 semana"
    },
    {
      title: "Planejamento Anual",
      description: "Elaboração de cronograma de atividades e renovações",
      duration: "1 semana"
    },
    {
      title: "Execução das Atividades",
      description: "Cumprimento das obrigações conforme cronograma estabelecido",
      duration: "Processo contínuo"
    },
    {
      title: "Monitoramento e Ajustes",
      description: "Acompanhamento dos resultados e adequações necessárias",
      duration: "Mensal"
    }
  ],
  documents: [
    "Calendário ambiental",
    "Licenças e autorizações vigentes",
    "Relatórios de acompanhamento",
    "Declarações anuais",
    "Registros de conformidade",
    "Cronograma de renovações",
    "Documentação atualizada"
  ],
  timeline: "Serviço contínuo com atividades programadas mensalmente e renovações conforme vencimentos.",
  legalBasis: [
    "Legislação ambiental aplicável",
    "Condicionantes das licenças",
    "Resoluções dos órgãos ambientais",
    "Normas técnicas atualizadas",
    "Compromissos assumidos"
  ],
  tips: [
    "Mantenha calendário ambiental atualizado",
    "Antecipe-se aos vencimentos",
    "Monitore mudanças na legislação",
    "Documente todas as atividades",
    "Mantenha comunicação com órgãos ambientais"
  ]
};
