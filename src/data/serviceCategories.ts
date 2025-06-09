
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
    description: "Nossos serviços de licenciamento ambiental abrangem todas as etapas necessárias para obtenção e manutenção das licenças e autorizações exigidas pelos órgãos ambientais.",
    icon: React.createElement(Leaf, { className: "h-8 w-8 text-eco-green" }),
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Licenciamentos Ambientais",
        description: "Obtenção de Licenças Prévias (LP), Licenças de Instalação (LI), Licenças de Operação (LO), Autorizações Ambientais (AA), Licenças Ambientais Simplificadas (LAS) e Dispensas de Licença.",
      },
      {
        title: "Autorizações Ambientais",
        description: "Obtenção de autorizações específicas para intervenções ambientais, como supressão de vegetação, intervenção em APP, entre outras.",
      },
      {
        title: "Cadastro Técnico Federal (IBAMA)",
        description: "Inscrição no Cadastro Técnico Federal (CTF), elaboração e envio da Declaração RAPP, e acompanhamento da TCFA.",
      },
      {
        title: "Recursos Hídricos",
        description: "Autorizações para perfuração de poços, solicitação de outorgas de direito de uso de recursos hídricos e cadastros de dispensa de outorga.",
      }
    ]
  },
  monitoring: {
    title: "Monitoramento e Análises Ambientais",
    description: "Serviços de monitoramento contínuo e análises técnicas para garantir a conformidade ambiental e atendimento às condicionantes estabelecidas nas licenças e autorizações.",
    icon: React.createElement(Beaker, { className: "h-8 w-8 text-eco-blue" }),
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Acompanhamento de Condicionantes",
        description: "Monitoramento mensal do cumprimento das condicionantes ambientais estabelecidas nas licenças e autorizações.",
      },
      {
        title: "Declaração de Carga Poluidora",
        description: "Elaboração da Declaração de Carga Poluidora (DCP) e análise de laudos físico-químicos.",
      },
      {
        title: "Monitoramento de Emissões",
        description: "Monitoramento de emissões de poluentes atmosféricos, efluentes líquidos e gestão de resíduos sólidos.",
      },
      {
        title: "Gestão de Amostragens e Análises",
        description: "Gestão completa de cotação de laboratórios e definição de cronogramas de coleta de amostras para análises ambientais.",
      }
    ]
  },
  reports: {
    title: "Planos e Relatórios Ambientais",
    description: "Elaboração de documentos técnicos especializados para atendimento às exigências legais e implementação de boas práticas de gestão ambiental.",
    icon: React.createElement(FileText, { className: "h-8 w-8 text-eco-green-dark" }),
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Inventário de Resíduos Sólidos",
        description: "Elaboração de Inventário de Resíduos Sólidos conforme modelo SGA-IR ou IBAMA.",
      },
      {
        title: "Planos de Gerenciamento de Resíduos",
        description: "Desenvolvimento de PGRS, PGRSS e PGRCC adaptados às necessidades específicas de cada atividade.",
      },
      {
        title: "Estudos de Impacto Ambiental",
        description: "Elaboração de EIV/RIV, EIA/RIMA e outros estudos de impacto ambiental requeridos por órgãos ambientais.",
      },
      {
        title: "Programas de Gestão Ambiental",
        description: "Desenvolvimento de programas de gerenciamento ambiental conforme ISO 14.001, incluindo programas específicos para recursos hídricos e emissões atmosféricas.",
      },
      {
        title: "Planos de Controle Ambiental",
        description: "Elaboração de PCAs, RAPs e outros documentos técnicos para controle e mitigação de impactos ambientais.",
      }
    ]
  },
  consulting: {
    title: "Acompanhamento e Consultoria",
    description: "Assessoria técnica especializada para questões ambientais, incluindo acompanhamento de projetos, auditorias e elaboração de relatórios técnicos.",
    icon: React.createElement(Users, { className: "h-8 w-8 text-eco-blue-dark" }),
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Acompanhamento de Projetos",
        description: "Acompanhamento técnico de projetos de adequações ambientais, garantindo conformidade com as exigências legais.",
      },
      {
        title: "Elaboração de Relatórios Específicos",
        description: "Elaboração de relatórios para Auto de Infração, Termo de Ajuste de Conduta (TAC) e/ou Notificações ambientais.",
      },
      {
        title: "Inspeções e Auditorias",
        description: "Realização de inspeções ambientais, emissão de relatórios técnicos e auditorias internas para identificar não conformidades.",
      },
      {
        title: "Relatórios de Cumprimento",
        description: "Elaboração de Relatórios de Cumprimento de Condicionantes Ambientais para apresentação aos órgãos fiscalizadores.",
      }
    ]
  },
  training: {
    title: "Treinamentos e Capacitações",
    description: "Programas de treinamento e capacitação para equipes técnicas, visando a implementação de práticas ambientais adequadas e o cumprimento da legislação.",
    icon: React.createElement(TreeDeciduous, { className: "h-8 w-8 text-eco-green" }),
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Treinamentos Presenciais e Remotos",
        description: "Realização de treinamentos e palestras in loco e remotos sobre temas ambientais relevantes para a atividade da empresa.",
      },
      {
        title: "Treinamento em Gerenciamento de Resíduos",
        description: "Treinamento anual em Gerenciamento de Resíduos Sólidos, com emissão de certificação para os participantes.",
      },
      {
        title: "Capacitações Específicas",
        description: "Programas de capacitação adaptados às necessidades específicas da empresa e do setor em que atua.",
      }
    ]
  },
  management: {
    title: "Gestão e Manutenção Ambiental",
    description: "Serviços continuados de gestão ambiental para manutenção da conformidade legal e implementação de melhorias nos processos ambientais da empresa.",
    icon: React.createElement(CloudSun, { className: "h-8 w-8 text-eco-blue" }),
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Renovação de Licenças e Autorizações",
        description: "Gestão do processo de renovação de licenças e autorizações ambientais, garantindo a continuidade das operações.",
      },
      {
        title: "Declarações e Inventários Anuais",
        description: "Elaboração e envio de declarações e inventários ambientais anuais exigidos pelos órgãos reguladores.",
      },
      {
        title: "Defesas Ambientais",
        description: "Elaboração de defesas administrativas em processos ambientais e acompanhamento jurídico especializado.",
      },
      {
        title: "Manutenções Periódicas",
        description: "Serviços de manutenção e atualização periódica de sistemas e documentos ambientais da empresa.",
      }
    ]
  },
  esg: {
    title: "Consultoria ESG",
    description: "Assessoria especializada em critérios ambientais, sociais e de governança para empresas que buscam sustentabilidade, competitividade e acesso a investimentos.",
    icon: React.createElement(Globe, { className: "h-8 w-8 text-eco-accent-teal" }),
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000&h=600",
    services: [
      {
        title: "Diagnóstico e Mapeamento ESG",
        description: "Avaliação completa das práticas ESG atuais, identificação de gaps e oportunidades de melhoria alinhadas aos padrões internacionais.",
      },
      {
        title: "Estratégias e Políticas ESG",
        description: "Desenvolvimento de estratégias ESG customizadas, criação de políticas corporativas e definição de metas e indicadores de desempenho.",
      },
      {
        title: "Relatórios de Sustentabilidade",
        description: "Elaboração de relatórios ESG conforme padrões GRI, SASB, TCFD e outros frameworks reconhecidos internacionalmente.",
      },
      {
        title: "Análise de Riscos ESG",
        description: "Identificação e análise de riscos e oportunidades ESG, desenvolvimento de planos de mitigação e gestão de impactos.",
      },
      {
        title: "Engajamento com Stakeholders",
        description: "Estratégias de comunicação e engajamento com investidores, comunidades, colaboradores e outros públicos de interesse.",
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
        description: "Elaboração de inventários GEE corporativos, cálculo de pegada de carbono e verificação por terceira parte conforme ISO 14064.",
      },
      {
        title: "Planos de Descarbonização",
        description: "Desenvolvimento de estratégias de redução de emissões, definição de metas baseadas na ciência (SBTi) e roadmap de neutralidade carbônica.",
      },
      {
        title: "Análise de Vulnerabilidade Climática",
        description: "Avaliação de riscos físicos e de transição climática, análise de vulnerabilidades e desenvolvimento de planos de adaptação.",
      },
      {
        title: "Projetos de Crédito de Carbono",
        description: "Desenvolvimento e consultoria em projetos de crédito de carbono, desde a concepção até a certificação e comercialização.",
      },
      {
        title: "Economia Circular",
        description: "Implementação de estratégias de economia circular, otimização de recursos e desenvolvimento de modelos de negócio sustentáveis.",
      }
    ]
  }
};
