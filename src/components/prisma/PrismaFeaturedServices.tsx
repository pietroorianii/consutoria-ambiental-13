
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Droplets, FileCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Licenciamento e Autorizações",
    items: [
      "Licenças (LP, LI, LO)",
      "Autorizações e Dispensas",
      "Acompanhamento de Processos"
    ],
    href: "/services/licensing"
  },
  {
    icon: Droplets,
    title: "Outorgas e Recursos Hídricos",
    items: [
      "Outorgas de Uso da Água",
      "Estudos Hidrológicos",
      "Monitoramento Hídrico"
    ],
    href: "/services/water-resources"
  },
  {
    icon: FileCheck,
    title: "Gestão de Resíduos",
    items: [
      "Planos de Gerenciamento (PGRS)",
      "Inventários de Resíduos",
      "Destinação Adequada"
    ],
    href: "/services/waste-management"
  },
  {
    icon: BarChart3,
    title: "Consultoria ESG",
    items: [
      "Diagnóstico ESG",
      "Relatórios de Sustentabilidade",
      "Estratégias Ambientais"
    ],
    href: "/services/esg"
  }
];

export function PrismaFeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
            Serviços em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>
            Soluções completas para todas as necessidades ambientais da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-prisma-green/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-prisma-green/20 transition-colors">
                    <service.icon className="h-8 w-8 text-prisma-green" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-4" style={{
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    {service.title}
                  </h3>
                </div>

                <div className="flex-grow mb-6">
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600 flex items-start" style={{
                        fontFamily: "'Montserrat', sans-serif"
                      }}>
                        <span className="text-prisma-green mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  asChild 
                  className="w-full bg-prisma-green hover:bg-prisma-green/90 text-white"
                >
                  <Link to={service.href}>Saber Mais</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
