
import { FileText } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const reportsServices: ServiceDetailData = {
  id: "reports",
  title: "Planos e Relatórios Ambientais",
  description: "Elaboração de documentos técnicos especializados para gestão ambiental e atendimento legal.",
  icon: FileText,
  image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Os planos e relatórios ambientais são documentos técnicos que estabelecem diretrizes, procedimentos e análises para a gestão adequada dos aspectos ambientais, incluindo a rastreabilidade de resíduos através do sistema MTR.",
  benefits: [
    "Organização da gestão ambiental",
    "Cumprimento de exigências legais",
    "Redução de impactos ambientais",
    "Rastreabilidade e controle de resíduos (MTR)",
    "Melhoria da eficiência operacional",
    "Demonstração de compliance",
    "Subsídio para certificações"
  ],
  steps: [
    {
      title: "Diagnóstico Inicial",
      description: "Levantamento das condições atuais e identificação das necessidades",
      duration: "1 a 2 semanas"
    },
    {
      title: "Elaboração do Documento",
      description: "Desenvolvimento do plano ou relatório conforme normas técnicas",
      duration: "2 a 6 semanas"
    },
    {
      title: "Revisão Técnica",
      description: "Verificação da conformidade e adequação às exigências",
      duration: "1 semana"
    },
    {
      title: "Aprovação e Implementação",
      description: "Submissão aos órgãos competentes e início da implementação",
      duration: "2 a 8 semanas"
    }
  ],
  documents: [
    "Levantamento de dados primários",
    "Estudos técnicos específicos",
    "Plantas e desenhos técnicos",
    "Memorial descritivo",
    "Cronograma de implementação",
    "Planilhas de custos",
    "Referências normativas"
  ],
  timeline: "O prazo varia conforme a complexidade: PGRS (2-4 semanas), EIA/RIMA (3-6 meses), PCA (4-8 semanas).",
  legalBasis: [
    "Lei nº 12.305/2010 - Política Nacional de Resíduos Sólidos",
    "Resolução CONAMA nº 01/1986 - EIA/RIMA",
    "Resolução CONAMA nº 237/1997",
    "NBR 10004 - Resíduos Sólidos",
    "Normas técnicas específicas"
  ],
  tips: [
    "Colete dados precisos na fase de diagnóstico",
    "Mantenha documentação atualizada",
    "Considere aspectos práticos de implementação",
    "Envolva as equipes operacionais",
    "Revise periodicamente os documentos"
  ]
};
