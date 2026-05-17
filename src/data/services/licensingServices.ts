
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const licensingServices: ServiceDetailData = {
  id: "licensing",
  title: "Licenciamento Ambiental",
  description: "Todas as modalidades do novo marco regulatório do Paraná: DILA, DLAM, LAC, LAS e licenciamento trifásico LP/LI/LO — conforme Lei Estadual nº 22.252/2024 e Decreto Estadual nº 9.541/2025, com INs do IAT vigentes por setor.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O novo marco regulatório do licenciamento ambiental no Paraná foi consolidado pela Lei Estadual nº 22.252/2024 e regulamentado pelo Decreto Estadual nº 9.541/2025. Todas as normas setoriais foram migradas para Instruções Normativas (INs) do IAT — Instituto Água e Terra — que definem, para cada atividade econômica, qual modalidade é exigida e quais documentos devem ser apresentados. O protocolo é feito exclusivamente no SGA do IAT (sga.iat.pr.gov.br). As modalidades vão da dispensa automática (DILA — Declaração de Inexigibilidade) até o licenciamento trifásico LP/LI/LO para grandes empreendimentos. A IN 11/2026 classificou atividades de baixo risco com simplificação do ato administrativo. Novos setores como energia solar (IN 20/2025), energia eólica (IN 22/2025) e biodigestores (IN 24/2025) já possuem INs próprias e específicas.",
  benefits: [
    "Segurança jurídica para instalação e operação do empreendimento",
    "Adequação ao novo marco regulatório — Lei Estadual nº 22.252/2024",
    "Enquadramento correto na modalidade mais ágil e econômica",
    "Acompanhamento especializado em todas as fases no SGA do IAT",
    "Prevenção de embargos, multas e paralisação de atividades",
    "Atendimento a todas as INs setoriais vigentes do IAT (2025/2026)",
    "Integração com outorga quando exigida como condicionante da LO"
  ],
  steps: [
    {
      title: "Enquadramento e Diagnóstico",
      description: "Identificação da modalidade correta conforme IN setorial vigente e classificação de porte/potencial poluidor — verificação na lista de INs do IAT para o setor específico da atividade",
      duration: "3 a 5 dias úteis"
    },
    {
      title: "Elaboração de Estudos e Documentação",
      description: "MCE, RAS, EIA/RIMA ou documentação específica da IN aplicável, acrescida de ART do responsável técnico, dominialidade do imóvel (90 dias — Decreto 9.541/2025) e demais documentos exigidos",
      duration: "2 a 8 semanas"
    },
    {
      title: "Protocolo no SGA do IAT e Acompanhamento",
      description: "Submissão eletrônica no SGA do IAT, acompanhamento técnico semanal da análise e resposta a eventuais pedidos de exigência ou complementação",
      duration: "DILA: imediata; DLAM: 1–15 dias; LAC: imediata; LAS: até 60 dias; LP/LI/LO: 4–6 meses por fase"
    },
    {
      title: "Recebimento da Licença e Orientações",
      description: "Entrega da licença ou autorização com orientações detalhadas para cumprimento de todas as condicionantes estabelecidas pelo IAT",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "Documentação base comum a todas as modalidades: ART do profissional responsável; dominialidade do imóvel atualizada (máximo 90 dias — Decreto 9.541/2025); Certidão Municipal de uso e ocupação do solo; SICAR-PR para imóveis rurais; Declaração de embargos; Comprovante de pagamento de taxa ambiental IAT; CPF/RG (pessoa física) ou CNPJ/Contrato Social (empresa)",
    "DLAM — Declaração de Dispensa de Licenciamento (1–15 dias): documentação base + Memorial de Caracterização Simplificado conforme IN setorial vigente",
    "LAC — Licença por Adesão e Compromisso (emissão imediata): documentação base + formulário LAC preenchido no SGA + declaração de enquadramento e compromisso de atendimento às condicionantes padrão",
    "LAS — Licença Ambiental Simplificada (até 60 dias): documentação base + RAS (Relatório Ambiental Simplificado) ou MCE conforme IN setorial + planos exigidos (PGRS, etc.)",
    "LP — Licença Prévia (4–6 meses): documentação base + EIA/RIMA (empreendimentos de significativo impacto) ou RAS (demais) + Certidão de Uso e Ocupação do Solo atualizada",
    "LI — Licença de Instalação (4–6 meses): LP válida + PBA (pós-EIA) ou PCA (pós-RAS) + projetos executivos + ART da construção",
    "LO — Licença de Operação (4–6 meses): LI válida + comprovantes de cumprimento de condicionantes da LI + Plano de Automonitoramento + Outorga de Recursos Hídricos quando aplicável"
  ],
  timeline: "DILA: imediata (automática); DLAM: 1 a 15 dias; LAC: emissão imediata; LAS: até 60 dias; LP/LI/LO: 4 a 6 meses por fase. Prazos contados a partir do protocolo completo no SGA do IAT.",
  legalBasis: [
    "Lei Estadual nº 22.252/2024 — normas gerais de licenciamento no Paraná",
    "Decreto Estadual nº 9.541/2025 — regulamentação da Lei 22.252/2024",
    "IN IAT nº 65/2025 — empreendimentos industriais",
    "IN IAT nº 21/2025 — empreendimentos imobiliários urbanos",
    "IN IAT nº 04/2025 — movimentação de solo e terraplanagem",
    "IN IAT nº 34, 35 e 36/2025 — suinocultura, bovinocultura e avicultura",
    "IN IAT nº 51/2025 — aquicultura e maricultura",
    "IN IAT nº 33/2025 — aterros sanitários",
    "IN IAT nº 37/2025 — sistemas de esgotamento sanitário e abastecimento de água",
    "IN IAT nº 20/2025 — energia solar",
    "IN IAT nº 22/2025 — energia eólica",
    "IN IAT nº 24/2025 — biodigestores com aproveitamento de biogás",
    "IN IAT nº 01/2026 — atividades agrícolas inexigíveis de licenciamento",
    "IN IAT nº 11/2026 — classificação de atividades de baixo risco",
    "Resolução CEMA nº 107/2020",
    "Lei Federal nº 6.938/1981 — Política Nacional do Meio Ambiente",
    "Lei Complementar nº 140/2011"
  ],
  tips: [
    "Verifique sempre a IN setorial específica do IAT antes de iniciar o processo — cada atividade tem requisitos distintos e a modalidade correta pode poupar semanas de processo",
    "Protocolos são feitos exclusivamente via SGA do IAT em sga.iat.pr.gov.br — guarde seu login e senha",
    "Solicite renovação da LO com no mínimo 120 dias de antecedência para manter a atividade legalizada ininterruptamente",
    "SICAR-PR é obrigatório para imóveis rurais em qualquer modalidade de licenciamento",
    "A IN 11/2026 pode simplificar o ato administrativo para atividades classificadas como baixo risco — consulte antes de protocolizar",
    "Outorga de recursos hídricos pode ser condicionante da LO — inicie o processo no SIGARH em paralelo quando aplicável"
  ]
};
