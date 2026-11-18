import React from "react";
import { AxisPageHero } from "@/components/brand/AxisPageHero";
import { axisImageFor } from "@/components/brand/imageMap";

type PageBannerVariant = "about" | "services" | "faq" | "contact" | "quote" | "team" | "licenses" | "default";

interface PageBannerProps {
  title: string;
  description: string;
  /** Mantido por compatibilidade; o cabeçalho Axis não usa ícone. */
  icon?: React.ReactNode;
  variant?: PageBannerVariant;
  iconColor?: string;
  backUrl?: string;
  backText?: string;
}

/** Cabeçalho das páginas internas — agora no padrão visual Axis. */
export function PageBanner({ title, description, variant = "default", backUrl, backText }: PageBannerProps) {
  return (
    <AxisPageHero
      title={title}
      description={description}
      image={axisImageFor(variant === "default" ? "privacy" : variant)}
      backUrl={backUrl}
      backText={backText}
    />
  );
}
