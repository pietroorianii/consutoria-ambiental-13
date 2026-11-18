import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarClock, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/company";
import { cn } from "@/lib/utils";

/**
 * Calculadora de prazo de renovação.
 * LC 140/2011, art. 14, §4º: pedida com antecedência mínima de 120 dias da expiração,
 * a licença fica automaticamente prorrogada até a manifestação do órgão.
 */
const DAY = 86_400_000;
const fmt = (d: Date) => d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

export function RenewalCalculator({ compact = false }: { compact?: boolean }) {
  const [value, setValue] = useState("");

  const calc = useMemo(() => {
    if (!value) return null;
    const expiry = new Date(`${value}T12:00:00`);
    if (Number.isNaN(expiry.getTime())) return null;
    const deadline = new Date(expiry.getTime() - 120 * DAY);
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const daysToDeadline = Math.round((deadline.getTime() - today.getTime()) / DAY);
    const daysToExpiry = Math.round((expiry.getTime() - today.getTime()) / DAY);
    let status: "ok" | "atencao" | "perdido" | "vencida";
    if (daysToExpiry < 0) status = "vencida";
    else if (daysToDeadline < 0) status = "perdido";
    else if (daysToDeadline <= 60) status = "atencao";
    else status = "ok";
    return { expiry, deadline, daysToDeadline, daysToExpiry, status };
  }, [value]);

  const copy = calc && {
    ok: { title: `Faltam ${calc.daysToDeadline} dias para o prazo de protocolo`, text: "Você está no prazo. Comece a reunir os documentos e relatórios de condicionantes com folga.", cls: "border-brand-accent/30 bg-brand-accent/5", tag: "No prazo" },
    atencao: { title: `Restam só ${calc.daysToDeadline} dias para protocolar`, text: "Hora de agir: a preparação da renovação costuma levar semanas.", cls: "border-amber-300 bg-amber-50", tag: "Atenção" },
    perdido: { title: "O prazo de 120 dias já passou", text: "A licença ainda vale até o vencimento, mas sem a prorrogação automática. Protocole o quanto antes para reduzir o risco de operar sem licença.", cls: "border-red-300 bg-red-50", tag: "Prazo perdido" },
    vencida: { title: `Sua licença venceu há ${Math.abs(calc.daysToExpiry)} dias`, text: "Operar com licença vencida sujeita a multa e embargo. O caminho costuma ser a licença de regularização.", cls: "border-red-300 bg-red-50", tag: "Vencida" },
  }[calc.status];

  const msg = calc ? `Olá! Usei a calculadora do site: minha licença vence em ${fmt(calc.expiry)}. Quero ajuda com a renovação.` : undefined;

  return (
    <div className={cn("rounded-[1.5rem] border border-brand-dark/10 bg-white", compact ? "p-6" : "p-6 md:p-8")}>
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-water/15 text-brand-primary">
          <CalendarClock className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-brand-dark">Quando renovar sua licença?</h3>
          <p className="mt-1 text-sm leading-relaxed text-brand-dark/65">Informe o vencimento. A renovação precisa ser pedida com 120 dias de antecedência para a licença continuar valendo até a decisão do órgão.</p>
        </div>
      </div>

      <label className="mt-6 block">
        <span className="text-sm font-medium text-brand-dark">Data de vencimento da licença</span>
        <input
          type="date"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mt-2 h-12 w-full rounded-xl border border-brand-dark/15 bg-brand-cream/50 px-4 text-brand-dark focus:border-brand-accent focus:outline-none"
        />
      </label>

      {calc && copy && (
        <div className={cn("mt-5 rounded-2xl border p-5", copy.cls)} aria-live="polite">
          <span className="text-xs font-semibold text-brand-dark/60">{copy.tag}</span>
          <p className="mt-1 font-display text-lg font-semibold text-brand-dark">{copy.title}</p>
          <p className="mt-1 text-sm text-brand-dark/70">{copy.text}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-brand-dark/50">Protocolar até</dt>
              <dd className="font-semibold text-brand-dark">{fmt(calc.deadline)}</dd>
            </div>
            <div>
              <dt className="text-brand-dark/50">Vencimento</dt>
              <dd className="font-semibold text-brand-dark">{fmt(calc.expiry)}</dd>
            </div>
          </dl>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a href={whatsappUrl(msg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary">
              <MessageCircle className="h-4 w-4" /> Cuidar da renovação
            </a>
            <Link to="/service/lo" className="inline-flex items-center justify-center rounded-full border border-brand-dark/15 px-5 py-2.5 text-sm font-semibold text-brand-dark hover:border-brand-accent hover:text-brand-accent">
              Como funciona a LO
            </Link>
          </div>
        </div>
      )}
      <p className="mt-4 text-xs text-brand-dark/45">Base: Lei Complementar nº 140/2011, art. 14, §4º. Confira também as condicionantes da sua licença.</p>
    </div>
  );
}
