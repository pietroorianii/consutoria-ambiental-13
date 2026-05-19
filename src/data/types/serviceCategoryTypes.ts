
import React from "react";

export type ServiceCategoryType = 'licensing' | 'monitoring' | 'reports' | 'consulting' | 'training' | 'management' | 'esg' | 'climate' | 'water_resources' | 'degraded_areas';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategoryData {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  services: ServiceItem[];
}
