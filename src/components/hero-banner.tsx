import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { ServiceSearch } from "@/components/ServiceSearch";
import { axisImages } from "@/components/brand/assets";

const pillars = ["Engenharia", "Gestão", "Inovação"];

export function HeroBanner() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.12]);

  const ease = [0.22, 1, 0.36, 1] as const; // entrada única e orquestrada
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-brand-dark text-white"
    >
      {/* Paisagem: ocupa a direita e dissolve no navy, como nas peças da marca */}
      <motion.div style={{ y: imgY }} className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[64%]">
        <motion.img
          src={axisImages.heroRiverSunrise}
          alt="Rio serpenteando por floresta preservada ao nascer do sol"
          fetchPriority="high"
          style={{ scale: imgScale }}
          className="h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark from-0% via-brand-dark/60 via-30% to-transparent to-70%" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-abyss/90 via-transparent to-brand-dark/40" />
        <div className="absolute inset-0 bg-brand-dark/45 lg:hidden" />
      </motion.div>

      <div className="container relative py-20 lg:py-28">
        <div className="max-w-[38rem]">
          <motion.p {...rise(0)} className="flex items-center gap-2 text-sm text-brand-silver/85">
            <MapPin className="h-4 w-4 text-brand-lime" />
            Consultoria ambiental em Ponta Grossa e em todo o Paraná
          </motion.p>

          <motion.h1
            {...rise(0.1)}
            className="mt-6 font-display text-[2.5rem] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[3.4rem] xl:text-[3.9rem]"
          >
            Soluções ambientais para um futuro{" "}
            <span className="font-bold text-brand-lime">mais sustentável.</span>
          </motion.h1>

          <motion.ul {...rise(0.25)} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-lg text-white/90">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" aria-hidden />
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.p {...rise(0.35)} className="mt-6 max-w-xl text-lg leading-relaxed text-brand-silver/85">
            Licenças no IAT, outorgas, estudos técnicos e gestão de conformidade. Conduzimos o processo do diagnóstico à licença
            emitida, com ART e responsável técnico em cada etapa.
          </motion.p>

          <motion.div {...rise(0.45)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/diagnostico" className="axis-btn-solid group justify-center whitespace-nowrap px-7 py-3.5 text-base">
              Descobrir qual licença preciso
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="axis-btn-ghost justify-center whitespace-nowrap px-7 py-3.5 text-base">
              Conheça nossas soluções
            </Link>
          </motion.div>

          <motion.div {...rise(0.55)} className="max-w-lg">
            <ServiceSearch />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
