import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, MapPin, Award } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-brand-cream min-h-[92vh] flex items-center">
      {/* Layered gradient + glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-primary/40" />
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-brand-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-brand-accent/20 blur-3xl" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            {/* Stylized badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-cream/15 bg-brand-cream/5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-brand-cream/90 font-inter">
                Engenharia com Propósito
              </span>
            </div>

            <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
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
              className="mt-7 max-w-2xl text-lg md:text-xl text-brand-cream/80 font-inter leading-relaxed"
            >
              Navegue pela complexidade da legislação ambiental com a parceria
              de especialistas. Transformamos desafios regulatórios em
              oportunidades estratégicas para o crescimento sustentável da sua
              empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group bg-brand-accent hover:bg-brand-accent/90 text-white rounded-2xl px-8 py-6 text-base font-medium shadow-lg shadow-brand-accent/20 transition-transform duration-200 hover:scale-[1.03]"
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
                className="rounded-2xl px-8 py-6 text-base font-medium border-brand-cream/30 bg-brand-cream/5 text-brand-cream hover:bg-brand-cream hover:text-brand-dark backdrop-blur-md transition-transform duration-200 hover:scale-[1.03]"
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
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
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
                  <div className="text-xs text-brand-cream/70 mt-1 font-inter">
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
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-brand-cream/10 shadow-2xl bg-gradient-to-br from-brand-primary/20 to-brand-dark aspect-[4/5] flex items-center justify-center">
              {/* Abstract SVG Composition replacing the image */}
              <svg width="100%" height="100%" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen">
                <path d="M0 250 Q 100 150 200 250 T 400 250" stroke="#00A3AD" strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M0 300 Q 100 200 200 300 T 400 300" stroke="#00A3AD" strokeWidth="1" fill="none" opacity="0.3"/>
                <path d="M0 350 Q 100 250 200 350 T 400 350" stroke="#00A3AD" strokeWidth="3" fill="none" opacity="0.8"/>
                <circle cx="200" cy="200" r="100" stroke="#2D5A27" strokeWidth="1" fill="none" strokeDasharray="5 5" opacity="0.5"/>
                <circle cx="200" cy="200" r="150" stroke="#2D5A27" strokeWidth="1" fill="none" strokeDasharray="2 10" opacity="0.3"/>
                <path d="M150 150 Q 200 100 250 150 Q 300 200 250 250 Q 200 300 150 250 Q 100 200 150 150 Z" fill="#2D5A27" opacity="0.1"/>
              </svg>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
              
              {/* Badge "Credenciada IAT-PR" no canto da imagem */}
              <div className="absolute top-6 right-6 bg-brand-cream text-brand-dark px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 border border-brand-primary/20 font-sora">
                <Award className="h-4 w-4 text-brand-primary" />
                Credenciada IAT-PR
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-brand-dark/40 border-t border-brand-cream/10">
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
              className="hidden md:block absolute -bottom-6 -left-6 rounded-2xl bg-brand-cream text-brand-dark p-4 shadow-2xl border border-brand-dark/5"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-accent/15 grid place-items-center">
                  <Sparkles className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <div className="font-sora font-semibold text-sm">
                    Licenciamento ágil
                  </div>
                  <div className="text-xs text-brand-dark/60 font-inter">
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
