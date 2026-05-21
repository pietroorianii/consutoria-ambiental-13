import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, MapPin, Award } from "lucide-react";
import { ServiceSearch } from "@/components/ServiceSearch";

export function HeroBanner() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] overflow-hidden bg-brand-primary text-brand-cream lg:min-h-[86vh] lg:items-center">
      {/* Full-bleed environmental background photo */}
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920&h=1280"
        alt="Floresta nativa preservada ao amanhecer"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Brand color grade — keeps text legible */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/95 via-brand-primary/80 to-brand-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-brand-cream/10 blur-3xl" />


      <div className="container relative z-10 py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Stylized badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-cream/15 bg-brand-cream/10 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-brand-accent" />
            <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-brand-cream/90 font-inter">
              Engenharia com Propósito
            </span>
          </div>

          <h1 className="font-sora text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
            Clareza e segurança para sua{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-cream to-brand-accent bg-clip-text text-transparent">
              conformidade ambiental
            </span>
            .
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-7 max-w-2xl font-inter text-lg leading-relaxed text-brand-cream/90 md:text-xl"
          >
            Navegue pela complexidade da legislação ambiental com a parceria
            de especialistas. Transformamos desafios regulatórios em
            oportunidades estratégicas para o crescimento sustentável da sua
            empresa.
          </motion.p>

          {/* Search Bar Component */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex w-full justify-center"
          >
            <ServiceSearch />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
          >
            <Button
              asChild
              size="lg"
              className="group min-h-12 rounded-2xl bg-brand-accent px-6 py-3 text-base font-medium text-white shadow-lg shadow-brand-accent/20 transition-transform duration-200 hover:scale-[1.02] hover:bg-brand-accent/90 sm:px-8"
            >
              <Link to="/services" className="flex items-center gap-3">
                Conheça nossas soluções
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-12 rounded-2xl border-brand-cream/30 bg-brand-cream/5 px-6 py-3 text-base font-medium text-brand-cream backdrop-blur-md transition-transform duration-200 hover:scale-[1.02] hover:bg-brand-cream hover:text-brand-primary sm:px-8"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                Fale com um especialista
              </Link>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 grid w-full max-w-2xl grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { k: "15+", v: "Anos de atuação" },
              { k: "300+", v: "Projetos entregues" },
              { k: "100%", v: "Conformidade" },
              { k: "Paraná", v: "Atendimento local", icon: <MapPin className="h-4 w-4 inline mr-1 text-brand-accent" /> },
            ].map((s) => (
              <div key={s.k} className="text-center">
                <div className="font-sora text-2xl md:text-3xl font-bold text-brand-accent flex items-center justify-center">
                  {s.icon}
                  {s.k}
                </div>
                <div className="text-xs text-brand-cream/80 mt-1 font-inter">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
