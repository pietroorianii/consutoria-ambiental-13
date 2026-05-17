
import { Briefcase } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const consultingServices: ServiceDetailData = {
  id: "consulting",
  title: "Consultoria Ambiental Especializada",
  description: "Assessoria técnica em auditorias, defesas, perícias, SIG e adequações regulatórias, conforme legislação ambiental federal e estadual vigente no Paraná.",
  icon: Users,
  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Nossa consultoria ambiental especializada oferece assessoria estratégica e técnica para empresas enfrentarem desafios ambientais complexos. Realizamos auditorias de conformidade com base na Resolução CEMA 105/2019, Decreto Estadual vigente e INs do IAT. Elaboramos defesas técnicas para autos de infração emitidos pelo IAT e IBAMA, assessoramos negociações de TAC e realizamos perícias ambientais para processos judiciais e administrativos. Também desenvolvemos mapeamentos e análises geoespaciais com SIG (Sistema de Informação Geográfica), fundamentais para caracterização ambiental e tomada de decisão estratégica.",
  benefits: [
    "Auditoria Preventiva: identificação e correção de não conformidades antes de autuações fiscais do IAT",
    "Defesa Técnica: elaboração fundamentada em legislação atualizada, com redução ou cancelamento de multas",
    "Perícia Especializada: laudos aceitos em processos judiciais e administrativos no Paraná",
    "Geotecnologia: mapeamentos com precisão e análises espaciais para tomada de decisão",
    "Certificações: assessoria para ISO 14001 e outros sistemas de gestão ambiental",
    "Estratégia: visão integrada que transforma obrigações em vantagens competitivas"
  ],
  steps: [
    {
      title: "Diagnóstico Técnico e Legal",
      description: "Avaliação detalhada da situação ambiental da empresa, mapeamento de passivos, verificação de conformidade com todas as INs do IAT, Resoluções CEMA e legislação federal aplicável",
      duration: "1 a 3 semanas"
    },
    {
      title: "Plano de Ação e Estratégia",
      description: "Elaboração de plano de regularização ou defesa técnica com cronograma, responsáveis e estimativa de custos; em caso de TAC, elaboração de proposta técnica para negociação",
      duration: "1 a 2 semanas"
    },
    {
      title: "Implementação e Representação",
      description: "Execução das adequações, representação técnica junto ao IAT e órgãos reguladores, acompanhamento de processos administrativos",
      duration: "Conforme cronograma"
    },
    {
      title: "Verificação e Melhoria Contínua",
      description: "Auditoria de resultado, verificação de conformidade pós-implementação e atualização do sistema de gestão ambiental",
      duration: "Processo contínuo"
    }
  ],
  documents: [
    "Relatório de Auditoria Ambiental de Conformidade (checklist baseado em Resolução CEMA 105/2019 e INs do IAT vigentes); Defesa Administrativa a Autos de Infração (IAT, IBAMA, SEMA) com fundamentação legal e técnica; Laudos de Perícia Ambiental para processos judiciais (assinados por perito habilitado com ART); Pareceres Técnicos Especializados sobre interpretação de normas, viabilidade ambiental e condicionantes; Relatórios de Due Diligence Ambiental para fusões, aquisições e financiamentos; Mapeamentos SIG (Georreferenciamento, APP, Reserva Legal, Zoneamento, Cobertura Vegetal) com memoriais descritivos; Plano de Adequação Regulatória com metas e prazos; Assessoria para TAC: proposta técnica, acompanhamento de negociação e monitoramento do cumprimento; Relatórios de Sistema de Gestão Ambiental (SGA — base para ISO 14001); Documentação de Certificação Ambiental (ISO 14001, PRFV, etc.)."
  ],
  timeline: "Pareceres técnicos: 1 a 2 semanas. Auditorias: 2 a 4 semanas. Defesas administrativas: 5 a 15 dias úteis (conforme prazo legal). Perícias: 30 a 90 dias. Due Diligence: 4 a 8 semanas. Implementação de SGA/ISO 14001: 6 a 18 meses.",
  legalBasis: [
    "Resolução CEMA nº 105/2019 — Base de conformidade para auditorias de licenciamento estadual",
    "IN IAT 11/2026 — Classificação de atividades de Baixo Risco (impacta diagnósticos de enquadramento)",
    "IN IAT 65/2025 — Critérios atualizados para licenciamento industrial",
    "IN IAT 60/2025 — Licenciamento de atividades de ensino e pesquisa",
    "OT IAT 04/2024 — Embargo e regularização em assentamentos",
    "Lei Federal nº 9.605/1998 — Lei de Crimes Ambientais (base para defesas e TAC)",
    "Decreto Federal nº 6.514/2008 — Infrações administrativas ambientais e penalidades",
    "Lei Complementar nº 140/2011 — Competências ambientais e dupla licença",
    "Código Florestal (Lei 12.651/2012) — APP, Reserva Legal e georreferenciamento",
    "Norma ABNT NBR ISO 14001/2015 — Sistemas de gestão ambiental",
    "Lei Federal nº 6.938/1981 — Responsabilidade civil ambiental"
  ],
  tips: [
    "Realize auditorias preventivas anuais — o custo é muito menor do que o de responder a autos de infração",
    "Verifique se sua atividade foi reclassificada pela IN 11/2026 (Baixo Risco) — pode simplificar significativamente suas obrigações",
    "Em caso de autuação pelo IAT, contrate assessoria técnica imediatamente — os prazos de defesa são curtos (20 a 30 dias úteis)",
    "O georreferenciamento de APP e Reserva Legal via SIG é obrigatório para CAR e para comprovação em auditorias",
    "Considere a certificação ISO 14001 como diferencial competitivo — muitas licitações e contratos de fornecimento já exigem"
  ]
};
