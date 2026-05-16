import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { ServiceGroup } from "./types";

interface ServiceGroupCardProps {
  group: ServiceGroup;
  index: number;
}

export function ServiceGroupCard({ group, index }: ServiceGroupCardProps) {
  // Map legacy group.color to the group id for routing
  const categoryId =
    group.color === 'prisma-green' ? 'licensing' :
    group.color === 'prisma-blue' ? 'reports' :
    'esg';

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-300 bg-gradient-to-br from-white via-white to-brand-primary/5 backdrop-blur-sm border-2 border-brand-cream/30 ${
        group.color === 'prisma-green' ? 'hover:border-brand-primary/50 hover:to-brand-primary/15' :
        group.color === 'prisma-blue' ? 'hover:border-brand-secondary/50 hover:to-brand-secondary/15' :
        'hover:border-brand-accent/50 hover:to-brand-accent/15'
      } h-full flex flex-col hover:-translate-y-2 scroll-trigger shadow-lg`}
      style={{ animationDelay: `${0.1 + index * 0.1}s`, willChange: 'transform' }}
    >
      {/* Gradiente de fundo animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        group.color === 'prisma-green' ? 'from-brand-primary/5 via-brand-primary/10 to-brand-primary/20' :
        group.color === 'prisma-blue' ? 'from-brand-secondary/5 via-brand-secondary/10 to-brand-secondary/20' :
        'from-brand-accent/5 via-brand-accent/10 to-brand-accent/20'
      } opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
      
      {/* Linha de acento animada no topo com cor específica do grupo */}
      <div className={`absolute top-0 left-0 right-0 h-3 ${
        group.color === 'prisma-green' ? 'bg-gradient-to-r from-brand-primary to-emerald-400' :
        group.color === 'prisma-blue' ? 'bg-gradient-to-r from-brand-secondary to-blue-400' :
        'bg-gradient-to-r from-brand-accent to-cyan-400'
      } opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}></div>
      
      {/* Efeito de brilho no hover - mais intenso */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardHeader className="text-center pb-4 relative z-10">
        {/* Container do ícone com animação especial */}
        <div className="relative mb-6 mx-auto w-24 h-24">
          {/* Fundo colorido específico para cada grupo */}
          <div className={`absolute inset-0 rounded-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
            group.color === 'prisma-green' ? 'bg-gradient-to-br from-brand-primary/20 to-emerald-300/30 group-hover:from-brand-primary/40 group-hover:to-emerald-300/50' :
            group.color === 'prisma-blue' ? 'bg-gradient-to-br from-brand-secondary/20 to-blue-300/30 group-hover:from-brand-secondary/40 group-hover:to-blue-300/50' :
            'bg-gradient-to-br from-brand-accent/20 to-cyan-300/30 group-hover:from-brand-accent/40 group-hover:to-cyan-300/50'
          }`}></div>
          
          <div className="relative w-full h-full flex items-center justify-center bg-white/90 rounded-2xl group-hover:bg-white transition-all duration-500 group-hover:-rotate-6 shadow-lg group-hover:shadow-2xl">
            {React.cloneElement(group.icon as React.ReactElement, {
              className: `h-10 w-10 ${
                group.color === 'prisma-green' ? 'text-brand-primary' :
                group.color === 'prisma-blue' ? 'text-brand-secondary' :
                'text-brand-accent'
              } group-hover:scale-110 transition-all duration-500`
            })}
          </div>
        </div>
        
        {/* Badge animado */}
        <div className="mb-4">
          <span className={`font-inter inline-block px-5 py-2 text-sm font-bold rounded-full ${
            group.color === 'prisma-green' ? 'bg-gradient-to-r from-brand-primary/20 to-emerald-300/30 text-brand-primary group-hover:from-brand-primary/40 group-hover:to-emerald-300/50' :
            group.color === 'prisma-blue' ? 'bg-gradient-to-r from-brand-secondary/20 to-blue-300/30 text-brand-secondary group-hover:from-brand-secondary/40 group-hover:to-blue-300/50' :
            'bg-gradient-to-r from-brand-accent/20 to-cyan-300/30 text-brand-accent group-hover:from-brand-accent/40 group-hover:to-cyan-300/50'
          } group-hover:scale-105 transition-all duration-300 uppercase tracking-wider shadow-sm group-hover:shadow-md`}>
            {group.badge}
          </span>
        </div>
        
        <CardTitle className={`text-xl font-sora text-brand-dark ${
          group.color === 'prisma-green' ? 'group-hover:text-brand-primary' :
          group.color === 'prisma-blue' ? 'group-hover:text-brand-secondary' :
          'group-hover:text-brand-accent'
        } transition-colors duration-300 leading-tight mb-3 relative`}>
          <span className="group-hover:underline underline-offset-4 decoration-2 transition-all duration-300">
            {group.title}
          </span>
        </CardTitle>
        
        <p className="text-base text-brand-dark/80 font-inter leading-relaxed group-hover:text-brand-dark transition-colors duration-300">
          {group.description}
        </p>
      </CardHeader>
      
      <CardContent className="px-6 pb-6 flex-grow relative z-10 flex flex-col">
        {/* Principais Entregas com animação */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-brand-dark mb-4 font-sora group-hover:underline underline-offset-2 decoration-2 transition-all duration-300">
            Principais Entregas:
          </h4>
          <ul className="space-y-3">
            {group.mainDeliverables?.map((deliverable, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-3 group/item opacity-90 group-hover:opacity-100 transition-all duration-300"
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                <CheckCircle className={`h-5 w-5 ${
                  group.color === 'prisma-green' ? 'text-brand-primary' :
                  group.color === 'prisma-blue' ? 'text-brand-secondary' :
                  'text-brand-accent'
                } mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-base font-inter text-brand-dark/90 leading-relaxed group-hover/item:text-brand-dark group-hover/item:underline underline-offset-2 transition-all duration-300">
                  {deliverable}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Serviços Prestados */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-brand-dark mb-4 font-sora group-hover:underline underline-offset-2 decoration-2 transition-all duration-300">
            Serviços Prestados:
          </h4>
          <div className="space-y-3">
            {group.services.map((service, idx) => (
              <Link
                key={idx}
                to={`/service/${categoryId}`}
                className="block p-4 rounded-lg hover:bg-brand-cream/40 transition-all duration-300 group/service"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-grow">
                    <span className={`text-base font-semibold font-inter text-brand-dark ${
                      group.color === 'prisma-green' ? 'group-hover/service:text-brand-primary' :
                      group.color === 'prisma-blue' ? 'group-hover/service:text-brand-secondary' :
                      'group-hover/service:text-brand-accent'
                    } transition-all duration-300 block mb-2 group-hover/service:underline underline-offset-2`}>
                      {service.title}
                    </span>
                    <span className="text-sm font-inter text-brand-dark/70 block leading-relaxed group-hover/service:text-brand-dark group-hover/service:underline underline-offset-1 transition-all duration-300">
                      {service.description}
                    </span>
                  </div>
                  <ExternalLink className={`h-4 w-4 text-brand-dark/50 ${
                    group.color === 'prisma-green' ? 'group-hover/service:text-brand-primary' :
                    group.color === 'prisma-blue' ? 'group-hover/service:text-brand-secondary' :
                    'group-hover/service:text-brand-accent'
                  } transition-all duration-300 ml-3 flex-shrink-0 group-hover/service:scale-110`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
      
      {/* Footer com botões animados */}
      <div className="mt-auto p-6 pt-4 border-t border-brand-cream/40 bg-gradient-to-r from-brand-cream/10 to-brand-cream/20 group-hover:from-brand-cream/20 group-hover:to-brand-cream/30 transition-all duration-300 relative z-10">
        <div className="flex gap-3">
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className={`font-inter flex-1 ${
              group.color === 'prisma-green' ? 'border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white' :
              group.color === 'prisma-blue' ? 'border-brand-secondary/30 text-brand-secondary hover:bg-brand-secondary hover:text-white' :
              'border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-white'
            } transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg hover:underline underline-offset-2`}
          >
            <Link to={`/service/${categoryId}`} className="flex items-center justify-center gap-2">
              Explorar 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild
            size="sm"
            className={`font-inter bg-brand-primary hover:bg-brand-primary/90 text-white transition-all duration-300 group-hover:scale-105 shadow-md group-hover:shadow-xl hover:underline underline-offset-2`}
          >
            <Link to="/request-quote">
              Orçamento
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
