
import { FileText } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const reportsServices: ServiceDetailData = {
  id: "reports",
  title: "Estudos e Relatórios Ambientais",
  description: "Elaboração de EIA/RIMA, RAS, RAP, PGRS, PGRSS e demais estudos exigidos pelo IAT e legislação ambiental vigente no Paraná.",
  icon: FileText,
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Os estudos e relatórios ambientais são documentos técnicos obrigatórios exigidos pelo IAT no processo de licenciamento. A Resolução CEMA 105/2019 define o estudo adequado para cada porte e tipo de atividade: desde o Relatório Ambiental Simplificado (RAS) para atividades de médio impacto, até o Estudo de Impacto Ambiental (EIA/RIMA) para empreendimentos de maior significância. Os Planos de Gerenciamento de Resíduos (PGRS e PGRSS) são regulamentados pela Lei Federal 12.305/2010, com rastreabilidade obrigatória via sistema MTR.",
  benefits: [
    "Estudos elaborados conforme as exigências específicas da Resolução CEMA 105/2019 e INs do IAT",
    "Documentação completa que reduz pedidos de complementação e acelera o licenciamento",
    "PGRS com rastreabilidade via MTR, em conformidade com o Decreto Federal 10.936/2022",
    "EIA/RIMA e RAS como base técnica para decisões estratégicas de projeto e investimento",
    "Identificação antecipada de impactos ambientais e proposição de medidas mitigadoras",
    "Documentação de apoio para certificações ambientais"
  ],
  steps: [
    {
      title: "Escopo e Termo de Referência",
      description: "Definição do estudo exigido conforme a Resolução CEMA 105/2019 e obtenção do Termo de Referência (TR) junto ao IAT, quando necessário",
      duration: "1 a 2 semanas"
    },
    {
      title: "Levantamento de Dados de Campo",
      description: "Coletas de campo (fauna, flora, solo, água e ar) e levantamento de dados secundários para o diagnóstico ambiental da área",
      duration: "4 a 12 semanas"
    },
    {
      title: "Elaboração e Revisão Técnica",
      description: "Redação do estudo com análise de impactos, medidas mitigadoras e compensatórias, seguida de revisão técnica especializada",
      duration: "3 a 8 semanas"
    },
    {
      title: "Protocolo e Aprovação no IAT",
      description: "Submissão ao IAT via SGA, acompanhamento da análise, resposta a pedidos de complementação e, quando aplicável, suporte em audiência pública",
      duration: "2 a 6 meses"
    }
  ],
  documents: [
    "Termo de Referência (TR) emitido pelo IAT (obrigatório para EIA/RIMA)",
    "Diagnóstico ambiental da área de influência com dados de campo",
    "Estudos de fauna e flora conforme metodologias aceitas pelo IAT",
    "Memorial descritivo e plantas do empreendimento",
    "Identificação e avaliação dos impactos ambientais com medidas mitigadoras",
    "Plano de Gerenciamento de Resíduos (PGRS, PGRSS ou PGRCC, conforme o caso)",
    "Comprovante de rastreabilidade via MTR para resíduos gerados",
    "ART de todos os profissionais envolvidos, por área de conhecimento"
  ],
  timeline: "RAS/RAP: 4 a 8 semanas de elaboração + análise IAT (30 a 90 dias). EIA/RIMA: 3 a 8 meses de elaboração + análise IAT (4 a 12 meses). PGRS/PGRSS: 2 a 4 semanas.",
  legalBasis: [
    "Resolução CEMA nº 105/2019 — Define estudos exigíveis por tipo e porte de atividade no PR",
    "Resolução CONAMA nº 01/1986 — Avaliação de Impacto Ambiental e EIA/RIMA",
    "Resolução CONAMA nº 237/1997 — Procedimentos de licenciamento e estudos ambientais",
    "Lei Federal nº 12.305/2010 — Política Nacional de Resíduos Sólidos (PGRS obrigatório)",
    "Decreto Federal nº 10.936/2022 — MTR e rastreabilidade de resíduos",
    "Instruções Normativas do IAT — Metodologias para estudos de fauna, flora e licenciamento setorial"
  ],
  tips: [
    "Solicite o Termo de Referência (TR) ao IAT antes de iniciar o EIA — evita retrabalho e pedidos de complementação",
    "Implemente o MTR desde o início do PGRS — a rastreabilidade é obrigatória pelo Decreto 10.936/2022",
    "Para EIA/RIMA, inclua audiência pública no cronograma — é etapa obrigatória para empreendimentos de maior impacto",
    "Verifique com o IAT quais Instruções Normativas se aplicam ao seu setor — podem exigir metodologias específicas"
  ]
};
