
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceDetailHeroProps {
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    image?: string;
    id?: string;
  };
}

export const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => {
  const IconComponent = service.icon;

  // Determinar a URL de volta baseada no serviço
  const getBackUrl = () => {
    const licensingServices = ['lp', 'li', 'lo', 'las', 'lac', 'dlam'];
    if (service.id && licensingServices.includes(service.id)) {
      return '/services/licensing';
    }
    return '/services';
  };

  const getBackText = () => {
    const licensingServices = ['lp', 'li', 'lo', 'las', 'lac', 'dlam'];
    if (service.id && licensingServices.includes(service.id)) {
      return 'Voltar ao Licenciamento';
    }
    return 'Voltar aos Serviços';
  };

  return (
    <div className="relative">
      {/* Hero principal */}
      <div className="bg-gradient-to-r from-eco-green via-eco-green-dark to-eco-blue py-20 relative overflow-hidden">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-eco-green/60 via-transparent to-eco-green-dark/80" />
        <div className="absolute inset-0 leaf-pattern opacity-5" />

        <div className="container relative z-10">
          {/* Botão voltar */}
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="outline" className="bg-white/15 border-white/30 text-white hover:bg-white/25 backdrop-blur-sm text-sm">
              <Link to={getBackUrl()} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {getBackText()}
              </Link>
            </Button>
          </div>

          {/* Conteúdo central */}
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            {/* Ícone */}
            <div className="p-6 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 shadow-2xl flex-shrink-0">
              <IconComponent className="h-16 w-16 text-white" />
            </div>

            {/* Título e descrição */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {service.title}
              </h1>
              <div className="h-1 w-20 bg-white/50 rounded-full mb-4 mx-auto md:mx-0" />
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards de impacto rápido — abaixo do hero */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="p-2.5 bg-eco-green/10 rounded-xl flex-shrink-0">
                <Clock className="h-5 w-5 text-eco-green" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Agilidade</p>
                <p className="text-sm font-semibold text-gray-800">Processo conduzido do início ao fim</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="p-2.5 bg-eco-blue/10 rounded-xl flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-eco-blue" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Conformidade</p>
                <p className="text-sm font-semibold text-gray-800">Total adequação à legislação vigente</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="p-2.5 bg-eco-accent-orange/10 rounded-xl flex-shrink-0">
                <Building2 className="h-5 w-5 text-eco-accent-orange" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Experiência</p>
                <p className="text-sm font-semibold text-gray-800">Equipe especializada e certificada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
