import { axisLogo, axisImages } from "@/components/brand/assets";

const values = [
  { verb: "Inovar.", text: "Ferramentas digitais, dados e processos enxutos para licenciar com menos retrabalho." },
  { verb: "Preservar.", text: "Cada condicionante cumprida é um rio, um solo e uma floresta que continuam saudáveis." },
  { verb: "Transformar.", text: "Exigência legal vira vantagem competitiva: acesso a crédito, clientes e novos mercados." },
];

/** Faixa de manifesto da marca: Inovar. Preservar. Transformar. */
export function SocialProof() {
  return (
    <section className="axis-navy-surface relative overflow-hidden py-20 text-white md:py-28">
      <img
        src={axisImages.earth}
        alt=""
        aria-hidden
        loading="lazy"
        style={{ maskImage: "radial-gradient(closest-side, black 55%, transparent 100%)", WebkitMaskImage: "radial-gradient(closest-side, black 55%, transparent 100%)" }}
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[38rem] -translate-y-1/2 opacity-30 lg:block"
      />
      <div className="container relative grid items-center gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
        <div className="flex items-center gap-8 lg:flex-col lg:items-start">
          <img src={axisLogo.symbolWhite} alt="" aria-hidden className="w-24 md:w-36" />
          <span className="hidden h-24 w-px bg-white/20 sm:block lg:h-px lg:w-36" aria-hidden />
          <p className="max-w-[12rem] font-display text-sm leading-relaxed text-brand-silver/70">
            O que guia cada projeto da Axis.
          </p>
        </div>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {values.map((v, i) => (
            <li key={v.verb} className="border-t border-white/15 pt-6">
              <p
                className={`font-display text-3xl font-semibold tracking-[0.04em] md:text-[2.1rem] ${
                  i === values.length - 1 ? "text-brand-lime" : "text-white"
                }`}
              >
                {v.verb}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-silver/75">{v.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
