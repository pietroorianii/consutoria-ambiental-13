
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-[1px]" />
      </div>
      
      <div className="absolute inset-0 leaf-pattern mix-blend-overlay opacity-20"></div>
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="mb-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block animate-float">
            {categoryData.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ 
            fontFamily: "'Poppins', sans-serif",
            textShadow: "0px 2px 4px rgba(0,0,0,0.3)"
          }}>
            {categoryData.title}
          </h1>
          <p className="text-white/90 text-lg" style={{ fontFamily: "'Roboto', sans-serif" }}>
            {categoryData.description}
          </p>
        </div>
      </div>
    </div>
  );
};
