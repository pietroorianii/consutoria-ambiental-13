
import React from "react";

export function TabsBackgroundDecoration() {
  return (
    <>
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 leaf-pattern opacity-15"></div>
      
      {/* Elementos fluidos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-eco-green/5 eco-blob rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-eco-blue/5 eco-blob rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Degradê superior e inferior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </>
  );
}
