/**
 * Lógica do diagnóstico "Qual licença eu preciso?".
 * Resultado INDICATIVO: orienta o visitante e gera um lead qualificado. A análise final é sempre técnica.
 * Bases: Lei Estadual 22.252/2024, Decreto 9.541/2025, IN IAT 26/2026 (DILA), 09/2026 (poços),
 * 05/2026 e 19/2026 (supressão e compensação), LC 140/2011 art. 14 §4º (renovação).
 */
export type Sector = "industria" | "agro" | "construcao" | "comercio" | "saude" | "energia" | "outro";
export type Situation = "novo" | "licenciado" | "sem_licenca" | "notificado";
export type YesNo = "sim" | "nao" | "nao_sei";
export type Size = "pequeno" | "medio" | "grande";

export interface Answers {
  sector?: Sector;
  situation?: Situation;
  water?: YesNo;
  vegetation?: YesNo;
  size?: Size;
}

export interface Recommendation {
  title: string;
  why: string;
  href: string;
}

export interface DiagnosticResult {
  urgency: "baixa" | "media" | "alta" | "maxima";
  headline: string;
  summary: string;
  items: Recommendation[];
}

export const questions = [
  {
    key: "sector" as const,
    title: "Qual é a atividade da sua empresa?",
    options: [
      { value: "industria", label: "Indústria", hint: "Fábrica, metalurgia, alimentos, química" },
      { value: "agro", label: "Agro e rural", hint: "Granjas, irrigação, agroindústria, silos" },
      { value: "construcao", label: "Construção e loteamento", hint: "Obras, condomínios, terraplanagem" },
      { value: "comercio", label: "Comércio e serviços", hint: "Oficina, posto, lavanderia, depósito" },
      { value: "saude", label: "Saúde", hint: "Clínica, laboratório, hospital, farmácia" },
      { value: "energia", label: "Energia", hint: "Solar, PCH, biogás, subestação" },
      { value: "outro", label: "Outra atividade", hint: "Vamos analisar o seu caso" },
    ],
  },
  {
    key: "situation" as const,
    title: "Qual é a situação hoje?",
    options: [
      { value: "novo", label: "Vou começar ou ampliar", hint: "Ainda não opera ou vai crescer" },
      { value: "licenciado", label: "Já opero com licença", hint: "Preciso manter ou renovar" },
      { value: "sem_licenca", label: "Já opero sem licença", hint: "Quero regularizar" },
      { value: "notificado", label: "Recebi notificação ou multa", hint: "IAT, IBAMA ou prefeitura" },
    ],
  },
  {
    key: "water" as const,
    title: "Usa água de poço ou rio, ou lança efluente?",
    options: [
      { value: "sim", label: "Sim", hint: "Poço, captação, lançamento" },
      { value: "nao", label: "Não", hint: "Só rede pública" },
      { value: "nao_sei", label: "Não sei", hint: "A gente verifica" },
    ],
  },
  {
    key: "vegetation" as const,
    title: "Vai cortar árvores ou está perto de rio ou nascente?",
    options: [
      { value: "sim", label: "Sim", hint: "Supressão, corte, APP" },
      { value: "nao", label: "Não", hint: "Área já urbanizada" },
      { value: "nao_sei", label: "Não sei", hint: "A gente verifica" },
    ],
  },
  {
    key: "size" as const,
    title: "Qual é o porte do empreendimento?",
    options: [
      { value: "pequeno", label: "Pequeno", hint: "MEI, micro ou pequena empresa" },
      { value: "medio", label: "Médio", hint: "Operação regional" },
      { value: "grande", label: "Grande", hint: "Alto volume ou área extensa" },
    ],
  },
] as const;

