
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, FileCheck, Droplets, Recycle } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Licenciamento e Autorizações",
    items: [
      "Licenças (LP, LI, LO)",
      "Autorizações e Dispensas",
      "Acompanhamento de Processos"
    ]
  },
  {
    icon: FileCheck,
    title: "Estudos e Relatórios",
    items: [
      "EIA/RIMA",
      "Planos de Recuperação (PRAD)",
      "Inventários Ambientais"
    ]
  },
  {
    icon: Droplets,
    title: "Recursos Hídricos",
    items: [
      "Outorgas de Uso da Água",
      "Estudos Hidrológicos",
      "Monitoramento de Qualidade"
    ]
  },
  {
    icon: Recycle,
    title: "Gestão de Resíduos",
    items: [
      "Planos de Gerenciamento",
      "Classificação de Resíduos",
      "Consultoria em Logística Reversa"
    ]
  }
];

export function PrismaFeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-prisma-text mb-4 font-poppins">
            Serviços em Destaque
          </h2>
          <div className="h-1 w-24 bg-prisma-green rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-prisma-text/80 max-w-2xl mx-auto font-lato">
            Soluções completas e personalizadas para atender todas as necessidades ambientais da sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-prisma-green/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-prisma-green/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-prisma-green" />
                </div>
                
                <h3 className="text-lg font-bold text-prisma-text font-poppins">
                  {service.title}
                </h3>
                
                <ul className="space-y-2 text-sm text-prisma-text/80">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-prisma-green rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  size="sm"
                  className="bg-prisma-green hover:bg-prisma-green-dark text-white w-full mt-4"
                >
                  <Link to="/services">
                    Saber Mais
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
