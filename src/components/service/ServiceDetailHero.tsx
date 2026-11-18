import React from "react";
import { Link } from "react-router-dom";
import { FileSignature, ListChecks, MessageCircle } from "lucide-react";
import { AxisPageHero } from "@/components/brand/AxisPageHero";
import { axisImageFor } from "@/components/brand/imageMap";

interface ServiceDetailHeroProps {
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    image?: string;
    id?: string;
  };
}

const licensingChildren = ["lp", "li", "lo", "las", "lac", "dlam"];

const facts = [
  { icon: ListChecks, title: "Enquadramento correto", text: "Modalidade e estudos definidos antes do protocolo" },
  { icon: FileSignature, title: "ART do responsável técnico", text: "Documentação assinada e rastreável" },
  { icon: MessageCircle, title: "Um ponto de contato", text: "Você acompanha cada etapa sem precisar ligar no órgão" },
];

export const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => {
  const isLicensingChild = !!service.id && licensingChildren.includes(service.id);
  return (
    <>
      <AxisPageHero
        title={service.title}
        description={service.description}
        image={axisImageFor(service.id)}
        backUrl={isLicensingChild ? "/services/licensing" : "/services"}
        backText={isLicensingChild ? "Licenciamento ambiental" : "Todos os serviços"}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/request-quote" className="axis-btn-solid justify-center">Solicitar orçamento</Link>
          <Link to="/contact" className="axis-btn-ghost justify-center">Tirar uma dúvida</Link>
        </div>
      </AxisPageHero>
      <div className="border-b border-brand-dark/10 bg-white">
        <div className="container grid divide-y divide-brand-dark/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {facts.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 py-5 md:px-6 md:first:pl-0">
              <Icon className="h-6 w-6 shrink-0 text-brand-accent" strokeWidth={1.6} />
              <div>
                <p className="font-display text-sm font-semibold text-brand-dark">{title}</p>
                <p className="text-sm text-brand-dark/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
