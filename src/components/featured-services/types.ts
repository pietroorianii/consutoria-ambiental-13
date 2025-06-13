
import React from "react";

export interface ServiceGroup {
  title: string;
  description: string;
  icon: React.ReactNode;
  services: Array<{
    title: string;
    description: string;
    href: string;
  }>;
  color: string;
  buttonColor: string;
  mainDeliverables?: string[];
  badge: string;
}
