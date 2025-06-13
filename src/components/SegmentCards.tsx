
import React from 'react';
import { Building2, Factory, TreePine, ShoppingCart, Stethoscope, Hammer } from 'lucide-react';

const segments = [
  { name: 'Indústrias', icon: Building2, description: 'Licenciamento e conformidade ambiental', color: 'eco-green' },
  { name: 'Empresas', icon: Factory, description: 'Gestão de resíduos e sustentabilidade', color: 'eco-blue' },
  { name: 'Agronegócio', icon: TreePine, description: 'Monitoramento e estudos ambientais', color: 'eco-accent-teal' },
  { name: 'Comércio e Serviços', icon: ShoppingCart, description: 'Licenciamento e gestão ambiental', color: 'eco-accent-orange' },
  { name: 'Saúde', icon: Stethoscope, description: 'Gestão de resíduos hospitalares', color: 'red-500' },
  { name: 'Construção', icon: Hammer, description: 'Licenciamento de obras e canteiros', color: 'amber-600' }
];

export function SegmentCards() {
  return (
    <section className="bg-gradient-to-r from-eco-green/5 to-eco-blue/5 py-12 border-y border-eco-green/10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Atendemos Diversos Segmentos
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa expertise abrange múltiplos setores industriais e empresariais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm rounded-2xl border-2 border-gray-200/30 hover:border-eco-green hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer p-6"
            >
              {/* Gradiente de fundo animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 to-eco-green/15 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
              
              {/* Linha de acento animada no topo */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-green to-emerald-400 opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-t-2xl"></div>
              
              <div className="flex flex-col items-center justify-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center group-hover:bg-eco-green/20 transition-colors">
                  <segment.icon className="h-8 w-8 text-eco-green group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 group-hover:text-eco-green transition-all duration-300 font-secondary">
                  {segment.name}
                </h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center font-body">
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
