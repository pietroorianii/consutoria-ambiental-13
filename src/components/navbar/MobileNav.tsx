
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { to: "/", label: "Início", exact: true },
  { to: "/about", label: "Sobre Nós", exact: false },
  { to: "/services", label: "Serviços", exact: false },
  { to: "/faq", label: "Perguntas Frequentes", exact: false },
  { to: "/contact", label: "Contato", exact: false },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (to: string, exact: boolean) => {
    if (exact) return location.pathname === to;
    return location.pathname.startsWith(to);
  };

  return (
    <div className="flex shrink-0 items-center xl:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-brand-primary/10" aria-label="Abrir menu">
            <Menu className="h-6 w-6 text-brand-primary" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[min(20rem,calc(100vw-2rem))] bg-background">
          <SheetHeader>
            <SheetTitle className="text-left font-sora text-brand-primary">Menu de Navegação</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.to, item.exact);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={`
                    flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors
                    ${active
                      ? "bg-brand-primary/10 text-brand-primary font-semibold"
                      : "text-foreground hover:bg-brand-primary/8 hover:text-brand-primary"
                    }
                  `}
                >
                  {item.label}
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-brand-accent flex-shrink-0" />
                  )}
                </Link>
              );
            })}

            {/* CTA Button */}
            <div className="pt-4 border-t border-border">
              <Link
                to="/request-quote"
                onClick={closeMenu}
                className="block w-full rounded-full bg-brand-primary px-4 py-3 text-center text-base font-semibold text-brand-cream shadow-md transition-all duration-300 hover:bg-brand-dark"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
