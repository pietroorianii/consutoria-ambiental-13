
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
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
          <div className="mt-6 space-y-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="block rounded-md px-4 py-2 text-base font-medium text-foreground transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
            >
              Início
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={closeMenu}
              className="block rounded-md px-4 py-2 text-base font-medium text-foreground transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
            >
              Sobre Nós
            </Link>
            
            {/* Services */}
            <Link
              to="/services"
              onClick={closeMenu}
              className="block rounded-md px-4 py-2 text-base font-medium text-foreground transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
            >
              Serviços
            </Link>

            {/* FAQ */}
            <Link
              to="/faq"
              onClick={closeMenu}
              className="block rounded-md px-4 py-2 text-base font-medium text-foreground transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
            >
              Perguntas Frequentes
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block rounded-md px-4 py-2 text-base font-medium text-foreground transition-colors hover:bg-brand-primary/10 hover:text-brand-primary"
            >
              Contato
            </Link>

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
