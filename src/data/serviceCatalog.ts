import {
  Leaf, TreePine, Droplets, ShieldCheck, FileText, Wind, Sprout, ClipboardCheck, Briefcase, GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { axisImages } from "@/components/brand/assets";

/**
 * CATÁLOGO ÚNICO DE SERVIÇOS DA AXIS.
 * Fonte de verdade para o hub de serviços, a home, o rodapé e os "serviços relacionados".
 * Cada serviço tem UMA página: /service/<id> (conteúdo detalhado em src/data/serviceDetails.ts).
 * Endereços antigos e duplicados redirecionam para cá (ver legacyServiceRedirects).
 */
export type ServiceFamily = "licencas" | "estudos" | "gestao";
export type Need = "abrir" | "regularizar" | "notificado" | "renovar" | "agua" | "vegetacao" | "residuos" | "esg";

export interface CatalogService {
  id: string;
  family: ServiceFamily;
  title: string;
  short: string;
  outcome: string;
  deliverables: string[];
  needs: Need[];
  icon: LucideIcon;
  image: string;
  water?: boolean;
}

export const families: Record<ServiceFamily, { title: string; intro: string }> = {
  licencas: { title: "Licenças e autorizações", intro: "O que sua empresa precisa ter em mãos para operar dentro da lei." },
  estudos: { title: "Estudos e monitoramento", intro: "Os documentos técnicos que sustentam a licença e provam que você cumpre." },
  gestao: { title: "Gestão contínua", intro: "Para a licença continuar válida e sua equipe saber o que fazer." },
};

export const needs: { id: Need; label: string }[] = [
  { id: "abrir", label: "Vou abrir ou ampliar" },
  { id: "regularizar", label: "Opero sem licença" },
  { id: "notificado", label: "Recebi notificação" },
  { id: "renovar", label: "Preciso renovar" },
  { id: "agua", label: "Uso poço ou rio" },
  { id: "vegetacao", label: "Vou suprimir vegetação" },
  { id: "residuos", label: "Gero resíduos" },
  { id: "esg", label: "Clientes cobram ESG" },
];

export const catalog: CatalogService[] = [
  {
    id: "licensing",
    family: "licencas",
    title: "Licenciamento ambiental",
    short: "Da dispensa (DILA/DLAM) à LP, LI e LO, na modalidade certa para a sua atividade.",
    outcome: "Licença emitida no SGA do IAT, com as condicionantes explicadas.",
    deliverables: ["Enquadramento na modalidade", "Documentação e estudos", "Protocolo e acompanhamento"],
    needs: ["abrir", "regularizar"],
    icon: Leaf,
    image: axisImages.industry,
  },
  {
    id: "authorizations",
    family: "licencas",
    title: "Autorizações florestais",
    short: "Supressão de vegetação, corte de árvores, manejo e intervenção em APP.",
    outcome: "Autorização emitida e compensação ambiental resolvida.",
    deliverables: ["Inventário florestal", "Autorização (AA/AF)", "Reposição e compensação"],
    needs: ["abrir", "vegetacao"],
    icon: TreePine,
    image: axisImages.araucarias,
  },
  {
    id: "water_grants",
    family: "licencas",
    title: "Outorga e recursos hídricos",
    short: "Poços, captação em rio, lançamento de efluentes e barragens, via SIGARH.",
    outcome: "Direito de uso da água regularizado e integrado à licença.",
    deliverables: ["Outorga ou dispensa", "Teste de vazão e análises", "Integração com a licença do poço"],
    needs: ["agua", "abrir", "regularizar"],
    icon: Droplets,
    image: axisImages.waterTreatment,
    water: true,
  },
  {
    id: "ibama",
    family: "licencas",
    title: "Cadastro IBAMA (CTF/APP)",
    short: "Inscrição no Cadastro Técnico Federal, Certificado de Regularidade e RAPP anual.",
    outcome: "Regularidade federal em dia, pronta para licitações e contratos.",
    deliverables: ["Inscrição no CTF/APP", "Certificado de Regularidade", "RAPP e TCFA"],
    needs: ["abrir", "regularizar", "notificado"],
    icon: ShieldCheck,
    image: axisImages.canopy,
  },
  {
    id: "technical_studies",
    family: "estudos",
    title: "Estudos e planos técnicos",
    short: "EIA/RIMA, RAS, PCA, PBA, PGRS, PGRSS, PRAD e demais documentos do licenciamento.",
    outcome: "Estudo aceito pelo órgão na primeira análise, com ART.",
    deliverables: ["Estudo de impacto (RAS, EIA)", "Planos de resíduos (PGRS)", "Laudos e ART"],
    needs: ["abrir", "residuos"],
    icon: FileText,
    image: axisImages.engineeringHelmet,
  },
  {
    id: "air_emissions",
    family: "estudos",
    title: "Emissões e monitoramento",
    short: "Automonitoramento de chaminés, efluentes e águas, com declarações no SGADEA.",
    outcome: "Condicionantes de monitoramento cumpridas no prazo, sem autuação.",
    deliverables: ["Plano de automonitoramento", "Coletas e laudos acreditados", "Declarações no SGADEA"],
    needs: ["renovar", "residuos"],
    icon: Wind,
    image: axisImages.powerPlant,
  },
  {
    id: "degraded_areas",
    family: "estudos",
    title: "Áreas degradadas e contaminadas",
    short: "PRAD, gerenciamento de áreas contaminadas (GAC) e recuperação de passivos.",
    outcome: "Passivo ambiental diagnosticado, recuperado e encerrado no órgão.",
    deliverables: ["Diagnóstico e investigação", "PRAD ou plano de remediação", "Monitoramento até o encerramento"],
    needs: ["notificado", "vegetacao", "regularizar"],
    icon: Sprout,
    image: axisImages.reforestation,
  },
  {
    id: "compliance",
    family: "gestao",
    title: "Conformidade e renovação",
    short: "Condicionantes, relatórios no SGA IR, renovação da LO, regularização e TAC.",
    outcome: "Licença sempre válida e nenhuma obrigação esquecida.",
    deliverables: ["Calendário de condicionantes", "Renovação 120 dias antes", "Defesa e regularização"],
    needs: ["renovar", "regularizar", "notificado"],
    icon: ClipboardCheck,
    image: axisImages.auditClipboard,
  },
  {
    id: "consulting",
    family: "gestao",
    title: "Auditorias, perícias e ESG",
    short: "Auditoria de conformidade, defesa técnica de autos, perícias, SIG e indicadores ESG.",
    outcome: "Riscos mapeados antes da fiscalização e argumentos técnicos quando ela vem.",
    deliverables: ["Auditoria de conformidade", "Defesa técnica e perícia", "Diagnóstico e relatório ESG"],
    needs: ["notificado", "esg"],
    icon: Briefcase,
    image: axisImages.meeting,
  },
  {
    id: "training",
    family: "gestao",
    title: "Treinamentos ambientais",
    short: "Capacitação em legislação, resíduos, emergências e rotinas exigidas pela licença.",
    outcome: "Equipe preparada e treinamentos comprovados para a fiscalização.",
    deliverables: ["Programa sob medida", "Turmas presenciais ou online", "Certificados e evidências"],
    needs: ["residuos", "esg", "renovar"],
    icon: GraduationCap,
    image: axisImages.workshop,
  },
];

export const catalogById = Object.fromEntries(catalog.map((s) => [s.id, s])) as Record<string, CatalogService>;

/** Serviços antigos/duplicados → serviço canônico. */
export const legacyServiceRedirects: Record<string, string> = {
  water_resources: "water_grants",
  reports: "technical_studies",
  monitoring: "air_emissions",
  management: "compliance",
};

/** Categorias e grupos antigos (/services/<id>) → página do serviço. */
export const legacyCategoryRedirects: Record<string, string> = {
  licensing: "licensing",
  water_resources: "water_grants",
  reports: "technical_studies",
  monitoring: "air_emissions",
  management: "compliance",
  consulting: "consulting",
  training: "training",
  degraded_areas: "degraded_areas",
  esg: "consulting",
  climate: "consulting",
};

export const relatedServices = (id: string, n = 3) => {
  const me = catalogById[id];
  if (!me) return catalog.slice(0, n);
  const same = catalog.filter((s) => s.id !== id && s.family === me.family);
  const other = catalog.filter((s) => s.id !== id && s.family !== me.family && s.needs.some((x) => me.needs.includes(x)));
  return [...same, ...other].slice(0, n);
};
