
import { TreePine } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const degradedAreasServices: ServiceDetailData = {
  id: "degraded_areas",
  title: "Recuperação de Áreas e Passivos Ambientais",
  description: "Soluções completas para GAC, PRAD e TAC no Paraná, conforme Resolução CONAMA 420/2009, Código Florestal e Portaria IAT 190/2024.",
  icon: TreePine,
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Na SOLARI, atuamos em três frentes de recuperação ambiental: GAC (Gerenciamento de Áreas Contaminadas) — identificação, avaliação e remediação de solo e água contaminados, conforme Resolução CONAMA 420/2009; PRAD (Plano de Recuperação de Áreas Degradadas) — projeto técnico para restaurar áreas com vegetação suprimida, erosão ou atividade de mineração, exigido pelo Código Florestal e pelo Programa de Regularização Ambiental (PRA) do IAT; e TAC (Termo de Ajustamento de Conduta) — negociação técnica e jurídica junto ao IAT ou Ministério Público para regularização de passivos com metas e prazos acordados.",
  benefits: [
    "Resolução definitiva de passivos ambientais com segurança técnica e jurídica",
    "PRAD aprovado pelo IAT como pré-requisito para novos licenciamentos",
    "TAC negociado pode extinguir punibilidade administrativa e criminal",
    "Valorização do imóvel com passivo resolvido ou área em processo de recuperação",
    "Enquadramento no Programa de Regularização Ambiental (PRA) do IAT",
    "Fortalecimento da imagem de responsabilidade ambiental da empresa"
  ],
  steps: [
    {
      title: "Avaliação Preliminar",
      description: "Levantamento histórico da área, identificação de possíveis focos de contaminação ou degradação e definição da abordagem técnica",
      duration: "2 a 4 semanas"
    },
    {
      title: "Diagnóstico Detalhado",
      description: "Amostragem de solo e água, análises laboratoriais e diagnóstico ambiental da vegetação (para PRAD) com definição de espécies e metodologia de recuperação",
      duration: "30 a 90 dias"
    },
    {
      title: "Elaboração do Plano e Negociação (TAC)",
      description: "Desenvolvimento do Plano de Intervenção (GAC) ou PRAD com aprovação do IAT; quando aplicável, negociação do TAC com definição de metas e prazos",
      duration: "1 a 6 meses"
    },
    {
      title: "Execução e Monitoramento",
      description: "Implementação das medidas de remediação ou recuperação com monitoramento periódico e relatórios técnicos para o IAT",
      duration: "1 a 5 anos"
    }
  ],
  documents: [
    "Histórico de uso e ocupação da área (escrituras, alvarás, contratos de locação anteriores)",
    "Matrícula atualizada do imóvel",
    "Laudos de análises de solo e água subterrânea (laboratório credenciado e acreditado pelo INMETRO)",
    "Relatório de Avaliação Preliminar (AP) da área",
    "Projeto de Recuperação de Áreas Degradadas (PRAD) com cronograma de plantio e espécies selecionadas",
    "Cadastro Ambiental Rural (CAR) do imóvel, quando aplicável",
    "Documentos do processo administrativo ou auto de infração, quando houver",
    "ART do profissional responsável por cada fase técnica"
  ],
  timeline: "GAC: investigação (2 a 6 meses) + remediação e monitoramento (2 a 5 anos). PRAD: aprovação (30 a 90 dias) + monitoramento mínimo de 2 a 5 anos. TAC: formalização em 3 a 12 meses.",
  legalBasis: [
    "Resolução CONAMA nº 420/2009 — Critérios e diretrizes para o GAC",
    "Lei Federal nº 12.651/2012 — Código Florestal (PRAD e recomposição florestal)",
    "Portaria IAT nº 190/2024 — Diretrizes do Programa de Regularização Ambiental (PRA) no Paraná",
    "Instruções Normativas do IAT — Procedimentos para reposição florestal e recuperação de APPs",
    "Lei Federal nº 9.605/1998 — Lei de Crimes Ambientais (base para TAC)",
    "Lei Federal nº 6.938/1981 — Responsabilidade civil ambiental"
  ],
  tips: [
    "Agir rapidamente ao suspeitar de contaminação pode reduzir muito o custo e a complexidade da solução",
    "Faça auditoria de passivo ambiental antes de comprar imóvel com histórico industrial — é o melhor investimento preventivo",
    "O TAC é uma oportunidade de regularizar a situação com metas negociadas e segurança jurídica",
    "Verifique as condições do PRA do IAT (Portaria 190/2024) — pode ser o caminho mais vantajoso para regularização"
  ]
};
