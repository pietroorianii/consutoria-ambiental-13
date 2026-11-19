import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { AxisLogoStacked, AxisALine } from "@/components/brand/AxisLogo";
import { company } from "@/config/company";

const quickLinks = [
  { to: "/", label: "Início" },
  { to: "/diagnostico", label: "Diagnóstico gratuito" },
  { to: "/about", label: "Sobre a Axis" },
  { to: "/services", label: "Serviços" },
  { to: "/faq", label: "Dúvidas frequentes" },
  { to: "/#radar", label: "Radar normativo" },
  { to: "/request-quote", label: "Solicitar orçamento" },
  { to: "/contact", label: "Contato" },
  { to: "/marca", label: "Identidade visual" },
  { to: "/privacidade", label: "Política de privacidade" },
];

const serviceLinks = [
  { to: "/service/licensing", label: "Licenciamento ambiental" },
  { to: "/service/water_grants", label: "Outorga e recursos hídricos" },
  { to: "/service/technical_studies", label: "Estudos e planos técnicos" },
  { to: "/service/authorizations", label: "Autorizações florestais" },
  { to: "/service/compliance", label: "Conformidade e renovação" },
  { to: "/service/ibama", label: "Cadastro IBAMA (CTF)" },
];

// Só exibe redes que tenham link real configurado em src/config/company.ts
const social = [
  { href: company.instagram, label: "Instagram da Axis", Icon: Instagram },
  { href: company.linkedin, label: "LinkedIn da Axis", Icon: Linkedin },
  { href: company.facebook, label: "Facebook da Axis", Icon: Facebook },
].filter((s) => s.href);

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-5 font-display text-base font-semibold text-white">{children}</h3>;
}

export function Footer() {
  const year = new Date().getFullYear();
  const linkCls = "text-sm text-brand-silver/70 transition-colors hover:text-brand-lime";

  return (
    <footer className="axis-navy-surface relative overflow-hidden text-brand-silver">
      <AxisALine className="pointer-events-none absolute -right-24 -top-10 h-[34rem] w-auto opacity-60" strokeClass="stroke-white/10" />

      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <AxisLogoStacked variant="dark" className="w-44" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-brand-silver/70">
              Engenharia, gestão e inovação ambiental para empresas de Ponta Grossa, dos Campos Gerais e de todo o Paraná.
            </p>
            <p className="mt-3 text-xs text-brand-silver/50">Responsável técnico: {company.crea}</p>
            <div className="mt-6 flex gap-2">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-brand-silver/80 transition-colors hover:border-brand-lime hover:text-brand-lime"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>Navegação</FooterHeading>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Serviços</FooterHeading>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Fale com a gente</FooterHeading>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                <span className="leading-relaxed text-brand-silver/70">
                  {company.address.street}<br />{company.address.district}, {company.address.city} ({company.address.state})<br />CEP {company.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-lime" />
                <a href={`tel:${company.phoneE164}`} className={linkCls}>{company.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-lime" />
                <a href={`mailto:${company.email}`} className={linkCls}>{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-brand-silver/45">
          Consultoria ambiental em {company.cities.join(", ")} e demais municípios do Paraná.
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-brand-silver/50">© {year} Axis Soluções Ambientais. Todos os direitos reservados.</p>
          <p className="font-display text-xs font-medium tracking-[0.25em] text-brand-silver/50">
            INOVAR. PRESERVAR. <span className="text-brand-lime">TRANSFORMAR.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
