import React from 'react';
import { Search, ClipboardList, Wrench, Award } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Diagnóstico Inicial', desc: 'Análise técnica detalhada do contexto ambiental e regulatório do seu negócio.' },
  { icon: ClipboardList, title: 'Planejamento Estratégico', desc: 'Roteiro personalizado com cronograma, entregáveis e responsabilidades claras.' },
  { icon: Wrench, title: 'Execução Técnica', desc: 'Implementação rigorosa por especialistas, com comunicação contínua e transparente.' },
  { icon: Award, title: 'Entrega e Conformidade', desc: 'Documentação aprovada, conformidade legal e suporte pós-entrega garantidos.' },
];

export function WorkProcess() {
  return (
    <section className="container py-20 md:py-28 relative">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-inter uppercase tracking-widest mb-5">
          Como Trabalhamos
        </div>
        <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
          Método claro do diagnóstico à{' '}
          <span className="text-brand-accent">conformidade</span>.
        </h2>
        <p className="font-inter text-lg text-brand-dark/70 mt-5 leading-relaxed">
          Quatro etapas integradas que garantem previsibilidade técnica e segurança regulatória.
        </p>
      </div>

      <div className="relative">
        {/* Connector line (desktop only) */}
        <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-5">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-2xl bg-brand-cream border border-brand-primary/15 shadow-soft grid place-items-center">
                      <Icon className="h-9 w-9 text-brand-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-brand-accent text-white text-xs font-sora font-bold grid place-items-center shadow-md">
                      {i + 1}
                    </div>
                  </div>
                </div>
                <h3 className="font-sora text-lg font-bold text-brand-dark mb-2">{s.title}</h3>
                <p className="font-inter text-sm text-brand-dark/70 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
