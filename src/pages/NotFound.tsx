import { Link } from "react-router-dom";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { MetaTags } from "@/components/layout/MetaTags";
import { axisImages } from "@/components/brand/assets";

const shortcuts = [
  { to: "/services", label: "Ver serviços" },
  { to: "/licenses-authorizations", label: "Modalidades de licença" },
  { to: "/faq", label: "Dúvidas frequentes" },
  { to: "/contact", label: "Falar com a equipe" },
];

const NotFound = () => (
  <PageWrapper>
    <MetaTags title="Página não encontrada | Axis Soluções Ambientais" noindex />
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-brand-dark text-white">
      <img src={axisImages.forestAxis} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/40" />
      <div className="container py-20">
        <p className="font-display text-7xl font-semibold text-brand-lime md:text-8xl">404</p>
        <h1 className="mt-4 max-w-xl font-display text-3xl font-medium md:text-4xl">Esta página saiu da trilha.</h1>
        <p className="mt-4 max-w-lg text-brand-silver/80">O endereço pode ter mudado ou não existir mais. Escolha um caminho abaixo.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="axis-btn-solid">Ir para o início</Link>
          {shortcuts.map((s) => (
            <Link key={s.to} to={s.to} className="axis-btn-ghost">{s.label}</Link>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default NotFound;
