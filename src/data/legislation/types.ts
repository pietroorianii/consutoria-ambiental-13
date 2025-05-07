
import { LucideIcon } from "lucide-react";

export interface LegislationItem {
  title: string;
  description: string;
  link: string;
}

export interface LegislationSubcategory {
  title: string;
  description: string;
  items: LegislationItem[];
}

export interface LegislationCategory {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  items: string[];
  link: string;
  subcategories?: LegislationSubcategory[];
}
