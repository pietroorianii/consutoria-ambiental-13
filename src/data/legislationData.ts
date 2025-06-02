
import { LegislationCategory } from "./legislation/types";
import { industryLegislation } from "./legislation/industryData";
import { constructionLegislation } from "./legislation/constructionData";
import { agricultureLegislation } from "./legislation/agricultureData";

export * from "./legislation/types";

export const legislationCategories: LegislationCategory[] = [
  industryLegislation,
  constructionLegislation,
  agricultureLegislation
];
