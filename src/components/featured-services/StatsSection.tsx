
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, TreePine, ShoppingCart, Stethoscope, Hammer } from "lucide-react";

export function StatsSection() {
  return (
    <div className="text-center mt-16 scroll-trigger">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Atendemos Diversos Segmentos
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nossa expertise abrange múltiplos setores industriais e empresariais
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        <div className="group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm rounded-2xl border-2 border-eco-green/30 hover:border-eco-green hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer p-6">
          {/* Gradiente de fundo animado mais suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 to-eco-green/15 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-green to-emerald-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-t-2xl"></div>
          
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <Building2 className="h-12 w-12 text-eco-green group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
            <span className="font-semibold text-xl text-gray-800 group-hover:text-eco-green transition-all duration-300">
              Indústrias
            </span>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">
              Licenciamento e conformidade ambiental
            </p>
          </div>
        </div>
        
        <div className="group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm rounded-2xl border-2 border-eco-blue/30 hover:border-eco-blue hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer p-6">
          {/* Gradiente de fundo animado mais suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-eco-blue/5 to-eco-blue/15 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-blue to-blue-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-t-2xl"></div>
          
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <Factory className="h-12 w-12 text-eco-blue group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
            <span className="font-semibold text-xl text-gray-800 group-hover:text-eco-blue transition-all duration-300">
              Empresas
            </span>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">
              Gestão de resíduos e sustentabilidade
            </p>
          </div>
        </div>
        
        <div className="group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm rounded-2xl border-2 border-eco-accent-teal/30 hover:border-eco-accent-teal hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer p-6">
          {/* Gradiente de fundo animado mais suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-eco-accent-teal/5 to-eco-accent-teal/15 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-accent-teal to-teal-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-t-2xl"></div>
          
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <TreePine className="h-12 w-12 text-eco-accent-teal group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
            <span className="font-semibold text-xl text-gray-800 group-hover:text-eco-accent-teal transition-all duration-300">
              Agronegócio
            </span>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">
              Monitoramento e estudos ambientais
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm rounded-2xl border-2 border-eco-accent-orange/30 hover:border-eco-accent-orange hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer p-6">
          {/* Gradiente de fundo animado mais suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-eco-accent-orange/5 to-eco-accent-orange/15 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-accent-orange to-orange-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-t-2xl"></div>
          
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <ShoppingCart className="h-12 w-12 text-eco-accent-orange group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
            <span className="font-semibold text-xl text-gray-800 group-hover:text-eco-accent-orange transition-all duration-300">
              Comércio e Serviços
            </span>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">
              Licenciamento e gestão ambiental
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm rounded-2xl border-2 border-red-500/30 hover:border-red-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer p-6">
          {/* Gradiente de fundo animado mais suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-500/15 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-t-2xl"></div>
          
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <Stethoscope className="h-12 w-12 text-red-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
            <span className="font-semibold text-xl text-gray-800 group-hover:text-red-500 transition-all duration-300">
              Saúde
            </span>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">
              Gestão de resíduos hospitalares
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm rounded-2xl border-2 border-amber-600/30 hover:border-amber-600 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer p-6">
          {/* Gradiente de fundo animado mais suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-600/15 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
          
          {/* Linha de acento animada no topo */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-t-2xl"></div>
          
          <div className="flex flex-col items-center justify-center gap-4 relative z-10">
            <Hammer className="h-12 w-12 text-amber-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
            <span className="font-semibold text-xl text-gray-800 group-hover:text-amber-600 transition-all duration-300">
              Construção
            </span>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">
              Licenciamento de obras e canteiros
            </p>
          </div>
        </div>
      </div>
      
      <Button asChild size="lg" className="btn-gradient text-white group overflow-hidden relative py-6 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
        <Link to="/contact" className="flex items-center gap-2 relative z-10 text-base">
          Fale com um Especialista
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </Button>
    </div>
  );
}
