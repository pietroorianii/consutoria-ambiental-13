
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

export function StatsSection() {
  return (
    <div className="text-center mt-16 scroll-trigger">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-eco-green/30 hover:border-eco-green/50 transition-colors">
          <CheckCircle className="h-5 w-5 text-eco-green" />
          <span className="font-medium text-gray-700">+500 Projetos Realizados</span>
        </div>
        <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-eco-blue/30 hover:border-eco-blue/50 transition-colors">
          <CheckCircle className="h-5 w-5 text-eco-blue" />
          <span className="font-medium text-gray-700">98% Taxa de Sucesso</span>
        </div>
        <div className="flex items-center justify-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-eco-accent-teal/30 hover:border-eco-accent-teal/50 transition-colors">
          <CheckCircle className="h-5 w-5 text-eco-accent-teal" />
          <span className="font-medium text-gray-700">Conformidade Garantida</span>
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
