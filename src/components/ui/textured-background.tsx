import React from "react";

interface TexturedBackgroundProps {
  className?: string;
}

/** Fundo global AXIS: névoa fria, sem ruído decorativo. */
export const TexturedBackground: React.FC<TexturedBackgroundProps> = ({ className = "" }) => (
  <div className={`pointer-events-none fixed inset-0 -z-10 bg-brand-cream ${className}`} />
);
