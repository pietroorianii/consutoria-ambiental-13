
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
    "LICENÇA PRÉVIA (LP): Certidão de Uso e Ocupação do Solo, Requerimento de Licenciamento Ambiental (RLA), Comprovante de pagamento da Taxa Ambiental, Ato Constitutivo e CNPJ/CPF, Matrícula do imóvel atualizada, Estudo Ambiental aplicável (EIA/RIMA, RAS, etc.), Certidão Negativa de Débitos Ambientais.",
    "LICENÇA DE INSTALAÇÃO (LI): Certidão de Uso e Ocupação do Solo (se houver alterações), Cópia da LP válida, Comprovação do cumprimento das condicionantes da LP, Planos e Programas Ambientais (PCA, PGRS, etc.), Comprovante de publicação do pedido da LI.",
    "LICENÇA DE OPERAÇÃO (LO): Certidão de Uso e Ocupação do Solo, Cópia da LI válida, Relatório de Autoavaliação, Laudos de comissionamento dos sistemas de controle ambiental, Outorga de Recursos Hídricos (se aplicável).",
    "LICENÇA AMBIENTAL SIMPLIFICADA (LAS): Certidão de Uso e Ocupação do Solo, RLA, Comprovante de Taxa Ambiental, Ato Constitutivo e CNPJ/CPF, Matrícula do imóvel, Relatório Ambiental Simplificado (RAS), ART do profissional responsável.",
    "LICENÇA POR ADESÃO E COMPROMISSO (LAC): Certidão de Uso e Ocupação do Solo, Cadastro completo nos sistemas online, Comprovante de Taxa Ambiental, Ato Constitutivo e CNPJ/CPF, Matrícula do imóvel, Termo de Adesão e Compromisso (TAC), ART do profissional responsável.",
    "DECLARAÇÃO DE LICENCIAMENTO AMBIENTAL MUNICIPAL (DLAM): Certidão de Uso e Ocupação do Solo, Formulário municipal específico, Comprovante de taxas municipais, Documentos pessoais/empresariais, Matrícula do imóvel, Memorial Descritivo Simplificado, Croqui de localização e layout, ART do profissional responsável."
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
