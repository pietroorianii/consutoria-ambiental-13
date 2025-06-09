
export interface FAQItem {
  question: string;
  answer: string;
  relatedLink?: {
    text: string;
    href: string;
  };
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "consultoria-ambiental",
    title: "Sobre Consultoria Ambiental",
    icon: "help-circle",
    items: [
      {
        question: "O que é consultoria ambiental e por que minha empresa precisa dela?",
        answer: "A consultoria ambiental é um serviço especializado que auxilia empresas a cumprir a legislação ambiental, reduzir impactos ambientais e implementar práticas sustentáveis. É essencial para evitar multas, obter licenças necessárias e melhorar a imagem corporativa junto ao mercado e sociedade."
      },
      {
        question: "Quais são os riscos de não ter consultoria ambiental adequada?",
        answer: "Os principais riscos incluem: multas e penalidades por descumprimento legal, embargo de atividades, danos à reputação empresarial, dificuldades para obter financiamentos, perda de competitividade no mercado e possíveis ações judiciais por danos ambientais."
      },
      {
        question: "Como escolher uma consultoria ambiental confiável?",
        answer: "Verifique a experiência da equipe, certificações técnicas, portfólio de projetos similares, referências de clientes, capacidade de atender prazos e conhecimento atualizado da legislação. A L&P Soluções Ambientais possui mais de 10 anos de experiência e centenas de projetos executados."
      }
    ]
  },
  {
    id: "servicos",
    title: "Nossos Serviços",
    icon: "briefcase",
    items: [
      {
        question: "Quais tipos de licenças ambientais minha atividade necessita?",
        answer: "Depende do tipo, porte e potencial poluidor da sua atividade. Podem ser necessárias Licença Prévia (LP), Licença de Instalação (LI), Licença de Operação (LO), além de autorizações específicas como supressão de vegetação e outorga de água.",
        relatedLink: {
          text: "Saiba mais sobre Licenciamento",
          href: "/service/licensing"
        }
      },
      {
        question: "Como funciona o processo de elaboração de um PGRS?",
        answer: "O Plano de Gerenciamento de Resíduos Sólidos (PGRS) é elaborado através de diagnóstico dos resíduos gerados, classificação conforme NBR 10004, definição de procedimentos de manejo, armazenamento, transporte e destinação final, além de estabelecer metas de redução e reciclagem.",
        relatedLink: {
          text: "Ver detalhes sobre Planos e Relatórios",
          href: "/service/reports"
        }
      },
      {
        question: "Vocês atendem empresas de pequeno porte?",
        answer: "Sim! Atendemos empresas de todos os portes, desde microempresas até grandes corporações. Nossos serviços são personalizados conforme a necessidade e orçamento de cada cliente, sempre mantendo a qualidade técnica."
      },
      {
        question: "Qual a diferença entre monitoramento ambiental e auditoria?",
        answer: "O monitoramento é um acompanhamento contínuo de parâmetros ambientais conforme condicionantes das licenças. A auditoria é uma avaliação pontual e abrangente do cumprimento legal e eficácia dos sistemas de gestão ambiental.",
        relatedLink: {
          text: "Conheça nossos serviços de Monitoramento",
          href: "/service/monitoring"
        }
      }
    ]
  },
  {
    id: "processos-custos",
    title: "Processos e Custos",
    icon: "calculator",
    items: [
      {
        question: "Quanto tempo demora para obter uma licença ambiental?",
        answer: "O prazo varia conforme o tipo de licença, complexidade do empreendimento e órgão licenciador. Em média: Licença Prévia (4-6 meses), Licença de Instalação (4-6 meses), Licença de Operação (4-6 meses). Processos mais complexos podem levar mais tempo."
      },
      {
        question: "Como são calculados os custos dos serviços?",
        answer: "Os custos são calculados com base na complexidade do projeto, tempo estimado de execução, equipe técnica necessária, deslocamentos e custos diretos (análises laboratoriais, taxas de órgãos). Fornecemos orçamentos detalhados e transparentes para cada projeto.",
        relatedLink: {
          text: "Solicite um orçamento",
          href: "/request-quote"
        }
      },
      {
        question: "É possível parcelar os pagamentos?",
        answer: "Sim! Oferecemos opções de parcelamento conforme o cronograma do projeto. Para projetos de longa duração, estabelecemos marcos de pagamento alinhados com as entregas, facilitando o fluxo de caixa do cliente."
      },
      {
        question: "Quais documentos preciso fornecer para iniciar um projeto?",
        answer: "Os documentos variam conforme o serviço, mas geralmente incluem: dados cadastrais da empresa, caracterização da atividade, plantas do empreendimento, licenças existentes e informações sobre processos produtivos. Nossa equipe fornece uma lista específica após a análise inicial."
      }
    ]
  },
  {
    id: "beneficios",
    title: "Benefícios e Resultados",
    icon: "trending-up",
    items: [
      {
        question: "Quais os benefícios de implementar um sistema de gestão ambiental?",
        answer: "Os principais benefícios incluem: redução de custos operacionais, melhoria da eficiência energética, redução de riscos legais, acesso facilitado a financiamentos, valorização da marca, maior competitividade no mercado e atração de talentos e clientes conscientes."
      },
      {
        question: "Como a L&P garante a qualidade e cumprimento de prazos?",
        answer: "Mantemos uma equipe técnica qualificada, processos padronizados, cronogramas detalhados com marcos de controle, comunicação transparente com o cliente e parcerias com laboratórios e fornecedores confiáveis. Oferecemos garantia de qualidade em todos os nossos serviços."
      },
      {
        question: "Vocês oferecem suporte após a entrega do projeto?",
        answer: "Sim! Oferecemos suporte pós-entrega para esclarecimento de dúvidas, acompanhamento de implementação e serviços de manutenção. Também disponibilizamos contratos de gestão ambiental continuada para manter a conformidade legal."
      },
      {
        question: "Posso ter uma estimativa de economia com seus serviços?",
        answer: "Sim! Durante nossa consultoria inicial, realizamos uma análise que pode identificar oportunidades de economia em recursos naturais, energia, gestão de resíduos e prevenção de multas. Muitos clientes recuperam o investimento em consultoria em poucos meses."
      }
    ]
  }
];
