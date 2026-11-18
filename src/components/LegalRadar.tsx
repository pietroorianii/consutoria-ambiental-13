import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { legalUpdates, LEGAL_UPDATES_REVIEWED_AT, type LegalScope } from "@/data/legalUpdates";
import { cn } from "@/lib/utils";

const filters: ("Todas" | LegalScope)[] = ["Todas", "Paraná", "Federal", "Norma técnica"];
const fmt = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

export function LegalRadar({ limit = 6 }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todas");
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();

  const items = useMemo(
    () => legalUpdates.filter((u) => filter === "Todas" || u.scope === filter).sort((a, b) => b.date.localeCompare(a.date)),
    [filter],
  );
  const visible = expanded ? items : items.slice(0, limit);

  return (
    <section id="radar" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            title="Radar normativo: o que mudou na lei ambiental"
            intro="As normas do IAT e a legislação federal mudam várias vezes por ano. Acompanhamos por você e mostramos o que muda na prática."
          />
          <div role="tablist" aria-label="Filtrar por esfera" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => { setFilter(f); setExpanded(false); }}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  filter === f ? "border-brand-dark bg-brand-dark text-white" : "border-brand-dark/15 text-brand-dark/75 hover:border-brand-accent hover:text-brand-accent",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ol className="mt-12 divide-y divide-brand-dark/10 border-y border-brand-dark/10">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((u) => (
              <motion.li
                key={u.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid gap-3 py-6 md:grid-cols-[9rem_1fr_auto] md:gap-8"
              >
                <div className="flex items-center gap-3 md:block">
                  <time dateTime={u.date} className="font-display text-sm font-semibold text-brand-dark">{fmt(u.date)}</time>
                  <span className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-medium md:mt-2 md:inline-block",
                    u.scope === "Federal" ? "bg-brand-water/15 text-brand-primary" : u.scope === "Paraná" ? "bg-brand-accent/10 text-brand-accent" : "bg-brand-silver/60 text-brand-dark/70",
                  )}>{u.scope}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-brand-dark">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{u.change}</p>
                  <p className="mt-2 text-sm text-brand-dark/55"><span className="font-medium text-brand-dark/70">Afeta:</span> {u.who}</p>
                </div>
                <div className="flex flex-wrap items-start gap-x-5 gap-y-2 text-sm md:flex-col md:items-end">
                  <a href={u.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-dark/60 hover:text-brand-accent">
                    Fonte: {u.sourceLabel} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {u.serviceHref && (
                    <Link to={u.serviceHref} className="inline-flex items-center gap-1 font-semibold text-brand-accent">
                      Como isso me afeta <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>

        <div className="mt-6 flex flex-col justify-between gap-4 text-sm text-brand-dark/55 sm:flex-row sm:items-center">
          <p>Revisado em {fmt(LEGAL_UPDATES_REVIEWED_AT)}. Conteúdo informativo; a análise do seu caso depende da atividade e da localização.</p>
          {items.length > limit && (
            <button onClick={() => setExpanded((v) => !v)} className="self-start rounded-full border border-brand-dark/15 px-5 py-2 font-semibold text-brand-dark hover:border-brand-accent hover:text-brand-accent sm:self-auto">
              {expanded ? "Mostrar menos" : `Ver todas (${items.length})`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
