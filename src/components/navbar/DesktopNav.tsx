
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { to: "/", label: "Início", exact: true },
  { to: "/about", label: "Sobre Nós", exact: false },
  { to: "/services", label: "Serviços", exact: false },
  { to: "/faq", label: "FAQ", exact: false },
  { to: "/contact", label: "Contato", exact: false },
];

export function DesktopNav() {
  const location = useLocation();

  const isActive = (to: string, exact: boolean) => {
    if (exact) return location.pathname === to;
    return location.pathname.startsWith(to);
  };

  return (
    <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 xl:flex">
      <div className="min-w-0">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => {
              const active = isActive(item.to, item.exact);
              return (
                <NavigationMenuItem key={item.to}>
                  <Link
                    to={item.to}
                    className={`
                      group inline-flex h-10 items-center justify-center rounded-full px-3 py-2 text-sm font-medium transition-colors
                      focus:outline-none lg:px-4
                      ${active
                        ? "bg-brand-primary/12 text-brand-primary font-semibold"
                        : "bg-transparent text-brand-dark hover:bg-brand-primary/8 hover:text-brand-primary"
                      }
                    `}
                  >
                    {item.label}
                    {active && (
                      <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent inline-block" />
                    )}
                  </Link>
                </NavigationMenuItem>
              );
            })}
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
