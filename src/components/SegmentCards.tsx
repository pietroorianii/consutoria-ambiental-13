
import React from 'react';
import { Building2, Factory, TreePine, ShoppingCart, Stethoscope, Hammer } from 'lucide-react';

const segments = [
  { name: 'Indústrias', icon: Building2, description: 'Licenciamento e conformidade ambiental' },
  { name: 'Empresas', icon: Factory, description: 'Gestão de resíduos e sustentabilidade' },
  { name: 'Agronegócio', icon: TreePine, description: 'Outorgas, monitoramento e estudos ambientais' },
  { name: 'Comércio e Serviços', icon: ShoppingCart, description: 'Licenciamento e gestão ambiental' },
  { name: 'Saúde', icon: Stethoscope, description: 'PGRSS e gestão de resíduos hospitalares' },
  { name: 'Construção', icon: Hammer, description: 'PGRCC e licenciamento de obras' },
];

export function SegmentCards() {
  return (
    <section className="bg-gradient-to-r from-brand-accent/5 to-brand-primary/5 py-12 border-y border-brand-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-sora text-2xl md:text-3xl font-bold text-brand-primary mb-4">
            Atendemos sua empresa, seja qual for o setor.
          </h3>
          <p className="font-inter text-lg text-brand-primary/70 max-w-2xl mx-auto">
            Do agronegócio à indústria — cada setor tem uma exigência ambiental diferente. Conhecemos todas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm rounded-2xl border-2 border-brand-primary/10 hover:border-brand-accent hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer p-6"
            >
              {/* Gradiente de fundo animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-accent/15 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl" />

              {/* Linha de acento animada no topo */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-brand-primary opacity-70 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-t-2xl" />

              <div className="flex flex-col items-center justify-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                  <segment.icon className="h-8 w-8 text-brand-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                </div>
                <h4 className="font-sora font-semibold text-lg text-brand-primary group-hover:text-brand-accent transition-all duration-300">
                  {segment.name}
                </h4>
                <p className="font-inter text-sm text-brand-primary/70 group-hover:text-brand-primary/80 transition-colors duration-300 text-center">
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
