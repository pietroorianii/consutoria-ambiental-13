
import { Factory } from "lucide-react";
import { LegislationCategory } from "./types";

export const industryLegislation: LegislationCategory = {
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
};
