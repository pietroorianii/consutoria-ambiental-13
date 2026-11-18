// AXIS Soluções Ambientais — biblioteca central de assets de marca.
// Importe daqui em vez de referenciar arquivos soltos, para manter a identidade consistente.
import logoFullColor from "@/assets/axis/axis-logo-full-color.png";
import logoFullWhite from "@/assets/axis/axis-logo-full-white.png";
import symbolColor from "@/assets/axis/axis-symbol-color.png";
import symbolWhite from "@/assets/axis/axis-symbol-white.png";
import wordmarkColor from "@/assets/axis/axis-wordmark-color.png";
import wordmarkWhite from "@/assets/axis/axis-wordmark-white.png";

import heroRiverSunrise from "@/assets/axis/hero-river-sunrise.webp";
import heroValley from "@/assets/axis/hero-valley.webp";
import heroForestRiver from "@/assets/axis/hero-forest-river.webp";
import bannerLandscape from "@/assets/axis/banner-landscape.webp";
import industry from "@/assets/axis/industry.webp";
import auditClipboard from "@/assets/axis/audit-clipboard.webp";
import esgHands from "@/assets/axis/esg-hands.webp";
import waterTreatment from "@/assets/axis/water-treatment.webp";
import waterTreatmentWide from "@/assets/axis/water-treatment-wide.webp";
import wasteBales from "@/assets/axis/waste-bales.webp";
import engineeringHelmet from "@/assets/axis/engineering-helmet.webp";
import leafDrop from "@/assets/axis/leaf-drop.webp";
import globeHands from "@/assets/axis/globe-hands.webp";
import powerPlant from "@/assets/axis/power-plant.webp";
import waterDrop from "@/assets/axis/water-drop.webp";
import plantNight from "@/assets/axis/plant-night.webp";
import forestAxis from "@/assets/axis/forest-axis.webp";
import earth from "@/assets/axis/earth.webp";
import seedling from "@/assets/axis/seedling.webp";

export const axisLogo = {
  fullColor: logoFullColor,
  fullWhite: logoFullWhite,
  symbolColor,
  symbolWhite,
  wordmarkColor,
  wordmarkWhite,
};

export const axisImages = {
  heroRiverSunrise,
  heroValley,
  heroForestRiver,
  bannerLandscape,
  industry,
  auditClipboard,
  esgHands,
  waterTreatment,
  waterTreatmentWide,
  wasteBales,
  engineeringHelmet,
  leafDrop,
  globeHands,
  powerPlant,
  waterDrop,
  plantNight,
  forestAxis,
  earth,
  seedling,
};

export type AxisImageKey = keyof typeof axisImages;