export function diagnose(a: Answers): DiagnosticResult {
  const items: Recommendation[] = [];
  let urgency: DiagnosticResult["urgency"] = "media";
  let headline = "";
  let summary = "";

  switch (a.situation) {
    case "notificado":
      urgency = "maxima";
      headline = "Prioridade: responder à autuação dentro do prazo";
      summary = "Prazos de defesa são curtos. O passo certo agora é analisar o auto, preparar a defesa técnica e iniciar a regularização em paralelo.";
      items.push({ title: "Defesa técnica e regularização", why: "Analisamos o auto, preparamos a defesa e definimos o caminho para regularizar (LASR, LIR, LOR ou TAC).", href: "/service/compliance" });
      break;
    case "sem_licenca":
      urgency = "alta";
      headline = "Caminho provável: licença de regularização";
      summary = "Operar sem licença sujeita a multa e embargo. Regularizar por iniciativa própria costuma ser mais rápido e barato do que depois de uma fiscalização.";
      items.push({ title: "Regularização ambiental (LASR, LIR, LOR)", why: "Modalidades criadas para quem já opera e precisa se adequar.", href: "/service/compliance" });
      break;
    case "licenciado":
      urgency = "baixa";
      headline = "Foco: manter a licença válida e as condicionantes em dia";
      summary = "A renovação deve ser protocolada com antecedência mínima de 120 dias do vencimento para a licença seguir válida até a decisão do órgão.";
      items.push({ title: "Gestão de condicionantes e renovação", why: "Calendário de obrigações, relatórios no SGA IR e protocolo de renovação no prazo.", href: "/service/compliance" });
      break;
    default:
      if (a.sector === "agro" && a.size === "pequeno") {
        headline = "Caminho provável: dispensa (DILA ou DLAM) ou licença simplificada";
        summary = "Várias atividades rurais de pequeno porte são inexigíveis de licença ou têm dispensa, desde que fora de áreas protegidas.";
        items.push({ title: "Declaração de inexigibilidade ou dispensa", why: "Verificamos se sua atividade está no rol da IN IAT 26/2026 ou nos critérios de DLAM.", href: "/service/dlam" });
      } else if (a.size === "grande" || a.sector === "energia" || (a.sector === "industria" && a.size !== "pequeno")) {
        headline = "Caminho provável: licenciamento trifásico (LP, LI e LO)";
        summary = "Empreendimentos de maior porte ou potencial poluidor passam pelas três fases, com estudos técnicos exigidos pelo IAT.";
        items.push({ title: "Licença Prévia, de Instalação e de Operação", why: "Planejamos as três fases e os estudos (RAS, PCA, EIA/RIMA) desde o início.", href: "/service/lp" });
        items.push({ title: "Estudos e documentos técnicos", why: "Cada fase exige estudos específicos, com ART do responsável técnico.", href: "/service/technical_studies" });
      } else {
        headline = "Caminho provável: licença simplificada (LAC ou LAS) ou dispensa";
        summary = "Atividades de pequeno e médio impacto costumam se enquadrar em modalidades simplificadas, mais rápidas e baratas.";
        items.push({ title: "Enquadramento na modalidade certa", why: "DLAM, LAC ou LAS: definimos a modalidade antes de gastar com documentação.", href: "/service/licensing#modalidades" });
      }
  }

  if (a.water === "sim") items.push({ title: "Outorga de recursos hídricos", why: "Captação ou lançamento acima da insignificância exige outorga (SIGARH). Para poços, a IN IAT 09/2026 integra licença e outorga.", href: "/service/water_grants" });
  if (a.water === "nao_sei") items.push({ title: "Verificação de uso de água", why: "Confirmamos se há captação ou lançamento que exija outorga.", href: "/service/water_grants" });
  if (a.vegetation === "sim") items.push({ title: "Autorização florestal e compensação", why: "Supressão exige autorização (IN IAT 05/2026) e pode gerar compensação (IN IAT 19/2026).", href: "/service/authorizations" });
  if (a.sector === "saude") items.push({ title: "PGRSS", why: "Serviços de saúde precisam de Plano de Gerenciamento de Resíduos de Serviços de Saúde.", href: "/service/technical_studies" });
  if (a.sector === "construcao") items.push({ title: "PGRCC e licença de obra", why: "Obras exigem plano de resíduos da construção civil e, conforme o porte, licença própria.", href: "/service/technical_studies" });
  if (a.sector === "industria") items.push({ title: "PGRS e controle de emissões", why: "Indústrias costumam ter PGRS, MTR e automonitoramento de emissões como condicionantes.", href: "/service/air_emissions" });

  if (urgency === "media" && (a.vegetation === "sim" || a.size === "grande")) urgency = "alta";

  return { urgency, headline, summary, items: items.slice(0, 5) };
}

export function answersToText(a: Answers, r: DiagnosticResult): string {
  const label = (key: keyof Answers) => {
    const q = questions.find((q) => q.key === key);
    return q?.options.find((o) => o.value === a[key])?.label ?? "-";
  };
  return [
    "Diagnóstico pelo site da Axis:",
    `• Atividade: ${label("sector")}`,
    `• Situação: ${label("situation")}`,
    `• Água/efluente: ${label("water")}`,
    `• Vegetação/APP: ${label("vegetation")}`,
    `• Porte: ${label("size")}`,
    `Indicação: ${r.headline}`,
  ].join("\n");
}
