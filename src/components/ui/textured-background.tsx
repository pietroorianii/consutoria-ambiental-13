
import React from "react";

interface TexturedBackgroundProps {
  className?: string;
}

export const TexturedBackground: React.FC<TexturedBackgroundProps> = ({ className }) => {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {/* Camada base - gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-prisma-gray-light to-white"></div>
      
      {/* Camada de textura geométrica sutil */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #2A6F47 1px, transparent 1px),
                         radial-gradient(circle at 75% 75%, #0077C2 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Formas abstratas modernas com cores PRISMA */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-prisma-green/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-prisma-blue/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-prisma-yellow/3 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      {/* Elementos geométricos abstratos muito sutis */}
      <div className="absolute top-1/4 left-1/6 w-2 h-32 bg-prisma-green/5 rounded-full transform rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/6 w-2 h-24 bg-prisma-blue/5 rounded-full transform -rotate-45 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      
      {/* Pontos decorativos modernos */}
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-prisma-yellow/10 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-prisma-green/10 rounded-full animate-pulse-slow" style={{animationDelay: '2.5s'}}></div>
    </div>
  );
};
