import { axisLogo } from "./assets";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark";

/** Logo horizontal (símbolo + wordmark). `dark` = para fundos escuros (versão prata/branca). */
export function AxisLogoHorizontal({ variant = "dark", className }: { variant?: Variant; className?: string }) {
  const onDark = variant === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={onDark ? axisLogo.symbolWhite : axisLogo.symbolColor}
        alt=""
        aria-hidden
        className="h-9 w-auto md:h-10"
        width={444}
        height={314}
      />
      <img
        src={onDark ? axisLogo.wordmarkWhite : axisLogo.wordmarkColor}
        alt="Axis Soluções Ambientais"
        className="h-7 w-auto md:h-8"
        width={475}
        height={128}
      />
    </span>
  );
}

/** Logo vertical completo (símbolo sobre o wordmark). */
export function AxisLogoStacked({ variant = "dark", className }: { variant?: Variant; className?: string }) {
  return (
    <img
      src={variant === "dark" ? axisLogo.fullWhite : axisLogo.fullColor}
      alt="Axis Soluções Ambientais"
      className={cn("h-auto", className)}
    />
  );
}

/** Contorno do "A" da marca: linha fina usada como grafismo sobre fotos e superfícies navy. */
export function AxisALine({ className, strokeClass = "stroke-white/40" }: { className?: string; strokeClass?: string }) {
  return (
    <svg viewBox="0 0 520 440" fill="none" aria-hidden className={className}>
      <path
        d="M10 430 L222 38 C236 12 262 4 288 14 C300 19 308 28 314 40 L510 430"
        className={strokeClass}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M120 430 C190 330 270 300 380 330 C430 344 470 380 505 425"
        className={strokeClass}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
