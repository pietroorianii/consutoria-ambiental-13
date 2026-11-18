import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Título de seção no padrão Axis: título + traço verde. Sem "eyebrows" em caixa-alta. */
export function SectionHeading({
  title,
  intro,
  tone = "light",
  align = "left",
  className,
}: {
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-[1.12] tracking-tight md:text-[2.6rem]",
          dark ? "text-brand-cream" : "text-brand-dark",
        )}
      >
        {title}
      </h2>
      <span className={cn("axis-rule mt-5", align === "center" && "mx-auto")} />
      {intro && (
        <p className={cn("mt-5 text-base leading-relaxed md:text-lg", dark ? "text-brand-cream/75" : "text-brand-dark/70")}>
          {intro}
        </p>
      )}
    </div>
  );
}
