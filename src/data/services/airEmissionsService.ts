
import { Wind } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const airEmissionsService: ServiceDetailData = {
  id: "air_emissions",
  title: "Controle de Emissões Atmosféricas",
  description: "Plano de automonitoramento, cadastro de fontes fixas e declarações periódicas de emissões — via SGADEA (Sistema de Gestão de Declaração de Emissões Atmosféricas do IAT).",
  icon: Wind,
  image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O SGADEA é o sistema do IAT para gestão de declarações de emissões atmosféricas. Empresas com fontes fixas de emissão — chaminés, caldeiras, fornos industriais, dutos de exaustão — são obrigadas a cadastrar suas fontes, elaborar o Plano de Automonitoramento Atmosférico e enviar declarações periódicas de resultados analíticos. Este não é um serviço pontual: trata-se de uma obrigação contínua decorrente das condicionantes da Licença de Operação (LO), que persiste enquanto o empreendimento operar. A base técnica nacional é a Resolução CONAMA 491/2018, que definiu novos padrões de qualidade do ar substituindo a CONAMA 03/1990. O IAT incorporou esses padrões às condicionantes de LO para empreendimentos industriais, de mineração, energia e saneamento — qualquer descumprimento gera auto de infração automático.",
  benefits: [
    "Cumprimento de condicionantes de Licença de Operação (LO) relacionadas a emissões atmosféricas",
    "Cadastro e declarações periódicas no SGADEA em conformidade com o IAT",
    "Prevenção de autuações por descumprimento de padrões de qualidade do ar",
    "Laudos técnicos de emissão para renovação de LO e novos processos de licenciamento",
    "Inventário completo e atualizado de fontes fixas do empreendimento",
    "Monitoramento da qualidade do ar ambiente quando exigido como condicionante específica"
  ],
  steps: [
    {
      title: "Inventário de Fontes",
      description: "Levantamento e caracterização técnica de todas as fontes fixas de emissão do empreendimento: chaminés, caldeiras, fornos, geradores, filtros e dutos — com identificação dos poluentes de interesse por fonte",
      duration: "1 a 2 semanas"
    },
    {
      title: "Elaboração do Plano de Automonitoramento",
      description: "Definição de parâmetros a monitorar, frequência de medição, pontos de amostragem, metodologia analítica e responsável técnico — o Plano é submetido ao IAT para aprovação antes das medições",
      duration: "2 a 4 semanas"
    },
    {
      title: "Medições e Análises",
      description: "Campanhas de medição em fontes fixas realizadas com laboratório credenciado pelo INMETRO (ABNT NBR ISO/IEC 17025), cadeia de custódia rigorosa e laudo técnico assinado pelo responsável",
      duration: "5 a 15 dias por campanha"
    },
    {
      title: "Declarações no SGADEA",
      description: "Cadastro de fontes, envio de resultados analíticos e declarações periódicas no SGADEA conforme periodicidade definida nas condicionantes da LO (mensal, trimestral ou anual)",
      duration: "Contínuo"
    }
  ],
  documents: [
    "Plano de Automonitoramento Atmosférico aprovado pelo IAT",
    "Laudos analíticos de emissão emitidos por laboratório com acreditação INMETRO (ABNT NBR ISO/IEC 17025)",
    "Inventário completo de fontes fixas de emissão do empreendimento",
    "Relatórios de medição com cadeia de custódia documentada",
    "Comprovantes de envio e recebimento de declarações no SGADEA",
    "Certificados de calibração dos equipamentos de medição utilizados",
    "Condicionantes de LO relativas a emissões atmosféricas (extraídas da licença vigente)"
  ],
  timeline: "Elaboração do Plano de Automonitoramento: 2 a 4 semanas; aprovação pelo IAT: 15 a 30 dias; campanhas de medição: 5 a 15 dias cada; declarações no SGADEA: periodicidade definida nas condicionantes da LO (mensal, trimestral ou anual).",
  legalBasis: [
    "Resolução CONAMA nº 491/2018 — padrões nacionais de qualidade do ar (substitui CONAMA 03/1990)",
    "Condicionantes específicas de Licença de Operação (LO) — individuais por empreendimento",
    "Decreto Estadual nº 9.541/2025",
    "Lei Federal nº 6.938/1981 — Política Nacional do Meio Ambiente"
  ],
  tips: [
    "SGADEA é obrigatório para qualquer empreendimento com LO que tenha condicionante de monitoramento de emissões — verifique sua LO agora",
    "Use apenas laboratórios com acreditação INMETRO (NBR ISO/IEC 17025) para análises de emissão atmosférica — resultado de laboratório não acreditado não é aceito pelo IAT",
    "Atraso em declaração no SGADEA gera auto de infração automático — mantenha o calendário de obrigações atualizado mês a mês",
    "Este serviço gera receita recorrente garantida: o cliente paga todo ano enquanto o empreendimento tiver LO com essa condicionante"
  ]
};
