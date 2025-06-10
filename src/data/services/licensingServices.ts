
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const licensingServices: ServiceDetailData = {
  id: "licensing",
  title: "Licenciamento e Autorizações Ambientais",
  description: "Serviços completos de licenciamento ambiental conforme Decreto Estadual nº 9.541/2025 e normas do IAT-PR.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "O licenciamento ambiental no Paraná, conforme o Decreto Estadual nº 9.541/2025, abrange diversas modalidades desde a Declaração de Dispensa de Licenciamento Ambiental (DLAM) para atividades de baixo impacto até o licenciamento trifásico convencional para empreendimentos de maior complexidade. Nossos serviços garantem conformidade total com as normas do IAT e agilidade nos processos.",
  benefits: [
    "Conformidade com Decreto nº 9.541/2025",
    "Processo otimizado no SGA do IAT",
    "Segurança jurídica para operação",
    "Redução de prazos e custos",
    "Acompanhamento especializado",
    "Prevenção de multas e penalidades",
    "Adequação ao Programa de Regularização Ambiental (PRA)"
  ],
  steps: [
    {
      title: "Análise e Enquadramento",
      description: "Identificação da modalidade adequada conforme porte e potencial poluidor da atividade",
      duration: "3 a 5 dias"
    },
    {
      title: "Preparação Documental",
      description: "Elaboração de estudos ambientais e reunião da documentação exigida",
      duration: "2 a 8 semanas"
    },
    {
      title: "Protocolo e Acompanhamento",
      description: "Submissão no SGA do IAT e acompanhamento da análise técnica",
      duration: "Conforme modalidade"
    },
    {
      title: "Obtenção da Licença",
      description: "Recebimento da licença/autorização e orientações para cumprimento",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "DLAM - Declaração de Dispensa (1 a 15 dias)",
    "LAC - Licença por Adesão e Compromisso (emissão eletrônica)",
    "LAS - Licença Ambiental Simplificada (até 60 dias)",
    "LP/LI/LO - Licenciamento Trifásico (4 a 6 meses cada)",
    "LASR/LIR/LOR - Modalidades de Regularização",
    "AA - Autorizações Ambientais específicas",
    "AF - Autorizações Florestais"
  ],
  timeline: "Os prazos variam conforme a modalidade: DLAM (1-15 dias), LAC (emissão imediata), LAS (até 60 dias), licenciamento convencional (4-6 meses por fase).",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025",
    "Resolução CEMA nº 107/2020",
    "Portaria IAT Nº 190/2024 (Diretrizes do PRA)",
    "Instruções Normativas do IAT",
    "Lei Federal nº 6.938/1981",
    "Lei Complementar nº 140/2011"
  ],
  tips: [
    "Consulte sempre as INs específicas do IAT para sua atividade",
    "Utilize o SGA do IAT para processos eletrônicos",
    "Mantenha documentação organizada e atualizada",
    "Solicite renovações com 120 dias de antecedência",
    "Considere a modalidade mais adequada ao seu porte"
  ]
};
