
import { LegislationCategory } from "./types";
import { industryLegislation } from "./industryData";
import { constructionLegislation } from "./constructionData";
import { agricultureLegislation } from "./agricultureData";

export * from "./types";

export const legislationCategories: LegislationCategory[] = [
  industryLegislation,
  constructionLegislation,
  agricultureLegislation
];
