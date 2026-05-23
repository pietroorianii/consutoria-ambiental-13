import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  ShieldCheck,
  FileCheck,
  Users,
  Leaf,
} from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] overflow-hidden bg-brand-dark text-brand-cream lg:min-h-[90vh]">
      {/* ── Fundo full-bleed visível atrás do layout inteiro ── */}
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920&h=1280"
        alt="Floresta nativa preservada ao amanhecer"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay direcional: escuro na esq (legibilidade), transparente à dir */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/97 via-brand-dark/80 to-brand-dark/20" />
      {/* Detalhe de brilho esverdeado no topo esquerdo */}
      <div className="absolute -top-32 -left-20 w-[32rem] h-[32rem] rounded-full bg-brand-primary/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />

      {/* ── Layout principal: grid 55/45 ── */}
      <div className="container relative z-10 flex items-center py-16 md:py-20 lg:py-0 min-h-[inherit]">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 xl:gap-20 w-full items-center">

          {/* ── COLUNA ESQUERDA: conteúdo ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Badge de localidade e especialidade */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-md"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-accent flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-brand-cream/90 font-sora">
                Consultoria Ambiental · Ponta Grossa, PR
              </span>
            </motion.div>

            {/* H1 com destaque animado */}
            <h1 className="font-sora text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[3.75rem] mb-6">
              Licenciamento ambiental{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-accent via-[#7EDCE2] to-brand-accent bg-clip-text text-transparent">
                  sem complicação.
                </span>
                {/* Sublinhado SVG decorativo */}
                <span className="absolute -bottom-2 left-0 right-0 overflow-hidden" aria-hidden="true">
                  <svg
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-3"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M2 9 C50 3, 100 11, 150 6 S250 2, 298 7"
                      stroke="url(#underlineGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="underlineGrad" x1="0" y1="0" x2="300" y2="0">
                        <stop offset="0%" stopColor="#00A3AD" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#7EDCE2" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subtítulo concreto, cita o IAT */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-xl font-inter text-lg leading-relaxed text-brand-cream/80 md:text-xl mb-10"
            >
              Conduzimos todo o processo junto ao IAT — da DLAM e LAC até o
              licenciamento trifásico, outorgas e autorizações florestais. Você
              foca no seu negócio; nós garantimos a conformidade.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row mb-12"
            >
              <Button
                asChild
                size="lg"
                className="group min-h-12 rounded-2xl bg-brand-accent px-7 py-3 text-base font-semibold text-white shadow-lg shadow-brand-accent/25 transition-all duration-200 hover:scale-[1.03] hover:bg-brand-accent/90 hover:shadow-brand-accent/40"
              >
                <Link to="/services" className="flex items-center gap-3">
                  Ver todos os serviços
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 rounded-2xl border-brand-cream/25 bg-brand-cream/5 px-7 py-3 text-base font-semibold text-brand-cream backdrop-blur-md transition-all duration-200 hover:scale-[1.03] hover:bg-brand-cream/15"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  Falar com especialista
                </Link>
              </Button>
            </motion.div>

            {/* Trust strip com separadores verticais e ícones */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap items-stretch"
            >
              {[
                { icon: <Users className="h-4 w-4 text-brand-accent" />, k: "15+", v: "anos de atuação" },
                { icon: <FileCheck className="h-4 w-4 text-brand-accent" />, k: "300+", v: "processos aprovados" },
                { icon: <ShieldCheck className="h-4 w-4 text-brand-accent" />, k: "100%", v: "foco em resultados" },
                { icon: <MapPin className="h-4 w-4 text-brand-accent" />, k: "PR", v: "presença local" },
              ].map((s, i) => (
                <div
                  key={s.k}
                  className={`flex items-center gap-3 ${i > 0 ? "pl-5 border-l border-brand-cream/15" : ""} ${i < 3 ? "pr-5" : ""} py-1`}
                >
                  <div className="flex-shrink-0 p-1.5 rounded-lg bg-brand-accent/10">
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-sora text-xl font-bold text-brand-cream leading-tight">
                      {s.k}
                    </div>
                    <div className="text-xs text-brand-cream/60 font-inter leading-tight mt-0.5">
                      {s.v}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── COLUNA DIREITA: visual (oculto no mobile) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Foto com moldura */}
            <div className="relative w-full max-w-[480px]">
              {/* Anel decorativo atrás da foto */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-accent/20 via-brand-primary/10 to-transparent blur-xl" />
              <div className="absolute -inset-1 rounded-[2rem] border border-brand-accent/20" />

              {/* Foto principal com moldura arredondada */}
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-brand-dark/60">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800&h=960"
                  alt="Floresta preservada no Paraná"
                  className="w-full h-[480px] object-cover"
                />
                {/* Overlay sutil na base da foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
              </div>

              {/* Card flutuante 1 — canto superior esquerdo */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -top-4 -left-6 flex items-center gap-3 px-4 py-3 rounded-2xl bg-brand-dark/80 backdrop-blur-md border border-brand-cream/10 shadow-xl"
              >
                <div className="p-2 rounded-xl bg-brand-accent/20">
                  <FileCheck className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-cream font-sora">IAT · SGA</div>
                  <div className="text-[10px] text-brand-cream/60 font-inter">Protocolo digital</div>
                </div>
              </motion.div>

              {/* Card flutuante 2 — canto inferior direito */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -bottom-4 -right-6 flex items-center gap-3 px-4 py-3 rounded-2xl bg-brand-dark/80 backdrop-blur-md border border-brand-cream/10 shadow-xl"
              >
                <div className="p-2 rounded-xl bg-brand-primary/30">
                  <Leaf className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-cream font-sora">+300 licenças</div>
                  <div className="text-[10px] text-brand-cream/60 font-inter">emitidas no PR</div>
                </div>
              </motion.div>

              {/* Ponto de brilho decorativo */}
              <div className="absolute top-1/3 -right-10 w-20 h-20 rounded-full bg-brand-accent/15 blur-2xl pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Linha de separação sutil na base */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cream/10 to-transparent" />
    </section>
  );
}
