
import { Facebook, Instagram, Linkedin, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />

      {/* Linha decorativa de topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

      <div className="container py-14 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="p-2 rounded-xl bg-brand-accent/15 border border-brand-accent/20">
                <Leaf className="h-5 w-5 text-brand-accent" />
              </div>
              <span className="font-sora text-lg font-bold text-brand-cream">
                Solari<span className="text-brand-accent"> Ambiental</span>
              </span>
            </div>
            <p className="font-inter text-sm text-brand-cream/65 leading-relaxed mb-5">
              Consultoria ambiental especializada em licenciamento, outorgas e gestão de conformidade no Paraná.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook — Solari Ambiental"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-cream/10 bg-brand-cream/5 text-brand-cream/60 transition-all hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @solariambiental"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-cream/10 bg-brand-cream/5 text-brand-cream/60 transition-all hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn — Solari Soluções Ambientais"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-cream/10 bg-brand-cream/5 text-brand-cream/60 transition-all hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-brand-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-sora text-sm font-semibold uppercase tracking-widest text-brand-cream/50 mb-5">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Início" },
                { to: "/about", label: "Sobre Nós" },
                { to: "/services", label: "Serviços" },
                { to: "/faq", label: "Perguntas Frequentes" },
                { to: "/request-quote", label: "Solicitar Orçamento" },
                { to: "/contact", label: "Contato" },
                { to: "/privacidade", label: "Política de Privacidade" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-inter text-sm text-brand-cream/65 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-sora text-sm font-semibold uppercase tracking-widest text-brand-cream/50 mb-5">
              Serviços
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/services/licensing", label: "Licenciamento Ambiental" },
                { to: "/services/water_resources", label: "Outorga de Recursos Hídricos" },
                { to: "/services/monitoring", label: "Monitoramento Ambiental" },
                { to: "/services/reports", label: "Estudos e Documentos" },
                { to: "/services/consulting", label: "Consultoria Especializada" },
                { to: "/service/ibama", label: "Cadastro IBAMA (CTF)" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-inter text-sm text-brand-cream/65 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-sora text-sm font-semibold uppercase tracking-widest text-brand-cream/50 mb-5">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 p-1.5 rounded-lg bg-brand-accent/10">
                  <MapPin className="h-4 w-4 text-brand-accent" />
                </div>
                <span className="font-inter text-sm text-brand-cream/65 leading-relaxed">
                  Rua Sete de Setembro, 1322<br />
                  Centro — Ponta Grossa, PR<br />
                  CEP: 84010-350
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 p-1.5 rounded-lg bg-brand-accent/10">
                  <Phone className="h-4 w-4 text-brand-accent" />
                </div>
                <a
                  href="tel:+5542999999999"
                  className="font-inter text-sm text-brand-cream/65 transition-colors hover:text-brand-accent"
                >
                  (42) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 p-1.5 rounded-lg bg-brand-accent/10">
                  <Mail className="h-4 w-4 text-brand-accent" />
                </div>
                <a
                  href="mailto:contato@solariambiental.com.br"
                  className="font-inter text-sm text-brand-cream/65 transition-colors hover:text-brand-accent"
                >
                  contato@solariambiental.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 border-t border-brand-cream/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-brand-cream/40">
            © {currentYear} Solari Soluções Ambientais. Todos os direitos reservados.
          </p>
          <p className="font-inter text-xs text-brand-cream/30">
            Consultoria Ambiental · Ponta Grossa, PR
          </p>
        </div>
      </div>
    </footer>
  );
}
