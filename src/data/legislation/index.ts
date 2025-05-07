
import { LegislationCategory } from "./types";
import { industryLegislation } from "./industryData";
import { constructionLegislation } from "./constructionData";
import { agricultureLegislation } from "./agricultureData";
import { waterLegislation } from "./waterData";

export * from "./types";

export const legislationCategories: LegislationCategory[] = [
  industryLegislation,
  constructionLegislation,
  agricultureLegislation,
  waterLegislation
];
