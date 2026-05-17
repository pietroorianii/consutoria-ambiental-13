
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../../types/serviceTypes";

export const lpService: ServiceDetailData = {
  id: "lp",
  title: "Licença Prévia (LP)",
  description: "A LP aprova a concepção e localização do projeto, atestando sua viabilidade ambiental.",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Licença Prévia (LP) é a primeira fase do licenciamento ambiental trifásico, responsável por aprovar a concepção e localização do projeto, atestando sua viabilidade ambiental. Esta licença é fundamental para validar a escolha do local e as características básicas do empreendimento antes de qualquer investimento maior.",
  benefits: [
    "Validação da viabilidade ambiental do projeto",
    "Segurança para investimentos futuros",
    "Aprovação da localização do empreendimento",
    "Base para obtenção das próximas licenças",
    "Redução de riscos de projeto",
    "Conformidade legal desde o início"
  ],
  steps: [
    {
      title: "Análise de Viabilidade",
      description: "Avaliação preliminar da viabilidade ambiental e enquadramento do projeto",
      duration: "5 a 10 dias"
    },
    {
      title: "Elaboração de Estudos",
      description: "Preparação dos estudos ambientais aplicáveis (EIA/RIMA, RAS, etc.)",
      duration: "4 a 12 semanas"
    },
    {
      title: "Protocolo e Análise",
      description: "Submissão da documentação e acompanhamento da análise técnica",
      duration: "4 a 6 meses"
    },
    {
      title: "Emissão da LP",
      description: "Recebimento da licença e orientações para próximas fases",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "Certidão de Uso e Ocupação do Solo (emitida pela prefeitura)",
    "Requerimento de Licenciamento Ambiental (RLA)",
    "Comprovante de pagamento da Taxa Ambiental",
    "Ato Constitutivo (Contrato Social/Estatuto) e CNPJ/CPF",
    "Matrícula do imóvel atualizada ou documento de justa posse",
    "Estudo Ambiental aplicável (EIA/RIMA, RAS, etc.)",
    "Certidão Negativa de Débitos Ambientais"
  ],
  timeline: "O prazo para análise da LP varia de 4 a 6 meses, dependendo da complexidade do projeto e dos estudos ambientais exigidos.",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025",
    "Resolução CEMA nº 107/2020",
    "Lei Federal nº 6.938/1981",
    "Lei Complementar nº 140/2011"
  ],
  tips: [
    "Realize estudos de viabilidade antes de protocolar",
    "Mantenha documentação atualizada",
    "Considere contratação de consultoria especializada",
    "Prepare-se para possíveis complementações"
  ]
};
