
import { Beaker } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const monitoringServices: ServiceDetailData = {
  id: "monitoring",
  title: "Monitoramento e Análises Ambientais",
  description: "Monitoramento sistemático de emissões, efluentes e qualidade da água, conforme condicionantes do IAT e normas CONAMA vigentes.",
  icon: Beaker,
  image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O monitoramento ambiental é o acompanhamento sistemático das condições do meio ambiente (ar, água, solo e ruído) para verificar o cumprimento das condicionantes estabelecidas pelo IAT nas licenças ambientais. As análises laboratoriais devem ser realizadas por laboratórios credenciados e acreditados pelo INMETRO (ABNT NBR ISO/IEC 17025). Os parâmetros, frequências e pontos de coleta são definidos pelas Instruções Normativas do IAT e pelas Resoluções CONAMA aplicáveis a cada tipo de atividade.",
  benefits: [
    "Cumprimento documentado de todas as condicionantes exigidas pelo IAT",
    "Identificação antecipada de não conformidades, evitando autuações fiscais",
    "Cadeia de custódia completa e laudos auditáveis para defesas administrativas",
    "Relatórios de monitoramento em dia facilitam a renovação das licenças",
    "Demonstração concreta de responsabilidade ambiental perante o IAT",
    "Dados técnicos para melhoria de processos e eficiência operacional"
  ],
  steps: [
    {
      title: "Análise das Condicionantes",
      description: "Levantamento de todos os parâmetros, frequências e pontos de coleta exigidos pela licença e pelas Instruções Normativas do IAT aplicáveis",
      duration: "3 a 7 dias úteis"
    },
    {
      title: "Planejamento do Programa de Monitoramento",
      description: "Elaboração do Plano de Monitoramento com cronograma anual, seleção de laboratórios e definição de protocolos de coleta conforme normas ABNT",
      duration: "1 a 2 semanas"
    },
    {
      title: "Coleta de Amostras e Análise",
      description: "Campanhas de coleta em campo com cadeia de custódia e envio para análise em laboratórios acreditados pelo INMETRO",
      duration: "1 a 3 dias por campanha; resultados em 15 a 30 dias"
    },
    {
      title: "Relatórios Técnicos ao IAT",
      description: "Compilação dos resultados, comparação com os limites legais, análise de tendências e elaboração do Relatório de Monitoramento para o IAT",
      duration: "7 a 15 dias"
    }
  ],
  documents: [
    "Plano de Monitoramento Ambiental conforme condicionantes da licença IAT",
    "Cópia das condicionantes da licença vigente (LP, LI, LO, LAS ou autorização)",
    "Laudos analíticos emitidos por laboratório acreditado pelo INMETRO (ABNT NBR ISO/IEC 17025)",
    "Cadeia de custódia das amostras preenchida em campo",
    "Relatórios periódicos de monitoramento (frequência conforme condicionante: mensal, trimestral ou semestral)",
    "Certificados de calibração dos equipamentos de campo utilizados na coleta",
    "Registros fotográficos das campanhas de coleta"
  ],
  timeline: "O monitoramento é contínuo conforme as condicionantes da licença: mensal, trimestral ou semestral. Relatórios enviados ao IAT nos prazos estabelecidos na licença.",
  legalBasis: [
    "Resolução CONAMA nº 357/2005 (alterada pela 430/2011) — Padrões de qualidade das águas e lançamento de efluentes",
    "Resolução CONAMA nº 396/2008 — Classificação e padrões de qualidade das águas subterrâneas",
    "Resolução CONAMA nº 491/2018 — Padrões nacionais de qualidade do ar",
    "ABNT NBR ISO/IEC 17025 — Requisitos para laboratórios de ensaio",
    "Resolução CEMA nº 105/2019 — Condicionantes de monitoramento nas licenças estaduais",
    "Instruções Normativas do IAT — Parâmetros e frequências específicos por tipo de atividade"
  ],
  tips: [
    "Cumpra rigorosamente as datas das coletas — o descumprimento é considerado infração às condicionantes",
    "Use apenas laboratórios acreditados pelo INMETRO com escopo que contemple os parâmetros exigidos",
    "Preserve a cadeia de custódia das amostras — é o principal documento em caso de questionamento",
    "Acompanhe as tendências dos resultados — agir antes do limite evita autuações e custos maiores"
  ]
};
