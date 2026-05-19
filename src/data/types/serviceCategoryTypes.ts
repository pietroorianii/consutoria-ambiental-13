import React from "react";

export type ServiceCategoryType =
  | 'licensing'
  | 'authorizations'
  | 'water_grants'
  | 'technical_studies'
  | 'air_emissions'
  | 'compliance';

export interface ServiceItem {
  title: string;
  description: string;
  detailId?: string;
}

export interface ServiceCategoryData {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  services: ServiceItem[];
}
