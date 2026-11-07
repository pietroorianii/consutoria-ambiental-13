import { useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, ShieldCheck, FileCheck, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceSearch } from "@/components/ServiceSearch";
import landscape from "@/assets/illustrations/landscape.jpg";

export function HeroBanner() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const onMove = (e: MouseEvent) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * -24);
    my.set(((e.clientY - r.top) / r.height - 0.5) * -14);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-brand-dark text-brand-cream"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-[-4%]">
        <motion.img
          src={landscape}
          alt="Ilustração de paisagem paranaense com araucárias e rio"
          width={1920}
          height={1088}
          fetchPriority="high"
          style={{ x: sx, y: sy, scale: 1.08 }}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/75 via-brand-dark/60 to-brand-dark/90" />

      <motion.div style={{ y: contentY, opacity: fade }} className="container relative z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-brand-cream/20 bg-brand-dark/40 px-4 py-2 backdrop-blur-md"
        >
          <MapPin className="h-3.5 w-3.5 text-brand-accent" />
          <span className="font-sora text-xs font-medium uppercase tracking-wider text-brand-cream/90 md:text-sm">
            Consultoria Ambiental · Ponta Grossa, PR
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl font-sora text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          Licenciamento ambiental{" "}
          <span className="relative inline-block text-brand-accent">
            sem dor de cabeça.
            <svg viewBox="0 0 300 14" className="absolute -bottom-3 left-0 h-3.5 w-full" preserveAspectRatio="none" aria-hidden>
              <motion.path
                d="M3 10 C 60 2, 120 13, 170 7 S 260 3, 297 9"
                className="stroke-brand-cream/70"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl font-inter text-lg leading-relaxed text-brand-cream/85 md:text-xl"
        >
          Cuidamos de licenças, estudos e regularização junto ao IAT — do primeiro diagnóstico à licença emitida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="group min-h-12 rounded-2xl bg-brand-accent px-7 text-base font-semibold text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent/90">
            <Link to="/services" className="flex items-center gap-3">
              Conhecer os serviços
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-12 rounded-2xl border-brand-cream/30 bg-brand-cream/5 px-7 text-base font-semibold text-brand-cream backdrop-blur-md hover:bg-brand-cream/15 hover:text-brand-cream">
            <Link to="/request-quote" className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5" />
              Pedir orçamento
            </Link>
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mx-auto mt-10 max-w-2xl">
          <ServiceSearch />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { icon: Users, k: "5+", v: "anos no mercado" },
            { icon: FileCheck, k: "300+", v: "licenças no PR" },
            { icon: ShieldCheck, k: "100%", v: "aprovação" },
            { icon: MapPin, k: "PR", v: "atuação estadual" },
          ].map(({ icon: Icon, k, v }) => (
            <motion.div
              key={v}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-brand-cream/10 bg-brand-dark/40 px-4 py-3 backdrop-blur-md transition-colors hover:border-brand-accent/40"
            >
              <Icon className="mx-auto mb-1 h-4 w-4 text-brand-accent" />
              <div className="font-sora text-xl font-bold">{k}</div>
              <div className="font-inter text-xs text-brand-cream/65">{v}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-brand-cream/60"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
