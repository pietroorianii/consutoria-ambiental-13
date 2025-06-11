
import React from 'react';
import { Building, Factory, Tractor, Stethoscope, ShoppingCart, Hammer } from 'lucide-react';

const clientTypes = [
  { name: 'Indústrias', icon: Factory, description: '50+ indústrias atendidas' },
  { name: 'Agronegócio', icon: Tractor, description: '200+ propriedades rurais' },
  { name: 'Construção', icon: Hammer, description: '100+ obras licenciadas' },
  { name: 'Saúde', icon: Stethoscope, description: '30+ estabelecimentos de saúde' },
  { name: 'Comércio', icon: ShoppingCart, description: '80+ empreendimentos comerciais' },
  { name: 'Empresas', icon: Building, description: '300+ empresas de diversos portes' }
];

export function SocialProof() {
  return (
    <section className="bg-gradient-to-r from-eco-green/5 to-eco-blue/5 py-12 border-y border-eco-green/10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold uppercase text-eco-green tracking-widest mb-2">
            Quem Confia na Nossa Expertise
          </h3>
          <p className="text-gray-600 font-body">
            Mais de 500 empresas já escolheram a L&P para suas necessidades ambientais
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="text-center group hover:bg-white hover:shadow-lg rounded-xl p-4 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-eco-green/10 rounded-full flex items-center justify-center group-hover:bg-eco-green/20 transition-colors">
                <client.icon className="h-6 w-6 text-eco-green" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1 font-secondary">
                {client.name}
              </h4>
              <p className="text-xs text-gray-600 font-body">
                {client.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-body">
            Atendemos empresas de todos os portes em todo o estado do Paraná
          </p>
        </div>
      </div>
    </section>
  );
}
