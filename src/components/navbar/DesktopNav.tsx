
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { serviceCategories } from "@/data/serviceCategories";
import NavListItem from "./NavListItem";

export function DesktopNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="hidden md:flex items-center justify-between w-full">
      {/* Navigation Menu - movido mais para a direita */}
      <div className="flex-1 flex justify-center mr-8">
        <NavigationMenu>
          <NavigationMenuList className="space-x-1">
            {/* Home */}
            <NavigationMenuItem>
              <Link 
                to="/" 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-prisma-green/10 hover:text-prisma-green focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                onMouseEnter={() => setHoveredItem("home")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Início
              </Link>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <Link 
                to="/about" 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-prisma-green/10 hover:text-prisma-green focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                onMouseEnter={() => setHoveredItem("about")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Sobre Nós
              </Link>
            </NavigationMenuItem>

            {/* Services with Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-background hover:bg-prisma-green/10 hover:text-prisma-green px-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Serviços
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {Object.entries(serviceCategories).map(([key, category]) => (
                    <NavListItem
                      key={key}
                      title={category.title}
                      href={`/services/${key}`}
                    >
                      {category.description}
                    </NavListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* FAQ */}
            <NavigationMenuItem>
              <Link 
                to="/faq" 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-prisma-green/10 hover:text-prisma-green focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                onMouseEnter={() => setHoveredItem("faq")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FAQ
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link 
                to="/contact" 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-prisma-green/10 hover:text-prisma-green focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                onMouseEnter={() => setHoveredItem("contact")}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Contato
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA Button - mais próximo do menu */}
      <div className="flex items-center">
        <Link
          to="/request-quote"
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-prisma-green to-prisma-blue px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:from-prisma-blue hover:to-prisma-green hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prisma-green"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Solicitar Orçamento
        </Link>
      </div>
    </div>
  );
}
