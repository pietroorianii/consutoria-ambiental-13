
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:w-[350px]">
          <div className="flex flex-col gap-6 mt-8">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-semibold">
              Início
            </Link>
            
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-xl font-semibold">
              Serviços
            </Link>
            
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-semibold">
              Sobre Nós
            </Link>
            
            <Link to="/faq" onClick={() => setIsOpen(false)} className="text-xl font-semibold">
              FAQ
            </Link>
            
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-semibold">
              Contato
            </Link>
            
            <Button asChild className="mt-4 bg-eco-green hover:bg-eco-green-dark">
              <Link to="/request-quote" onClick={() => setIsOpen(false)}>
                Solicitar Orçamento
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
