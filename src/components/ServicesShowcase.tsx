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

interface ShowcaseService {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  href: string;
}

const services: ShowcaseService[] = [
  {
    icon: Scale,
    title: "Licenciamento Ambiental",
    description: "DLAM, LAC, LAS, LP, LI e LO com segurança jurídica e agilidade técnica.",
    tag: "Licenciamento",
    href: "/service/licensing",
  },
  {
    icon: FileCheck,
    title: "Autorizações AA e AF",
    description: "Supressão de vegetação, manejo florestal e autorizações específicas.",
    tag: "Autorizações",
    href: "/service/authorizations",
  },
  {
    icon: Droplets,
    title: "Outorga de Recursos Hídricos",
    description: "Captação, lançamento e regularização hídrica via SIGARH.",
    tag: "Recursos Hídricos",
    href: "/service/water_grants",
  },
  {
    icon: FlaskConical,
    title: "Estudos Ambientais",
    description: "EIA/RIMA, RAS, MCE, PBA e PACUERA com profundidade técnica.",
    tag: "Estudos Técnicos",
    href: "/service/technical_studies",
  },
  {
    icon: Recycle,
    title: "Planos de Gestão",
    description: "PGRS, PGRSS, PCA, PRAD e PRF prontos para auditoria.",
    tag: "Gestão",
    href: "/service/management",
  },
  {
    icon: Wind,
    title: "Emissões Atmosféricas",
    description: "Plano de automonitoramento atmosférico e gestão via SGADEA.",
    tag: "Monitoramento",
    href: "/service/air_emissions",
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Conformidade",
    description: "Relatórios SGA IR, renovações e acompanhamento de condicionantes.",
    tag: "Conformidade",
    href: "/service/compliance",
  },
  {
    icon: RefreshCw,
    title: "Regularização Ambiental",
    description: "LASR, LIR, LOR e Termos de Ajustamento de Conduta (TAC).",
    tag: "Regularização",
    href: "/service/regularization",
  },
];

export function ServicesShowcase() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-20 md:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
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
        <div className="mx-auto mb-14 max-w-3xl text-center">
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
            Clique em qualquer serviço para ver etapas, prazos, base legal e documentos.
          </motion.p>
        </div>

        {/* Uniform Grid — same size cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.25) }}
              >
                <Link
                  to={service.href}
                  className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-brand-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-xl"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Glow on hover */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-accent/0 blur-3xl transition-all duration-500 group-hover:bg-brand-accent/20" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/8 text-brand-primary transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full bg-brand-primary/5 px-2.5 py-1 font-inter text-[10px] font-semibold uppercase tracking-wider text-brand-primary/70">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-5 font-sora text-lg font-bold leading-snug text-brand-primary">
                    {service.title}
                  </h3>

                  <p className="relative mt-2 font-inter text-sm leading-relaxed text-brand-primary/70 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="relative mt-auto flex items-center gap-1.5 pt-5 font-inter text-sm font-semibold text-brand-accent">
                    <span>Saiba mais</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
