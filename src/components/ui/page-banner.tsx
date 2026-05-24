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
        return 'text-brand-secondary';
      case 'earth':
        return 'text-brand-primary';
      case 'yellow':
        return 'text-brand-accent';
      case 'orange':
        return 'text-brand-accent';
      case 'teal':
        return 'text-brand-accent';
      default:
        return 'text-brand-accent';
    }
  };

  return (
    <div className="bg-gradient-to-r from-brand-dark via-brand-primary/80 to-brand-dark py-24 relative overflow-hidden" style={{ backgroundColor: '#1a3a2a' }}>
      {/* Background Image */}
      {image && (
        <img 
          src={image} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
          fetchPriority="low"
        />
      )}
      
      {/* Gradient overlay mais sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-primary/50 to-brand-dark/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-cream/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Icon with standardized styling and dynamic color */}
          <div className="p-5 rounded-full bg-white/10 backdrop-blur-sm animate-float border border-white/20 shadow-glass">
            {React.cloneElement(icon as React.ReactElement, { 
              className: `h-12 w-12 ${getIconColorClass(iconColor)}` 
            })}
          </div>
          
          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sora animate-fade-up" 
                style={{
                  textShadow: "0px 2px 4px rgba(0,0,0,0.3)"
                }}>
              {title}
            </h1>
            
            <div className="h-1 w-24 bg-brand-accent rounded-full mx-auto my-6 animate-fade-up"
                 style={{animationDelay: "0.2s"}}></div>
            
            <p style={{
                animationDelay: "0.3s",
                textShadow: "0px 1px 2px rgba(0,0,0,0.2)",
                lineHeight: "1.8"
              }} 
              className="text-white/95 font-inter max-w-3xl mx-auto animate-fade-up text-lg md:text-xl leading-relaxed">
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
