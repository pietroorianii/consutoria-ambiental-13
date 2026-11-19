import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

/** Modalidades do licenciamento no Paraná (Lei 22.252/2024 e Decreto 9.541/2025). */
export const modalities = [
  {
    id: "dila",
    sigla: "DILA",
    name: "Declaração de Inexigibilidade",
    time: "Emissão imediata",
    level: 1,
    when: "Atividades de impacto insignificante que a norma declara inexigíveis de licença, como várias atividades agrícolas da IN IAT 26/2026.",
    href: "/service/dlam",
  },
  {
    id: "dlam",
    sigla: "DLAM",
    name: "Declaração de Dispensa",
    time: "1 a 15 dias",
    level: 1,
    when: "Baixo impacto, conforme critérios das INs setoriais. Ex.: pavimentação urbana (IN 06/2026) e irrigação de até 10 ha (IN 22/2026).",
    href: "/service/dlam",
  },
  {
    id: "lac",
    sigla: "LAC",
    name: "Licença por Adesão e Compromisso",
    time: "Emissão eletrônica",
    level: 2,
    when: "Atividades padronizáveis, de baixo a médio potencial poluidor, que aceitam condicionantes pré-definidas.",
    href: "/service/lac",
  },
  {
    id: "las",
    sigla: "LAS",
    name: "Licença Ambiental Simplificada",
    time: "Até 60 dias",
    level: 2,
    when: "Pequeno porte e baixo impacto: uma licença única no lugar das três fases.",
    href: "/service/las",
  },
  {
    id: "trifasico",
    sigla: "LP · LI · LO",
    name: "Licenciamento trifásico",
    time: "4 a 6 meses por fase",
    level: 3,
    when: "Médio e grande porte ou impacto significativo: viabilidade (LP), instalação (LI) e operação (LO), com estudos técnicos.",
    href: "/service/lp",
  },
  {
    id: "regularizacao",
    sigla: "LASR · LIR · LOR",
    name: "Licenças de regularização",
    time: "Conforme a adequação",
    level: 3,
    when: "Para quem já instalou ou opera sem licença e precisa se adequar antes de uma fiscalização.",
    href: "/service/compliance",
  },
] as const;

export function ModalityStrip({ className }: { className?: string }) {
  const [active, setActive] = useState<string>("las");
  const current = modalities.find((m) => m.id === active)!;

  return (
    <div className={className}>
      {/* Escala de complexidade */}
      <div className="flex items-center justify-between text-xs font-medium text-brand-dark/50">
        <span>Mais simples</span>
        <span className="mx-4 h-px flex-1 bg-gradient-to-r from-brand-lime via-brand-accent to-brand-dark" />
        <span>Mais completa</span>
      </div>
      <div role="tablist" aria-label="Modalidades de licenciamento" className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {modalities.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={active === m.id}
            onClick={() => setActive(m.id)}
            className={cn(
              "rounded-2xl border p-4 text-left transition-all",
              active === m.id ? "border-brand-dark bg-brand-dark text-white shadow-lg" : "border-brand-dark/12 bg-white hover:border-brand-accent",
            )}
          >
            <span className="flex gap-1" aria-hidden>
              {[1, 2, 3].map((i) => (
                <span key={i} className={cn("h-1.5 w-4 rounded-full", i <= m.level ? (active === m.id ? "bg-brand-lime" : "bg-brand-accent") : active === m.id ? "bg-white/20" : "bg-brand-dark/10")} />
              ))}
            </span>
            <span className="mt-3 block font-display text-lg font-semibold">{m.sigla}</span>
            <span className={cn("mt-0.5 block text-xs leading-snug", active === m.id ? "text-brand-silver/80" : "text-brand-dark/55")}>{m.name}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4 grid gap-6 rounded-2xl border border-brand-dark/10 bg-brand-cream p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <p className="font-display text-xl font-semibold text-brand-dark">{current.name} <span className="text-brand-dark/40">({current.sigla})</span></p>
          <p className="mt-2 max-w-2xl leading-relaxed text-brand-dark/70">{current.when}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-primary">
            <Clock className="h-4 w-4" /> {current.time}
          </p>
        </div>
        <Link to={current.href} className="inline-flex items-center gap-2 self-start rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primary md:self-center">
          Ver detalhes <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
