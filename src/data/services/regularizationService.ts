import { ServiceData } from "@/types/service-types";

// Serviço: Regularização Ambiental — LASR, LIR, LOR, TAC
export const regularizationService: ServiceData = {
  id: "regularization",
  title: "Regularização Ambiental",
  subtitle: "Adequação de empreendimentos em situação irregular junto ao IAT",
  description:
    "Conduzimos o processo completo de regularização ambiental para empreendimentos que operam sem licença válida ou em desacordo com as condicionantes. Modalidades: LASR, LIR, LOR e Termo de Ajustamento de Conduta (TAC).",
  category: "licensing",
  icon: "RefreshCw",
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000&h=600",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025 — art. 22 a 28 (Modalidades de regularização)",
    "Resolução CONAMA nº 237/1997",
    "Lei Complementar nº 140/2011",
    "Programa de Regularização Ambiental (PRA) do Paraná",
  ],
  steps: [
    { title: "Diagnóstico de Conformidade", description: "Levantamento da situação atual versus exigências legais." },
    { title: "Escolha da Modalidade", description: "Definição entre LASR, LIR, LOR ou TAC conforme o caso." },
    { title: "Elaboração dos Documentos", description: "Preparação de toda a documentação técnica exigida pelo IAT." },
    { title: "Protocolo no SGA/IAT", description: "Envio eletrônico e acompanhamento do processo." },
    { title: "Atendimento de Exigências", description: "Resposta a eventuais complementações solicitadas pelo órgão." },
    { title: "Emissão da Licença", description: "Recebimento e arquivo da licença de regularização." },
  ],
  deliverables: [
    "LASR — Licença Ambiental Simplificada de Regularização",
    "LIR — Licença de Instalação de Regularização",
    "LOR — Licença de Operação de Regularização",
    "TAC — Termo de Ajustamento de Conduta (negociado com o MP/órgão ambiental)",
    "Relatório de diagnóstico de conformidade",
  ],
  timeEstimate: "30 a 180 dias conforme modalidade e complexidade",
  targetAudience: [
    "Empreendimentos sem licença vigente",
    "Empresas com licença vencida há mais de 6 meses",
    "Atividades em processo de TAC",
    "Empreendimentos rurais em adequação ao CAR",
  ],
};
