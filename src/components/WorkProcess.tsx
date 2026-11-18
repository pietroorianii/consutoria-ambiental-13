import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/brand/SectionHeading";

const steps = [
  { title: "Diagnóstico gratuito", desc: "Analisamos a atividade, o porte e a localização para indicar a modalidade de licença correta." },
  { title: "Elaboração técnica", desc: "Preparamos estudos, plantas e formulários exigidos pelo IAT, com ART do responsável técnico." },
  { title: "Protocolo e acompanhamento", desc: "Protocolamos no SGA do IAT e respondemos às pendências do órgão até a decisão." },
  { title: "Licença e condicionantes", desc: "Você recebe a licença com um calendário claro do que precisa ser cumprido e quando." },
];

export function WorkProcess() {
  const lineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 85%", "start 40%"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="Como conduzimos o seu processo."
          intro="Quatro etapas, um ponto de contato. Você sabe o que está acontecendo em cada uma delas."
        />

        <div className="relative mt-14">
          <div ref={lineRef} className="absolute left-0 right-0 top-5 hidden h-px bg-brand-dark/10 md:block" />
          <motion.div
            style={{ scaleX: reduce ? 1 : scaleX }}
            className="absolute left-0 right-0 top-5 hidden h-[2px] origin-left bg-gradient-to-r from-brand-accent via-brand-lime to-brand-water md:block"
          />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-brand-dark font-display text-sm font-semibold text-brand-lime ring-8 ring-brand-cream">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-brand-dark">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/65">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
