import { ServiceData } from "@/types/service-types";

// Serviço: Planos de Gestão de Resíduos e Instrumentos Técnicos
export const managementService: ServiceData = {
  id: "management",
  title: "Planos de Gestão Ambiental",
  subtitle: "Documentação técnica para gestão, controle e rastreabilidade ambiental",
  description:
    "Elaboramos todos os planos de gestão exigidos no licenciamento e na operação: PGRS, PGRSS, PGRCC, PCA, PRAD e PRF. Documentação completa, auditável e em conformidade com as normas do IAT.",
  category: "management",
  icon: "ClipboardList",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000&h=600",
  legalBasis: [
    "Lei Federal nº 12.305/2010 — Política Nacional de Resíduos Sólidos",
    "Decreto Estadual nº 9.541/2025 — Regulamento do licenciamento ambiental no Paraná",
    "Resolução CONAMA nº 307/2002 — Resíduos da Construção Civil",
    "Instrução Normativa IAT nº 012/2024",
  ],
  steps: [
    { title: "Diagnóstico", description: "Levantamento dos fluxos de resíduos, efluentes e emissões gerados." },
    { title: "Elaboração do Plano", description: "Estruturação do documento técnico conforme normativas aplicáveis." },
    { title: "Revisão e Aprovação", description: "Revisão interna e adequação às exigências do órgão licenciador." },
    { title: "Entrega e Arquivo", description: "Envio assinado por responsável técnico com ART/TRT." },
  ],
  deliverables: [
    "PGRS — Plano de Gerenciamento de Resíduos Sólidos",
    "PGRSS — Plano para estabelecimentos de saúde",
    "PGRCC — Plano para construção civil",
    "PCA — Plano de Controle Ambiental",
    "PRAD — Plano de Recuperação de Áreas Degradadas",
    "PRF — Plano de Resgate da Flora",
  ],
  timeEstimate: "15 a 45 dias corridos conforme complexidade",
  targetAudience: ["Indústrias", "Construtoras", "Estabelecimentos de saúde", "Agronegócio"],
};
