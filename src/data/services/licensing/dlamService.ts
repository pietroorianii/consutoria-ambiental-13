
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../../types/serviceTypes";

export const dlamService: ServiceDetailData = {
  id: "dlam",
  title: "Declaração de Licenciamento Municipal (DLAM)",
  description: "DLAM: Regularização Simplificada para Atividades de Impacto Local",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Declaração de Licenciamento Ambiental Municipal (DLAM) é aplicável a atividades de baixo impacto ambiental, cuja competência para licenciar foi delegada ao município. Cada prefeitura define seu próprio procedimento, que geralmente é mais simples e rápido que o estadual. Auxiliamos na verificação da competência e na instrução completa do processo junto ao órgão municipal.",
  benefits: [
    "Procedimento municipal simplificado",
    "Maior agilidade no processo",
    "Custos reduzidos",
    "Proximidade com o órgão licenciador",
    "Ideal para atividades de impacto local",
    "Processo adaptado à realidade municipal"
  ],
  steps: [
    {
      title: "Verificação de Competência",
      description: "Confirmação da competência municipal para licenciar a atividade",
      duration: "1 a 2 dias"
    },
    {
      title: "Levantamento de Requisitos",
      description: "Identificação dos requisitos específicos do município",
      duration: "3 a 5 dias"
    },
    {
      title: "Protocolo Municipal",
      description: "Submissão da documentação na prefeitura",
      duration: "1 a 15 dias"
    },
    {
      title: "Emissão da DLAM",
      description: "Recebimento da declaração municipal",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "Certidão de Uso e Ocupação do Solo (emitida pela prefeitura)",
    "Formulário de requerimento específico do município",
    "Comprovante de pagamento de taxas municipais",
    "Documentos pessoais (CPF/RG) ou da empresa (CNPJ)",
    "Matrícula do imóvel",
    "Memorial Descritivo Simplificado da Atividade",
    "Croqui de localização e layout do empreendimento",
    "Anotação de Responsabilidade Técnica (ART) do profissional responsável"
  ],
  timeline: "O prazo varia conforme cada município, geralmente entre 1 a 15 dias úteis após protocolo da documentação completa.",
  legalBasis: [
    "Lei Complementar nº 140/2011",
    "Legislação municipal específica",
    "Resoluções municipais de meio ambiente",
    "Códigos municipais de posturas"
  ],
  tips: [
    "Consulte sempre a legislação municipal específica",
    "Verifique a competência antes de protocolar",
    "Mantenha contato direto com o órgão municipal",
    "Prepare documentação conforme exigências locais"
  ]
};
