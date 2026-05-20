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
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-w-0 lg:col-span-7"
          >
            {/* Stylized badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-cream/15 bg-brand-cream/10 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-brand-cream/90 font-inter">
                Engenharia com Propósito
              </span>
            </div>

            <h1 className="max-w-3xl font-sora text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
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
            >
              <ServiceSearch />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
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
              className="mt-12 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4"
            >
              {[
                { k: "15+", v: "Anos de atuação" },
                { k: "300+", v: "Projetos entregues" },
                { k: "100%", v: "Conformidade" },
                { k: "Paraná", v: "Atendimento local", icon: <MapPin className="h-4 w-4 inline mr-1 text-brand-accent" /> },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-sora text-2xl md:text-3xl font-bold text-brand-accent flex items-center">
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

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative min-w-0 lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-brand-cream/20 shadow-2xl aspect-[4/5]">
              {/* Real photo background */}
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=900&h=1125"
                alt="Floresta nativa preservada — consultoria ambiental Solari"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={900}
                height={1125}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Color grade overlay (brand tint) */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/70 via-brand-primary/30 to-brand-accent/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent" />

              {/* Subtle decorative curves */}
              <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 380 Q 100 320 200 360 T 400 340" stroke="#00A3AD" strokeWidth="1.5" fill="none" opacity="0.6"/>
                <path d="M0 420 Q 120 380 220 410 T 400 400" stroke="#F4F1EA" strokeWidth="1" fill="none" opacity="0.4"/>
              </svg>

              
              {/* Badge "Credenciada IAT-PR" no canto da imagem */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-cream px-3 py-2 font-sora text-xs font-bold text-brand-primary shadow-xl sm:right-6 sm:top-6 sm:px-4 sm:text-sm">
                <Award className="h-4 w-4 text-brand-accent" />
                Credenciada IAT-PR
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-brand-primary/40 border-t border-brand-cream/20">
                <div className="text-xs uppercase tracking-widest text-brand-accent mb-1 font-inter">
                  Solari · Soluções Ambientais
                </div>
                <div className="font-sora font-semibold text-brand-cream">
                  Engenharia integrada a tecnologia limpa
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:block absolute -bottom-6 -left-6 rounded-2xl bg-brand-cream text-brand-primary p-4 shadow-2xl border border-brand-primary/10"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-accent/15 grid place-items-center">
                  <Sparkles className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <div className="font-sora font-semibold text-sm">
                    Licenciamento ágil
                  </div>
                  <div className="text-xs text-brand-primary/70 font-inter">
                    LP · LI · LO · Outorgas
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
