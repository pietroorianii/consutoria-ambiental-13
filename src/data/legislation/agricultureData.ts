
import { Leaf } from "lucide-react";
import { LegislationCategory } from "./types";

export const agricultureLegislation: LegislationCategory = {
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
};
