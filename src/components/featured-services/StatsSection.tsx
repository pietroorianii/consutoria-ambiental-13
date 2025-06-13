
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

export function StatsSection() {
  return (
    <div className="text-center mt-16 scroll-trigger">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
        <div className="group relative overflow-hidden transition-all duration-500 bg-gradient-to-br from-white via-white to-eco-green/10 backdrop-blur-sm rounded-2xl border-2 border-eco-green/20 hover:border-eco-green/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 cursor-pointer">
          {/* Gradiente de fundo animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 via-eco-green/20 to-eco-green/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-eco-green to-emerald-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
          
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="flex items-center justify-center gap-4 px-8 py-6 relative z-10">
            <CheckCircle className="h-8 w-8 text-eco-green group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
            <span className="font-bold text-lg text-gray-700 group-hover:text-eco-green transition-all duration-300 group-hover:underline underline-offset-4 decoration-2">
              +500 Projetos Realizados
            </span>
          </div>
        </div>
        
        <div className="group relative overflow-hidden transition-all duration-500 bg-gradient-to-br from-white via-white to-eco-blue/10 backdrop-blur-sm rounded-2xl border-2 border-eco-blue/20 hover:border-eco-blue/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 cursor-pointer">
          {/* Gradiente de fundo animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-eco-blue/10 via-eco-blue/20 to-eco-blue/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-eco-blue to-blue-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
          
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="flex items-center justify-center gap-4 px-8 py-6 relative z-10">
            <CheckCircle className="h-8 w-8 text-eco-blue group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
            <span className="font-bold text-lg text-gray-700 group-hover:text-eco-blue transition-all duration-300 group-hover:underline underline-offset-4 decoration-2">
              98% Taxa de Sucesso
            </span>
          </div>
        </div>
        
        <div className="group relative overflow-hidden transition-all duration-500 bg-gradient-to-br from-white via-white to-eco-accent-teal/10 backdrop-blur-sm rounded-2xl border-2 border-eco-accent-teal/20 hover:border-eco-accent-teal/60 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 cursor-pointer">
          {/* Gradiente de fundo animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-eco-accent-teal/10 via-eco-accent-teal/20 to-eco-accent-teal/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-eco-accent-teal to-teal-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
          
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="flex items-center justify-center gap-4 px-8 py-6 relative z-10">
            <CheckCircle className="h-8 w-8 text-eco-accent-teal group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
            <span className="font-bold text-lg text-gray-700 group-hover:text-eco-accent-teal transition-all duration-300 group-hover:underline underline-offset-4 decoration-2">
              Conformidade Garantida
            </span>
          </div>
        </div>
      </div>
      
      <Button asChild size="lg" className="btn-gradient text-white group overflow-hidden relative py-6 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
        <Link to="/services" className="flex items-center gap-2 relative z-10 text-base">
          Ver Todos os Serviços
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </Button>
    </div>
  );
}
