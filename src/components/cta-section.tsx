
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout } from "lucide-react";

export function CTASection() {
  return (
    <section className="container py-20 md:py-28 relative z-10">
      <div className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-brand-dark via-brand-primary to-brand-dark">
        {/* Glow accents */}
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-brand-accent/25 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-[24rem] h-[24rem] rounded-full bg-brand-primary/40 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 p-12 sm:p-16 md:p-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-5 rounded-2xl bg-brand-cream/10 backdrop-blur-sm border border-brand-cream/20">
                <Sprout className="text-brand-cream" size={32} />
              </div>
            </div>

            <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-brand-cream mb-6">
              Pronto para regularizar sua <span className="text-brand-accent">empresa?</span>
            </h2>

            <div className="h-1 w-24 bg-brand-accent/60 rounded-full mx-auto mb-8" />

            <p className="font-inter max-w-2xl mx-auto mb-10 text-brand-cream/85 text-lg leading-relaxed">
              Fale com um especialista hoje. Diagnóstico inicial sem custo.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-2xl px-8 py-6 shadow-lg shadow-brand-accent/20 transition-shadow hover:shadow-xl">
                <Link to="/request-quote" className="flex items-center gap-3 text-base font-medium">
                  Solicitar diagnóstico gratuito
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 py-6 border-brand-cream/30 bg-brand-cream/5 text-brand-cream hover:bg-brand-cream hover:text-brand-dark backdrop-blur-md">
                <Link to="/services" className="text-base font-medium">
                  Conhecer Serviços
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
