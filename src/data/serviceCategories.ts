import { ServiceCategoryType, ServiceCategoryData } from "./types/serviceCategoryTypes";
import { licensingCategory } from "./categories/licensingCategory";
import { authorizationsCategory } from "./categories/authorizationsCategory";
import { waterGrantsCategory } from "./categories/waterGrantsCategory";
import { technicalStudiesCategory } from "./categories/technicalStudiesCategory";
import { airEmissionsCategory } from "./categories/airEmissionsCategory";
import { complianceCategory } from "./categories/complianceCategory";

export type { ServiceCategoryType, ServiceItem, ServiceCategoryData } from "./types/serviceCategoryTypes";

export const serviceCategories: Record<ServiceCategoryType, ServiceCategoryData> = {
  licensing: licensingCategory,
  authorizations: authorizationsCategory,
  water_grants: waterGrantsCategory,
  technical_studies: technicalStudiesCategory,
  air_emissions: airEmissionsCategory,
  compliance: complianceCategory,
};
