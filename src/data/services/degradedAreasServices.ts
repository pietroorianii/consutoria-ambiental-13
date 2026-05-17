
import { Mountain } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const degradedAreasServices: ServiceDetailData = {
  id: "degraded_areas",
  title: "Recuperação de Áreas e Passivos Ambientais",
  description: "Soluções completas para GAC, PRAD e TAC no Paraná, conforme Resolução CONAMA 420/2009, Código Florestal e Programa de Regularização Ambiental (PRA) do IAT.",
  icon: Mountain,
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Na SOLARI, abordamos a gestão de passivos ambientais por três frentes principais: Gerenciamento de Áreas Contaminadas (GAC) — processo técnico regulamentado pela Resolução CONAMA 420/2009, que vai da avaliação preliminar até a remediação e monitoramento pós-intervenção; Plano de Recuperação de Áreas Degradadas (PRAD) — estudo técnico exigido pelo Código Florestal (Lei 12.651/2012) e Portaria IAT 190/2024 (PRA), para restaurar áreas com supressão de vegetação, erosão ou mineração; Termo de Ajustamento de Conduta (TAC) — acordo técnico e jurídico firmado com o IAT ou Ministério Público, transformando autuações em plano de ação com metas e prazos definidos. A IN IAT 12/2025 atualizou os procedimentos de reposição florestal no Paraná, impactando diretamente os PRADs.",
  benefits: [
    "Resolução Definitiva: elimina contaminações, passivos legais e desvalorização de ativos",
    "Viabilidade de Projetos: o PRAD é pré-requisito para licenças que envolvam supressão de vegetação",
    "Segurança Jurídica: TAC bem negociado pode extinguir punibilidade administrativa e criminal",
    "Valorização de Ativos: imóvel com passivo resolvido tem valor de mercado significativamente maior",
    "Reputação: ações de recuperação demonstram compromisso com sustentabilidade e responsabilidade socioambiental",
    "Acesso ao PRA: regularização dentro do Programa de Regularização Ambiental do IAT (Portaria 190/2024)"
  ],
  steps: [
    {
      title: "Avaliação Preliminar e Investigação Confirmatória (GAC)",
      description: "Histórico de uso do solo, amostragem de solo e água subterrânea, identificação de substâncias de interesse e delimitação da área de contaminação",
      duration: "30 a 60 dias"
    },
    {
      title: "Investigação Detalhada e Avaliação de Risco (GAC) / Diagnóstico (PRAD)",
      description: "Para GAC: levantamento detalhado e Avaliação de Risco Humano e Ecológico. Para PRAD: diagnóstico fitossociológico e pedológico da área, com definição de espécies para recomposição conforme IN IAT 12/2025",
      duration: "45 a 90 dias"
    },
    {
      title: "Negociação e Formalização (TAC) / Plano de Ação",
      description: "Elaboração do Plano de Intervenção (remediação/recuperação) e, quando aplicável, negociação do TAC junto ao IAT ou MP com metas, prazos e garantias adequadas",
      duration: "3 a 12 meses"
    },
    {
      title: "Execução e Monitoramento",
      description: "Implementação das medidas de remediação ou recuperação, com monitoramento periódico e elaboração de Relatórios de Monitoramento (RMF) para o IAT",
      duration: "1 a 5 anos"
    }
  ],
  documents: [
    "Histórico de ocupação e atividades desenvolvidas na área (escrituras, contratos, alvarás antigos); Matrícula atualizada do imóvel; Laudos de análises químicas de solo e água (laboratório credenciado e acreditado pelo INMETRO); Relatório de Avaliação Preliminar (AP) conforme Resolução CONAMA 420/2009; Plano de Investigação Confirmatória (PIC) e/ou Detalhada (PID); Avaliação de Risco Humano e Ecológico (ARHE) para áreas contaminadas; Projeto de Recuperação de Áreas Degradadas (PRAD) com: diagnóstico fitossociológico, mapa da área, cronograma de plantio, espécies selecionadas (conforme IN IAT 12/2025); Plano de Monitoramento da Recuperação (PMR) com cronograma de avaliações; Cópias de autos de infração, TAC, ou processos judiciais/administrativos em andamento; Cadastro Ambiental Rural (CAR) do imóvel (obrigatório para PRAD em áreas rurais); ART/TRT do profissional responsável por cada fase técnica."
  ],
  timeline: "GAC: investigação (2 a 6 meses) + remediação + monitoramento pós-intervenção (2 a 5 anos). PRAD: aprovação do projeto (30 a 90 dias) + execução + monitoramento mínimo de 2 a 5 anos. TAC: negociação de 3 a 12 meses para formalização do acordo.",
  legalBasis: [
    "Resolução CONAMA nº 420/2009 — Critérios e diretrizes para o GAC e seus valores orientadores de qualidade do solo",
    "Lei Federal nº 12.651/2012 — Código Florestal Brasileiro (PRAD e recomposição florestal)",
    "Portaria IAT nº 190/2024 — Diretrizes do Programa de Regularização Ambiental (PRA) no Paraná",
    "IN IAT 12/2025 — Procedimentos para reposição florestal no Paraná (impacta espécies e métodos nos PRADs)",
    "OT IAT 04/2024 — Embargo e regularização em assentamentos do INCRA",
    "Lei Federal nº 9.605/1998 — Lei de Crimes Ambientais (base para TAC)",
    "Lei Federal nº 6.938/1981 — Política Nacional do Meio Ambiente (responsabilidade civil)",
    "Decreto Estadual nº 9.541 (vigente) — Procedimentos de licenciamento vinculados ao PRA",
    "Resolução CONAMA nº 01/1986 — AIA e medidas de controle ambiental"
  ],
  tips: [
    "Proatividade é fundamental: agir ao suspeitar de contaminação pode reduzir drasticamente custos e complexidade da solução",
    "Due Diligence: antes de adquirir imóvel industrial ou rural com histórico de risco, contrate uma auditoria de passivo ambiental — é o melhor investimento preventivo",
    "O TAC não é punição, é oportunidade: permite regularizar a situação de forma planejada, com metas acordadas e segurança jurídica",
    "Verifique o PRA do IAT (Portaria 190/2024) — pode ser mais vantajoso regularizar pelo programa estadual",
    "Consulte a IN IAT 12/2025 antes de elaborar o PRAD — ela atualiza espécies e metodologias aceitas pelo IAT"
  ]
};
