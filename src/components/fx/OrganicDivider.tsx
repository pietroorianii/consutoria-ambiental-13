/** Curva de relevo desenhada à mão entre seções. `fill` usa classes de cor (ex: "fill-brand-cream"). */
export function OrganicDivider({ fill = "fill-brand-cream", flip = false, className = "" }: { fill?: string; flip?: boolean; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none relative -mb-px w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`block h-12 w-full md:h-20 ${fill}`}>
        <path d="M0 60 C 160 20, 300 85, 470 55 S 760 10, 940 48 S 1250 90, 1440 40 L1440 90 L0 90 Z" opacity="0.45" />
        <path d="M0 72 C 200 45, 340 92, 540 68 S 880 38, 1080 66 S 1330 84, 1440 62 L1440 90 L0 90 Z" />
      </svg>
    </div>
  );
}
