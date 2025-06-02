
import { LegislationItem } from "./types";

export const waterLegislation: LegislationItem[] = [
  {
    id: "water-1",
    title: "Lei nº 9.433/1997 - Política Nacional de Recursos Hídricos",
    description: "Institui a Política Nacional de Recursos Hídricos e cria o Sistema Nacional de Gerenciamento de Recursos Hídricos.",
    category: "water",
    tags: ["recursos hídricos", "política nacional", "gestão"],
    link: "https://www.planalto.gov.br/ccivil_03/leis/l9433.htm",
    summary: "Lei fundamental que estabelece os fundamentos, objetivos, diretrizes e instrumentos da Política Nacional de Recursos Hídricos.",
    applicableStates: ["Nacional"],
    lastUpdate: "1997-01-08"
  },
  {
    id: "water-2", 
    title: "Resolução CONAMA nº 357/2005 - Classificação das Águas",
    description: "Dispõe sobre a classificação dos corpos de água e diretrizes ambientais para o seu enquadramento.",
    category: "water",
    tags: ["classificação", "qualidade da água", "padrões"],
    link: "https://conama.mma.gov.br/images/conteudo/conama/res357.pdf",
    summary: "Estabelece as condições e padrões de lançamento de efluentes e classifica as águas doces, salobras e salinas do território nacional.",
    applicableStates: ["Nacional"],
    lastUpdate: "2005-03-17"
  },
  {
    id: "water-3",
    title: "Resolução CONAMA nº 396/2008 - Águas Subterrâneas", 
    description: "Dispõe sobre a classificação e diretrizes ambientais para o enquadramento das águas subterrâneas.",
    category: "water",
    tags: ["águas subterrâneas", "classificação", "qualidade"],
    link: "https://conama.mma.gov.br/images/conteudo/conama/res396.pdf",
    summary: "Estabelece diretrizes para proteção da qualidade das águas subterrâneas e define valores orientadores.",
    applicableStates: ["Nacional"],
    lastUpdate: "2008-04-03"
  },
  {
    id: "water-4",
    title: "Lei nº 11.445/2007 - Saneamento Básico",
    description: "Estabelece as diretrizes nacionais para o saneamento básico.",
    category: "water", 
    tags: ["saneamento", "abastecimento", "esgotamento"],
    link: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11445.htm",
    summary: "Lei do marco regulatório do saneamento básico que define princípios fundamentais e diretrizes da política federal.",
    applicableStates: ["Nacional"],
    lastUpdate: "2007-01-05"
  },
  {
    id: "water-5",
    title: "Decreto nº 7.217/2010 - Regulamentação do Saneamento",
    description: "Regulamenta a Lei nº 11.445/2007, que estabelece diretrizes nacionais para o saneamento básico.",
    category: "water",
    tags: ["regulamentação", "saneamento", "diretrizes"],
    link: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/decreto/d7217.htm", 
    summary: "Decreto que regulamenta a lei do saneamento básico, detalhando procedimentos e competências.",
    applicableStates: ["Nacional"],
    lastUpdate: "2010-06-21"
  }
];
