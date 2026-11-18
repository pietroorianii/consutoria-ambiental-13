import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho padrão das páginas internas (identidade Axis):
 * navy à esquerda, foto da marca à direita dissolvendo no navy, título alinhado à esquerda.
 */
export function AxisPageHero({
  title,
  description,
  image,
  imageAlt = "",
  backUrl,
  backText = "Voltar",
  children,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  backUrl?: string;
  backText?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-brand-dark text-white", className)}>
      {image && (
        <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden md:w-[58%]">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/75 to-brand-dark/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-brand-dark/50 md:hidden" />
        </div>
      )}
      <div className="container relative py-14 md:py-20">
        {backUrl && (
          <Link
            to={backUrl}
            className="mb-8 inline-flex items-center gap-1 rounded-full text-sm font-medium text-brand-silver/80 transition-colors hover:text-brand-lime"
          >
            <ChevronLeft className="h-4 w-4" />
            {backText}
          </Link>
        )}
        <div className="max-w-2xl">
          <h1 className="font-display text-[2.1rem] font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">{title}</h1>
          <span className="axis-rule mt-6" />
          {description && <p className="mt-6 text-base leading-relaxed text-brand-silver/85 md:text-lg">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
