
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function DesktopNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navLinkClass = "group inline-flex h-10 items-center justify-center rounded-full bg-transparent px-3 py-2 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-primary/10 hover:text-brand-primary focus:bg-brand-primary/10 focus:text-brand-primary focus:outline-none lg:px-4";

  return (
    <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex">
      <div className="min-w-0">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link 
                to="/" 
                className={navLinkClass}
                onMouseEnter={() => setHoveredItem("home")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Início
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/about" 
                className={navLinkClass}
                onMouseEnter={() => setHoveredItem("about")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Sobre Nós
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/services" 
                className={navLinkClass}
                onMouseEnter={() => setHoveredItem("services")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Serviços
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/faq" 
                className={navLinkClass}
                onMouseEnter={() => setHoveredItem("faq")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                FAQ
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/contact" 
                className={navLinkClass}
                onMouseEnter={() => setHoveredItem("contact")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Contato
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex shrink-0 items-center">
        <Link
          to="/request-quote"
          className="inline-flex items-center justify-center rounded-full bg-brand-primary px-4 py-2.5 text-sm font-semibold text-brand-cream shadow-md shadow-brand-primary/15 transition-all duration-300 hover:bg-brand-dark hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent lg:px-5"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </div>
  );
}
