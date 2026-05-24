import React, { useEffect, useRef, useState } from 'react';
import { Building2, Award, Briefcase, Layers } from 'lucide-react';

const metrics = [
  { value: 5, suffix: '+', label: 'anos no mercado', icon: Award },
  { value: 300, suffix: '+', label: 'licenças emitidas no PR', icon: Briefcase },
  { value: 100, suffix: '%', label: 'taxa de aprovação', icon: Building2 },
  { value: 10, suffix: '', label: 'segmentos atendidos', icon: Layers },
];

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function MetricCard({ m, inView }: { m: typeof metrics[0]; inView: boolean }) {
  const v = useCountUp(m.value, inView);
  const Icon = m.icon;
  return (
    <div className="text-center group">
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-accent/15 grid place-items-center group-hover:bg-brand-accent/25 transition-colors">
        <Icon className="h-7 w-7 text-brand-accent" />
      </div>
      <div className="font-sora text-4xl md:text-5xl font-bold text-brand-cream tabular-nums">
        {v}{m.suffix}
      </div>
      <div className="font-inter text-sm text-brand-cream/70 mt-2 uppercase tracking-wider">
        {m.label}
      </div>
    </div>
  );
}

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-brand-dark text-brand-cream py-20 md:py-24 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-brand-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-[24rem] h-[24rem] rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cream/15 bg-brand-cream/5 text-xs font-inter uppercase tracking-widest text-brand-cream/80 mb-4">
            Em números
          </div>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-brand-cream">
            Resultados que falam por <span className="text-brand-accent">si</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => <MetricCard key={m.label} m={m} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}
