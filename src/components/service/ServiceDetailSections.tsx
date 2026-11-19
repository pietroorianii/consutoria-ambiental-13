import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ChevronDown, Clock, Lightbulb, MessageCircle, Scale } from "lucide-react";
import type { ServiceDetailData } from "@/data/types/serviceTypes";
import { relatedServices } from "@/data/serviceCatalog";
import { whatsappUrl } from "@/config/company";
import { cn } from "@/lib/utils";

/* ── Navegação interna com destaque da seção atual ─────────────────────── */
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav aria-label="Seções desta página" className="sticky top-[4.5rem] z-30 border-b border-brand-dark/10 bg-white/90 backdrop-blur-xl">
      <div className="container flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(i.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === i.id ? "bg-brand-dark text-white" : "text-brand-dark/65 hover:text-brand-dark",
            )}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

const Block = ({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={cn("scroll-mt-32 py-14 md:py-20", className)}>
    <div className="container">{children}</div>
  </section>
);

const Title = ({ children, intro }: { children: React.ReactNode; intro?: React.ReactNode }) => (
  <div className="max-w-2xl">
    <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-dark md:text-[2.1rem]">{children}</h2>
    <span className="axis-rule mt-4" />
    {intro && <p className="mt-4 leading-relaxed text-brand-dark/65">{intro}</p>}
  </div>
);

/** Divide "Título: explicação" para dar hierarquia a itens longos. */
const splitItem = (t: string) => {
  const i = t.indexOf(":");
  return i > 2 && i < 70 ? { head: t.slice(0, i), body: t.slice(i + 1).trim() } : { head: "", body: t };
};

/* ── Visão geral: texto em resumo + "ler mais", benefícios ao lado ─────── */
export function Overview({ s }: { s: ServiceDetailData }) {
  const [open, setOpen] = useState(false);
  // Divide só em fim de frase real (ponto + espaço + maiúscula), sem quebrar "nº 9.541/2025".
  const sentences = useMemo(() => s.whatIs.split(/(?<=[.!?])\s+(?=[A-ZÀ-Ý])/), [s.whatIs]);
  const lead = sentences.slice(0, 2).join(" ").trim();
  const rest = sentences.slice(2).join(" ").trim();

  return (
    <Block id="visao-geral" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Title>O que é e quando você precisa</Title>
          <p className="mt-6 text-lg leading-relaxed text-brand-dark/80">{lead}</p>
          {rest && (
            <>
              <div className={cn("grid transition-[grid-template-rows] duration-500", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <p className="overflow-hidden leading-relaxed text-brand-dark/70">
                  <span className="block pt-4">{rest}</span>
                </p>
              </div>
              <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
                {open ? "Mostrar menos" : "Ler explicação completa"}
                <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
              </button>
            </>
          )}
        </div>
        <div className="rounded-[1.25rem] bg-brand-cream p-7">
          <p className="font-display text-lg font-semibold text-brand-dark">O que sua empresa ganha</p>
          <ul className="mt-5 space-y-4">
            {s.benefits.slice(0, 6).map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-brand-dark/75">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-accent text-white">
                  <Check className="h-3 w-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Block>
  );
}

/* ── Etapas: stepper clicável ──────────────────────────────────────────── */
export function Steps({ s }: { s: ServiceDetailData }) {
  const [i, setI] = useState(0);
  if (!s.steps.length) return null;
  const step = s.steps[i];
  return (
    <Block id="etapas" className="bg-brand-cream">
      <Title intro="Clique em cada etapa para ver o que acontece e quanto tempo costuma levar.">Como funciona, etapa por etapa</Title>
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <ol className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0 [scrollbar-width:none]">
          {s.steps.map((st, k) => (
            <li key={st.title} className="shrink-0 lg:shrink">
              <button
                type="button"
                onClick={() => setI(k)}
                aria-current={i === k ? "step" : undefined}
                className={cn(
                  "flex w-64 items-center gap-3 rounded-2xl border p-4 text-left transition-colors lg:w-full",
                  i === k ? "border-brand-dark bg-brand-dark text-white" : "border-brand-dark/10 bg-white hover:border-brand-accent",
                )}
              >
                <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-sm font-semibold", i === k ? "bg-brand-lime text-brand-dark" : "bg-brand-cream text-brand-dark/70")}>
                  {k + 1}
                </span>
                <span className="font-display text-sm font-semibold leading-snug">{st.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <div key={i} className="animate-fade-in rounded-[1.25rem] border border-brand-dark/10 bg-white p-7 md:p-10">
          <p className="text-sm font-medium text-brand-dark/50">Etapa {i + 1} de {s.steps.length}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-brand-dark">{step.title}</h3>
          <p className="mt-4 leading-relaxed text-brand-dark/75">{step.description}</p>
          {step.duration && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-water/10 px-4 py-2 text-sm font-medium text-brand-primary">
              <Clock className="h-4 w-4" /> {step.duration}
            </p>
          )}
          <div className="mt-8 flex gap-3">
            <button type="button" disabled={i === 0} onClick={() => setI(i - 1)} className="rounded-full border border-brand-dark/15 px-5 py-2.5 text-sm font-semibold text-brand-dark disabled:opacity-30">
              Anterior
            </button>
            <button type="button" disabled={i === s.steps.length - 1} onClick={() => setI(i + 1)} className="rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-30">
              Próxima etapa
            </button>
          </div>
        </div>
      </div>
    </Block>
  );
}

/* ── Documentos: checklist interativo ──────────────────────────────────── */
export function Documents({ s }: { s: ServiceDetailData }) {
  const [have, setHave] = useState<Set<number>>(new Set());
  const [all, setAll] = useState(false);
  if (!s.documents.length) return null;
  const visible = all ? s.documents : s.documents.slice(0, 8);
  const pct = Math.round((have.size / s.documents.length) * 100);
  const toggle = (k: number) => setHave((prev) => {
    const n = new Set(prev);
    if (n.has(k)) n.delete(k); else n.add(k);
    return n;
  });
  const missing = s.documents.filter((_, k) => !have.has(k)).map((d) => `• ${splitItem(d).head || d.slice(0, 80)}`);

  return (
    <Block id="documentos" className="bg-white">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <Title intro="Marque o que você já tem. No fim, envie a lista do que falta e a gente orienta.">Documentos necessários</Title>
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-sm"><span className="text-brand-dark/60">Você já tem</span><span className="font-semibold text-brand-dark">{have.size} de {s.documents.length}</span></div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-brand-dark/10">
            <div className="h-full rounded-full bg-gradient-to-r from-brand-lime to-brand-accent transition-[width] duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
      <ul className="mt-10 grid gap-3 md:grid-cols-2">
        {visible.map((d, k) => {
          const { head, body } = splitItem(d);
          const on = have.has(k);
          return (
            <li key={k}>
              <button
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(k)}
                className={cn("flex w-full gap-3 rounded-2xl border p-4 text-left transition-colors", on ? "border-brand-accent bg-brand-accent/5" : "border-brand-dark/10 hover:border-brand-accent/50")}
              >
                <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border", on ? "border-brand-accent bg-brand-accent text-white" : "border-brand-dark/25")}>
                  {on && <Check className="h-3.5 w-3.5" />}
                </span>
                <span className="text-sm leading-relaxed text-brand-dark/75">
                  {head && <span className="font-semibold text-brand-dark">{head}: </span>}
                  {body}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {s.documents.length > 8 ? (
          <button type="button" onClick={() => setAll((v) => !v)} className="text-sm font-semibold text-brand-accent">
            {all ? "Mostrar menos" : `Ver todos os ${s.documents.length} documentos`}
          </button>
        ) : <span />}
        <a
          href={whatsappUrl(`Olá! Vi a página de ${s.title} no site. Ainda me faltam estes documentos:\n${missing.slice(0, 12).join("\n")}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-5 py-3 text-sm font-semibold text-white hover:bg-brand-primary"
        >
          <MessageCircle className="h-4 w-4" /> Enviar o que falta para a Axis
        </a>
      </div>
    </Block>
  );
}

/* ── Prazos e base legal ───────────────────────────────────────────────── */
export function LegalAndTime({ s }: { s: ServiceDetailData }) {
  const [all, setAll] = useState(false);
  const list = all ? s.legalBasis : s.legalBasis.slice(0, 6);
  return (
    <Block id="base-legal" className="bg-brand-cream">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="axis-navy-surface rounded-[1.25rem] p-7 text-white md:p-9">
          <Clock className="h-8 w-8 text-brand-lime" strokeWidth={1.5} />
          <p className="mt-5 font-display text-xl font-semibold">Prazo estimado</p>
          <p className="mt-3 leading-relaxed text-brand-silver/85">{s.timeline}</p>
          <p className="mt-6 text-xs text-brand-silver/55">Prazos do órgão contam a partir do protocolo completo e podem pausar quando há pedido de complementação.</p>
        </div>
        <div className="rounded-[1.25rem] border border-brand-dark/10 bg-white p-7 md:p-9">
          <div className="flex items-center gap-3">
            <Scale className="h-6 w-6 text-brand-accent" strokeWidth={1.6} />
            <p className="font-display text-xl font-semibold text-brand-dark">Base legal</p>
          </div>
          <ul className="mt-5 divide-y divide-brand-dark/10">
            {list.map((l) => {
              const [norm, ...desc] = l.split(" — ");
              return (
                <li key={l} className="py-3 text-sm">
                  <span className="font-semibold text-brand-dark">{norm}</span>
                  {desc.length > 0 && <span className="text-brand-dark/60"> · {desc.join(" — ")}</span>}
                </li>
              );
            })}
          </ul>
          {s.legalBasis.length > 6 && (
            <button type="button" onClick={() => setAll((v) => !v)} className="mt-3 text-sm font-semibold text-brand-accent">
              {all ? "Mostrar menos" : `Ver todas as ${s.legalBasis.length} normas`}
            </button>
          )}
          <p className="mt-4 text-xs text-brand-dark/45">Normas revisadas em novembro de 2026.</p>
        </div>
      </div>
    </Block>
  );
}

/* ── Dicas da Axis ─────────────────────────────────────────────────────── */
export function Tips({ s }: { s: ServiceDetailData }) {
  if (!s.tips.length) return null;
  return (
    <Block id="dicas" className="bg-white">
      <Title>O que a experiência ensina</Title>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {s.tips.slice(0, 6).map((t) => (
          <li key={t} className="rounded-2xl border border-brand-dark/10 p-6">
            <Lightbulb className="h-6 w-6 text-brand-lime" strokeWidth={1.6} />
            <p className="mt-4 text-sm leading-relaxed text-brand-dark/75">{t}</p>
          </li>
        ))}
      </ul>
    </Block>
  );
}

/* ── Relacionados + CTA final ──────────────────────────────────────────── */
export function RelatedAndCta({ s }: { s: ServiceDetailData }) {
  const rel = relatedServices(s.id);
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="container">
        <p className="font-display text-xl font-semibold text-brand-dark">Costuma vir junto</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {rel.map((r) => {
            const Icon = r.icon;
            return (
              <Link key={r.id} to={`/service/${r.id}`} className="group flex items-center gap-4 rounded-2xl border border-brand-dark/10 bg-white p-4 transition-colors hover:border-brand-accent">
                <img src={r.image} alt="" loading="lazy" className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <p className="flex items-center gap-2 font-display font-semibold text-brand-dark"><Icon className="h-4 w-4 text-brand-accent" />{r.title}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-brand-dark/60">{r.outcome}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-brand-dark/40 group-hover:text-brand-accent" />
              </Link>
            );
          })}
        </div>

        <div className="axis-navy-surface mt-14 grid gap-6 rounded-[1.5rem] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl font-medium md:text-3xl">Vamos cuidar de {s.title.toLowerCase()} para você?</h2>
            <p className="mt-2 text-brand-silver/80">Conte sua atividade e o local. A análise inicial é gratuita e sai em até 1 dia útil.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl(`Olá! Quero ajuda com ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="axis-btn-solid justify-center">
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
            <Link to="/request-quote" className="axis-btn-ghost justify-center">Pedir orçamento</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
