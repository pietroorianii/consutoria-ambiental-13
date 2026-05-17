
import { Map, ClipboardList } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const managementServices: ServiceDetailData = {
  id: "management",
  title: "Gestão Ambiental Contínua",
  description: "Gerenciamento permanente de conformidade ambiental no Paraná: renovações, condicionantes IAT, declarações anuais e atualização regulatória contínua.",
  icon: ClipboardList,
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A gestão ambiental contínua mantém sua empresa permanentemente em conformidade com a legislação ambiental, sem que você precise acompanhar cada prazo ou mudança regulatória. No Paraná, as Instruções Normativas do IAT são publicadas com frequência — em 2025/2026 já foram mais de 10 INs com mudanças relevantes nos procedimentos de licenciamento, outorga e gestão de resíduos. Nosso serviço inclui: controle ativo de prazos de licenças e condicionantes; renovações protocoladas com antecedência mínima de 120 dias; gestão das declarações anuais obrigatórias (RAPP, CAR, SNCR, MTR); e monitoramento contínuo das publicações do IAT, SEMA e órgãos federais para manter seu sistema de gestão sempre atualizado.",
  benefits: [
    "Conformidade Permanente: sua empresa nunca opera com licença vencida ou condicionante em atraso",
    "Alertas Preventivos: você é avisado 120 dias antes do vencimento de qualquer licença ou prazo",
    "Economia: gestão proativa evita multas que podem chegar a R$ 50 milhões (Lei 9.605/1998)",
    "Atualização Automática: monitoramos as INs do IAT e comunicamos impactos para seu negócio",
    "Tranquilidade: foco total no negócio enquanto cuidamos da conformidade ambiental",
    "Rastreabilidade: histórico completo de todas as ações, prazos e documentos"
  ],
  steps: [
    {
      title: "Diagnóstico Completo de Conformidade",
      description: "Levantamento de todas as licenças, autorizações, outorgas, condicionantes e declarações anuais da empresa, com verificação de conformidade contra a Resolução CEMA 105/2019 e INs vigentes",
      duration: "1 a 2 semanas"
    },
    {
      title: "Implantação do Sistema de Gestão",
      description: "Criação do calendário ambiental personalizado, sistema de alertas preventivos, matriz de responsabilidades e base documental organizada",
      duration: "2 a 3 semanas"
    },
    {
      title: "Operação Contínua e Monitoramento",
      description: "Acompanhamento mensal de todas as obrigações, execução de monitoramentos exigidos, elaboração e envio de relatórios ao IAT e atualização frente a novas INs publicadas",
      duration: "Serviço contínuo"
    },
    {
      title: "Renovações e Adequações Regulatórias",
      description: "Protocolo de renovações de licenças e outorgas com antecedência mínima de 120 dias; adequação às novas normas (como IN 11/2026 para Baixo Risco e IN 09/2026 para outorga integrada)",
      duration: "Conforme vencimentos e publicações"
    }
  ],
  documents: [
    "Calendário Ambiental Anual personalizado com todos os prazos de vencimento e renovação; Relatórios Mensais de Conformidade com status de cada obrigação; Alertas Preventivos de vencimento de licenças (LP, LI, LO, LAS, LAC), outorgas e autorizações florestais; Protocolo de Renovações: requerimentos e documentação completa para renovação com 120 dias de antecedência; Declarações Anuais Obrigatórias: RAPP (Relatório Anual de Atividades Potencialmente Poluidoras — IBAMA); inventário de resíduos sólidos (Lei 12.305/2010 e MTR do IAT); declarações ao SNCR (Sistema Nacional de Cadastro Rural) e CAR (quando aplicável); Relatórios de Condicionantes: documentação do cumprimento de cada condicionante das licenças IAT; Boletim de Atualização Regulatória Mensal com novas INs e Resoluções do IAT, SEMA, CONAMA e IBAMA; Sistema de Gestão Documental com organização e rastreabilidade de todas as licenças, laudos, relatórios e correspondências; Histórico Completo de Autuações, Defesas e TACs em andamento."
  ],
  timeline: "Diagnóstico inicial: 1 a 2 semanas. Implantação do sistema: 2 a 3 semanas. Operação contínua: mensal. Renovações de LO: protocolo com 120 dias de antecedência do vencimento.",
  legalBasis: [
    "Resolução CEMA nº 105/2019 — Base para gestão de conformidade no licenciamento estadual PR",
    "IN IAT 11/2026 — Nova classificação Baixo Risco (pode alterar obrigações de empresas já licenciadas)",
    "IN IAT 09/2026 — Integração outorga-licença (simplifica renovações simultâneas)",
    "IN IAT 63/2025 — Hidrometria obrigatória para outorgas em renovação",
    "Decreto Federal nº 10.936/2022 — MTR e declarações anuais de resíduos",
    "Lei Estadual nº 12.493/1999 — Declarações anuais de resíduos no Paraná",
    "Lei Federal nº 6.938/1981 — Responsabilidade por operação sem licença válida",
    "Lei Federal nº 9.605/1998 — Multas e penalidades por infrações ambientais",
    "Lei Estadual nº 12.726/1999 — Gestão de outorgas de recursos hídricos no PR",
    "Decreto Estadual nº 9.957/2014 — Renovação de outorgas de uso da água"
  ],
  tips: [
    "Nunca opere com licença vencida — a LO pode ser renovada automaticamente se o pedido for protocolado antes do vencimento (art. 14, §4º da Resolução CONAMA 237/1997)",
    "Monitore as publicações do IAT mensalmente — as INs de 2025/2026 trouxeram mudanças que afetam atividades já licenciadas",
    "Verifique se sua atividade foi reclassificada pela IN 11/2026 como Baixo Risco — pode simplificar e reduzir o custo da gestão ambiental",
    "O RAPP deve ser entregado ao IBAMA até 31 de março de cada ano para empresas com potencial poluidor",
    "A declaração de resíduos sólidos via MTR é obrigatória a cada transporte — integre ao processo operacional da empresa"
  ]
};
