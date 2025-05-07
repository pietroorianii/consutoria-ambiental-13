
import { Building2 } from "lucide-react";
import { LegislationCategory } from "./types";

export const constructionLegislation: LegislationCategory = {
  title: "Construção Civil",
  description: "Normas e leis ambientais específicas para o setor da construção civil, desde o licenciamento até a gestão de resíduos.",
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800&h=500",
  icon: Building2,
  items: [
    "Licenciamento para obras e empreendimentos",
    "Gestão de resíduos da construção civil",
    "Normas para empreendimentos imobiliários",
    "Infraestrutura e saneamento"
  ],
  link: "/legislation/construction",
  subcategories: [
    {
      title: "Licenciamento para Obras e Empreendimentos",
      description: "Leis que regulam o licenciamento ambiental para construções e empreendimentos imobiliários.",
      items: [
        {
          title: "Resolução SEDEST n° 30/2022",
          description: "Estabelece critérios e procedimentos para o licenciamento ambiental de empreendimentos imobiliários urbanos.",
          link: "https://www.legislation.gov.br/sedest-30-2022"
        },
        {
          title: "Resolução SEMA n° 31/98",
          description: "Dispõe sobre o licenciamento ambiental geral, estabelecendo condições e critérios para atividades poluidoras.",
          link: "https://www.legislation.gov.br/sema-31-98"
        },
        {
          title: "Resolução SEMA n° 051/2009",
          description: "Dispensa de licenciamento e/ou autorização ambiental estadual para empreendimentos de pequeno porte e baixo impacto ambiental.",
          link: "https://www.legislation.gov.br/sema-051-2009"
        },
        {
          title: "Resolução CEMA n° 107/2020",
          description: "Estabelece critérios e procedimentos para licenciamento ambiental de atividades poluidoras, degradadoras e/ou modificadoras do meio ambiente.",
          link: "https://www.legislation.gov.br/cema-107-2020"
        }
      ]
    },
    {
      title: "Gestão de Resíduos da Construção Civil",
      description: "Leis relacionadas ao gerenciamento de resíduos gerados por atividades de construção.",
      items: [
        {
          title: "Resolução CONAMA n° 307/2002",
          description: "Estabelece diretrizes, critérios e procedimentos para a gestão dos resíduos da construção civil.",
          link: "https://www.legislation.gov.br/conama-307-2002"
        },
        {
          title: "Portaria IAP n° 212/2019",
          description: "Estabelece procedimentos e critérios para exigência e emissão de autorizações ambientais para as atividades de gerenciamento de resíduos sólidos.",
          link: "https://www.legislation.gov.br/iap-212-2019"
        }
      ]
    },
    {
      title: "Normas para Empreendimentos Imobiliários",
      description: "Leis específicas para licenciamento e operação de empreendimentos imobiliários.",
      items: [
        {
          title: "Resolução SEDEST n° 30/2022",
          description: "Estabelece critérios e procedimentos para o licenciamento ambiental de empreendimentos imobiliários urbanos.",
          link: "https://www.legislation.gov.br/sedest-30-2022"
        },
        {
          title: "Decreto-Lei n° 58/1937",
          description: "Dispõe sobre o loteamento e a venda de terrenos para pagamento em prestações.",
          link: "https://www.legislation.gov.br/decreto-lei-58-1937"
        },
        {
          title: "Decreto-Lei n° 271/1967",
          description: "Dispõe sobre loteamento urbano, responsabilidade do loteador, concessão de uso e espaço aéreo.",
          link: "https://www.legislation.gov.br/decreto-lei-271-1967"
        },
        {
          title: "Lei n° 6.766/1979",
          description: "Dispõe sobre o parcelamento do solo urbano e dá outras providências.",
          link: "https://www.legislation.gov.br/lei-6766-1979"
        }
      ]
    },
    {
      title: "Infraestrutura e Saneamento",
      description: "Leis relacionadas a obras de infraestrutura, como saneamento básico e sistemas de esgoto.",
      items: [
        {
          title: "Resolução SEMA n° 21/2009",
          description: "Dispõe sobre licenciamento ambiental, estabelece condições e padrões ambientais para empreendimentos de saneamento.",
          link: "https://www.legislation.gov.br/sema-21-2009"
        },
        {
          title: "Resolução SEMA n° 53/2009",
          description: "Altera a Resolução n° 21/2009, que dispõe sobre licenciamento para empreendimentos de saneamento.",
          link: "https://www.legislation.gov.br/sema-53-2009"
        },
        {
          title: "Resolução CONAMA n° 377/2006",
          description: "Dispõe sobre licenciamento ambiental simplificado de sistemas de esgotamento sanitário.",
          link: "https://www.legislation.gov.br/conama-377-2006"
        },
        {
          title: "Lei Federal n° 11445/2007",
          description: "Estabelece diretrizes nacionais para o saneamento básico e para a política federal de saneamento básico.",
          link: "https://www.legislation.gov.br/lei-11445-2007"
        }
      ]
    }
  ]
};
