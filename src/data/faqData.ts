
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
    id: "licensing",
    title: "Licenciamento e Operação",
    items: [
      {
        question: "Vou iniciar um novo empreendimento/obra. Do que preciso para estar em conformidade com a lei?",
        answer: "Todo novo empreendimento com potencial de impacto ambiental precisa de uma licença. O primeiro passo é o Licenciamento Ambiental, que pode variar desde uma simples Dispensa (DLAM) até um processo trifásico (LP/LI/LO). Nossa equipe realiza o enquadramento correto e cuida de todo o processo para você, desde a análise de viabilidade até a obtenção da licença final.",
        relatedLink: {
          text: "Saiba mais sobre Licenciamento",
          href: "/services/licensing"
        }
      },
      {
        question: "Minha atividade utiliza água de um poço ou rio. Preciso de alguma autorização especial?",
        answer: "Sim, o uso de recursos hídricos superficiais ou subterrâneos exige uma Outorga de Direito de Uso, emitida pelo IAT no Paraná. Dependendo do volume, pode ser necessário apenas uma Declaração de Uso Insignificante (emissão automática) ou uma Outorga formal. Elaboramos os estudos necessários e conduzimos todo o processo para garantir seu direito de uso da água.",
        relatedLink: {
          text: "Ver detalhes sobre Outorga",
          href: "/service/water_resources"
        }
      },
      {
        question: "Quanto tempo demora para obter uma licença ambiental?",
        answer: "O prazo varia conforme o tipo de licença: **Licenças Simplificadas** podem levar de 15 a 30 dias, **Licenças Prévias** geralmente variam entre 3 a 6 meses, **Licenças de Instalação** podem levar de 2 a 4 meses. Nossa experiência nos permite otimizar processos e antecipar necessidades, agilizando a tramitação."
      },
      {
        question: "Quais atividades precisam obrigatoriamente de licença ambiental?",
        answer: "Atividades com potencial poluidor como indústrias, mineração, agricultura intensiva, construção civil, postos de combustível, aterros sanitários, hospitais e muitas outras. A necessidade é determinada pelo porte e potencial poluidor da atividade. Realizamos uma análise gratuita inicial para determinar exatamente quais licenças sua empresa precisa."
      }
    ]
  },
  {
    id: "problems",
    title: "Problemas e Fiscalizações",
    items: [
      {
        question: "Recebi um Auto de Infração / Notificação do IAT. O que devo fazer?",
        answer: "Aja rapidamente! O primeiro passo é nos contatar para uma análise técnica do auto. Temos prazos legais para defesa (geralmente 15 a 20 dias). Nossa equipe elabora a defesa ou recurso administrativo e, se necessário, negocia um Termo de Ajustamento de Conduta (TAC) para regularizar a situação e evitar multas mais pesadas.",
        relatedLink: {
          text: "Solicite ajuda urgente",
          href: "/contact"
        }
      },
      {
        question: "Meu terreno tem um histórico de contaminação ou preciso recuperar uma área desmatada. Como proceder?",
        answer: "Essa situação exige um plano específico: Recuperação de Áreas Degradadas (PRAD) para vegetação ou Gerenciamento de Áreas Contaminadas (GAC) para solo/água contaminados. Realizamos desde a investigação inicial até a execução do plano de recuperação, resolvendo o passivo ambiental e valorizando seu ativo.",
        relatedLink: {
          text: "Entenda sobre recuperação de áreas",
          href: "/service/degraded_areas"
        }
      },
      {
        question: "O que acontece se eu operar sem licença ambiental?",
        answer: "Operar sem licença é crime ambiental (Lei 9.605/98) e pode resultar em: multas de R$ 500 a R$ 10 milhões, embargo da atividade, responsabilização criminal dos dirigentes e obrigação de reparar danos. A regularização imediata é fundamental para minimizar riscos e custos."
      }
    ]
  },
  {
    id: "costs",
    title: "Custos e Investimentos",
    items: [
      {
        question: "Quanto custam os serviços de consultoria ambiental?",
        answer: "O investimento varia conforme a complexidade: licenças simplificadas podem custar de R$ 3.000 a R$ 15.000, licenças complexas de R$ 15.000 a R$ 80.000, outorgas de R$ 5.000 a R$ 25.000. O importante é ver como investimento preventivo - o custo de uma multa ou embargo sempre supera o investimento em conformidade.",
        relatedLink: {
          text: "Solicitar orçamento personalizado",
          href: "/request-quote"
        }
      },
      {
        question: "Vale a pena investir em consultoria ambiental para uma pequena empresa?",
        answer: "Definitivamente! Pequenas empresas são frequentemente mais vulneráveis a multas e embargos. Uma única autuação pode custar mais que anos de consultoria preventiva. Além disso, a conformidade ambiental pode abrir portas para novos clientes, financiamentos e parcerias que exigem certificações ambientais."
      }
    ]
  },
  {
    id: "specific",
    title: "Setores Específicos",
    items: [
      {
        question: "Sou do agronegócio. Quais são minhas principais obrigações ambientais?",
        answer: "Principais obrigações incluem: **Cadastro Ambiental Rural (CAR)**, **Licenciamento para atividades de alto impacto** (suinocultura, avicultura industrial), **Outorga para irrigação**, **Gestão de defensivos** e embalagens, **Reserva Legal e APP** preservadas. Oferecemos um pacote completo para o setor."
      },
      {
        question: "Trabalho com construção civil. Que licenças preciso?",
        answer: "Construção civil exige: **Licença de Instalação** para a obra, **PGRS** (Plano de Gerenciamento de Resíduos Sólidos), **Outorga** se usar água de poço/rio, possível **Supressão de Vegetação**, **Licença de Operação** para atividades permanentes. Cada projeto tem suas especificidades que analisamos caso a caso."
      },
      {
        question: "Minha indústria gera resíduos perigosos. Como devo proceder?",
        answer: "Resíduos perigosos exigem **PGRS específico**, **Cadastro Técnico Federal (IBAMA)**, **Licenciamento adequado**, **CADRI** (Certificado de Aprovação para Destinação de Resíduos), transporte por empresas credenciadas e **Inventário Nacional de Resíduos Sólidos**. A gestão inadequada pode resultar em crime ambiental.",
        relatedLink: {
          text: "Saiba mais sobre PGRS",
          href: "/services/reports"
        }
      }
    ]
  }
];
