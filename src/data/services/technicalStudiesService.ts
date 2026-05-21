
import { FileText } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const technicalStudiesService: ServiceDetailData = {
  id: "technical_studies",
  title: "Estudos e Documentos Técnicos",
  description: "Elaboração de todos os instrumentos técnicos exigidos no licenciamento: EIA/RIMA, RAS, MCE, PBA, PGRS, PGRSS, PCA, PRAD, PRF, PACUERA e documentos de Reserva Legal.",
  icon: FileText,
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Os estudos e documentos técnicos ambientais são instrumentos obrigatórios dentro do processo de licenciamento — não são serviços avulsos ou opcionais, mas condições sem as quais a licença não é emitida. A escolha do estudo correto depende da modalidade de licença e da Instrução Normativa setorial vigente: usar o documento errado gera exigência automática do IAT e atrasa o processo. A IN 13/2025 define critérios específicos para exigência de EIA/RIMA em projetos agropecuários, diferenciando-os dos critérios industriais. O MCE (Memorial de Caracterização do Empreendimento) é o documento mais versátil e exigido em LAC, LAS e LP — dominá-lo é competência central de uma consultoria ambiental no Paraná.",
  benefits: [
    "Documentação técnica alinhada às INs setoriais vigentes do IAT (2025/2026)",
    "Redução de exigências e retrabalho no processo de licenciamento",
    "Planos de gestão que atendem às condicionantes de LI e LO com precisão",
    "Elaboração conforme metodologias e formatos aceitos pelo IAT",
    "Integração entre estudos: o MCE da LP subsidia o PCA da LI",
    "Domínio das INs 13, 15, 53, 54/2025 e demais bases técnicas aplicáveis"
  ],
  steps: [
    {
      title: "Diagnóstico e Escolha do Instrumento",
      description: "Definição do documento correto conforme modalidade de licença, setor e IN setorial aplicável — etapa crítica que evita retrabalho e exigências do IAT",
      duration: "1 a 3 dias"
    },
    {
      title: "Levantamento de Dados",
      description: "Coleta de dados primários (visita técnica, medições, levantamento florestal ou de fauna), coleta de dados secundários (dados históricos, cartografia, licenças anteriores)",
      duration: "1 a 3 semanas"
    },
    {
      title: "Elaboração do Documento",
      description: "Redação técnica conforme requisitos do IAT e normas aplicáveis, com revisão interna antes da submissão ao cliente e ART do responsável técnico",
      duration: "2 a 12 semanas (conforme complexidade)"
    },
    {
      title: "Revisão e Protocolo",
      description: "Verificação final de conformidade técnica e documental, ART assinada e submissão como parte integrante do processo no SGA do IAT",
      duration: "3 a 5 dias"
    }
  ],
  documents: [
    "EIA — Estudo de Impacto Ambiental (Res. CONAMA 01/1986 + IN 13/2025 para agropecuário): diagnóstico ambiental completo (meio físico, biótico e socioeconômico), análise de alternativas, avaliação de impactos, programas de mitigação e compensação ambiental — exigido na LP para empreendimentos de significativo impacto",
    "RIMA — Relatório de Impacto ao Meio Ambiente: versão pública e acessível do EIA, linguagem não-técnica — acompanha o EIA obrigatoriamente para consulta pública",
    "RAS — Relatório Ambiental Simplificado: diagnóstico ambiental simplificado para LAS e LP de menor porte — conteúdo definido nas INs setoriais vigentes",
    "MCE — Memorial de Caracterização do Empreendimento: documento técnico detalhado da atividade, processos produtivos, insumos, efluentes, resíduos e medidas de controle — exigido em LAC, LAS e LP (ex: IN 65/2025 para indústria) — documento mais comum no licenciamento",
    "PBA — Plano Básico Ambiental: conjunto de programas ambientais elaborado pós-EIA — condicionante obrigatório da Licença de Instalação (LI)",
    "PACUERA — Plano Ambiental de Conservação e Uso do Entorno de Reservatórios Artificiais (IN 64/2025): para reservatórios de energia elétrica e abastecimento de água",
    "PGRS — Plano de Gerenciamento de Resíduos Sólidos (Lei 12.305/2010, NBR 10004): inventário, classificação, acondicionamento, coleta, transporte e destinação final de todos os resíduos — exigido na LI/LO de indústria e comércio",
    "PGRSS — Plano de Gerenciamento de Resíduos de Serviços de Saúde (RDC ANVISA 222/2018): para hospitais, clínicas, laboratórios e estabelecimentos de saúde — documento distinto do PGRS, com base legal diferente",
    "PCA — Plano de Controle Ambiental: medidas de controle ambiental durante a fase de instalação/obra — condicionante da LI em projetos de construção civil e obras lineares",
    "Plano de Automonitoramento Ambiental: monitoramento de efluentes líquidos, resíduos e parâmetros definidos nas condicionantes específicas da LO",
    "PRAD — Projeto de Recuperação de Áreas Degradadas ou Alteradas (Portaria IAT 17/2025): para passivos ambientais, cumprimento de TAC e condicionantes de licença",
    "PRF — Plano de Resgate da Flora (IN 15/2025): exigido em qualquer autorização de supressão de vegetação nativa com espécies de interesse",
    "Compensação de Reserva Legal (IN 53/2025): Servidão Ambiental, cadastramento de área equivalente ou doação a Unidade de Conservação",
    "Realocação de Reserva Legal (IN 54/2025): para empreendimentos de utilidade pública e interesse social que impactam a RL",
    "Laudo de Caracterização de Resíduos (NBR 10004): classificação de resíduos como perigosos (Classe I) ou não perigosos (Classe II) — base técnica fundamental do PGRS",
    "Estudo de GAC — Gerenciamento de Áreas Contaminadas: levantamento histórico, caracterização e plano de remediação de áreas com suspeita ou confirmação de contaminação"
  ],
  timeline: "MCE: 1 a 2 semanas; RAS: 2 a 4 semanas; PGRS/PGRSS: 2 a 4 semanas; PCA: 3 a 6 semanas; EIA/RIMA: 3 a 6 meses; PRAD: 4 a 8 semanas; PRF (IN 15/2025): 2 a 4 semanas.",
  legalBasis: [
    "Resolução CONAMA nº 01/1986 — EIA/RIMA",
    "Resolução CONAMA nº 237/1997 — procedimentos de licenciamento ambiental (vigente)",
    "IN IAT nº 13/2025 — critérios de exigência de EIA/RIMA em projetos agropecuários e florestais",
    "IN IAT nº 15/2025 — Plano de Resgate da Flora (PRF)",
    "IN IAT nº 53/2025 — compensação de Reserva Legal",
    "IN IAT nº 54/2025 — realocação de Reserva Legal para utilidade pública",
    "IN IAT nº 64/2025 — PACUERA (APPs de reservatórios)",
    "IN IAT nº 65/2025 — MCE para empreendimentos industriais",
    "Lei Federal nº 12.305/2010 — Política Nacional de Resíduos Sólidos (PGRS)",
    "RDC ANVISA nº 222/2018 — PGRSS",
    "Resolução CONAMA nº 358/2005 — tratamento e disposição final de RSS (complementa RDC ANVISA 222/2018 no aspecto ambiental)",
    "Portaria IAT nº 17/2025 — PRAD (vigente desde 15/01/2025 — revogou Portaria 170/2020)",
    "ABNT NBR 10004 — classificação de resíduos sólidos",
    "Decreto Estadual nº 9.541/2025"
  ],
  tips: [
    "O documento errado para a modalidade de licença gera exigência automática do IAT — confirme qual instrumento a IN setorial exige antes de começar a elaborar",
    "O MCE é o documento mais versátil: exigido em LAC, LAS e LP de todos os setores — domine seu conteúdo e formato",
    "PRF (IN 15/2025) é condicionante em qualquer supressão de vegetação nativa — não esqueça de incluir no escopo e no orçamento",
    "PGRSS não é PGRS: são documentos distintos com bases legais completamente diferentes (ANVISA vs. Lei 12.305/2010) — confundir os dois é erro grave de consultoria"
  ]
};
