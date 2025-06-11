
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PrismaCTA() {
  return (
    <section className="py-20 bg-prisma-green text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-prisma-yellow/20 rounded-full blur-xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
            Pronto para transformar sua gestão ambiental?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto" style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>
            Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa a atingir a conformidade ambiental com soluções personalizadas.
          </p>
          
          <div className="pt-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-prisma-green hover:bg-gray-100 px-12 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/request-quote">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
