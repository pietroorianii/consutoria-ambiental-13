/**
 * Radar normativo da Axis — mudanças recentes verificadas em fonte pública.
 * Atualize esta lista sempre que sair norma relevante (revisar ao menos 1x por mês).
 * Cada item precisa de uma fonte pública acessível.
 */
export type LegalScope = "Federal" | "Paraná" | "Norma técnica";

export interface LegalUpdate {
  id: string;
  scope: LegalScope;
  date: string; // AAAA-MM-DD (publicação ou início de vigência)
  title: string;
  change: string;
  who: string;
  source: string;
  sourceLabel: string;
  serviceHref?: string;
}

export const LEGAL_UPDATES_REVIEWED_AT = "2026-11-18";

export const legalUpdates: LegalUpdate[] = [
  {
    id: "in-iat-36-2026",
    scope: "Paraná",
    date: "2026-11-03",
    title: "IN IAT nº 36/2026: novas regras para Reserva Legal",
    change: "Define hipóteses de regularização e compensação de Reserva Legal e revoga a IN IAT nº 55/2025.",
    who: "Imóveis rurais, loteamentos e empreendimentos com passivo de Reserva Legal.",
    source: "https://atlaspublico.com.br/estados/pr/noticias/iat-define-regras-para-transformar-reserva-legal-em-area-99149",
    sourceLabel: "Atlas Público (DOE-PR)",
    serviceHref: "/service/authorizations",
  },
  {
    id: "in-iat-26-2026",
    scope: "Paraná",
    date: "2026-08-14",
    title: "IN IAT nº 26/2026: novo rol de atividades agrícolas inexigíveis",
    change: "Atualiza a lista de atividades agrícolas que não precisam de licenciamento e podem pedir a Declaração de Inexigibilidade (DILA). Passou a incluir pequenas criações de subsistência.",
    who: "Produtores rurais e pequenas criações.",
    source: "https://www.legisweb.com.br/legislacao/?id=499499",
    sourceLabel: "Legisweb",
    serviceHref: "/service/dlam",
  },
  {
    id: "in-iat-09-2026",
    scope: "Paraná",
    date: "2026-04-01",
    title: "IN IAT nº 09/2026: poço com licença e outorga integradas",
    change: "Integra o licenciamento ambiental e a outorga de captação subterrânea, simplificando a regularização de poços.",
    who: "Indústrias, condomínios, propriedades rurais e comércios com poço artesiano ou tubular.",
    source: "https://opresenterural.com.br/parana-atualiza-regras-para-licenciamento-de-pocos-e-agiliza-processos/",
    sourceLabel: "O Presente Rural",
    serviceHref: "/service/water_grants",
  },
  {
    id: "in-iat-05-2026",
    scope: "Paraná",
    date: "2026-01-13",
    title: "IN IAT nº 05/2026: novas regras para supressão de vegetação",
    change: "Substitui a IN 48/2025 e exige, ao final da supressão, Relatório de Exploração com mapa georreferenciado e arquivos vetoriais.",
    who: "Loteamentos, obras e empreendimentos que precisam remover vegetação nativa.",
    source: "https://site.mppr.mp.br/meioambiente/Noticia/MATA-ATLANTICA-IAT-regulamenta-procedimentos-para-autorizacao-para-supressao",
    sourceLabel: "MPPR",
    serviceHref: "/service/authorizations",
  },
  {
    id: "in-iat-22-2026",
    scope: "Paraná",
    date: "2026-08-01",
    title: "IN IAT nº 22/2026: dispensa (DLAM) para irrigação de até 10 ha",
    change: "Sistemas de irrigação por aspersão e localizada em áreas de até dez hectares passam a poder usar a DLAM.",
    who: "Produtores rurais com irrigação de pequeno porte.",
    source: "https://cnabrasil.org.br/noticias/mudanca-no-licenciamento-ambiental-impacta-producao-agricola-e-pecuaria",
    sourceLabel: "CNA / Sistema FAEP",
    serviceHref: "/service/dlam",
  },
  {
    id: "in-iat-19-2026",
    scope: "Paraná",
    date: "2026-07-20",
    title: "IN IAT nº 19/2026: compensação ambiental por supressão de vegetação",
    change: "Estabelece diretrizes da Compensação Ambiental por Supressão de Vegetação Nativa (CASVN) e quando cabe isenção.",
    who: "Obras e empreendimentos que precisam suprimir vegetação nativa.",
    source: "https://www.legisweb.com.br/legislacao/?id=498422",
    sourceLabel: "Legisweb",
    serviceHref: "/service/authorizations",
  },
  {
    id: "in-iat-15-2026",
    scope: "Paraná",
    date: "2026-07-01",
    title: "IN IAT nº 15/2026: obras de urgência",
    change: "Regulamenta a dispensa de licenciamento e de outorga para obras e atividades de caráter de urgência e risco iminente.",
    who: "Prefeituras, concessionárias e empresas em situações de emergência ou desastre.",
    source: "https://www.legisweb.com.br/legislacao/?id=497661",
    sourceLabel: "Legisweb",
  },
  {
    id: "in-iat-11-2026",
    scope: "Paraná",
    date: "2026-05-04",
    title: "IN IAT nº 11/2026: atividades de baixo risco ambiental",
    change: "Cria parâmetros para classificar atividades econômicas de baixo risco e associá-las a atos de licenciamento mais simples.",
    who: "Pequenas e médias empresas de comércio, serviços e indústria leve.",
    source: "https://www.legisweb.com.br/legislacao/?id=495347",
    sourceLabel: "Legisweb",
    serviceHref: "/service/licensing",
  },
  {
    id: "lei-15190-2025",
    scope: "Federal",
    date: "2026-02-04",
    title: "Lei Geral do Licenciamento Ambiental (Lei nº 15.190/2025) entra em vigor",
    change: "Padroniza modalidades, prazos e critérios de licenciamento no país. O Congresso derrubou 52 vetos em 27/11/2025, e a lei é alvo de ações no STF.",
    who: "Todo empreendimento sujeito a licenciamento ambiental.",
    source: "https://www.congressoemfoco.com.br/noticia/116123/lei-geral-do-licenciamento-ambiental-entra-em-vigor-nesta-quarta",
    sourceLabel: "Congresso em Foco",
    serviceHref: "/service/licensing",
  },
  {
    id: "in-iat-07-2026",
    scope: "Paraná",
    date: "2026-02-19",
    title: "IN IAT nº 07/2026: desmembramento de imóvel rural",
    change: "Reforça a fração mínima de parcelamento rural de 2 ha e exige anuência prévia do IAT para áreas entre 2 e 5 ha.",
    who: "Proprietários rurais, loteadores e cartórios.",
    source: "https://www.parana.pr.gov.br/aen/Noticia/IAT-estabelece-criterios-mais-rigidos-para-parcelamento-e-subdivisao-de-imoveis-rurais",
    sourceLabel: "Agência Estadual de Notícias",
  },
  {
    id: "in-iat-06-2026",
    scope: "Paraná",
    date: "2026-02-09",
    title: "IN IAT nº 06/2026: pavimentação urbana dispensada",
    change: "Lista 10 tipos de pavimentação urbana de baixo impacto que precisam só da Declaração de Dispensa (DLAM).",
    who: "Prefeituras e construtoras de obras viárias urbanas.",
    source: "https://www.parana.pr.gov.br/Audio/Estado-dispensa-licenciamento-para-pavimentacao-urbana-com-baixo-impacto-ambiental",
    sourceLabel: "Governo do Paraná",
    serviceHref: "/service/dlam",
  },
  {
    id: "lei-15300-2025",
    scope: "Federal",
    date: "2025-12-23",
    title: "Lei nº 15.300/2025 cria a Licença Ambiental Especial (LAE)",
    change: "Modalidade especial para empreendimentos considerados estratégicos pelo governo federal, com rito próprio.",
    who: "Grandes projetos de infraestrutura e energia.",
    source: "https://www.demarest.com.br/boletim-de-ambiental-dezembro-2025-e-janeiro-2026/",
    sourceLabel: "Demarest (boletim)",
  },
  {
    id: "nbr-10004-2024",
    scope: "Norma técnica",
    date: "2024-11-27",
    title: "ABNT NBR 10004:2024 muda a classificação de resíduos",
    change: "A norma passa a ter duas partes e duas classes (perigosos e não perigosos), extinguindo as subclasses II-A e II-B. Laudos e PGRS antigos precisam de revisão.",
    who: "Todo gerador de resíduos industriais com PGRS ou MTR.",
    source: "https://www.acinh.com.br/noticia/sistema-de-classificacao-de-residuos-solidos-em-periodo-de-adaptacao",
    sourceLabel: "ACI Novo Hamburgo",
    serviceHref: "/service/technical_studies",
  },
];
