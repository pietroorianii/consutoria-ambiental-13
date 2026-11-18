import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { axisImages } from "@/components/brand/assets";

export function CTASection() {
  return (
    <section className="bg-brand-cream pb-24 md:pb-32">
      <div className="container">
        <div className="relative grid overflow-hidden rounded-[1.75rem] bg-brand-dark text-white lg:grid-cols-[1.1fr_1fr]">
          <div className="relative z-10 p-9 sm:p-14 lg:p-16">
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl">
              Vamos colocar sua empresa <span className="font-semibold text-brand-lime">em dia com o meio ambiente?</span>
            </h2>
            <span className="axis-rule mt-6" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-silver/80">
              Conte o que sua empresa faz e onde opera. Em até um dia útil você recebe a análise inicial, sem custo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-quote" className="axis-btn-solid group justify-center px-7 py-3.5 text-base">
                Solicitar diagnóstico gratuito
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="axis-btn-ghost justify-center px-7 py-3.5 text-base">
                <MessageCircle className="h-5 w-5" />
                Falar com a equipe
              </Link>
            </div>
          </div>
          <div className="relative min-h-[16rem]">
            <img
              src={axisImages.seedling}
              alt="Muda brotando em solo fértil"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>
        </div>
      </div>
    </section>
  );
}
