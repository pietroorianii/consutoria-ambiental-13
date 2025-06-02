
import React from "react";

interface TexturedBackgroundProps {
  className?: string;
}

export const TexturedBackground: React.FC<TexturedBackgroundProps> = ({ className }) => {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradiente moderno e suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-eco-green/3 to-eco-blue/5"></div>
      
      {/* Padrão geométrico moderno */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #3B7D59 1px, transparent 1px),
                         radial-gradient(circle at 75% 75%, #1A759F 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Elementos decorativos modernos - folhas flutuantes */}
      <div className="absolute top-1/4 left-1/6 w-12 h-12 opacity-10 animate-float" style={{animationDelay: '0s'}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#3B7D59" strokeWidth="1" className="w-full h-full">
          <path d="M5 22c1.47-3.14 2.51-6.05 4.72-8.7C13.68 7.78 18.32 5.45 22 5l-1.3 1.3c-.25.25-.25.5-.25.5"/>
          <path d="M2 22 17.2 6.8C14.5 5.25 11.8 4 9.1 3.25c-.94 2.84-2.5 5.47-5.1 7.35"/>
        </svg>
      </div>
      
      <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-8 animate-float" style={{animationDelay: '2s'}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#1A759F" strokeWidth="1" className="w-full h-full">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
        </svg>
      </div>
      
      {/* Símbolos de água */}
      <div className="absolute bottom-1/4 left-1/4 w-10 h-10 opacity-12 animate-float" style={{animationDelay: '1s'}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#1A759F" strokeWidth="1.5" className="w-full h-full">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
      </div>
      
      <div className="absolute top-2/3 right-1/6 w-14 h-14 opacity-10 animate-float" style={{animationDelay: '3s'}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#3B7D59" strokeWidth="1" className="w-full h-full">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
      
      {/* Árvores estilizadas */}
      <div className="absolute bottom-1/3 right-1/3 w-18 h-18 opacity-8 animate-float" style={{animationDelay: '1.5s'}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#3B7D59" strokeWidth="1" className="w-full h-full">
          <path d="M12 22V8"/>
          <path d="M5 12H12L8 8H15L11 4H18L12 2L6 4H13L9 8H16L12 12H19"/>
        </svg>
      </div>
      
      {/* Elementos fluidos decorativos sutis */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/2 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/2 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/2 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
  );
};
