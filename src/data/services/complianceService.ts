
import { RefreshCw } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const complianceService: ServiceDetailData = {
  id: "compliance",
  title: "Gestão de Conformidade Ambiental",
  description: "Manutenção da conformidade legal após a licença: renovações, relatórios periódicos via SGA IR, regularização ambiental e gestão de TAC.",
  icon: RefreshCw,
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Após obter a licença ou outorga, surgem obrigações contínuas que, se descumpridas, geram embargo imediato, multas progressivas e cassação do ato administrativo — o que paralisa a operação. O SGA IR (Sistema de Gestão — Informes e Relatórios) é o sistema do IAT para envio de relatórios periódicos de condicionantes de licença, diferente do SGA de licenciamento. A LO tem prazo de validade e precisa ser renovada com protocolo de pelo menos 120 dias de antecedência para manter a atividade legalizada ininterruptamente. Empreendimentos em situação irregular podem se regularizar via LASR (Licença Ambiental Simplificada de Regularização), LIR (Licença de Instalação de Regularização) e LOR (Licença de Operação de Regularização). O Programa de Regularização Ambiental — PRA, instituído pela Lei Estadual nº 18.295/2014 e regulamentado pelo Decreto Estadual nº 11.515/2018 — organiza e facilita esse processo de adequação. Este serviço é a base de receita recorrente e previsível de uma consultoria ambiental — o cliente paga enquanto opera.",
  benefits: [
    "Zero risco de embargo ou cassação de licença por descumprimento de condicionantes",
    "Gestão ativa dos prazos de renovação de LO e outorgas com alertas antecipados",
    "Envio correto e no prazo de todos os relatórios via SGA IR",
    "Regularização de empreendimentos via LASR/LIR/LOR sem interrupção das operações",
    "Elaboração de TC e TAC com as melhores condições de prazo e cronograma de adequação",
    "Serviço contínuo: o cliente mantém conformidade sem preocupação operacional"
  ],
  steps: [
    {
      title: "Mapeamento de Obrigações",
      description: "Levantamento e catalogação de todas as condicionantes vigentes de licenças, outorgas e autorizações do cliente — identificação do que precisa ser entregue, quando e a qual sistema",
      duration: "1 a 2 semanas"
    },
    {
      title: "Calendário de Conformidade",
      description: "Programação de todos os relatórios, medições, campanhas de monitoramento e renovações com alertas antecipados — entregue ao cliente em formato acessível",
      duration: "3 a 5 dias"
    },
    {
      title: "Elaboração e Envio de Relatórios",
      description: "Produção técnica dos relatórios de condicionantes e submissão via SGA IR conforme periodicidade exigida — com comprovante de envio arquivado",
      duration: "Contínuo"
    },
    {
      title: "Gestão de Renovações",
      description: "Protocolo de renovação de LO no SGA do IAT (120 dias antes do vencimento), renovação de outorgas no SIGARH e de autorizações AA/AF quando aplicável",
      duration: "Conforme vencimento"
    },
    {
      title: "Regularização quando necessária",
      description: "Levantamento de passivos ambientais, negociação técnica de TC ou TAC com o IAT, e condução do processo de LASR/LIR/LOR para regularização da situação",
      duration: "Conforme situação — 3 a 12 meses"
    }
  ],
  documents: [
    "Cópia de todas as licenças, outorgas e autorizações vigentes do empreendimento (LP, LI, LO, Outorga, AA, AF)",
    "Lista detalhada de condicionantes de cada ato administrativo vigente",
    "Requerimentos de renovação protocolados via SGA do IAT (com comprovante de protocolo)",
    "Relatórios periódicos de condicionantes enviados e recebidos via SGA IR",
    "TC (Termo de Compromisso) e TAC (Termo de Ajustamento de Conduta) quando aplicável — com cronograma de adequação",
    "PRAD vinculado à regularização ambiental (Portaria IAT 17/2025)",
    "Documentação do Programa de Regularização Ambiental — PRA (Lei Estadual 18.295/2014 e Decreto Estadual 11.515/2018)"
  ],
  timeline: "Renovação de LO: protocolar 120 dias antes do vencimento; relatórios SGA IR: conforme periodicidade das condicionantes (mensal, trimestral, semestral ou anual); regularização via LASR/LIR/LOR: 2 a 6 meses conforme modalidade e cronograma negociado.",
  legalBasis: [
    "Lei Estadual nº 22.252/2024 e Decreto Estadual nº 9.541/2025",
    "Lei Estadual nº 18.295/2014 — institui o Programa de Regularização Ambiental (PRA) no Paraná",
    "Decreto Estadual nº 11.515/2018 — regulamenta o PRA no Paraná",
    "Portaria IAT nº 17/2025 — PRAD (vigente desde 15/01/2025)",
    "Lei Federal nº 9.605/1998 — crimes e infrações ambientais",
    "Condicionantes específicas de cada licença ou outorga vigente do empreendimento"
  ],
  tips: [
    "LO vencida sem protocolo de renovação = operação irregular = risco imediato de embargo — gerencie prazos ativamente, não reative",
    "SGA IR é um sistema diferente do SGA de licenciamento — muitos clientes confundem e enviam relatórios no lugar errado",
    "TAC bem negociado define cronograma factível de adequação: um bom consultor consegue prazos realistas, não apenas comprime o cliente",
    "Mapeie todas as condicionantes na assinatura do contrato — muitos clientes não sabem o que precisam entregar e quando"
  ]
};
