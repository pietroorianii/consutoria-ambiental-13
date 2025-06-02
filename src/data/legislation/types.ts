
import { LucideIcon } from "lucide-react";

export interface LegislationItem {
  id?: string;
  title: string;
  description: string;
  link: string;
  url?: string;
  summary?: string;
  applicableStates?: string[];
  lastUpdate?: string;
  shouldHighlight?: boolean;
  searchTerm?: string;
  isSelected?: boolean;
  // Add the missing properties
  number?: string;
  category?: string;
  date?: string;
  tags?: string[];
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
  items: string[] | LegislationItem[];
  link: string;
  subcategories?: LegislationSubcategory[];
}
