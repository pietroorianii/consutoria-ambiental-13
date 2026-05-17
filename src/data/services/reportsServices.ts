
import { FileText } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const reportsServices: ServiceDetailData = {
  id: "reports",
  title: "Estudos e Relatórios Ambientais",
  description: "Elaboração de EIA/RIMA, RAS, RAP, PGRS, PGRSS, PGRCC e demais estudos exigidos pelo IAT, CONAMA e legislação ambiental vigente no Paraná.",
  icon: FileText,
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Os estudos e relatórios ambientais são documentos técnicos obrigatórios exigidos pelo IAT no processo de licenciamento e gestão ambiental. No Paraná, a Resolução CEMA 105/2019 define quais estudos são exigidos para cada porte e tipo de atividade: desde o Relatório Ambiental Simplificado (RAS) para atividades de médio impacto, até o Estudo de Impacto Ambiental com Relatório de Impacto (EIA/RIMA) para empreendimentos de significativo impacto ambiental. A IN IAT 13/2025 atualizou os critérios para exigência de EIA/RIMA em projetos agropecuários e florestais. Os Planos de Gerenciamento de Resíduos (PGRS, PGRSS, PGRCC) são regulamentados pela Lei Federal 12.305/2010 (PNRS) e pelo Decreto Federal 10.936/2022, com rastreabilidade via sistema MTR.",
  benefits: [
    "Conformidade: estudos elaborados conforme as exigências específicas da Resolução CEMA 105/2019",
    "Agilidade no Licenciamento: documentação completa e correta reduz pedidos de complementação pelo IAT",
    "Gestão de Resíduos: PGRS com rastreabilidade via MTR, em conformidade com Decreto 10.936/2022",
    "Tomada de Decisão: EIA/RIMA e RAS fornecem base técnica para decisões de projeto e investimento",
    "Prevenção de Passivos: identificação antecipada de impactos ambientais e medidas mitigadoras",
    "Compliance: documentação para certificações ambientais (ISO 14001, PRFV, etc.)"
  ],
  steps: [
    {
      title: "Escopo e Termo de Referência",
      description: "Definição do escopo do estudo conforme exigências do IAT (Termo de Referência — TR) e enquadramento na Resolução CEMA 105/2019. Para EIA/RIMA, obtenção do TR junto ao IAT",
      duration: "1 a 2 semanas"
    },
    {
      title: "Levantamento de Dados Primários e Secundários",
      description: "Coletas de campo (fauna, flora, solo, água, ar), análise de dados históricos, diagnóstico ambiental da área de influência (AID e AII)",
      duration: "4 a 12 semanas (conforme complexidade)"
    },
    {
      title: "Elaboração e Revisão Técnica",
      description: "Redação do estudo, análise de impactos, proposição de medidas mitigadoras e compensatórias, revisão interna e revisão técnica especializada",
      duration: "3 a 8 semanas"
    },
    {
      title: "Protocolo, Audiência Pública e Aprovação",
      description: "Submissão ao IAT via SGA, acompanhamento da análise, resposta a pedidos de complementação e, quando exigível, suporte em audiência pública",
      duration: "2 a 6 meses"
    }
  ],
  documents: [
    "EIA/RIMA (Estudo de Impacto Ambiental — atividades de significativo impacto): Termo de Referência (TR) emitido pelo IAT; Diagnóstico ambiental completo das áreas de influência (ADA, AID, AII); Estudos de fauna (conforme Portaria IAT 012/2024) e flora; Estudos socioeconômicos; Identificação e avaliação de impactos (matriz de impactos); Programas ambientais (gestão, monitoramento, compensação); Plano de compensação da Reserva Legal; Relatório de Impacto ao Meio Ambiente (RIMA) em linguagem acessível; ART/TRT de todos os profissionais envolvidos por área de conhecimento.",

    "RAS (Relatório Ambiental Simplificado — médio impacto / LAS e LP): Diagnóstico ambiental da área; Descrição técnica da atividade/empreendimento; Identificação dos impactos e medidas mitigadoras; Layout e planta de situação; Programa de monitoramento básico; ART/TRT do responsável técnico.",

    "RAP (Relatório Ambiental Preliminar — atividades de menor complexidade): Caracterização do empreendimento; Diagnóstico ambiental simplificado; Identificação de impactos e medidas de controle; ART/TRT.",

    "PGRS (Plano de Gerenciamento de Resíduos Sólidos — Lei 12.305/2010, Decreto 10.936/2022): Diagnóstico da geração de resíduos por tipo e quantidade; Classificação dos resíduos (ABNT NBR 10004); Procedimentos de acondicionamento, armazenamento temporário e transporte; Destinação/disposição final por tipo de resíduo (com contratos com transportadores e destinadores licenciados pelo IAT); Rastreabilidade obrigatória via MTR (Manifesto de Transporte de Resíduos) no sistema do IAT; Responsável técnico com ART.",

    "PGRSS (Plano de Gerenciamento de Resíduos de Serviços de Saúde — RDC ANVISA 222/2018 + CONAMA 358/2005): Classificação dos resíduos (Grupos A, B, C, D, E); Procedimentos por grupo; Logística reversa quando aplicável; MTR para os grupos B e E.",

    "PGRCC (Plano de Gerenciamento de Resíduos da Construção Civil — Resolução CONAMA 307/2002 e atualizações): Identificação dos resíduos (Classes A, B, C, D); Destinação por classe conforme legislação; Responsável técnico.",

    "Estudos de Fauna e Flora (conforme Portaria IAT nº 012/2024): Inventário florístico e fitossociológico; Levantamento de fauna (mastofauna, herpetofauna, avifauna, ictiofauna, entomofauna — quando exigível); ART de biólogo ou engenheiro florestal habilitado; Metodologia conforme protocolos do IAT."
  ],
  timeline: "RAS/RAP: 4 a 8 semanas de elaboração + análise IAT (30 a 90 dias). EIA/RIMA: 3 a 8 meses de elaboração + análise IAT (4 a 12 meses). PGRS/PGRSS/PGRCC: 2 a 4 semanas de elaboração.",
  legalBasis: [
    "Resolução CEMA nº 105/2019 — Define estudos exigíveis por tipo e porte de atividade no PR",
    "Resolução CONAMA nº 01/1986 — Avaliação de Impacto Ambiental e EIA/RIMA",
    "Resolução CONAMA nº 09/1987 — Audiências Públicas no processo de EIA/RIMA",
    "Resolução CONAMA nº 237/1997 — Procedimentos de licenciamento e estudos ambientais",
    "IN IAT 13/2025 — Critérios atualizados para exigência de EIA/RIMA em projetos agropecuários e florestais",
    "Portaria IAT nº 012/2024 — Metodologias para estudos de fauna e flora no licenciamento estadual",
    "Lei Federal nº 12.305/2010 — Política Nacional de Resíduos Sólidos (PNRS)",
    "Decreto Federal nº 10.936/2022 — Regulamenta a PNRS e o sistema de rastreabilidade (MTR)",
    "Lei Estadual nº 12.493/1999 — Política Estadual de Resíduos Sólidos do Paraná",
    "ABNT NBR 10004/2004 — Classificação de resíduos sólidos",
    "RDC ANVISA nº 222/2018 — Resíduos de Serviços de Saúde",
    "Resolução CONAMA nº 307/2002 — Resíduos da Construção Civil"
  ],
  tips: [
    "Solicite o Termo de Referência (TR) ao IAT antes de iniciar qualquer EIA — evita retrabalho e pedidos de complementação",
    "Consulte a IN IAT 13/2025 para verificar se seu projeto agropecuário ou florestal requer EIA completo ou apenas RAS",
    "Implemente o MTR desde o início do PGRS — a rastreabilidade via sistema do IAT é obrigatória (Decreto 10.936/2022)",
    "Contrate estudos de fauna e flora em conformidade com a Portaria IAT 012/2024 — metodologias desatualizadas são rejeitadas",
    "Para EIA/RIMA, preveja audiência pública no cronograma — é etapa obrigatória para empreendimentos de maior impacto"
  ]
};
