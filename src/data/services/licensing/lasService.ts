
import { Leaf } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const lasService: ServiceDetailData = {
  id: "las",
  title: "Licença Ambiental Simplificada (LAS)",
  description: "Agilidade e Conformidade com a Licença Ambiental Simplificada (LAS)",
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Licença Ambiental Simplificada (LAS) é a solução ideal para empreendimentos de pequeno a médio porte e baixo potencial poluidor. Emitida em uma única etapa, a LAS autoriza a localização, a instalação e a operação da atividade, tornando o processo muito mais rápido e eficiente. Cuidamos de todo o processo para você.",
  benefits: [
    "Processo unificado em uma única etapa",
    "Agilidade na emissão (até 60 dias)",
    "Menor complexidade documental",
    "Custos reduzidos",
    "Ideal para pequenos e médios empreendimentos",
    "Autorização completa para operar"
  ],
  steps: [
    {
      title: "Análise de Enquadramento",
      description: "Verificação se o empreendimento se enquadra na modalidade LAS",
      duration: "3 a 5 dias"
    },
    {
      title: "Elaboração do RAS",
      description: "Preparação do Relatório Ambiental Simplificado",
      duration: "2 a 4 semanas"
    },
    {
      title: "Protocolo e Análise",
      description: "Submissão no SGA do IAT e acompanhamento da análise",
      duration: "até 60 dias"
    },
    {
      title: "Emissão da LAS",
      description: "Recebimento da licença e orientações operacionais",
      duration: "1 a 2 dias"
    }
  ],
  documents: [
    "Certidão de Uso e Ocupação do Solo (emitida pela prefeitura)",
    "Requerimento de Licenciamento Ambiental (RLA)",
    "Comprovante de pagamento da Taxa Ambiental",
    "Ato Constitutivo (Contrato Social/Estatuto) e CNPJ/CPF",
    "Matrícula do imóvel atualizada",
    "Relatório Ambiental Simplificado (RAS), incluindo a descrição da atividade, os controles ambientais e o layout",
    "Anotação de Responsabilidade Técnica (ART) do profissional responsável"
  ],
  timeline: "O prazo máximo para análise da LAS é de 60 dias corridos, conforme estabelecido pela legislação estadual.",
  legalBasis: [
    "Decreto Estadual nº 9.541/2025",
    "Resolução CEMA nº 107/2020",
    "Instruções Normativas do IAT",
    "Lei Federal nº 6.938/1981"
  ],
  tips: [
    "Verifique o enquadramento antes de protocolar",
    "Prepare um RAS completo e detalhado",
    "Mantenha documentação atualizada",
    "Considere renovações com antecedência"
  ]
};
