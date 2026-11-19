import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { MetaTags } from "@/components/layout/MetaTags";
import { AxisPageHero } from "@/components/brand/AxisPageHero";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { axisImages } from "@/components/brand/assets";
import { catalog, families, needs, type Need, type ServiceFamily, type CatalogService } from "@/data/serviceCatalog";
import { ModalityStrip } from "@/components/service/ModalityExplorer";
import { cn } from "@/lib/utils";

function ServiceCard({ s, dim }: { s: CatalogService; dim: boolean }) {
  const Icon = s.icon;
  return (
    <Link
      to={`/service/${s.id}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-brand-dark/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(6,24,33,0.5)]",
        dim && "opacity-40 saturate-50 hover:opacity-100 hover:saturate-100",
      )}
    >
      <div className="relative h-44 overflow-hidden">
        <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent" />
        <span className={cn("absolute bottom-4 left-5 grid h-11 w-11 place-items-center rounded-full bg-white/95", s.water ? "text-brand-primary" : "text-brand-accent")}>
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-brand-dark">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-dark/65">{s.short}</p>
        <ul className="mt-4 space-y-1.5">
          {s.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-brand-dark/75">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" /> {d}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-accent">
          Ver como funciona <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

const ServicesPage = () => {
  const [need, setNeed] = useState<Need | null>(null);
  const reduce = useReducedMotion();
  const matches = useMemo(() => new Set(catalog.filter((s) => !need || s.needs.includes(need)).map((s) => s.id)), [need]);

  return (
    <PageWrapper>
      <MetaTags
        title="Serviços de consultoria ambiental no Paraná | Axis Soluções Ambientais"
        description="Licenciamento, autorizações florestais, outorga, cadastro IBAMA, estudos técnicos, monitoramento, áreas contaminadas, conformidade, auditorias, ESG e treinamentos."
      />
      <AxisPageHero
        title={<>Tudo o que sua empresa precisa para <span className="font-semibold text-brand-lime">operar dentro da lei.</span></>}
        description="Dez serviços, um único responsável técnico. Diga o que você precisa resolver e mostramos por onde começar."
        image={axisImages.heroValley}
      />

      {/* Filtro por necessidade */}
      <section className="sticky top-[4.5rem] z-30 border-b border-brand-dark/10 bg-white/90 backdrop-blur-xl">
        <div className="container flex items-center gap-3 overflow-x-auto py-3 [scrollbar-width:none]">
          <span className="shrink-0 font-display text-sm font-semibold text-brand-dark">O que você precisa resolver?</span>
          {needs.map((n) => (
            <button
              key={n.id}
              type="button"
              aria-pressed={need === n.id}
              onClick={() => setNeed(need === n.id ? null : n.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                need === n.id ? "border-brand-dark bg-brand-dark text-white" : "border-brand-dark/15 text-brand-dark/75 hover:border-brand-accent hover:text-brand-accent",
              )}
            >
              {n.label}
            </button>
          ))}
          {need && (
            <button type="button" onClick={() => setNeed(null)} className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand-dark/55 hover:text-brand-dark">
              <X className="h-4 w-4" /> Limpar
            </button>
          )}
        </div>
      </section>

      <AnimatePresence>
        {need && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-brand-cream"
          >
            <p className="container pt-6 text-sm text-brand-dark/70">
              <span className="font-semibold text-brand-dark">{matches.size} serviços</span> resolvem isso. Os demais ficam esmaecidos.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-brand-cream pb-8">
        {(Object.keys(families) as ServiceFamily[]).map((fam) => (
          <section key={fam} className="container pt-14">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-dark md:text-3xl">{families[fam].title}</h2>
                <span className="axis-rule mt-3" />
              </div>
              <p className="max-w-md text-sm text-brand-dark/60">{families[fam].intro}</p>
            </div>
            <div className={cn("mt-8 grid gap-5 sm:grid-cols-2", catalog.filter((s) => s.family === fam).length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
              {catalog.filter((s) => s.family === fam).map((s) => (
                <ServiceCard key={s.id} s={s} dim={!!need && !matches.has(s.id)} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Modalidades em uma linha */}
      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <SectionHeading
            title="Qual licença? Depende do porte e do impacto."
            intro="As modalidades do licenciamento no Paraná, da mais simples à mais completa. Prazos contados a partir do protocolo completo no IAT."
          />
          <ModalityStrip className="mt-10" />
        </div>
      </section>

      {/* CTA diagnóstico */}
      <section className="bg-brand-cream pb-24 pt-4">
        <div className="container">
          <div className="axis-navy-surface flex flex-col items-start justify-between gap-6 rounded-[1.5rem] p-8 text-white md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="font-display text-2xl font-medium md:text-3xl">Ainda em dúvida sobre por onde começar?</h2>
              <p className="mt-2 text-brand-silver/80">Responda 5 perguntas e veja o caminho provável para a sua atividade.</p>
            </div>
            <Link to="/diagnostico" className="axis-btn-solid group shrink-0 px-7 py-3.5 text-base">
              Fazer o diagnóstico gratuito <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ServicesPage;
