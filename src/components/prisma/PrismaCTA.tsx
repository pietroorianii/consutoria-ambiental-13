
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PrismaCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-prisma-green to-prisma-blue relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
            Pronto para transformar sua gestão ambiental?
          </h2>
          
          <div className="h-1 w-24 bg-white/50 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed font-lato">
            Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa 
            a atingir a conformidade ambiental com soluções personalizadas.
          </p>
          
          <Button 
            asChild 
            size="lg"
            className="bg-white text-prisma-green hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link to="/request-quote">
              Solicitar Orçamento
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full"></div>
      </div>
    </section>
  );
}
