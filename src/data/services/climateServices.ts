
import { Recycle } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const climateServices: ServiceDetailData = {
  id: "climate",
  title: "Mudanças Climáticas e Descarbonização",
  description: "Soluções especializadas para gestão de riscos climáticos, redução de emissões e adaptação às mudanças climáticas.",
  icon: Recycle,
  image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "Nossos serviços de mudanças climáticas e descarbonização ajudam empresas a compreender, mitigar e adaptar-se aos impactos das mudanças climáticas, desenvolvendo estratégias de baixo carbono e construindo resiliência climática para operações sustentáveis de longo prazo.",
  benefits: [
    "Redução da pegada de carbono empresarial",
    "Preparação para regulamentações climáticas",
    "Acesso a mercados de carbono",
    "Melhoria da resiliência operacional",
    "Atração de investimentos sustentáveis",
    "Liderança em sustentabilidade setorial"
  ],
  steps: [
    {
      title: "Inventário de GEE",
      description: "Elaboração do inventário de gases de efeito estufa e cálculo da pegada de carbono",
      duration: "4 a 8 semanas"
    },
    {
      title: "Análise de Vulnerabilidade",
      description: "Avaliação de riscos físicos e de transição climática",
      duration: "6 a 10 semanas"
    },
    {
      title: "Estratégia de Descarbonização",
      description: "Desenvolvimento de plano de redução de emissões e metas baseadas na ciência",
      duration: "8 a 12 semanas"
    },
    {
      title: "Implementação e Monitoramento",
      description: "Execução das ações e acompanhamento contínuo do progresso",
      duration: "Processo contínuo"
    }
  ],
  documents: [
    "Inventário de gases de efeito estufa",
    "Relatório de pegada de carbono",
    "Avaliação de riscos climáticos",
    "Plano de descarbonização",
    "Estratégia de adaptação climática",
    "Projetos de crédito de carbono",
    "Relatórios de progresso"
  ],
  timeline: "Desenvolvimento da estratégia em 3 a 6 meses, com implementação e monitoramento contínuos.",
  legalBasis: [
    "Acordo de Paris - NDCs do Brasil",
    "Lei nº 12.187/2009 - Política Nacional sobre Mudança do Clima",
    "ISO 14064 - Gases de efeito estufa",
    "Programa Brasileiro GHG Protocol",
    "Science Based Targets initiative (SBTi)"
  ],
  tips: [
    "Estabeleça metas baseadas na ciência (SBTi)",
    "Priorize ações de redução antes da compensação",
    "Considere toda a cadeia de valor",
    "Monitore regulamentações emergentes",
    "Comunique progressos de forma transparente"
  ]
};
