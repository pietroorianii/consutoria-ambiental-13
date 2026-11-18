import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle, RotateCcw } from "lucide-react";
import { questions, diagnose, answersToText, type Answers } from "./diagnosticLogic";
import { whatsappUrl } from "@/config/company";
import { cn } from "@/lib/utils";

const urgencyCopy = {
  baixa: { label: "Rotina", cls: "bg-brand-accent/10 text-brand-accent", bar: "w-1/4 bg-brand-accent" },
  media: { label: "Atenção", cls: "bg-brand-water/15 text-brand-primary", bar: "w-2/4 bg-brand-water" },
  alta: { label: "Prioridade alta", cls: "bg-amber-100 text-amber-800", bar: "w-3/4 bg-amber-500" },
  maxima: { label: "Urgente", cls: "bg-red-100 text-red-700", bar: "w-full bg-red-500" },
} as const;

export const DIAGNOSTIC_STORAGE_KEY = "axis-diagnostico";

export function LicenseDiagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const reduce = useReducedMotion();
  const done = step >= questions.length;
  const result = useMemo(() => (done ? diagnose(answers) : null), [done, answers]);
  const summaryText = result ? answersToText(answers, result) : "";

  const choose = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((s) => s + 1);
  };

  const saveForQuote = () => {
    try {
      sessionStorage.setItem(DIAGNOSTIC_STORAGE_KEY, summaryText);
    } catch {
      /* armazenamento indisponível: segue sem pré-preencher */
    }
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  const q = questions[step];
  const anim = reduce
    ? {}
    : { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -24 }, transition: { duration: 0.25 } };

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-brand-dark/10 bg-white shadow-[0_30px_60px_-40px_rgba(6,24,33,0.45)]">
      {/* Progresso */}
      <div className="flex items-center gap-4 border-b border-brand-dark/10 px-6 py-4 md:px-8">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-brand-dark/10" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={Math.min(step, questions.length)}>
          <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-lime to-brand-accent" animate={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }} />
        </div>
        <span className="text-sm font-medium text-brand-dark/60">
          {done ? "Resultado" : `${step + 1} de ${questions.length}`}
        </span>
      </div>

      <div className="p-6 md:p-10">
        <AnimatePresence mode="wait">
          {!done && q && (
            <motion.div key={q.key} {...anim}>
              <h3 className="font-display text-2xl font-semibold text-brand-dark md:text-3xl">{q.title}</h3>
              <div className={cn("mt-8 grid gap-3", q.options.length > 4 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2")}>
                {q.options.map((o) => {
                  const selected = answers[q.key] === o.value;
                  return (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => choose(q.key, o.value)}
                      className={cn(
                        "group flex items-start justify-between gap-3 rounded-2xl border p-5 text-left transition-colors",
                        selected ? "border-brand-accent bg-brand-accent/5" : "border-brand-dark/12 hover:border-brand-accent hover:bg-brand-cream",
                      )}
                    >
                      <span>
                        <span className="block font-display text-base font-semibold text-brand-dark">{o.label}</span>
                        <span className="mt-1 block text-sm text-brand-dark/55">{o.hint}</span>
                      </span>
                      <span className={cn("mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border", selected ? "border-brand-accent bg-brand-accent text-white" : "border-brand-dark/20 text-transparent group-hover:border-brand-accent")}>
                        <Check className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  );
                })}
              </div>
              {step > 0 && (
                <button type="button" onClick={() => setStep((s) => s - 1)} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-dark/60 hover:text-brand-accent">
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </button>
              )}
            </motion.div>
          )}

          {done && result && (
            <motion.div key="result" {...anim}>
              <div className="flex flex-wrap items-center gap-3">
                <span className={cn("rounded-full px-3 py-1 text-sm font-semibold", urgencyCopy[result.urgency].cls)}>
                  {urgencyCopy[result.urgency].label}
                </span>
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-brand-dark/10">
                  <div className={cn("h-full rounded-full", urgencyCopy[result.urgency].bar)} />
                </div>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-brand-dark md:text-3xl">{result.headline}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-brand-dark/70">{result.summary}</p>

              <p className="mt-8 font-display font-semibold text-brand-dark">O que você provavelmente vai precisar</p>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {result.items.map((it) => (
                  <li key={it.title}>
                    <Link to={it.href} className="group flex h-full flex-col rounded-2xl border border-brand-dark/10 p-5 transition-colors hover:border-brand-accent">
                      <span className="flex items-start justify-between gap-3 font-display font-semibold text-brand-dark">
                        {it.title}
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                      <span className="mt-2 text-sm leading-relaxed text-brand-dark/65">{it.why}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="axis-navy-surface mt-8 rounded-2xl p-6 text-white md:p-8">
                <p className="font-display text-xl font-medium">Quer a confirmação de um engenheiro, sem custo?</p>
                <p className="mt-2 text-sm text-brand-silver/80">Enviamos suas respostas junto. Você recebe a análise do seu caso em até 1 dia útil.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={whatsappUrl(summaryText)} target="_blank" rel="noopener noreferrer" className="axis-btn-solid justify-center">
                    <MessageCircle className="h-5 w-5" /> Enviar pelo WhatsApp
                  </a>
                  <Link to="/request-quote" onClick={saveForQuote} className="axis-btn-ghost justify-center">
                    Preencher pedido completo
                  </Link>
                </div>
              </div>

              <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-brand-dark/50 sm:flex-row sm:items-center">
                <p>Resultado indicativo, baseado nas suas respostas. O enquadramento final depende de análise técnica da atividade e do local.</p>
                <button type="button" onClick={restart} className="inline-flex shrink-0 items-center gap-1.5 font-medium text-brand-dark/70 hover:text-brand-accent">
                  <RotateCcw className="h-3.5 w-3.5" /> Refazer
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
