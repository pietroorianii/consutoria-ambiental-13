
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../../types/serviceTypes";

export const lacService: ServiceDetailData = {
  id: "lac",
  title: "Licença por Adesão e Compromisso (LAC)",
  description: "Licença por Adesão e Compromisso (LAC): A Via Rápida para a Regularização",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Licença por Adesão e Compromisso (LAC) é a modalidade mais ágil de licenciamento, destinada a atividades de baixo impacto cujas regras ambientais são padronizadas. O processo é realizado online, onde o empreendedor, com o suporte de um responsável técnico, adere às condições e normas pré-estabelecidas pelo órgão ambiental. Nossa consultoria garante que seu projeto se enquadre e cumpra todos os requisitos.",
  benefits: [
    "Emissão imediata online",
    "Processo 100% digital",
    "Regras ambientais padronizadas",
    "Menor custo operacional",
    "Ideal para atividades de baixo impacto",
    "Adesão a condições pré-estabelecidas"
  ],
  steps: [
    {
      title: "Verificação de Elegibilidade",
      description: "Confirmação se a atividade é elegível para LAC",
      duration: "1 a 2 dias"
    },
    {
      title: "Cadastro no Sistema",
      description: "Preenchimento completo do cadastro online no SGA",
      duration: "3 a 5 dias"
    },
    {
      title: "Adesão ao TAC",
      description: "Assinatura digital do Termo de Adesão e Compromisso",
      duration: "1 dia"
    },
    {
      title: "Emissão Imediata",
      description: "Recebimento automático da licença",
      duration: "Imediato"
    }
  ],
  documents: [
    "Certidão de Uso e Ocupação do Solo (emitida pela prefeitura)",
    "Cadastro completo nos sistemas online do órgão ambiental",
    "Comprovante de pagamento da Taxa Ambiental",
    "Ato Constitutivo (Contrato Social/Estatuto) e CNPJ/CPF",
    "Matrícula do imóvel atualizada",
    "Termo de Adesão e Compromisso (TAC) assinado digitalmente",
    "Anotação de Responsabilidade Técnica (ART) do profissional responsável"
  ],
  timeline: "A LAC tem emissão imediata após o correto preenchimento e submissão de toda documentação no sistema online.",
  legalBasis: [
    "Lei Estadual nº 22.252/2024 — normas gerais de licenciamento no Paraná",
    "Decreto Estadual nº 9.541/2025 — regulamentação da Lei 22.252/2024",
    "Instruções Normativas setoriais do IAT vigentes",
    "Portarias específicas do IAT"
  ],
  tips: [
    "Verifique se sua atividade está na lista de elegíveis",
    "Prepare toda documentação antes de iniciar o processo online",
    "Certifique-se de ter assinatura digital válida",
    "Mantenha o TAC sempre acessível"
  ]
};
