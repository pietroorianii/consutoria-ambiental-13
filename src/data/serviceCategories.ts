
import { ServiceCategoryType, ServiceCategoryData } from "./types/serviceCategoryTypes";
import { licensingCategory } from "./categories/licensingCategory";
import { waterResourcesCategory } from "./categories/waterResourcesCategory";
import { degradedAreasCategory } from "./categories/degradedAreasCategory";
import { monitoringCategory } from "./categories/monitoringCategory";
import { reportsCategory } from "./categories/reportsCategory";
import { consultingCategory } from "./categories/consultingCategory";
import { trainingCategory } from "./categories/trainingCategory";
import { managementCategory } from "./categories/managementCategory";
import { esgCategory } from "./categories/esgCategory";
import { climateCategory } from "./categories/climateCategory";

// Re-export types for backward compatibility
export type { ServiceCategoryType, ServiceItem, ServiceCategoryData } from "./types/serviceCategoryTypes";

export const serviceCategories: Record<ServiceCategoryType, ServiceCategoryData> = {
  licensing: licensingCategory,
  water_resources: waterResourcesCategory,
  degraded_areas: degradedAreasCategory,
  monitoring: monitoringCategory,
  reports: reportsCategory,
  consulting: consultingCategory,
  training: trainingCategory,
  management: managementCategory,
  esg: esgCategory,
  climate: climateCategory
};
