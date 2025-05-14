
import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
}

export function PageHeader({
  title,
  description,
  icon,
  backgroundImage
}: PageHeaderProps) {
  return <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url('${backgroundImage}')`
    }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>
      
      {/* Textura de folhas no cabeçalho */}
      <div className="absolute inset-0 leaf-pattern opacity-20"></div>
      
      {/* Content */}
      <div className="container relative z-10 py-24 flex flex-col items-center text-center">
        <div className="p-5 rounded-full bg-white/20 backdrop-blur-sm animate-float border border-white/30 shadow-glass mb-6">
          {icon}
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 scroll-trigger">
          {title}
        </h1>
        
        <p className="max-w-2xl text-white/90 md:text-xl text-center scroll-trigger">
          {description}
        </p>
      </div>
    </div>;
}
