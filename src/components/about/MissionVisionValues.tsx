import { SectionHeading } from "@/components/brand/SectionHeading";
import { axisImages } from "@/components/brand/assets";

const pillars = [
  {
    title: "Missão",
    text: "Tornar o cumprimento da legislação ambiental claro, previsível e possível para empresas de todos os portes no Paraná.",
  },
  {
    title: "Visão",
    text: "Ser a consultoria ambiental de referência nos Campos Gerais, lembrada pela clareza técnica e pelo compromisso com prazos.",
  },
  {
    title: "Valores",
    text: "Inovar. Preservar. Transformar. Com transparência, rigor técnico e respeito ao tempo do cliente.",
  },
];

export function MissionVisionValues() {
  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading title="O que nos move" />
          <dl className="mt-10 space-y-8">
            {pillars.map((p) => (
              <div key={p.title} className="border-l-2 border-brand-lime pl-6">
                <dt className="font-display text-xl font-semibold text-brand-dark">{p.title}</dt>
                <dd className="mt-2 leading-relaxed text-brand-dark/70">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img src={axisImages.globeHands} alt="Mãos segurando um globo coberto de musgo" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-medium text-white">
            Juntos por um planeta <span className="font-semibold text-brand-lime">mais equilibrado.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionValues;
