
import { Globe } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const esgServices: ServiceDetailData = {
  id: "esg",
  title: "Consultoria ESG",
  description: "Assessoria especializada em critérios ambientais, sociais e de governança para sustentabilidade corporativa.",
  icon: Globe,
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A consultoria ESG (Environmental, Social and Governance) oferece assessoria estratégica para empresas que buscam integrar critérios de sustentabilidade em suas operações, melhorar sua performance ESG e atender às crescentes demandas de investidores e stakeholders por práticas responsáveis.",
  benefits: [
    "Melhoria do rating ESG e acesso a investimentos",
    "Redução de riscos operacionais e regulatórios",
    "Fortalecimento da reputação corporativa",
    "Atração e retenção de talentos",
    "Vantagem competitiva no mercado",
    "Cumprimento de regulamentações emergentes"
  ],
  steps: [
    {
      title: "Diagnóstico ESG",
      description: "Avaliação completa das práticas ESG atuais e identificação de gaps",
      duration: "2 a 4 semanas"
    },
    {
      title: "Estratégia ESG",
      description: "Desenvolvimento de estratégia ESG alinhada aos objetivos de negócio",
      duration: "3 a 6 semanas"
    },
    {
      title: "Implementação",
      description: "Execução do plano de ação e implementação de políticas ESG",
      duration: "3 a 12 meses"
    },
    {
      title: "Monitoramento e Relato",
      description: "Acompanhamento de indicadores e elaboração de relatórios ESG",
      duration: "Processo contínuo"
    }
  ],
  documents: [
    "Relatório de diagnóstico ESG",
    "Estratégia ESG corporativa",
    "Políticas e procedimentos ESG",
    "Relatório de sustentabilidade",
    "Matriz de materialidade",
    "Plano de engajamento com stakeholders",
    "Sistema de indicadores ESG"
  ],
  timeline: "Implementação completa em 6 a 18 meses, com monitoramento e relato contínuos.",
  legalBasis: [
    "Resolução CVM nº 59/2021 - Relatório de Sustentabilidade",
    "Lei nº 14.182/2021 - Marco Legal das Startups",
    "Padrões GRI (Global Reporting Initiative)",
    "Framework SASB (Sustainability Accounting Standards Board)",
    "Recomendações TCFD (Task Force on Climate-related Financial Disclosures)"
  ],
  tips: [
    "Alinhe a estratégia ESG com objetivos de negócio",
    "Envolva a alta liderança desde o início",
    "Estabeleça metas claras e mensuráveis",
    "Mantenha transparência na comunicação",
    "Monitore tendências e regulamentações ESG"
  ]
};
