
import { Droplets } from "lucide-react";
import { LegislationCategory } from "./types";

export const waterLegislation: LegislationCategory = {
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
  link: "/legislation/water",
  subcategories: [
    {
      title: "Outorgas e Uso da Água",
      description: "Leis que regulam a concessão de outorgas para uso de recursos hídricos.",
      items: [
        {
          title: "Lei n° 9.433/1997",
          description: "Institui a Política Nacional de Recursos Hídricos e cria o Sistema Nacional de Gerenciamento de Recursos Hídricos.",
          link: "https://www.legislation.gov.br/lei-9433-1997"
        },
        {
          title: "Portaria IAT n° 125/2022",
          description: "Estabelece o Manual Técnico de Outorgas para uso dos recursos hídricos.",
          link: "https://www.legislation.gov.br/iat-125-2022"
        },
        {
          title: "Resolução SEDEST n° 032/2022",
          description: "Dispõe sobre a integração entre o licenciamento ambiental e a outorga de direito de uso de recursos hídricos.",
          link: "https://www.legislation.gov.br/sedest-032-2022"
        },
        {
          title: "Instrução Normativa IAT n° 06/2023",
          description: "Estabelece os critérios para determinação de usos insignificantes de outorga para captação de água.",
          link: "https://www.legislation.gov.br/iat-06-2023"
        }
      ]
    },
    {
      title: "Qualidade da Água e Efluentes",
      description: "Leis relacionadas à qualidade da água e ao tratamento de efluentes.",
      items: [
        {
          title: "Resolução CEMA n° 126/2023",
          description: "Estabelece limites para Escherichia coli em águas naturais e critérios de avaliação da qualidade da água.",
          link: "https://www.legislation.gov.br/cema-126-2023"
        },
        {
          title: "Portaria IAT n° 509/2023",
          description: "Regulamenta o uso de água de reuso e estabelece parâmetros para sua utilização.",
          link: "https://www.legislation.gov.br/iat-509-2023"
        },
        {
          title: "Portaria IAT n° 383/2023",
          description: "Dispõe sobre critérios técnicos para impermeabilização de lagoas de tratamento de efluentes.",
          link: "https://www.legislation.gov.br/iat-383-2023"
        },
        {
          title: "Portaria IAP n° 256/2013",
          description: "Estabelece procedimentos para apresentação da Declaração de Carga Poluidora.",
          link: "https://www.legislation.gov.br/iap-256-2013"
        }
      ]
    },
    {
      title: "Saneamento Básico e Tratamento de Esgoto",
      description: "Leis que estabelecem normas para saneamento e tratamento de esgoto.",
      items: [
        {
          title: "Lei Federal n° 11445/2007",
          description: "Estabelece diretrizes nacionais para o saneamento básico e para a política federal de saneamento básico.",
          link: "https://www.legislation.gov.br/lei-11445-2007"
        },
        {
          title: "Resolução CONAMA n° 498/2020",
          description: "Define critérios e procedimentos para produção e aplicação de biossólido em solos.",
          link: "https://www.legislation.gov.br/conama-498-2020"
        },
        {
          title: "Resolução CONAMA n° 375/2006",
          description: "Define critérios e procedimentos para o uso agrícola de lodos de esgoto gerados em estações de tratamento de esgoto sanitário.",
          link: "https://www.legislation.gov.br/conama-375-2006"
        }
      ]
    },
    {
      title: "Barragens e Infraestrutura Hídrica",
      description: "Leis relacionadas à segurança e licenciamento de barragens e outras infraestruturas hídricas.",
      items: [
        {
          title: "Portaria IAT n° 467/2023",
          description: "Dispõe sobre a classificação de barragens e estabelece diretrizes para implementação da Política Nacional de Segurança de Barragens.",
          link: "https://www.legislation.gov.br/iat-467-2023"
        },
        {
          title: "Resolução CERH n° 122/2023",
          description: "Estabelece diretrizes para o reuso de água e aproveitamento de água de chuva em edificações.",
          link: "https://www.legislation.gov.br/cerh-122-2023"
        }
      ]
    }
  ]
};
