
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
  const categoryId =
    group.color === 'prisma-green' ? 'licensing' :
    group.color === 'prisma-blue' ? 'technical_studies' :
    'compliance';

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-300 bg-gradient-to-br from-white via-white to-prisma-green/5 backdrop-blur-sm border-2 border-prisma-gray-light/30 ${
        group.color === 'prisma-green' ? 'hover:border-prisma-green/50 hover:to-prisma-green/15' :
        group.color === 'prisma-blue' ? 'hover:border-prisma-blue/50 hover:to-prisma-blue/15' :
        'hover:border-prisma-yellow/50 hover:to-prisma-yellow/15'
      } h-full flex flex-col hover:shadow-xl hover:-translate-y-2 scroll-trigger shadow-lg`}
      style={{ animationDelay: `${0.1 + index * 0.1}s`, willChange: 'transform' }}
    >
      {/* Gradiente de fundo animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        group.color === 'prisma-green' ? 'from-prisma-green/5 via-prisma-green/10 to-prisma-green/20' :
        group.color === 'prisma-blue' ? 'from-prisma-blue/5 via-prisma-blue/10 to-prisma-blue/20' :
        'from-prisma-yellow/5 via-prisma-yellow/10 to-prisma-yellow/20'
      } opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
      
      {/* Linha de acento animada no topo com cor específica do grupo */}
      <div className={`absolute top-0 left-0 right-0 h-3 ${
        group.color === 'prisma-green' ? 'bg-gradient-to-r from-prisma-green to-emerald-400' :
        group.color === 'prisma-blue' ? 'bg-gradient-to-r from-prisma-blue to-blue-400' :
        'bg-gradient-to-r from-prisma-yellow to-yellow-400'
      } opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100`}></div>
      
      {/* Efeito de brilho no hover - mais intenso */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardHeader className="text-center pb-4 relative z-10">
        {/* Container do ícone com animação especial */}
        <div className="relative mb-6 mx-auto w-24 h-24">
          {/* Fundo colorido específico para cada grupo */}
          <div className={`absolute inset-0 rounded-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
            group.color === 'prisma-green' ? 'bg-gradient-to-br from-prisma-green/20 to-emerald-300/30 group-hover:from-prisma-green/40 group-hover:to-emerald-300/50' :
            group.color === 'prisma-blue' ? 'bg-gradient-to-br from-prisma-blue/20 to-blue-300/30 group-hover:from-prisma-blue/40 group-hover:to-blue-300/50' :
            'bg-gradient-to-br from-prisma-yellow/20 to-yellow-300/30 group-hover:from-prisma-yellow/40 group-hover:to-yellow-300/50'
          }`}></div>
          
          <div className="relative w-full h-full flex items-center justify-center bg-white/90 rounded-2xl group-hover:bg-white transition-all duration-500 group-hover:-rotate-6 shadow-lg group-hover:shadow-2xl">
            {React.cloneElement(group.icon as React.ReactElement, {
              className: `h-10 w-10 ${
                group.color === 'prisma-green' ? 'text-prisma-green' :
                group.color === 'prisma-blue' ? 'text-prisma-blue' :
                'text-prisma-yellow'
              } group-hover:scale-125 transition-all duration-500`
            })}
          </div>
        </div>
        
        {/* Badge animado */}
        <div className="mb-4">
          <span className={`inline-block px-5 py-2 text-sm font-bold rounded-full ${
            group.color === 'prisma-green' ? 'bg-gradient-to-r from-prisma-green/20 to-emerald-300/30 text-prisma-green group-hover:from-prisma-green/40 group-hover:to-emerald-300/50' :
            group.color === 'prisma-blue' ? 'bg-gradient-to-r from-prisma-blue/20 to-blue-300/30 text-prisma-blue group-hover:from-prisma-blue/40 group-hover:to-blue-300/50' :
            'bg-gradient-to-r from-prisma-yellow/20 to-yellow-300/30 text-prisma-yellow group-hover:from-prisma-yellow/40 group-hover:to-yellow-300/50'
          } group-hover:scale-110 transition-all duration-300 uppercase tracking-wider shadow-sm group-hover:shadow-md`} style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>
            {group.badge}
          </span>
        </div>
        
        <CardTitle className={`text-xl ${
          group.color === 'prisma-green' ? 'group-hover:text-prisma-green' :
          group.color === 'prisma-blue' ? 'group-hover:text-prisma-blue' :
          'group-hover:text-prisma-yellow'
        } transition-colors duration-300 leading-tight mb-3 relative`} style={{
          fontFamily: "'Poppins', sans-serif",
          color: "#333333"
        }}>
          <span className="group-hover:underline underline-offset-4 decoration-2 transition-all duration-300">
            {group.title}
          </span>
        </CardTitle>
        
        <p className="text-base text-prisma-gray-text/80 leading-relaxed group-hover:text-prisma-gray-text transition-colors duration-300" style={{
          fontFamily: "'Montserrat', sans-serif"
        }}>
          {group.description}
        </p>
      </CardHeader>
      
      <CardContent className="px-6 pb-6 flex-grow relative z-10 flex flex-col">
        {/* Principais Entregas com animação */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-prisma-gray-text mb-4 font-secondary group-hover:underline underline-offset-2 decoration-2 transition-all duration-300">
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
                  group.color === 'prisma-green' ? 'text-prisma-green' :
                  group.color === 'prisma-blue' ? 'text-prisma-blue' :
                  'text-prisma-yellow'
                } mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} />
                <span className="text-base text-prisma-gray-text/90 leading-relaxed group-hover/item:text-prisma-gray-text group-hover/item:underline underline-offset-2 transition-all duration-300" style={{
                  fontFamily: "'Montserrat', sans-serif"
                }}>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Serviços Prestados */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-prisma-gray-text mb-4 font-secondary group-hover:underline underline-offset-2 decoration-2 transition-all duration-300">
            Serviços Prestados:
          </h4>
          <div className="space-y-3">
            {group.services.map((service, idx) => (
              <Link
                key={idx}
                to={service.href}
                className="block p-4 rounded-lg hover:bg-prisma-gray-light/40 transition-all duration-300 group/service"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-grow">
                    <span className={`text-base font-semibold text-prisma-gray-text ${
                      group.color === 'prisma-green' ? 'group-hover/service:text-prisma-green' :
                      group.color === 'prisma-blue' ? 'group-hover/service:text-prisma-blue' :
                      'group-hover/service:text-prisma-yellow'
                    } transition-all duration-300 block mb-2 group-hover/service:underline underline-offset-2`} style={{
                      fontFamily: "'Montserrat', sans-serif"
                    }}>
                      {service.title}
                    </span>
                    <span className="text-sm text-prisma-gray-text/70 block leading-relaxed group-hover/service:text-prisma-gray-text group-hover/service:underline underline-offset-1 transition-all duration-300" style={{
                      fontFamily: "'Montserrat', sans-serif"
                    }}>
                      {service.description}
                    </span>
                  </div>
                  <ExternalLink className={`h-4 w-4 text-prisma-gray-text/50 ${
                    group.color === 'prisma-green' ? 'group-hover/service:text-prisma-green' :
                    group.color === 'prisma-blue' ? 'group-hover/service:text-prisma-blue' :
                    'group-hover/service:text-prisma-yellow'
                  } transition-all duration-300 ml-3 flex-shrink-0 group-hover/service:scale-125`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
      
      {/* Footer com botões animados */}
      <div className="mt-auto p-6 pt-4 border-t border-prisma-gray-light/40 bg-gradient-to-r from-prisma-gray-light/10 to-prisma-gray-light/20 group-hover:from-prisma-gray-light/20 group-hover:to-prisma-gray-light/30 transition-all duration-300 relative z-10">
        <div className="flex gap-3">
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className={`flex-1 ${
              group.color === 'prisma-green' ? 'border-prisma-green/30 text-prisma-green hover:bg-prisma-green hover:text-white' :
              group.color === 'prisma-blue' ? 'border-prisma-blue/30 text-prisma-blue hover:bg-prisma-blue hover:text-white' :
              'border-prisma-yellow/30 text-prisma-yellow hover:bg-prisma-yellow hover:text-white'
            } transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg hover:underline underline-offset-2`}
          >
            <Link to={`/services/${categoryId}`} className="flex items-center justify-center gap-2">
              Explorar 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild
            size="sm"
            className={`${group.buttonColor} text-white transition-all duration-300 group-hover:scale-105 shadow-md group-hover:shadow-xl hover:underline underline-offset-2`}
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
