import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Scale,
  FileCheck,
  Droplets,
  FlaskConical,
  Recycle,
  Wind,
  ClipboardCheck,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

type Tone = "primary" | "accent" | "secondary";

interface ShowcaseService {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  href: string;
  tone: Tone;
  span?: string; // tailwind col-span for bento
}

const services: ShowcaseService[] = [
  {
    icon: Scale,
    title: "Licenciamento Ambiental",
    description: "DLAM, LAC, LAS, LP, LI e LO conduzidos com segurança jurídica e agilidade técnica.",
    tag: "Licenciamento",
    href: "/service/licensing",
    tone: "primary",
    span: "md:col-span-2",
  },
  {
    icon: FileCheck,
    title: "Autorizações AA e AF",
    description: "Supressão de vegetação, manejo florestal e autorizações ambientais específicas.",
    tag: "Autorizações",
    href: "/service/authorizations",
    tone: "secondary",
  },
  {
    icon: Droplets,
    title: "Outorga de Recursos Hídricos",
    description: "Captação, lançamento e regularização hídrica via SIGARH.",
    tag: "Recursos Hídricos",
    href: "/service/water_grants",
    tone: "accent",
  },
  {
    icon: FlaskConical,
    title: "Estudos Ambientais",
    description: "EIA/RIMA, RAS, MCE, PBA e PACUERA com profundidade técnica e clareza estratégica.",
    tag: "Estudos Técnicos",
    href: "/service/technical_studies",
    tone: "accent",
    span: "md:col-span-2",
  },
  {
    icon: Recycle,
    title: "Planos de Gestão",
    description: "PGRS, PGRSS, PCA, PRAD e PRF prontos para auditoria e fiscalização.",
    tag: "Gestão",
    href: "/service/technical_studies",
    tone: "primary",
  },
  {
    icon: Wind,
    title: "Emissões Atmosféricas",
    description: "Plano de automonitoramento atmosférico e gestão via SGADEA.",
    tag: "Monitoramento",
    href: "/service/air_emissions",
    tone: "secondary",
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Conformidade",
    description: "Relatórios SGA IR, renovações e acompanhamento contínuo de condicionantes.",
    tag: "Conformidade",
    href: "/service/compliance",
    tone: "secondary",
  },
  {
    icon: RefreshCw,
    title: "Regularização Ambiental",
    description: "LASR, LIR, LOR e Termos de Ajustamento de Conduta (TAC) bem encaminhados.",
    tag: "Regularização",
    href: "/service/compliance",
    tone: "primary",
    span: "md:col-span-2",
  },
];

const toneStyles: Record<Tone, { card: string; icon: string; tag: string; glow: string }> = {
  primary: {
    card: "from-brand-primary to-brand-primary/90 text-brand-cream",
    icon: "bg-brand-accent/20 text-brand-accent",
    tag: "bg-brand-accent/15 text-brand-accent",
    glow: "from-brand-accent/40 to-transparent",
  },
  accent: {
    card: "from-brand-accent to-brand-accent/85 text-white",
    icon: "bg-white/20 text-white",
    tag: "bg-white/15 text-white",
    glow: "from-white/40 to-transparent",
  },
  secondary: {
    card: "from-brand-cream to-white text-brand-primary border border-brand-primary/10",
    icon: "bg-brand-primary/10 text-brand-primary",
    tag: "bg-brand-primary/10 text-brand-primary",
    glow: "from-brand-primary/15 to-transparent",
  },
};

export function ServicesShowcase() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-20 md:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-accent/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-brand-primary/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(20 14% 18% / 0.5) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/70 px-4 py-2 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-brand-accent" />
            <span className="font-inter text-xs font-medium uppercase tracking-[0.18em] text-brand-primary">
              Carta de Serviços
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-sora text-3xl font-bold leading-tight text-brand-primary md:text-5xl"
          >
            Tudo o que sua operação precisa para{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              estar em conformidade
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-inter text-base leading-relaxed text-brand-primary/75 md:text-lg"
          >
            Cada serviço abaixo abre uma página detalhada com etapas, prazos, base legal e
            documentos. Clique e veja exatamente como entregamos.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {services.map((service, i) => {
            const t = toneStyles[service.tone];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                className={service.span || ""}
              >
                <Link
                  to={service.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl md:p-7 ${t.card}`}
                >
                  {/* Glow blob */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${t.glow}`}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${t.icon}`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 font-inter text-[10px] font-semibold uppercase tracking-wider ${t.tag}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-sora text-xl font-bold leading-tight md:text-2xl">
                    {service.title}
                  </h3>

                  <p
                    className={`relative mt-3 font-inter text-sm leading-relaxed md:text-[15px] ${
                      service.tone === "secondary" ? "text-brand-primary/70" : "opacity-90"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="relative mt-auto flex items-center gap-2 pt-6 font-inter text-sm font-semibold">
                    <span>Saiba mais</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-2xl bg-brand-primary px-7 py-3.5 font-inter text-sm font-semibold text-brand-cream shadow-lg transition-all hover:scale-[1.02] hover:bg-brand-primary/90"
          >
            Ver carta de serviços completa
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 rounded-2xl border border-brand-primary/20 bg-white px-7 py-3.5 font-inter text-sm font-semibold text-brand-primary transition-all hover:scale-[1.02] hover:border-brand-accent hover:text-brand-accent"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
