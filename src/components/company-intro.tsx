import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Leaf, Award } from "lucide-react";

export function CompanyIntro() {
  return (
    <section className="container py-20 md:py-28 relative">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: editorial copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-inter uppercase tracking-widest">
            <Leaf className="h-3.5 w-3.5" />
            Especialidade
          </div>

          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
            Expertise em soluções{" "}
            <span className="text-brand-accent">ambientais</span> e
            sustentabilidade.
          </h2>

          <div className="h-1 w-16 rounded-full bg-brand-accent" />

          <p className="font-inter text-lg text-brand-dark/75 leading-relaxed">
            A Solari Soluções Ambientais oferece consultoria e assessoria
            completa, proporcionando às empresas o suporte necessário para
            atender às exigências da legislação ambiental vigente de forma
            eficiente e sustentável.
          </p>

          <p className="font-inter text-base text-brand-dark/65 leading-relaxed">
            Nossa equipe de profissionais qualificados atua em todo o
            território nacional, oferecendo soluções personalizadas para cada
            cliente, com excelência técnica e inovação em todos os projetos.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              className="rounded-2xl bg-brand-dark hover:bg-brand-dark/90 text-brand-cream px-6 py-6 transition-transform hover:scale-[1.03]"
            >
              <Link to="/about#team" className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Conheça nossa equipe
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-brand-dark/15 text-brand-dark hover:bg-brand-dark hover:text-brand-cream px-6 py-6 transition-transform hover:scale-[1.03]"
            >
              <Link to="/services">Nossos serviços</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative h-[520px]"
        >
          <div className="absolute top-0 right-0 w-3/4 h-[340px] rounded-3xl overflow-hidden shadow-2xl border border-brand-dark/5">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000"
              alt="Painéis solares em campo aberto"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/60 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 w-2/3 h-[280px] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=900"
              alt="Tratamento e gestão de água industrial"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute bottom-6 right-2 rounded-2xl bg-brand-cream/95 backdrop-blur-md p-5 shadow-2xl border border-brand-dark/5 max-w-[200px]">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-brand-accent/15 grid place-items-center">
                <Award className="h-5 w-5 text-brand-accent" />
              </div>
              <div>
                <div className="font-sora text-2xl font-bold text-brand-dark">
                  15+
                </div>
                <div className="text-xs font-inter text-brand-dark/60 leading-tight">
                  Anos de experiência
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
