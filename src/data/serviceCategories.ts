
import { Leaf, Beaker, FileText, Users, TreeDeciduous, CloudSun, Globe, Recycle } from "lucide-react";
import React from "react";

export type ServiceCategoryType = 'licensing' | 'monitoring' | 'reports' | 'consulting' | 'training' | 'management' | 'esg' | 'climate';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategoryData {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  services: ServiceItem[];
}

export const serviceCategories: Record<ServiceCategoryType, ServiceCategoryData> = {
  licensing: {
    title: "Licenciamento e Autorizações Ambientais",
    description: "Serviços completos de licenciamento conforme Decreto Estadual nº 9.541/2025 e normas do IAT-PR, desde dispensas até licenciamento trifásico.",
    icon: React.createElement(Leaf, { className: "h-8 w-8 text-eco-green" }),
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "DLAM - Declaração de Dispensa",
        description: "Para atividades de baixo impacto ambiental conforme critérios do IAT (1-15 dias).",
      },
      {
        title: "LAC - Licença por Adesão e Compromisso",
        description: "Emissão eletrônica para atividades padronizáveis via SGA do IAT.",
      },
      {
        title: "LAS - Licença Ambiental Simplificada",
        description: "Processo unificado para atividades de pequeno porte (até 60 dias).",
      },
      {
        title: "Licenciamento Trifásico (LP/LI/LO)",
        description: "Processo completo para empreendimentos de maior complexidade.",
      },
      {
        title: "Modalidades de Regularização",
        description: "LASR, LIR e LOR para adequação de empreendimentos em operação irregular.",
      },
      {
        title: "Autorizações Específicas (AA e AF)",
        description: "Autorizações Ambientais e Florestais para atividades e intervenções específicas.",
      }
    ]
  },
  monitoring: {
    title: "Monitoramento e Análises Ambientais",
    description: "Monitoramento contínuo e análises técnicas especializadas para garantir conformidade ambiental e atendimento às condicionantes.",
    icon: React.createElement(Beaker, { className: "h-8 w-8 text-eco-blue" }),
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Monitoramento de Emissões Atmosféricas",
        description: "Controle de poluentes atmosféricos conforme condicionantes de licenças.",
      },
      {
        title: "Monitoramento de Efluentes Líquidos",
        description: "Análise e controle da qualidade de efluentes industriais e sanitários.",
      },
      {
        title: "Monitoramento da Qualidade da Água",
        description: "Acompanhamento de águas superficiais e subterrâneas.",
      },
      {
        title: "Gestão de Análises Laboratoriais",
        description: "Coordenação de coletas e análises com laboratórios credenciados.",
      },
      {
        title: "Acompanhamento de Condicionantes",
        description: "Gestão sistemática do cumprimento de condicionantes ambientais.",
      }
    ]
  },
  reports: {
    title: "Estudos e Relatórios Ambientais",
    description: "Elaboração de estudos ambientais especializados conforme exigências do IAT e legislação ambiental vigente.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-eco-green-dark" }),
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "EIA/RIMA",
        description: "Estudos de Impacto Ambiental para empreendimentos de significativo impacto.",
      },
      {
        title: "RAP e RAS",
        description: "Relatórios Ambientais Prévios e Simplificados conforme complexidade da atividade.",
      },
      {
        title: "Planos de Gerenciamento (PGRS/PGRSS/PGRCC)",
        description: "Planos especializados para gestão de resíduos sólidos por setor.",
      },
      {
        title: "Estudos de Fauna e Flora",
        description: "Conforme Portaria IAT nº 012/2024 para licenciamentos e autorizações florestais.",
      },
      {
        title: "PCA e PRAD",
        description: "Planos de Controle Ambiental e Recuperação de Áreas Degradadas.",
      },
      {
        title: "Inventários Ambientais",
        description: "Inventários de resíduos sólidos e emissões de gases de efeito estufa.",
      }
    ]
  },
  consulting: {
    title: "Consultoria Ambiental Especializada",
    description: "Assessoria técnica estratégica para questões ambientais complexas, auditorias e adequações regulatórias.",
    icon: React.createElement(Users, { className: "h-8 w-8 text-eco-blue-dark" }),
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Auditorias Ambientais",
        description: "Auditorias de conformidade legal, desempenho ambiental e due diligence.",
      },
      {
        title: "Defesas e Recursos Ambientais",
        description: "Elaboração de defesas para autos de infração e recursos administrativos.",
      },
      {
        title: "Assessoria para TAC",
        description: "Suporte técnico em Termos de Ajuste de Conduta ambiental.",
      },
      {
        title: "Perícia Ambiental",
        description: "Avaliação técnica especializada para processos judiciais e administrativos.",
      },
      {
        title: "Geotecnologias (SIG)",
        description: "Mapeamento e análise ambiental com Sistemas de Informação Geográfica.",
      },
      {
        title: "Certificações Ambientais",
        description: "Assessoria para ISO 14001 e outras certificações de gestão ambiental.",
      }
    ]
  },
  training: {
    title: "Treinamentos e Capacitações Ambientais",
    description: "Programas de educação ambiental e capacitação técnica para equipes e colaboradores.",
    icon: React.createElement(TreeDeciduous, { className: "h-8 w-8 text-eco-green" }),
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Treinamento em Legislação Ambiental",
        description: "Capacitação sobre Decreto nº 9.541/2025 e normas aplicáveis por setor.",
      },
      {
        title: "Gerenciamento de Resíduos Sólidos",
        description: "Treinamento certificado em PGRS conforme Lei nº 12.305/2010.",
      },
      {
        title: "Atendimento a Emergências Ambientais",
        description: "Capacitação para resposta rápida e adequada a incidentes ambientais.",
      },
      {
        title: "Capacitações Setoriais",
        description: "Programas específicos para indústria, agronegócio, serviços e construção civil.",
      }
    ]
  },
  management: {
    title: "Gestão Ambiental Contínua",
    description: "Serviços continuados para manutenção da conformidade ambiental e gestão de requisitos legais.",
    icon: React.createElement(CloudSun, { className: "h-8 w-8 text-eco-blue" }),
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Gestão de Requisitos Legais",
        description: "Sistema de gestão de obrigações ambientais e controle de prazos.",
      },
      {
        title: "Renovação de Licenças",
        description: "Acompanhamento e renovação de licenças e autorizações com antecedência.",
      },
      {
        title: "Declarações Anuais",
        description: "Elaboração de inventários e declarações obrigatórias aos órgãos ambientais.",
      },
      {
        title: "Suporte Técnico Contínuo",
        description: "Assessoria permanente para questões ambientais do dia a dia.",
      }
    ]
  },
  esg: {
    title: "Consultoria ESG",
    description: "Assessoria especializada em critérios ambientais, sociais e de governança para competitividade e sustentabilidade corporativa.",
    icon: React.createElement(Globe, { className: "h-8 w-8 text-eco-accent-teal" }),
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Diagnóstico e Estratégia ESG",
        description: "Avaliação completa de práticas ESG e desenvolvimento de estratégias customizadas.",
      },
      {
        title: "Relatórios de Sustentabilidade",
        description: "Elaboração conforme padrões GRI, SASB, TCFD e outros frameworks internacionais.",
      },
      {
        title: "Análise de Riscos ESG",
        description: "Identificação de riscos e oportunidades ambientais, sociais e de governança.",
      },
      {
        title: "Engajamento com Stakeholders",
        description: "Estratégias de comunicação com investidores, comunidades e colaboradores.",
      },
      {
        title: "Políticas Corporativas ESG",
        description: "Desenvolvimento de políticas e indicadores de desempenho em sustentabilidade.",
      }
    ]
  },
  climate: {
    title: "Mudanças Climáticas e Descarbonização",
    description: "Soluções especializadas para gestão de riscos climáticos, redução de emissões e adaptação às mudanças climáticas.",
    icon: React.createElement(Recycle, { className: "h-8 w-8 text-eco-accent-sage" }),
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Inventários de Gases de Efeito Estufa",
        description: "Elaboração de inventários GEE corporativos conforme ISO 14064 e verificação terceirizada.",
      },
      {
        title: "Planos de Descarbonização",
        description: "Estratégias de redução de emissões e roadmap para neutralidade carbônica.",
      },
      {
        title: "Análise de Vulnerabilidade Climática",
        description: "Avaliação de riscos físicos e de transição climática para adaptação empresarial.",
      },
      {
        title: "Projetos de Crédito de Carbono",
        description: "Desenvolvimento e consultoria em projetos desde concepção até comercialização.",
      },
      {
        title: "Economia Circular",
        description: "Implementação de estratégias circulares e modelos de negócio sustentáveis.",
      }
    ]
  }
};
