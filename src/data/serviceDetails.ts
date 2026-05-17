
import { ServiceDetailData } from './types/serviceTypes';
import { licensingServices } from './services/licensingServices';
import { authorizationsService } from './services/authorizationsService';
import { waterGrantsService } from './services/waterGrantsService';
import { airEmissionsService } from './services/airEmissionsService';
import { technicalStudiesService } from './services/technicalStudiesService';
import { complianceService } from './services/complianceService';

// Manter serviços legados para não quebrar rotas existentes
import { monitoringServices } from './services/monitoringServices';
import { reportsServices } from './services/reportsServices';
import { consultingServices } from './services/consultingServices';
import { trainingServices } from './services/trainingServices';
import { managementServices } from './services/managementServices';
import { esgServices } from './services/esgServices';
import { climateServices } from './services/climateServices';
import { waterResourcesServices } from './services/waterResourcesServices';
import { degradedAreasServices } from './services/degradedAreasServices';

// Importar sub-serviços de licenciamento
import { lpService } from './services/licensing/lpService';
import { liService } from './services/licensing/liService';
import { loService } from './services/licensing/loService';
import { lasService } from './services/licensing/lasService';
import { lacService } from './services/licensing/lacService';
import { dlamService } from './services/licensing/dlamService';

export type { ServiceStep, ServiceDetailData } from "./types/serviceTypes";

export const serviceDetails: Record<string, ServiceDetailData> = {
  // === SERVIÇOS NOVOS (arquitetura 2025/2026) ===
  licensing: licensingServices,
  authorizations: authorizationsService,
  water_grants: waterGrantsService,
  air_emissions: airEmissionsService,
  technical_studies: technicalStudiesService,
  compliance: complianceService,

  // === SUB-SERVIÇOS DE LICENCIAMENTO ===
  lp: lpService,
  li: liService,
  lo: loService,
  las: lasService,
  lac: lacService,
  dlam: dlamService,

  // === SERVIÇOS LEGADOS — mantidos para compatibilidade de rotas ===
  monitoring: monitoringServices,
  reports: reportsServices,
  consulting: consultingServices,
  training: trainingServices,
  management: managementServices,
  esg: esgServices,
  climate: climateServices,
  water_resources: waterResourcesServices,
  degraded_areas: degradedAreasServices,
};
