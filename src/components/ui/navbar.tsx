import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { MobileNav } from "@/components/navbar/MobileNav";
import { AxisLogoHorizontal } from "@/components/brand/AxisLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-white/10 bg-brand-dark/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-brand-dark",
      )}
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" className="shrink-0 rounded-md" aria-label="Axis Soluções Ambientais, página inicial">
          <AxisLogoHorizontal variant="dark" />
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
