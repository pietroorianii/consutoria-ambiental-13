import { Link } from "react-router-dom";
import { ArrowUpRight, Leaf, ShieldCheck, Sprout, Droplet, Recycle, Settings2, type LucideIcon } from "lucide-react";
import { axisImages } from "@/components/brand/assets";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { cn } from "@/lib/utils";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  rule?: "lime" | "water";
}

const pillars: Pillar[] = [
  {
    icon: Leaf,
    title: "Licenciamento Ambiental",
    description: "Da dispensa (DLAM) à LP, LI e LO. Enquadramos a atividade na modalidade certa e protocolamos no SGA do IAT.",
    image: axisImages.industry,
    alt: "Planta industrial iluminada ao entardecer",
    href: "/services/licensing",
  },
  {
    icon: ShieldCheck,
    title: "Auditorias e Conformidade",
    description: "Controle de condicionantes, renovações e relatórios periódicos para a licença nunca vencer sem aviso.",
    image: axisImages.auditClipboard,
    alt: "Prancheta com checklist de conformidade ao lado de uma muda",
    href: "/services/management",
  },
  {
    icon: Sprout,
    title: "ESG e Sustentabilidade",
    description: "Diagnóstico, indicadores e relatórios ESG para atender clientes, bancos e cadeias de fornecimento.",
    image: axisImages.esgHands,
    alt: "Mãos segurando uma muda em solo fértil",
    href: "/services/esg",
  },
  {
    icon: Droplet,
    title: "Recursos Hídricos e Efluentes",
    description: "Outorga de captação e lançamento via SIGARH, poços, barragens e monitoramento de efluentes.",
    image: axisImages.waterTreatment,
    alt: "Decantador de estação de tratamento de efluentes",
    href: "/services/water_resources",
    rule: "water",
  },
  {
    icon: Recycle,
    title: "Gestão de Resíduos Sólidos",
    description: "PGRS, PGRSS e PGRCC conforme a Lei 12.305/2010, com rotina de MTR e destinação comprovada.",
    image: axisImages.wasteBales,
    alt: "Fardos de material reciclável em pátio industrial",
    href: "/services/reports",
  },
  {
    icon: Settings2,
    title: "Soluções para a Indústria",
    description: "EIA/RIMA, RAS, PCA, PRAD e emissões atmosféricas (SGADEA): estudos técnicos sob medida, com ART.",
    image: axisImages.engineeringHelmet,
    alt: "Capacete de engenharia Axis sobre plantas técnicas",
    href: "/services/consulting",
  },
];

const alsoDo = [
  { label: "Autorizações ambientais e florestais", href: "/service/authorizations" },
  { label: "Emissões atmosféricas (SGADEA)", href: "/service/air_emissions" },
  { label: "Cadastro IBAMA (CTF/APP)", href: "/service/ibama" },
  { label: "Recuperação de áreas degradadas", href: "/services/degraded_areas" },
  { label: "Treinamentos ambientais", href: "/services/training" },
  { label: "Regularização e TAC", href: "/service/compliance" },
];

function PillarTile({ p }: { p: Pillar }) {
  const Icon = p.icon;
  return (
    <Link
      to={p.href}
      className="group relative grid min-h-[15rem] overflow-hidden rounded-[1.25rem] bg-brand-dark text-white shadow-[0_24px_50px_-28px_rgba(6,24,33,0.7)] sm:grid-cols-[0.95fr_1fr]"
    >
      <div className="relative h-48 overflow-hidden sm:h-auto">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {/* curva verde que separa foto e painel, como nas peças */}
        <svg viewBox="0 0 100 400" preserveAspectRatio="none" aria-hidden className="absolute inset-y-0 right-0 hidden h-full w-16 sm:block">
          <path d="M100 0 L100 400 L0 400 C40 300 70 160 100 0Z" className="fill-brand-dark" />
          <path d="M100 0 C70 160 40 300 0 400" fill="none" className="stroke-brand-lime/70" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="relative flex flex-col justify-center gap-3 p-7 sm:pl-4">
        <Icon className={cn("h-8 w-8", p.rule === "water" ? "text-brand-water" : "text-brand-lime")} strokeWidth={1.6} />
        <h3 className="font-display text-xl font-semibold leading-tight md:text-[1.4rem]">{p.title}</h3>
        <span className={p.rule === "water" ? "axis-rule-water" : "axis-rule"} />
        <p className="text-sm leading-relaxed text-brand-silver/80">{p.description}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-lime">
          Ver serviço
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function ServicesShowcase() {
  return (
    <section className="relative bg-brand-cream py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            title="Consultoria técnica em meio ambiente e sustentabilidade para o seu negócio."
            intro="Seis frentes de atuação, um único time responsável. Clique em cada uma para ver prazos, documentos e base legal."
          />
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-brand-dark/15 bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-accent hover:text-brand-accent lg:self-auto"
          >
            Ver todos os serviços
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {pillars.map((p) => (
            <PillarTile key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-12 rounded-[1.25rem] border border-brand-dark/10 bg-white p-6 md:p-8">
          <p className="font-display text-lg font-semibold text-brand-dark">Também cuidamos de</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {alsoDo.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.href}
                  className="inline-flex rounded-full border border-brand-dark/12 px-4 py-2 text-sm text-brand-dark/80 transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
