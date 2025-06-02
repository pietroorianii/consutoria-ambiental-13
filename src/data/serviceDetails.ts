
import { Leaf, Beaker, FileText, Users, TreeDeciduous, CloudSun } from "lucide-react";

export interface ServiceStep {
  title: string;
  description: string;
  duration: string;
}

export interface ServiceDetailData {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  whatIs: string;
  benefits: string[];
  steps: ServiceStep[];
  documents: string[];
  timeline: string;
  legalBasis: string[];
  tips: string[];
}

export const serviceDetails: Record<string, ServiceDetailData> = {
  licensing: {
    id: "licensing",
    title: "Licenciamento e Autorizações Ambientais",
    description: "Obtenção de licenças e autorizações ambientais para regularização e operação legal de empreendimentos.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000&h=600",
    whatIs: "O licenciamento ambiental é um procedimento administrativo pelo qual o órgão ambiental competente licencia a localização, instalação, ampliação e operação de empreendimentos e atividades utilizadoras de recursos ambientais consideradas efetiva ou potencialmente poluidoras ou daquelas que, sob qualquer forma, possam causar degradação ambiental.",
    benefits: [
      "Conformidade legal com a legislação ambiental",
      "Segurança jurídica para operação do empreendimento",
      "Acesso a financiamentos e investimentos",
      "Melhoria da imagem corporativa",
      "Redução de riscos de multas e penalidades",
      "Competitividade no mercado"
    ],
    steps: [
      {
        title: "Licença Prévia (LP)",
        description: "Aprovação da localização e concepção do empreendimento, atestando a viabilidade ambiental",
        duration: "4 a 6 meses"
      },
      {
        title: "Licença de Instalação (LI)",
        description: "Autorização para iniciar a construção do empreendimento de acordo com as especificações aprovadas",
        duration: "4 a 6 meses"
      },
      {
        title: "Licença de Operação (LO)",
        description: "Autorização para funcionamento do empreendimento após verificação do cumprimento das condicionantes",
        duration: "4 a 6 meses"
      },
      {
        title: "Renovação da LO",
        description: "Processo de renovação da licença de operação antes do vencimento",
        duration: "3 a 4 meses"
      }
    ],
    documents: [
      "Requerimento padrão",
      "Projeto básico ou executivo",
      "Estudos ambientais (conforme porte e potencial poluidor)",
      "Certidões municipais",
      "Outorga de uso da água (quando aplicável)",
      "Anuência de órgãos específicos",
      "Comprovação de propriedade ou posse do terreno"
    ],
    timeline: "O processo completo de licenciamento pode levar de 8 a 18 meses, dependendo da complexidade do empreendimento e do órgão licenciador.",
    legalBasis: [
      "Lei nº 6.938/1981 - Política Nacional do Meio Ambiente",
      "Resolução CONAMA nº 237/1997",
      "Lei Complementar nº 140/2011",
      "Legislação estadual e municipal específica"
    ],
    tips: [
      "Inicie o processo com antecedência adequada",
      "Mantenha toda documentação organizada e atualizada",
      "Acompanhe os prazos das condicionantes",
      "Considere a contratação de consultoria especializada",
      "Mantenha diálogo aberto com os órgãos ambientais"
    ]
  },
  monitoring: {
    id: "monitoring",
    title: "Monitoramento e Análises Ambientais",
    description: "Acompanhamento sistemático das condições ambientais e cumprimento de condicionantes das licenças.",
    icon: Beaker,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1000&h=600",
    whatIs: "O monitoramento ambiental consiste no acompanhamento sistemático e contínuo das variáveis ambientais, permitindo avaliar a qualidade do meio ambiente e verificar o cumprimento das condicionantes estabelecidas nas licenças ambientais.",
    benefits: [
      "Cumprimento das condicionantes ambientais",
      "Prevenção de impactos ambientais",
      "Identificação precoce de problemas",
      "Subsidio para tomada de decisões",
      "Demonstração de responsabilidade ambiental",
      "Atendimento às exigências legais"
    ],
    steps: [
      {
        title: "Planejamento do Monitoramento",
        description: "Definição dos parâmetros, frequência e pontos de coleta conforme condicionantes",
        duration: "1 a 2 semanas"
      },
      {
        title: "Coleta de Amostras",
        description: "Execução das coletas seguindo protocolos técnicos e normas específicas",
        duration: "1 a 3 dias por campanha"
      },
      {
        title: "Análises Laboratoriais",
        description: "Análises físicas, químicas e biológicas em laboratórios credenciados",
        duration: "15 a 30 dias"
      },
      {
        title: "Elaboração de Relatórios",
        description: "Compilação dos resultados e elaboração de relatórios técnicos",
        duration: "7 a 15 dias"
      }
    ],
    documents: [
      "Plano de monitoramento ambiental",
      "Licença ambiental com condicionantes",
      "Laudos analíticos",
      "Relatórios de monitoramento",
      "Certificados de calibração dos equipamentos",
      "Registros fotográficos",
      "Cadeia de custódia das amostras"
    ],
    timeline: "O monitoramento é contínuo conforme frequência estabelecida nas condicionantes, geralmente mensal, trimestral ou semestral.",
    legalBasis: [
      "Resolução CONAMA nº 357/2005 - Águas",
      "Resolução CONAMA nº 396/2008 - Águas Subterrâneas",
      "Resolução CONAMA nº 491/2018 - Ar",
      "NBR ISO/IEC 17025 - Laboratórios",
      "Condicionantes específicas da licença"
    ],
    tips: [
      "Mantenha cronograma rigoroso de coletas",
      "Use apenas laboratórios credenciados",
      "Documente todos os procedimentos",
      "Monitore tendências dos parâmetros",
      "Mantenha equipamentos calibrados"
    ]
  },
  reports: {
    id: "reports",
    title: "Planos e Relatórios Ambientais",
    description: "Elaboração de documentos técnicos especializados para gestão ambiental e atendimento legal.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000&h=600",
    whatIs: "Os planos e relatórios ambientais são documentos técnicos que estabelecem diretrizes, procedimentos e análises para a gestão adequada dos aspectos ambientais de empreendimentos e atividades.",
    benefits: [
      "Organização da gestão ambiental",
      "Cumprimento de exigências legais",
      "Redução de impactos ambientais",
      "Melhoria da eficiência operacional",
      "Demonstração de compliance",
      "Subsídio para certificações"
    ],
    steps: [
      {
        title: "Diagnóstico Inicial",
        description: "Levantamento das condições atuais e identificação das necessidades",
        duration: "1 a 2 semanas"
      },
      {
        title: "Elaboração do Documento",
        description: "Desenvolvimento do plano ou relatório conforme normas técnicas",
        duration: "2 a 6 semanas"
      },
      {
        title: "Revisão Técnica",
        description: "Verificação da conformidade e adequação às exigências",
        duration: "1 semana"
      },
      {
        title: "Aprovação e Implementação",
        description: "Submissão aos órgãos competentes e início da implementação",
        duration: "2 a 8 semanas"
      }
    ],
    documents: [
      "Levantamento de dados primários",
      "Estudos técnicos específicos",
      "Plantas e desenhos técnicos",
      "Memorial descritivo",
      "Cronograma de implementação",
      "Planilhas de custos",
      "Referências normativas"
    ],
    timeline: "O prazo varia conforme a complexidade: PGRS (2-4 semanas), EIA/RIMA (3-6 meses), PCA (4-8 semanas).",
    legalBasis: [
      "Lei nº 12.305/2010 - Política Nacional de Resíduos Sólidos",
      "Resolução CONAMA nº 01/1986 - EIA/RIMA",
      "Resolução CONAMA nº 237/1997",
      "NBR 10004 - Resíduos Sólidos",
      "Normas técnicas específicas"
    ],
    tips: [
      "Colete dados precisos na fase de diagnóstico",
      "Mantenha documentação atualizada",
      "Considere aspectos práticos de implementação",
      "Envolva as equipes operacionais",
      "Revise periodicamente os documentos"
    ]
  },
  consulting: {
    id: "consulting",
    title: "Acompanhamento e Consultoria Ambiental",
    description: "Assessoria técnica especializada para questões ambientais e conformidade legal.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000&h=600",
    whatIs: "A consultoria ambiental oferece assessoria técnica especializada para auxiliar empresas no cumprimento da legislação ambiental, gestão de riscos e implementação de boas práticas sustentáveis.",
    benefits: [
      "Expertise técnica especializada",
      "Redução de riscos ambientais",
      "Otimização de processos",
      "Conformidade legal garantida",
      "Suporte na tomada de decisões",
      "Acompanhamento contínuo"
    ],
    steps: [
      {
        title: "Diagnóstico Ambiental",
        description: "Avaliação completa da situação ambiental atual da empresa",
        duration: "1 a 2 semanas"
      },
      {
        title: "Plano de Ação",
        description: "Desenvolvimento de estratégias e cronograma de adequações",
        duration: "1 a 2 semanas"
      },
      {
        title: "Implementação",
        description: "Acompanhamento da execução das ações propostas",
        duration: "Conforme cronograma"
      },
      {
        title: "Monitoramento",
        description: "Acompanhamento contínuo dos resultados e ajustes necessários",
        duration: "Processo contínuo"
      }
    ],
    documents: [
      "Relatório de diagnóstico ambiental",
      "Plano de adequação ambiental",
      "Cronograma de implementação",
      "Relatórios de acompanhamento",
      "Registros de não conformidades",
      "Propostas de melhorias",
      "Documentação legal atualizada"
    ],
    timeline: "O acompanhamento pode ser pontual (2-4 semanas) ou contínuo conforme necessidade da empresa.",
    legalBasis: [
      "Legislação ambiental federal, estadual e municipal",
      "Resoluções CONAMA aplicáveis",
      "Normas técnicas NBR",
      "Condicionantes de licenças ambientais",
      "Termos de ajuste de conduta"
    ],
    tips: [
      "Mantenha comunicação clara sobre objetivos",
      "Documente todas as ações realizadas",
      "Estabeleça indicadores de desempenho",
      "Promova capacitação das equipes",
      "Revise estratégias periodicamente"
    ]
  },
  training: {
    id: "training",
    title: "Treinamentos e Capacitações Ambientais",
    description: "Programas de educação ambiental e capacitação técnica para equipes.",
    icon: TreeDeciduous,
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=1000&h=600",
    whatIs: "Os treinamentos ambientais visam capacitar profissionais e equipes para o correto manejo de aspectos ambientais, cumprimento da legislação e implementação de práticas sustentáveis no ambiente de trabalho.",
    benefits: [
      "Capacitação de equipes",
      "Redução de riscos operacionais",
      "Melhoria da conscientização ambiental",
      "Cumprimento de exigências legais",
      "Certificação profissional",
      "Cultura organizacional sustentável"
    ],
    steps: [
      {
        title: "Levantamento de Necessidades",
        description: "Identificação das demandas de capacitação específicas da empresa",
        duration: "3 a 5 dias"
      },
      {
        title: "Desenvolvimento do Programa",
        description: "Elaboração do conteúdo programático e material didático",
        duration: "1 a 2 semanas"
      },
      {
        title: "Execução do Treinamento",
        description: "Realização das atividades de capacitação presencial ou remota",
        duration: "4 a 16 horas"
      },
      {
        title: "Avaliação e Certificação",
        description: "Aplicação de avaliações e emissão de certificados",
        duration: "1 a 2 dias"
      }
    ],
    documents: [
      "Programa de treinamento detalhado",
      "Material didático especializado",
      "Lista de presença",
      "Avaliações de aprendizagem",
      "Certificados de participação",
      "Relatório de execução",
      "Registros fotográficos"
    ],
    timeline: "Treinamentos podem ser executados em 1 dia (8h) até programas de 1 semana, conforme complexidade.",
    legalBasis: [
      "NR-25 - Resíduos Industriais",
      "Lei nº 12.305/2010 - PNRS",
      "Resolução CONAMA aplicáveis",
      "Normas técnicas específicas",
      "Condicionantes de licenças"
    ],
    tips: [
      "Adapte o conteúdo ao público-alvo",
      "Use exemplos práticos do dia a dia",
      "Promova participação ativa dos colaboradores",
      "Forneça material de consulta",
      "Realize treinamentos de reciclagem"
    ]
  },
  management: {
    id: "management",
    title: "Gestão e Manutenção Ambiental",
    description: "Serviços continuados para manutenção da conformidade ambiental.",
    icon: CloudSun,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000&h=600",
    whatIs: "A gestão ambiental continuada envolve o acompanhamento sistemático das obrigações ambientais, renovação de licenças, atualização de documentos e manutenção da conformidade legal ao longo do tempo.",
    benefits: [
      "Conformidade legal permanente",
      "Redução de custos operacionais",
      "Prevenção de penalidades",
      "Otimização de processos",
      "Melhoria contínua",
      "Tranquilidade operacional"
    ],
    steps: [
      {
        title: "Diagnóstico da Situação",
        description: "Avaliação do status atual das obrigações ambientais",
        duration: "1 semana"
      },
      {
        title: "Planejamento Anual",
        description: "Elaboração de cronograma de atividades e renovações",
        duration: "1 semana"
      },
      {
        title: "Execução das Atividades",
        description: "Cumprimento das obrigações conforme cronograma estabelecido",
        duration: "Processo contínuo"
      },
      {
        title: "Monitoramento e Ajustes",
        description: "Acompanhamento dos resultados e adequações necessárias",
        duration: "Mensal"
      }
    ],
    documents: [
      "Calendário ambiental",
      "Licenças e autorizações vigentes",
      "Relatórios de acompanhamento",
      "Declarações anuais",
      "Registros de conformidade",
      "Cronograma de renovações",
      "Documentação atualizada"
    ],
    timeline: "Serviço contínuo com atividades programadas mensalmente e renovações conforme vencimentos.",
    legalBasis: [
      "Legislação ambiental aplicável",
      "Condicionantes das licenças",
      "Resoluções dos órgãos ambientais",
      "Normas técnicas atualizadas",
      "Compromissos assumidos"
    ],
    tips: [
      "Mantenha calendário ambiental atualizado",
      "Antecipe-se aos vencimentos",
      "Monitore mudanças na legislação",
      "Documente todas as atividades",
      "Mantenha comunicação com órgãos ambientais"
    ]
  }
};
