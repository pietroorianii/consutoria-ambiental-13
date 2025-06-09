
import { LucideIcon } from "lucide-react";

export interface ServiceStep {
  title: string;
  description: string;
  duration: string;
}

export interface ServiceDetailData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  whatIs: string;
  benefits: string[];
  steps: ServiceStep[];
  documents: string[];
  timeline: string;
  legalBasis: string[];
  tips: string[];
}
