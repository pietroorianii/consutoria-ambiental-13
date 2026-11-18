import React from "react";
import { AxisPageHero } from "@/components/brand/AxisPageHero";
import { axisImageFor } from "@/components/brand/imageMap";

interface ServiceBannerProps {
  categoryData: {
    id?: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
  };
  categoryId?: string;
  backUrl?: string;
  backText?: string;
}

export function ServiceBanner({ categoryData, categoryId, backUrl, backText }: ServiceBannerProps) {
  return (
    <AxisPageHero
      title={categoryData.title}
      description={categoryData.description}
      image={axisImageFor(categoryId ?? categoryData.id)}
      backUrl={backUrl}
      backText={backText}
    />
  );
}
