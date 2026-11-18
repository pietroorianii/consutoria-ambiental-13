import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, FileSignature, MapPinned } from "lucide-react";
import { axisImages } from "@/components/brand/assets";
import { AxisALine } from "@/components/brand/AxisLogo";
import { SectionHeading } from "@/components/brand/SectionHeading";

const proofs = [
  { icon: BadgeCheck, title: "Responsável técnico habilitado", text: "Engenharia com registro no conselho de classe e vivência em processos do IAT." },
  { icon: FileSignature, title: "ART em todo projeto", text: "Cada estudo e plano sai assinado, com responsabilidade técnica formal." },
  { icon: MapPinned, title: "Presença regional", text: "Base em Ponta Grossa, atendimento nos Campos Gerais e em todo o Paraná." },
];

export function CompanyIntro() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagem com o grafismo do A sobreposto */}
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={axisImages.forestAxis}
              alt="Floresta e rio vistos do alto, com o símbolo da Axis em transparência"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent" />
            <p className="absolute bottom-7 left-7 right-7 font-display text-2xl font-medium leading-snug text-white md:text-3xl">
              Equilíbrio entre desenvolvimento <span className="font-semibold text-brand-lime">e meio ambiente.</span>
            </p>
          </div>
          <div className="absolute -right-4 -top-8 hidden w-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block md:w-48">
            <img src={axisImages.waterDrop} alt="Gota d'água tocando a superfície" loading="lazy" className="aspect-square w-full object-cover" />
          </div>
          <AxisALine className="pointer-events-none absolute -left-10 -top-10 h-40 w-auto" strokeClass="stroke-brand-accent/30" />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            title="Engenharia ambiental com propósito, do diagnóstico à licença emitida."
            intro="A Axis Soluções Ambientais assessora empresas que precisam cumprir a legislação ambiental sem travar a operação. Traduzimos exigências do IAT, do IBAMA e da legislação federal em um plano claro, com prazos e responsáveis."
          />

          <ul className="mt-10 space-y-6">
            {proofs.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-primary/8 text-brand-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display font-semibold text-brand-dark">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-dark/65">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary"
          >
            Conheça a Axis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
