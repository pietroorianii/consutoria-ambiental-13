
import { Users } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const consultingServices: ServiceDetailData = {
  id: "consulting",
  title: "Consultoria Ambiental - Resolva Qualquer Problema",
  description: "Recebeu uma notificação? Precisa de uma defesa? Quer regularizar passivos? Nossa consultoria especializada resolve questões ambientais complexas com agilidade e segurança.",
  icon: Users,
  image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Nossa consultoria ambiental atua como seu 'bombeiro' para situações críticas e seu 'estrategista' para planejamento de longo prazo. Temos experiência em resolver desde notificações simples até embargos complexos, sempre focando em minimizar custos e prazos para nossos clientes.",
  benefits: [
    "Resolução de 95% dos casos sem necessidade de recurso",
    "Redução média de 60% no valor de multas através de negociação",
    "Equipe com experiência em mais de 500 defesas ambientais",
    "Atendimento de urgência 24h para casos críticos",
    "Estratégias personalizadas para cada tipo de problema",
    "Acompanhamento até resolução definitiva do caso"
  ],
  steps: [
    {
      title: "Análise Urgente do Problema",
      description: "Avaliamos a notificação/embargo e definimos estratégia de defesa em 24h",
      duration: "1 dia"
    },
    {
      title: "Elaboração da Estratégia de Defesa",
      description: "Preparamos argumentação técnica e jurídica personalizada para seu caso",
      duration: "3 a 7 dias"
    },
    {
      title: "Protocolo e Acompanhamento",
      description: "Protocolamos defesa e acompanhamos análise do órgão ambiental",
      duration: "30 a 60 dias"
    },
    {
      title: "Resolução e Adequações",
      description: "Implementamos adequações necessárias e garantimos conformidade",
      duration: "Conforme necessidade"
    }
  ],
  documents: [
    "Defesas técnicas para autos de infração ambiental",
    "Relatórios de adequação e conformidade",
    "Pareceres técnicos especializados",
    "Laudos de perícia ambiental",
    "Termos de Ajustamento de Conduta (TAC)",
    "Relatórios de due diligence ambiental",
    "Estudos de viabilidade para regularização"
  ],
  timeline: "Análise inicial em 24h. Defesas elaboradas em 3-7 dias. Acompanhamento completo até resolução definitiva (30-180 dias conforme complexidade).",
  legalBasis: [
    "Lei nº 9.605/1998 (Crimes Ambientais)",
    "Decreto nº 6.514/2008 (Infrações Ambientais)",
    "Decreto Estadual nº 9.541/2025",
    "Código Florestal (Lei nº 12.651/2012)",
    "Resoluções CONAMA aplicáveis"
  ],
  tips: [
    "Nunca ignore notificações - os prazos são improrrogáveis",
    "Mantenha documentação organizada para facilitar defesas",
    "Contrate consultoria antes de responder ao órgão",
    "Evite fazer declarações sem orientação técnica",
    "Considere TAC para resolver passivos de forma negociada"
  ]
};
