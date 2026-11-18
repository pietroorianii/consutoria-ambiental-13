import { Factory, Tractor, HardHat, Stethoscope, Store, Zap } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";

const segments = [
  { name: "Indústria", icon: Factory, need: "LO, emissões atmosféricas, efluentes e PGRS" },
  { name: "Agronegócio", icon: Tractor, need: "Outorgas, CAR, licenças de aviários e suinocultura" },
  { name: "Construção civil", icon: HardHat, need: "Licença de obra, PGRCC e autorizações florestais" },
  { name: "Saúde", icon: Stethoscope, need: "PGRSS e rotina de resíduos de serviços de saúde" },
  { name: "Comércio e serviços", icon: Store, need: "DLAM, LAS e regularização de postos e oficinas" },
  { name: "Energia", icon: Zap, need: "Estudos para PCHs, usinas solares e linhas de transmissão" },
];

export function SegmentCards() {
  return (
    <section className="bg-brand-cream pb-20 md:pb-28">
      <div className="container">
        <div className="rounded-[1.5rem] bg-white p-8 md:p-12">
          <SectionHeading
            title="Cada setor tem uma exigência diferente. Conhecemos todas."
            intro="Atendemos empresas de pequeno a grande porte, com o enquadramento certo para cada atividade."
          />
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map(({ name, icon: Icon, need }) => (
              <li key={name} className="flex gap-4 border-t border-brand-dark/10 py-6">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand-accent" strokeWidth={1.6} />
                <div>
                  <p className="font-display font-semibold text-brand-dark">{name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-dark/65">{need}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
