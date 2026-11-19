import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navItems } from "./DesktopNav";
import { AxisLogoHorizontal } from "@/components/brand/AxisLogo";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = (to: string, exact: boolean) => (exact ? pathname === to : pathname.startsWith(to === "/services" ? "/service" : to));

  return (
    <div className="flex shrink-0 items-center xl:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="axis-navy-surface w-[min(21rem,calc(100vw-2rem))] border-l border-white/10 text-white">
          <SheetHeader>
            <SheetTitle className="text-left">
              <AxisLogoHorizontal variant="dark" />
            </SheetTitle>
          </SheetHeader>
          <nav aria-label="Menu" className="mt-10 flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item.to, item.exact);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between border-b border-white/10 py-4 font-display text-lg font-medium transition-colors",
                    active ? "text-brand-lime" : "text-white/85 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link to="/diagnostico" onClick={() => setIsOpen(false)} className="axis-btn-solid mt-8 justify-center">
              Diagnóstico grátis
            </Link>
            <Link to="/request-quote" onClick={() => setIsOpen(false)} className="axis-btn-ghost mt-3 justify-center">
              Solicitar orçamento
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
