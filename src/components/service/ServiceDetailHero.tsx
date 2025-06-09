
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceDetailHeroProps {
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    image?: string;
  };
}

export const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => {
  const IconComponent = service.icon;

  return (
    <div className="bg-gradient-to-r from-eco-green via-eco-green-dark to-eco-blue py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-15" 
           style={{backgroundImage: `url('${service.image}')`}}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-eco-green/20"></div>
      <div className="absolute inset-0 leaf-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Button asChild variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm">
            <Link to="/services" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar aos Serviços
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col items-center gap-8 text-center max-w-5xl mx-auto">
          <div className="p-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-float shadow-2xl">
            <IconComponent className="h-20 w-20 text-white" />
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-primary leading-tight">
              {service.title}
            </h1>
            
            <div className="h-1 w-32 bg-white/60 rounded-full mx-auto mb-8"></div>
            
            <p className="text-white/95 text-xl md:text-2xl leading-relaxed font-body max-w-4xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
