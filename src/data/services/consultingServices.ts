
import { Users } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const consultingServices: ServiceDetailData = {
  id: "consulting",
  title: "Consultoria Ambiental Especializada",
  description: "Assessoria técnica estratégica para questões ambientais complexas, auditorias e adequações regulatórias.",
  icon: Users,
  image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Nossa consultoria ambiental especializada oferece assessoria estratégica para empresas enfrentarem desafios ambientais complexos, desde auditorias de conformidade até implementação de tecnologias geoespaciais. Combinamos expertise técnica com visão de negócios para transformar obrigações ambientais em vantagens competitivas.",
  benefits: [
    "Expertise técnica multidisciplinar",
    "Soluções customizadas por setor",
    "Redução de riscos regulatórios",
    "Otimização de processos ambientais",
    "Suporte em litígios ambientais",
    "Implementação de tecnologias avançadas"
  ],
  steps: [
    {
      title: "Diagnóstico Técnico Especializado",
      description: "Avaliação detalhada da situação ambiental e identificação de oportunidades",
      duration: "1 a 3 semanas"
    },
    {
      title: "Desenvolvimento de Estratégia",
      description: "Elaboração de plano de ação técnico e cronograma de implementação",
      duration: "1 a 2 semanas"
    },
    {
      title: "Implementação Assistida",
      description: "Acompanhamento técnico especializado na execução das soluções",
      duration: "Conforme cronograma"
    },
    {
      title: "Monitoramento e Otimização",
      description: "Avaliação contínua de resultados e ajustes estratégicos",
      duration: "Processo contínuo"
    }
  ],
  documents: [
    "Relatórios de auditoria ambiental",
    "Pareceres técnicos especializados",
    "Defesas para autos de infração",
    "Laudos de perícia ambiental",
    "Mapas e análises geoespaciais",
    "Relatórios de due diligence",
    "Planos de adequação regulatória"
  ],
  timeline: "Projetos de consultoria variam de 2 semanas (pareceres técnicos) a 6 meses (implementação de sistemas complexos).",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025",
    "Resolução CEMA nº 107/2020",
    "Lei Federal nº 6.938/1981",
    "Código Florestal (Lei nº 12.651/2012)",
    "Normas técnicas ABNT aplicáveis"
  ],
  tips: [
    "Realize auditorias preventivas regulares",
    "Mantenha documentação técnica organizada",
    "Invista em tecnologias de monitoramento",
    "Capacite equipes em questões ambientais",
    "Busque consultoria antes de problemas regulatórios"
  ]
};
