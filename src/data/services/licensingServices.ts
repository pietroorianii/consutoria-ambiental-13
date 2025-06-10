
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const licensingServices: ServiceDetailData = {
  id: "licensing",
  title: "Licenciamento Ambiental sem Complicações",
  description: "Regularize sua empresa e evite multas com nosso serviço completo de licenciamento ambiental conforme Decreto Estadual nº 9.541/2025 e normas do IAT-PR.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O licenciamento ambiental no Paraná passou por importantes atualizações com o Decreto Estadual nº 9.541/2025. Agora existem diferentes modalidades desde a DLAM (Declaração de Dispensa) para atividades de baixo impacto até o licenciamento trifásico para empreendimentos complexos. Nossa expertise garante que você escolha a modalidade certa, economize tempo e evite retrabalho.",
  benefits: [
    "Segurança jurídica total para sua operação",
    "Evita multas que podem chegar a R$ 50 milhões",
    "Processo 3x mais rápido que a média do mercado",
    "Acompanhamento completo no SGA do IAT",
    "Garantia de aprovação ou reembolso integral",
    "Suporte especializado em todas as fases"
  ],
  steps: [
    {
      title: "Diagnóstico Gratuito e Enquadramento",
      description: "Analisamos sua atividade e definimos a modalidade ideal (DLAM, LAC, LAS ou LP/LI/LO)",
      duration: "2 a 3 dias"
    },
    {
      title: "Orçamento Detalhado e Cronograma",
      description: "Apresentamos proposta transparente com prazos reais e custos detalhados",
      duration: "1 dia"
    },
    {
      title: "Elaboração e Protocolo",
      description: "Preparamos toda documentação e protocolamos no Sistema SGA do IAT",
      duration: "1 a 6 semanas"
    },
    {
      title: "Acompanhamento e Aprovação",
      description: "Monitoramos o processo diariamente até a emissão da sua licença",
      duration: "Conforme modalidade"
    }
  ],
  documents: [
    "DLAM - Declaração de Dispensa (aprovação em 1 a 15 dias)",
    "LAC - Licença por Adesão (emissão eletrônica imediata)",
    "LAS - Licença Simplificada (aprovação até 60 dias)",
    "LP - Licença Prévia (viabilidade do projeto)",
    "LI - Licença de Instalação (autorização para construir)",
    "LO - Licença de Operação (autorização para funcionar)",
    "Autorizações Ambientais específicas (AA, AF)"
  ],
  timeline: "DLAM: 1-15 dias | LAC: Imediata | LAS: até 60 dias | LP/LI/LO: 4-6 meses cada fase. Atendemos prazos de urgência com equipe dedicada.",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025 (Nova regulamentação)",
    "Resolução CEMA nº 107/2020 (Procedimentos atualizados)",
    "Instruções Normativas IAT vigentes",
    "Lei Federal nº 6.938/1981 (Política Nacional)",
    "Lei Complementar nº 140/2011 (Competências)"
  ],
  tips: [
    "Não aguarde notificações: licencie-se preventivamente",
    "Renovações devem ser solicitadas 120 dias antes do vencimento",
    "Mantenha sempre uma cópia digital da licença acessível",
    "Atividades sem licença podem ser embargadas a qualquer momento",
    "Consulte o Cadastro de Atividades Licenciáveis do IAT antes de iniciar"
  ]
};
