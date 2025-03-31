
import React from "react";
import { ServiceCategoryData } from "@/data/serviceCategories";

interface ServiceBannerProps {
  categoryData: ServiceCategoryData;
}

export const ServiceBanner = ({ categoryData }: ServiceBannerProps) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${categoryData.image}')`,
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="mb-6">{categoryData.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {categoryData.title}
          </h1>
          <p className="text-white/90 text-lg">
            {categoryData.description}
          </p>
        </div>
      </div>
    </div>
  );
};
