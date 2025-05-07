
import React from "react";

interface TexturedBackgroundProps {
  className?: string;
}

export const TexturedBackground: React.FC<TexturedBackgroundProps> = ({ className }) => {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {/* Padrão de folhas estilizado aplicado a todo o plano de fundo */}
      <div className="absolute inset-0 leaf-pattern opacity-10"></div>
      
      {/* Elementos fluidos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-eco-green/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-eco-earth/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-eco-green/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-eco-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
  );
};
