
import React from "react";

interface ServiceBannerProps {
  categoryData: {
    title: string;
    description: string;
    icon: React.ReactNode;
    image?: string;
  };
}

export function ServiceBanner({ categoryData }: ServiceBannerProps) {
  return (
    <div className="bg-gradient-to-r from-eco-green to-eco-blue py-24 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('${
            categoryData.image ||
            "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&h=600"
          }')`,
        }}
      ></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-organic-pattern mix-blend-overlay opacity-25"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-blue/20"></div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-eco-green/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-eco-blue/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Icon */}
          <div className="p-5 rounded-full bg-white/20 backdrop-blur-sm animate-float border border-white/30 shadow-glass">
            {categoryData.icon}
          </div>

          {/* Title */}
          <div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-up"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              {categoryData.title}
            </h1>

            <div
              className="h-1 w-24 bg-white/50 rounded-full mx-auto my-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            ></div>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                animationDelay: "0.3s",
                textShadow: "0px 1px 2px rgba(0,0,0,0.1)",
              }}
              className="text-white/90 max-w-3xl mx-auto animate-fade-up text-lg md:text-xl leading-relaxed"
            >
              {categoryData.description}
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
