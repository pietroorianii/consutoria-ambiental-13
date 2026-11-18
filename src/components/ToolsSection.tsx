import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { RenewalCalculator } from "@/components/tools/RenewalCalculator";
import { axisImages } from "@/components/brand/assets";

/** Ferramentas gratuitas: geram valor imediato e transformam visita em conversa. */
export function ToolsSection() {
  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="container">
        <SectionHeading
          title="Resolva a primeira dúvida agora, sem falar com ninguém."
          intro="Duas ferramentas gratuitas para você entender sua situação antes de contratar."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Link to="/diagnostico" className="group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[1.5rem] bg-brand-dark p-7 text-white md:p-9">
            <img src={axisImages.engineeringHelmet} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/10" />
            <ClipboardCheck className="h-9 w-9 text-brand-lime" strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-2xl font-semibold md:text-3xl">Qual licença eu preciso?</h3>
            <p className="mt-3 max-w-md text-brand-silver/85">Cinco perguntas e você descobre o caminho provável: dispensa, licença simplificada, trifásica, regularização, outorga ou autorização florestal.</p>
            <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-brand-lime px-6 py-3 font-semibold text-brand-dark">
              Fazer o diagnóstico (2 min)
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <RenewalCalculator compact />
        </div>
      </div>
    </section>
  );
}
