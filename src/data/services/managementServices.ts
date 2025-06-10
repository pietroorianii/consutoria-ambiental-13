
import { CloudSun } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const managementServices: ServiceDetailData = {
  id: "management",
  title: "Gestão Ambiental Contínua - Nunca Mais Perca um Prazo",
  description: "Sistema completo de gestão de licenças e obrigações ambientais. Monitoramos todos os prazos para que você foque no seu negócio sem preocupações.",
  icon: CloudSun,
  image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A gestão ambiental contínua é como ter um departamento ambiental especializado sem os custos fixos. Controlamos todos os seus prazos, renovações e obrigações ambientais de forma proativa. Com nosso sistema, você recebe alertas antecipados e tem a garantia de que nunca perderá um prazo importante.",
  benefits: [
    "Zero risco de multas por vencimento de licenças",
    "Redução de 80% do tempo gasto com burocracia",
    "Alertas automáticos 120, 60 e 30 dias antes dos vencimentos",
    "Acesso 24h ao status de todas suas obrigações",
    "Economia média de R$ 15.000/ano em consultorias pontuais",
    "Tranquilidade total para focar no crescimento do negócio"
  ],
  steps: [
    {
      title: "Auditoria Completa da Situação Atual",
      description: "Mapeamos todas as licenças, autorizações e obrigações ambientais da sua empresa",
      duration: "1 a 2 semanas"
    },
    {
      title: "Implementação do Sistema de Gestão",
      description: "Configuramos seu painel personalizado com todos os prazos e obrigações",
      duration: "1 semana"
    },
    {
      title: "Monitoramento Contínuo",
      description: "Acompanhamento mensal com relatórios e alertas preventivos automáticos",
      duration: "Serviço contínuo"
    },
    {
      title: "Renovações Proativas",
      description: "Iniciamos processos de renovação automaticamente conforme cronograma",
      duration: "Conforme vencimentos"
    }
  ],
  documents: [
    "Dashboard personalizado com status de todas as licenças",
    "Calendário ambiental personalizado para sua empresa",
    "Relatórios mensais de conformidade e próximos vencimentos",
    "Arquivo digital organizado de toda documentação",
    "Alertas por email e WhatsApp dos prazos importantes",
    "Documentação de todas as renovações realizadas",
    "Registro histórico de mudanças na legislação"
  ],
  timeline: "Implementação em 2-3 semanas. Monitoramento mensal contínuo com relatórios detalhados e ações preventivas automatizadas.",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025 (Prazos de renovação)",
    "Resolução CEMA nº 107/2020 (Procedimentos de renovação)",
    "Lei nº 12.305/2010 (Gestão de Resíduos Sólidos)",
    "Instruções Normativas IAT vigentes",
    "Resoluções CONAMA aplicáveis ao seu setor"
  ],
  tips: [
    "Licenças vencidas podem resultar em multas de até R$ 10 milhões",
    "Mantenha backup digital de todos os documentos ambientais",
    "Estabeleça rotina mensal de verificação de prazos",
    "Comunique mudanças na empresa que possam afetar licenças",
    "Monitore alterações na legislação que possam impactar sua atividade"
  ]
};
