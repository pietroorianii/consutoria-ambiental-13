
import { Factory, Building2, Leaf, Droplets, LucideIcon, FileText, Gavel, Scale, Info, Link } from "lucide-react";
import React from "react";

export interface LegislationItem {
  title: string;
  description: string;
  link: string;
}

export interface LegislationSubcategory {
  title: string;
  description: string;
  items: LegislationItem[];
}

export interface LegislationCategory {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  items: string[];
  link: string;
  subcategories?: LegislationSubcategory[];
}

export const legislationCategories: LegislationCategory[] = [
  {
    title: "Indústrias",
    description: "Legislações ambientais aplicáveis ao setor industrial, incluindo normas federais, estaduais e municipais.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    icon: Factory,
    items: [
      "Licenciamento ambiental para indústrias",
      "Gerenciamento de resíduos industriais",
      "Controle de emissões atmosféricas",
      "Áreas contaminadas e remediação",
      "Energia e biogás",
      "Transporte e logística"
    ],
    link: "/legislation/industry",
    subcategories: [
      {
        title: "Licenciamento Ambiental de Atividades Industriais",
        description: "Normas e procedimentos para o licenciamento ambiental de atividades industriais, critérios técnicos e requisitos legais.",
        items: [
          {
            title: "Resolução CEMA nº 107/2020",
            description: "Principal norma sobre licenciamento ambiental no Paraná, estabelecendo critérios e procedimentos para atividades poluidoras, degradadoras e/ou modificadoras do meio ambiente, com anexos detalhando modelos, prazos e diretrizes.",
            link: "https://www.legisweb.com.br/legislacao/?id=395556"
          },
          {
            title: "Resolução CEMA nº 70/2009",
            description: "Critérios para licenciamento ambiental de empreendimentos industriais, complementada pela CEMA 107/2020.",
            link: "https://www.legisweb.com.br/legislacao/?id=145599"
          },
          {
            title: "Resolução CEMA nº 72/2009",
            description: "Complementa critérios e procedimentos para licenciamento industrial, alinhada à CEMA 107/2020.",
            link: "https://www.legisweb.com.br/legislacao/?id=145601"
          },
          {
            title: "Resolução SEMA nº 31/1998",
            description: "Licenciamento ambiental geral no Paraná, base histórica atualizada pela CEMA 107/2020.",
            link: "https://www.legisweb.com.br/legislacao/?id=145197"
          },
          {
            title: "Resolução SEMA nº 006/2019",
            description: "Certidão de renovação de licenças ambientais (CRL).",
            link: "https://www.legisweb.com.br/legislacao/?id=373598"
          },
          {
            title: "Resolução SEDEST nº 003/2020",
            description: "Licenciamento de postos de combustíveis, bases de distribuição e tanques até 15m³.",
            link: "https://www.legisweb.com.br/legislacao/?id=388791"
          },
          {
            title: "Resolução SEMA nº 36/2008",
            description: "Licenciamento de fundição de chumbo.",
            link: "https://www.legisweb.com.br/legislacao/?id=145166"
          }
        ]
      },
      {
        title: "Gerenciamento de Resíduos Sólidos e Perigosos",
        description: "Legislação aplicável ao gerenciamento de resíduos sólidos industriais, incluindo coleta, transporte, tratamento e disposição final.",
        items: [
          {
            title: "Lei Estadual nº 12493/1999",
            description: "Princípios e normas para resíduos sólidos no Paraná.",
            link: "https://www.legisweb.com.br/legislacao/?id=241580"
          },
          {
            title: "Decreto Estadual nº 6674/2002",
            description: "Regulamento da Lei nº 12493/1999, incluindo obrigatoriedade de inventário.",
            link: "https://www.legisweb.com.br/legislacao/?id=145048"
          },
          {
            title: "Lei Estadual nº 20607/2021",
            description: "Plano Estadual de Resíduos Sólidos.",
            link: "https://www.legisweb.com.br/legislacao/?id=417226"
          },
          {
            title: "Lei Estadual nº 21052/2022",
            description: "Diretrizes para aterros sanitários e industriais.",
            link: "https://www.legisweb.com.br/legislacao/?id=439389"
          },
          {
            title: "Lei nº 12305/2010",
            description: "Política Nacional de Resíduos Sólidos.",
            link: "https://www.legisweb.com.br/legislacao/?id=96832"
          },
          {
            title: "Resolução CONAMA nº 313/2002",
            description: "Inventário Nacional de Resíduos Sólidos Industriais.",
            link: "https://www.legisweb.com.br/legislacao/?id=97719"
          }
        ]
      },
      {
        title: "Emissões Atmosféricas e Ruídos",
        description: "Normas para o controle de emissões atmosféricas e poluição sonora em ambientes industriais.",
        items: [
          {
            title: "Resolução SEDEST nº 40/2023",
            description: "Registro Público Estadual de Emissões de Gases de Efeito Estufa.",
            link: "https://www.legisweb.com.br/legislacao/?id=498831"
          },
          {
            title: "Resolução SEMA nº 16/2014",
            description: "Controle da qualidade do ar.",
            link: "https://www.legisweb.com.br/legislacao/?id=269888"
          },
          {
            title: "Resolução SEMA nº 24/2019",
            description: "Controle de emissões atmosféricas em atividades agrícolas.",
            link: "https://www.legisweb.com.br/legislacao/?id=377126"
          },
          {
            title: "Lei Estadual nº 13806/2002",
            description: "Controle da poluição atmosférica.",
            link: "https://www.legisweb.com.br/legislacao/?id=144806"
          },
          {
            title: "Portaria IAP nº 001/2008",
            description: "Relatórios de automonitoramento de emissões atmosféricas.",
            link: "https://www.legisweb.com.br/legislacao/?id=145241"
          },
          {
            title: "Resolução CONAMA nº 001/1990",
            description: "Padrões de emissão de ruídos.",
            link: "https://www.legisweb.com.br/legislacao/?id=95477"
          }
        ]
      },
      {
        title: "Transporte e Logística",
        description: "Regulamentações para o transporte de produtos, incluindo perigosos, e requisitos logísticos para indústrias.",
        items: [
          {
            title: "Portaria IAP nº 120/2007",
            description: "Transporte e armazenamento de produtos florestais nativos.",
            link: "https://www.legisweb.com.br/legislacao/?id=145273"
          },
          {
            title: "Informação Técnica IAP nº 06/2015",
            description: "Licenciamento de empresas transportadoras.",
            link: "https://www.legisweb.com.br/legislacao/?id=280645"
          },
          {
            title: "Portaria IAT nº 224/2007",
            description: "Autorização ambiental para transporte de resíduos.",
            link: "https://www.legisweb.com.br/legislacao/?id=145333"
          },
          {
            title: "Decreto nº 96044/1988",
            description: "Transporte rodoviário de produtos perigosos.",
            link: "https://www.legisweb.com.br/legislacao/?id=127399"
          },
          {
            title: "Decreto nº 98973/1990",
            description: "Transporte ferroviário de produtos perigosos.",
            link: "https://www.legisweb.com.br/legislacao/?id=125510"
          }
        ]
      },
      {
        title: "Energia e Biogás",
        description: "Legislação específica para geração de energia, incluindo fontes alternativas e biogás em ambientes industriais.",
        items: [
          {
            title: "Resolução SEDEST nº 07/2021",
            description: "Licenciamento de energia eólica.",
            link: "https://www.legisweb.com.br/legislacao/?id=412548"
          },
          {
            title: "Resolução SEDEST nº 08/2021",
            description: "Licenciamento de biodigestores com aproveitamento de biogás.",
            link: "https://www.legisweb.com.br/legislacao/?id=412560"
          },
          {
            title: "Resolução SEDEST nº 09/2021",
            description: "Licenciamento de energia hidráulica.",
            link: "https://www.legisweb.com.br/legislacao/?id=412558"
          },
          {
            title: "Resolução SEDEST nº 10/2021",
            description: "Licenciamento de cogeração de energia.",
            link: "https://www.legisweb.com.br/legislacao/?id=412559"
          },
          {
            title: "Resolução SEDEST nº 11/2021",
            description: "Licenciamento de energia solar.",
            link: "https://www.legisweb.com.br/legislacao/?id=412561"
          }
        ]
      },
      {
        title: "Áreas Contaminadas",
        description: "Normas para identificação, avaliação e remediação de áreas contaminadas por atividades industriais.",
        items: [
          {
            title: "Resolução CEMA nº 129/2023",
            description: "Proteção do solo e águas subterrâneas e gerenciamento de áreas contaminadas.",
            link: "https://www.legisweb.com.br/legislacao/?id=494822"
          }
        ]
      }
    ]
  },
  {
    title: "Construção Civil",
    description: "Normas e leis ambientais específicas para o setor da construção civil, desde o licenciamento até a gestão de resíduos.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800&h=500",
    icon: Building2,
    items: [
      "Gestão de resíduos da construção civil",
      "Avaliação de impactos ambientais",
      "Licenciamento de obras",
      "Normas da ABNT para construção sustentável"
    ],
    link: "/legislation/construction"
  },
  {
    title: "Agricultura",
    description: "Legislações aplicáveis ao setor agrícola, incluindo normas sobre uso do solo, recursos hídricos e agrotóxicos.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800&h=500",
    icon: Leaf,
    items: [
      "Código Florestal",
      "Legislação de agrotóxicos",
      "Outorga para uso de recursos hídricos",
      "Área de Preservação Permanente e Reserva Legal"
    ],
    link: "/legislation/agriculture",
    subcategories: [
      {
        title: "Uso de Agrotóxicos e Fertilizantes",
        description: "Leis que regulam o uso, comercialização e destinação de agrotóxicos e fertilizantes.",
        items: [
          {
            title: "PORTARIA CONJUNTA IAT/ADAPAR Nº 02/2023",
            description: "Estabelece a tipologia de embalagens de agrotóxicos e procedimentos para descarte correto.",
            link: "#"
          },
          {
            title: "PORTARIA IAT Nº 250 DE 19/05/2023",
            description: "Dispõe sobre sacos de resgate para agrotóxicos e estabelece normas para sua utilização.",
            link: "#"
          },
          {
            title: "PORTARIA IAT Nº 116, DE 10 DE MARÇO DE 2023",
            description: "Define infrações e multas para descumprimento das normas relativas a embalagens de agrotóxicos.",
            link: "#"
          },
          {
            title: "Lei Federal n° 7802/1989",
            description: "Lei nacional de agrotóxicos que dispõe sobre pesquisa, experimentação, produção, embalagem, rotulagem, transporte, armazenamento, comercialização, propaganda, utilização, importação, exportação, destino final dos resíduos e embalagens.",
            link: "http://www.planalto.gov.br/ccivil_03/leis/l7802.htm"
          },
          {
            title: "Lei Estadual n° 7827/1983",
            description: "Regulamenta a distribuição e comercialização de agrotóxicos no estado do Paraná.",
            link: "#"
          },
          {
            title: "Decreto Estadual n° 3876/1984",
            description: "Regulamenta a Lei Estadual n° 7827/1983 sobre distribuição e comercialização de agrotóxicos.",
            link: "#"
          },
          {
            title: "Resolução Conjunta IAT/SEDEST nº 008/2022",
            description: "Estabelece procedimentos para devolução de embalagens de agrotóxicos.",
            link: "#"
          },
          {
            title: "Lei n° 6894/80",
            description: "Dispõe sobre inspeção e fiscalização da produção e comércio de fertilizantes.",
            link: "http://www.planalto.gov.br/ccivil_03/leis/1980-1988/l6894.htm"
          },
          {
            title: "Decreto n° 4954/2004",
            description: "Regulamenta a Lei n° 6894/80 sobre inspeção e fiscalização de fertilizantes.",
            link: "http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/decreto/d4954.htm"
          }
        ]
      },
      {
        title: "Manejo Florestal e Reposição Florestal",
        description: "Leis relacionadas ao manejo de florestas, corte de vegetação e reposição florestal.",
        items: [
          {
            title: "Portaria IAP n° 108/2014 (Revogada)",
            description: "Dispunha sobre aproveitamento de material lenhoso (revogada pela Portaria IAT nº 331/2021).",
            link: "#"
          },
          {
            title: "Portaria IAT n° 331/2021",
            description: "Estabelece critérios para aproveitamento de material lenhoso.",
            link: "#"
          },
          {
            title: "Resolução IBAMA/SEMA/IAP n° 01/2007",
            description: "Define normas e procedimentos para manejo da bracatinga no estado do Paraná.",
            link: "#"
          },
          {
            title: "Portaria IAP n° 198/2017",
            description: "Estabelece procedimentos para autorização de corte da espécie bracatinga.",
            link: "#"
          },
          {
            title: "Portaria IAP n° 256/2011",
            description: "Estabelece procedimentos para autorização de corte de espécies nativas plantadas.",
            link: "#"
          },
          {
            title: "Lei Federal n° 12651/2012",
            description: "Código Florestal Brasileiro, que estabelece normas gerais para proteção da vegetação nativa.",
            link: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm"
          },
          {
            title: "Lei Federal n° 11428/2006",
            description: "Lei da Mata Atlântica, que dispõe sobre utilização e proteção da vegetação nativa do Bioma Mata Atlântica.",
            link: "http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11428.htm"
          },
          {
            title: "Resolução CONAMA n° 002/1994",
            description: "Define formações vegetais primárias e estágios sucessionais de vegetação secundária.",
            link: "http://www.iap.pr.gov.br/arquivos/File/Legislacao_ambiental/Legislacao_federal/Resolucoes_CONAMA/RESOLUCAO_CONAMA_002_1994.pdf"
          },
          {
            title: "Portaria IAP n° 193/2006",
            description: "Estabelece procedimentos para autorização de corte de vegetação nativa.",
            link: "#"
          },
          {
            title: "Decreto n° 1940/1996",
            description: "Institui e regulamenta o cadastro de consumidores de matéria-prima florestal.",
            link: "#"
          }
        ]
      },
      {
        title: "Conservação do Solo e Recursos Naturais",
        description: "Leis focadas na conservação da biodiversidade, áreas de preservação e restauração ecológica.",
        items: [
          {
            title: "PORTARIA IAT Nº 151, DE 02 DE MAIO DE 2024",
            description: "Estabelece e regulamenta a Plataforma AECR (Áreas Estratégicas para Conservação e Recuperação).",
            link: "#"
          },
          {
            title: "Resolução Conjunta SEMA/IAP 005/2009",
            description: "Estabelece critérios para mapeamento de áreas estratégicas para conservação.",
            link: "#"
          },
          {
            title: "Lei Federal n° 12651/2012",
            description: "Código Florestal Brasileiro, com definições sobre APPs e Reserva Legal.",
            link: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm"
          },
          {
            title: "Decreto Federal n° 7830/2012",
            description: "Dispõe sobre o Cadastro Ambiental Rural (CAR) e programas de regularização ambiental.",
            link: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/decreto/d7830.htm"
          },
          {
            title: "Lei Estadual n° 18295/2014",
            description: "Institui o Programa de Regularização Ambiental (PRA) no estado do Paraná.",
            link: "#"
          },
          {
            title: "Decreto Estadual n° 11515/2018",
            description: "Regulamenta o Programa de Regularização Ambiental (PRA) no estado do Paraná.",
            link: "#"
          },
          {
            title: "Portaria Instituto Água e Terra n° 170/2020",
            description: "Estabelece diretrizes para elaboração de Projetos de Recuperação de Áreas Degradadas (PRAD).",
            link: "#"
          },
          {
            title: "Instrução Normativa Instituto Água e Terra n° 01/2020",
            description: "Regulamenta os procedimentos para compensação de reserva legal.",
            link: "#"
          },
          {
            title: "Instrução Normativa Instituto Água e Terra n° 03/2020",
            description: "Estabelece critérios para restauração de áreas de reserva legal e áreas de preservação permanente.",
            link: "#"
          }
        ]
      },
      {
        title: "Atividades Pecuárias",
        description: "Leis específicas para licenciamento e manejo de atividades como avicultura, bovinocultura e suinocultura.",
        items: [
          {
            title: "Resolução SEDEST n° 16/2020",
            description: "Estabelece critérios e procedimentos para licenciamento ambiental da avicultura.",
            link: "#"
          },
          {
            title: "Resolução SEDEST n° 55/2019",
            description: "Estabelece critérios e procedimentos para licenciamento ambiental da bovinocultura.",
            link: "#"
          },
          {
            title: "Resolução SEDEST n° 17/2020",
            description: "Altera parâmetros de porte para licenciamento da bovinocultura.",
            link: "#"
          },
          {
            title: "Resolução Sedest n° 15/2020",
            description: "Estabelece critérios e procedimentos para licenciamento ambiental da suinocultura.",
            link: "#"
          },
          {
            title: "Instrução Normativa IAP/DIRAM n° 105006/2009",
            description: "Estabelece critérios e procedimentos para gestão ambiental da suinocultura.",
            link: "#"
          }
        ]
      }
    ]
  },
  {
    title: "Recursos Hídricos",
    description: "Normas e regulamentações para gestão, uso e preservação dos recursos hídricos, incluindo outorgas e enquadramento.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800&h=500",
    icon: Droplets,
    items: [
      "Política Nacional de Recursos Hídricos",
      "Classificação de corpos d'água",
      "Padrões de lançamento de efluentes",
      "Outorga de direito de uso da água"
    ],
    link: "/legislation/water"
  }
];
