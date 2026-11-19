import { axisImages } from "./assets";

/** Imagem da marca para cada serviço/categoria/página (substitui fotos genéricas de banco). */
const byKey: Record<string, string> = {
  licensing: axisImages.industry,
  lp: axisImages.engineeringHelmet,
  li: axisImages.engineer,
  lo: axisImages.plantNight,
  las: axisImages.industry,
  lac: axisImages.plantNight,
  dlam: axisImages.heroValley,
  authorizations: axisImages.araucarias,
  water_grants: axisImages.waterTreatment,
  water_resources: axisImages.waterTreatment,
  air_emissions: axisImages.powerPlant,
  monitoring: axisImages.laboratory,
  technical_studies: axisImages.engineeringHelmet,
  reports: axisImages.engineeringHelmet,
  compliance: axisImages.auditClipboard,
  management: axisImages.auditClipboard,
  esg: axisImages.esgHands,
  climate: axisImages.canopy,
  degraded_areas: axisImages.reforestation,
  training: axisImages.workshop,
  consulting: axisImages.meeting,
  ibama: axisImages.canopy,
  // páginas
  about: axisImages.araucarias,
  services: axisImages.heroValley,
  faq: axisImages.leafDrop,
  contact: axisImages.waterDrop,
  quote: axisImages.seedling,
  team: axisImages.araucarias,
  licenses: axisImages.industry,
  privacy: axisImages.mistyForest,
  default: axisImages.heroValley,
};

export function axisImageFor(key?: string): string {
  if (!key) return byKey.default;
  return byKey[key] ?? byKey.default;
}
