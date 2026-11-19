// AXIS Soluções Ambientais — biblioteca central de assets de marca.
// Importe daqui em vez de referenciar arquivos soltos, para manter a identidade consistente.
import logoFullColor from "@/assets/axis/axis-logo-full-color.png";
import logoFullWhite from "@/assets/axis/axis-logo-full-white.png";
import symbolColor from "@/assets/axis/axis-symbol-color.png";
import symbolWhite from "@/assets/axis/axis-symbol-white.png";
import wordmarkColor from "@/assets/axis/axis-wordmark-color.png";
import wordmarkWhite from "@/assets/axis/axis-wordmark-white.png";

// Fotos em alta resolução do Unsplash (licença Unsplash: uso comercial gratuito, sem necessidade de atribuição).
// Servidas pelo CDN do Unsplash em WebP/AVIF automático, no tamanho certo para cada uso.
import earth from "@/assets/axis/earth.webp"; // grafismo decorativo da faixa de valores (usado em baixa opacidade)

const u = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=78`;

/** IDs das fotos usadas no site (unsplash.com/photos/<id>). */
export const unsplashIds = {
  riverMeander: "1591081658714-f576fb7ea3ed",
  riverValley: "1608853980390-442acdd99529",
  araucarias: "1565626571703-65f9128c1050",
  industryForest: "1783393208952-5cf06f930c42",
  industryAerial: "1771273954407-05345d61543e",
  smokestack: "1702245794536-6120b2a1db20",
  waterTreatment: "1533163238111-4a7ced54f2e4",
  waterTreatmentTop: "1533077162801-86490c593afb",
  waterDrop: "1526599256864-6bedb9d7dfb5",
  leafDrop: "1563372949-0483fa40e5da",
  engineersPlans: "1742112125701-6b684d5bc98f",
  engineerField: "1581094480465-4e6c25fb4a52",
  wasteBales: "1781243680823-aae6c7f1ff12",
  plantingHands: "1777150895644-2ca253ee1c93",
  seedlingsForest: "1776908038422-ccb0ad30e384",
  reforestation: "1633863852542-80647be2791b",
  meeting: "1758518730037-a16581a040e8",
  workshop: "1557804506-669a67965ba0",
  clipboard: "1523705480679-b5d0cc17a656",
  laboratory: "1617155093730-a8bf47be792d",
  dam: "1617722864422-62df702413a9",
  canopy: "1764798722952-3f189338096c",
  mistyForest: "1773916543957-d370611ac764",
} as const;

export const axisLogo = {
  fullColor: logoFullColor,
  fullWhite: logoFullWhite,
  symbolColor,
  symbolWhite,
  wordmarkColor,
  wordmarkWhite,
};

export const axisImages = {
  // paisagens (largura maior: usadas em cabeçalhos)
  heroRiverSunrise: u(unsplashIds.riverMeander, 1920),
  heroValley: u(unsplashIds.riverValley, 1920),
  heroForestRiver: u(unsplashIds.araucarias, 1920),
  bannerLandscape: u(unsplashIds.riverValley, 1920),
  araucarias: u(unsplashIds.araucarias),
  canopy: u(unsplashIds.canopy),
  mistyForest: u(unsplashIds.mistyForest),
  // operação e indústria
  industry: u(unsplashIds.industryForest),
  plantNight: u(unsplashIds.industryAerial),
  powerPlant: u(unsplashIds.smokestack),
  waterTreatment: u(unsplashIds.waterTreatment),
  waterTreatmentWide: u(unsplashIds.waterTreatmentTop),
  dam: u(unsplashIds.dam),
  wasteBales: u(unsplashIds.wasteBales),
  laboratory: u(unsplashIds.laboratory),
  // pessoas e trabalho técnico
  engineeringHelmet: u(unsplashIds.engineersPlans),
  engineer: u(unsplashIds.engineerField),
  auditClipboard: u(unsplashIds.clipboard),
  meeting: u(unsplashIds.meeting),
  workshop: u(unsplashIds.workshop),
  // natureza em detalhe
  leafDrop: u(unsplashIds.leafDrop),
  waterDrop: u(unsplashIds.waterDrop),
  esgHands: u(unsplashIds.plantingHands),
  globeHands: u(unsplashIds.canopy),
  seedling: u(unsplashIds.seedlingsForest),
  reforestation: u(unsplashIds.reforestation),
  forestAxis: u(unsplashIds.araucarias),
  earth,
};

export type AxisImageKey = keyof typeof axisImages;
