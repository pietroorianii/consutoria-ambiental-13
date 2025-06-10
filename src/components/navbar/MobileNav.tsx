
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Leaf } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex md:hidden items-center justify-between w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="p-2 bg-eco-green/15 rounded-xl">
          <Leaf className="h-6 w-6 text-eco-green" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 font-primary">L&P</h1>
          <p className="text-xs text-muted-foreground font-body leading-tight">
            Soluções Ambientais
          </p>
        </div>
      </Link>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-eco-green/10">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <SheetHeader>
            <SheetTitle className="text-left font-primary">Menu de Navegação</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {/* Home */}
            <Link
              to="/"
              onClick={closeMenu}
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-eco-green/10 hover:text-eco-green-dark rounded-md transition-colors"
            >
              Início
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={closeMenu}
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-eco-green/10 hover:text-eco-green-dark rounded-md transition-colors"
            >
              Sobre Nós
            </Link>
            
            {/* Services */}
            <Link
              to="/services"
              onClick={closeMenu}
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-eco-green/10 hover:text-eco-green-dark rounded-md transition-colors"
            >
              Serviços
            </Link>

            {/* FAQ */}
            <Link
              to="/faq"
              onClick={closeMenu}
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-eco-green/10 hover:text-eco-green-dark rounded-md transition-colors"
            >
              Perguntas Frequentes
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-eco-green/10 hover:text-eco-green-dark rounded-md transition-colors"
            >
              Contato
            </Link>

            {/* CTA Button */}
            <div className="pt-4 border-t">
              <Link
                to="/request-quote"
                onClick={closeMenu}
                className="block w-full text-center bg-eco-green text-white px-4 py-3 rounded-md font-medium shadow-md hover:bg-eco-green-dark transition-all duration-300"
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
