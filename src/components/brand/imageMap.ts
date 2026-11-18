import { axisImages } from "./assets";

/** Imagem da marca para cada serviço/categoria/página (substitui fotos genéricas de banco). */
const byKey: Record<string, string> = {
  licensing: axisImages.industry,
  lp: axisImages.industry,
  li: axisImages.powerPlant,
  lo: axisImages.plantNight,
  las: axisImages.industry,
  lac: axisImages.plantNight,
  dlam: axisImages.heroValley,
  authorizations: axisImages.forestAxis,
  water_grants: axisImages.waterTreatment,
  water_resources: axisImages.waterTreatmentWide,
  air_emissions: axisImages.powerPlant,
  monitoring: axisImages.powerPlant,
  technical_studies: axisImages.engineeringHelmet,
  reports: axisImages.engineeringHelmet,
  compliance: axisImages.auditClipboard,
  management: axisImages.auditClipboard,
  esg: axisImages.globeHands,
  climate: axisImages.earth,
  degraded_areas: axisImages.seedling,
  training: axisImages.esgHands,
  consulting: axisImages.engineeringHelmet,
  ibama: axisImages.heroForestRiver,
  // páginas
  about: axisImages.forestAxis,
  services: axisImages.bannerLandscape,
  faq: axisImages.leafDrop,
  contact: axisImages.waterDrop,
  quote: axisImages.seedling,
  team: axisImages.forestAxis,
  licenses: axisImages.industry,
  privacy: axisImages.earth,
  default: axisImages.heroValley,
};

export function axisImageFor(key?: string): string {
  if (!key) return byKey.default;
  return byKey[key] ?? byKey.default;
}
