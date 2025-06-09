
import { ServiceDetailData } from "./types/serviceTypes";
import { licensingServices } from "./services/licensingServices";
import { monitoringServices } from "./services/monitoringServices";
import { reportsServices } from "./services/reportsServices";
import { consultingServices } from "./services/consultingServices";
import { trainingServices } from "./services/trainingServices";
import { managementServices } from "./services/managementServices";
import { esgServices } from "./services/esgServices";
import { climateServices } from "./services/climateServices";

export type { ServiceStep, ServiceDetailData } from "./types/serviceTypes";

export const serviceDetails: Record<string, ServiceDetailData> = {
  licensing: licensingServices,
  monitoring: monitoringServices,
  reports: reportsServices,
  consulting: consultingServices,
  training: trainingServices,
  management: managementServices,
  esg: esgServices,
  climate: climateServices,
};
