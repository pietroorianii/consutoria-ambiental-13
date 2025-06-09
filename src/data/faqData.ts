
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
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "general",
    title: "Informações Gerais",
    items: [
      {
        question: "O que exatamente faz uma consultoria ambiental?",
        answer: "Uma consultoria ambiental, como a L&P Soluções Ambientais, auxilia empresas e organizações a gerenciar suas responsabilidades e impactos ambientais. Isso envolve desde a obtenção de licenças obrigatórias, desenvolvimento de estudos de impacto, monitoramento da qualidade do ar e da água, até a implementação de práticas de gestão de resíduos, treinamentos e estratégias de sustentabilidade. Nosso objetivo é garantir que nossos clientes operem em conformidade com a legislação, minimizem riscos e promovam o desenvolvimento sustentável."
      },
      {
        question: "Por que minha empresa precisa de uma consultoria ambiental?",
        answer: "Há várias razões importantes: **Conformidade Legal** - A legislação ambiental é complexa e está em constante mudança. Ajudamos sua empresa a navegar por essas exigências, evitando multas, embargos e outras penalidades. **Redução de Riscos e Custos** - Identificamos riscos ambientais que podem levar a passivos financeiros e danos à reputação, propondo soluções que otimizam recursos e reduzem custos. **Sustentabilidade e Imagem Corporativa** - Demonstramos o compromisso da sua empresa com a sustentabilidade, melhorando sua imagem perante clientes, investidores e sociedade. **Acesso a Mercados** - Muitas instituições financeiras e mercados exigem comprovação de boas práticas ambientais."
      },
      {
        question: "Como escolher a consultoria ambiental certa para minha empresa?",
        answer: "Considere os seguintes pontos essenciais: **Experiência e Especialização** - Verifique se a consultoria tem experiência comprovada no seu setor e nos serviços que você necessita. **Equipe Técnica Qualificada** - Avalie a qualificação e multidisciplinaridade da equipe. **Reputação e Referências** - Busque por depoimentos de clientes e estudos de caso. **Abordagem e Metodologia** - Entenda como a consultoria trabalha e se sua abordagem se alinha com as necessidades da sua empresa. **Comunicação e Transparência** - Escolha uma empresa que demonstre clareza na comunicação e transparência nos processos."
      }
    ]
  },
  {
    id: "services",
    title: "Serviços e Processos",
    items: [
      {
        question: "Quais tipos de serviços vocês oferecem?",
        answer: "Oferecemos uma gama completa de soluções ambientais: **Licenciamento e Autorizações Ambientais** (LP, LI, LO, etc.), **Monitoramento e Análises Ambientais** (água, solo, ar, efluentes), **Elaboração de Planos e Relatórios Técnicos** (PGRS, EIA/RIMA, PCA, etc.), **Consultoria Estratégica e Acompanhamento de Projetos**, **Treinamentos e Capacitações Ambientais**, **Gestão e Manutenção de Requisitos Ambientais**. Cada serviço é personalizado conforme as necessidades específicas do seu empreendimento.",
        relatedLink: {
          text: "Ver todos os serviços",
          href: "/services"
        }
      },
      {
        question: "Como funciona o processo de contratação e desenvolvimento de um projeto?",
        answer: "Nosso processo é colaborativo e transparente, seguindo estas etapas: **1. Contato Inicial e Diagnóstico** - Entendemos suas necessidades através do formulário de solicitação de orçamento ou contato direto, realizando um diagnóstico preliminar. **2. Proposta Personalizada** - Elaboramos uma proposta técnica e comercial detalhada, com escopo, cronograma e custos. **3. Planejamento** - Após aprovação, definimos um plano de trabalho detalhado. **4. Execução** - Nossa equipe multidisciplinar executa os serviços, mantendo comunicação constante. **5. Entrega e Acompanhamento** - Entregamos os relatórios, planos ou licenças, oferecendo suporte para implementação conforme necessário."
      },
      {
        question: "Quais são os benefícios tangíveis de investir em consultoria ambiental?",
        answer: "Além da conformidade legal, os benefícios incluem: **Prevenção de multas e sanções ambientais**, **Otimização do uso de recursos naturais** (água, energia), levando à redução de custos, **Melhora da reputação e valor da marca**, **Aumento da competitividade** e acesso a novos mercados, **Melhoria do relacionamento com stakeholders** (comunidade, órgãos ambientais, investidores), **Identificação de oportunidades de inovação** e processos mais sustentáveis. O investimento em consultoria ambiental frequentemente se paga através da economia de recursos e prevenção de custos regulatórios."
      }
    ]
  },
  {
    id: "costs",
    title: "Custos e Investimentos",
    items: [
      {
        question: "Quanto custam os serviços de consultoria ambiental?",
        answer: "O custo varia significativamente dependendo da complexidade do projeto, do tipo de serviço, do porte do empreendimento e das especificidades locais. Fatores como urgência, localização, complexidade técnica e requisitos específicos influenciam o investimento. Encorajamos você a solicitar um orçamento personalizado para que possamos entender suas necessidades e fornecer uma estimativa precisa. Nosso compromisso é oferecer soluções com excelente custo-benefício, sempre transparentes sobre os custos envolvidos.",
        relatedLink: {
          text: "Solicitar orçamento",
          href: "/request-quote"
        }
      }
    ]
  },
  {
    id: "licensing",
    title: "Licenciamento Ambiental",
    items: [
      {
        question: "Quanto tempo leva para obter uma licença ambiental?",
        answer: "O prazo varia conforme o tipo de licença e complexidade do projeto. **Licenças Simplificadas** podem levar de 15 a 30 dias, **Licenças Prévias** geralmente variam entre 3 a 6 meses, **Licenças de Instalação** podem levar de 2 a 4 meses, e **Licenças de Operação** normalmente de 2 a 3 meses. Fatores como qualidade da documentação, necessidade de estudos complementares, consultas públicas e especificidades do órgão ambiental podem influenciar esses prazos. Nossa experiência nos permite otimizar processos e antecipar necessidades, agilizando a tramitação."
      },
      {
        question: "Minha empresa precisa de licença ambiental para funcionar?",
        answer: "A necessidade de licença ambiental depende do tipo de atividade e seu potencial poluidor. **Atividades de alto impacto** (indústrias, mineração, grandes empreendimentos) geralmente precisam de licenças específicas. **Atividades de médio impacto** podem necessitar de licenças simplificadas. **Atividades de baixo impacto** podem precisar apenas de declarações ou cadastros. Realizamos uma análise gratuita inicial para determinar exatamente quais licenças ou autorizações sua empresa precisa, baseando-nos na legislação aplicável e nas características específicas do seu empreendimento."
      }
    ]
  },
  {
    id: "compliance",
    title: "Conformidade e Problemas",
    items: [
      {
        question: "O que acontece se minha empresa for autuada por questões ambientais?",
        answer: "Em caso de autuação, é fundamental agir rapidamente. **Primeiros passos**: Analisar o auto de infração, identificar as não conformidades e avaliar prazos para defesa. **Nossa atuação**: Elaboramos defesas técnicas e administrativas, orientamos sobre medidas corretivas necessárias, acompanhamos processos administrativos e, quando necessário, buscamos acordos ou termos de ajustamento de conduta. **Prevenção**: O mais importante é a prevenção através de conformidade legal adequada. Oferecemos auditorias preventivas para identificar e corrigir não conformidades antes que se tornem problemas.",
        relatedLink: {
          text: "Fale conosco urgentemente",
          href: "/contact"
        }
      }
    ]
  }
];
