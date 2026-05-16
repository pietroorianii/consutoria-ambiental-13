
import React from "react";

interface PageBannerProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  iconColor?: 'green' | 'blue' | 'earth' | 'yellow' | 'orange' | 'teal';
}

export function PageBanner({
  title,
  description,
  icon,
  image,
  iconColor = 'green'
}: PageBannerProps) {
  
  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-prisma-blue';
      case 'earth':
        return 'text-eco-earth';
      case 'yellow':
        return 'text-prisma-yellow';
      case 'orange':
        return 'text-eco-accent-orange';
      case 'teal':
        return 'text-eco-accent-teal';
      default:
        return 'text-prisma-green';
    }
  };

  return (
    <div className="bg-gradient-to-r from-prisma-green via-prisma-blue/80 to-prisma-green py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" 
           style={{backgroundImage: `url('${image || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000&h=1200"}')`}}>
      </div>
      
      {/* Gradient overlay mais sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-prisma-green/60 via-prisma-blue/50 to-prisma-green/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-prisma-yellow/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Icon with standardized styling and dynamic color */}
          <div className="p-5 rounded-full bg-white/20 backdrop-blur-sm animate-float border border-white/30 shadow-glass">
            {React.cloneElement(icon as React.ReactElement, { 
              className: `h-12 w-12 ${getIconColorClass(iconColor)}` 
            })}
          </div>
          
          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-up" 
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.3)"
                }}>
              {title}
            </h1>
            
            <div className="h-1 w-24 bg-prisma-yellow rounded-full mx-auto my-6 animate-fade-up"
                 style={{animationDelay: "0.2s"}}></div>
            
            <p style={{
                fontFamily: "'Montserrat', sans-serif",
                animationDelay: "0.3s",
                textShadow: "0px 1px 2px rgba(0,0,0,0.2)",
                lineHeight: "1.8"
              }} 
              className="text-white/95 max-w-3xl mx-auto animate-fade-up text-lg md:text-xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="wave-divider">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>
    </div>
  );
}
