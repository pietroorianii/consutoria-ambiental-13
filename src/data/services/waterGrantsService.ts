
import { Droplet } from "lucide-react";
import { ServiceDetailData } from "../types/serviceTypes";

export const waterGrantsService: ServiceDetailData = {
  id: "water_grants",
  title: "Outorga de Recursos Hídricos",
  description: "Direito legal de uso de águas superficiais e subterrâneas no Paraná — captação, lançamento de efluentes e estruturas hídricas — via SIGARH.",
  icon: Droplet,
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000&h=600",
  whatIs: "A Outorga de Direito de Uso de Recursos Hídricos é emitida pelo IAT via SIGARH (Sistema Integrado de Gestão de Águas e Recursos Hídricos). Existem 6 tipos principais no Paraná: captação superficial, captação subterrânea, lançamento de efluentes, barragem, transposição e uso insignificante (declaração de dispensa). A outorga pode ser condicionante obrigatória para a Licença de Operação (LO) — quando há captação ou lançamento acima dos limites de insignificância. A IN 09/2026 integrou os procedimentos de licenciamento e outorga para captação subterrânea, permitindo um único processo simultâneo no SGA do IAT e no SIGARH — isso simplifica o caminho para o cliente e é diferencial competitivo para a consultoria. A IN 63/2025 define os modelos e especificações técnicas dos equipamentos medidores de vazão exigidos pelo IAT. A declaração de uso insignificante dispensa a outorga formal para volumes abaixo dos limites legais estabelecidos pelo IAT.",
  benefits: [
    "Segurança jurídica para uso da água como insumo produtivo",
    "Prevenção de multas por captação ou lançamento irregular",
    "Pré-requisito para Licença de Operação (LO) quando aplicável",
    "Processo integrado com licenciamento ambiental (IN 09/2026 — captação subterrânea)",
    "Gestão completa: estudo técnico, protocolo no SIGARH e cumprimento de condicionantes",
    "Domínio de todos os 6 tipos de outorga do IAT/Paraná"
  ],
  steps: [
    {
      title: "Diagnóstico Hídrico",
      description: "Levantamento das demandas de uso, caracterização da fonte hídrica (superficial ou subterrânea) e enquadramento legal quanto à necessidade ou dispensa de outorga",
      duration: "3 a 7 dias"
    },
    {
      title: "Estudos Técnicos",
      description: "Elaboração do estudo de disponibilidade hídrica da bacia, teste/ensaio de bombeamento para captação subterrânea (IN 09/2026), análise físico-química da água conforme parâmetros do IAT",
      duration: "15 a 30 dias"
    },
    {
      title: "Protocolo no SIGARH",
      description: "Montagem completa do processo e submissão no Sistema Integrado de Gestão de Águas e Recursos Hídricos do IAT, com verificação de completude da documentação",
      duration: "5 a 10 dias"
    },
    {
      title: "Acompanhamento da Análise",
      description: "Monitoramento semanal do andamento, resposta a exigências técnicas do IAT e articulação com a equipe de licenciamento quando o processo for integrado (IN 09/2026)",
      duration: "60 a 180 dias"
    },
    {
      title: "Gestão de Condicionantes",
      description: "Orientação para instalação de hidrômetros conforme IN 63/2025, envio de relatórios de consumo e hidrometria, gestão proativa dos prazos de renovação da outorga",
      duration: "Contínuo"
    }
  ],
  documents: [
    "Captação Subterrânea (IN 09/2026 — processo integrado com licenciamento): requerimento SIGARH, CPF/CNPJ, dominialidade do imóvel, ART, laudo de teste de bombeamento, análise físico-química da água (laboratório credenciado), croqui georreferenciado de localização do poço, outorga de perfuração quando aplicável",
    "Captação Superficial — irrigação, criação de animais, aquicultura (IN 51/2025 para aquicultura): requerimento SIGARH, CPF/CNPJ, dominialidade, ART, estudo de disponibilidade hídrica com balanço da bacia hidrográfica, mapa da área irrigada ou criação, declaração de uso insignificante quando aplicável",
    "Lançamento de Efluentes: requerimento SIGARH, CPF/CNPJ, ART, Declaração de Carga Poluidora (DCP), caracterização analítica do efluente, croqui georreferenciado do ponto de lançamento, licença ambiental vigente (LO) com condicionante de efluente",
    "Outorga de Barragem: requerimento SIGARH, projeto executivo da barragem assinado, ART, estudo de disponibilidade hídrica, planta da bacia de contribuição, dominialidade, declaração de embargos"
  ],
  timeline: "60 a 180 dias contados do protocolo completo no SIGARH, variando conforme tipo de uso, disponibilidade hídrica da bacia e demanda de análises técnicas do IAT. Captação subterrânea via processo integrado (IN 09/2026) pode ter análise sincronizada com o licenciamento.",
  legalBasis: [
    "Lei Federal nº 9.433/1997 — Política Nacional de Recursos Hídricos",
    "Lei Estadual nº 12.726/1999 — Política Estadual de Recursos Hídricos do Paraná",
    "Decreto Estadual nº 2.314/2000 — sistema de outorgas de recursos hídricos no Paraná",
    "IN IAT nº 09/2026 — integração entre licenciamento ambiental e outorga para captação subterrânea",
    "IN IAT nº 63/2025 — equipamentos medidores de vazão e volume para outorgas e declarações de uso insignificante",
    "IN IAT nº 51/2025 — outorga vinculada ao licenciamento de aquicultura e maricultura",
    "Decreto Estadual nº 9.541/2025",
    "Resoluções da ANA (Agência Nacional de Águas) aplicáveis à bacia"
  ],
  tips: [
    "Inicie o processo de outorga em paralelo ao licenciamento ambiental — a LO pode depender dela e atraso na outorga trava a operação",
    "A IN 09/2026 integrou licenciamento e outorga para captação subterrânea: um único processo no IAT, menos burocracia e mais agilidade para o cliente",
    "Verifique primeiro se o uso é insignificante — volumes abaixo dos limites legais dispensam outorga formal e economizam tempo e custo",
    "Outorgas têm prazo de validade: gerencie os vencimentos com no mínimo 90 dias de antecedência para evitar captação irregular"
  ]
};
