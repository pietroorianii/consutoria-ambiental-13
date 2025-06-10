
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Leaf } from "lucide-react";

export function DesktopNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="hidden md:flex items-center justify-between w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="p-2 bg-eco-green/15 rounded-xl group-hover:bg-eco-green/25 transition-all duration-300 shadow-sm group-hover:shadow-md">
          <Leaf className="h-7 w-7 text-eco-green group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-bold text-gray-900 font-primary group-hover:text-eco-green-dark transition-colors duration-300">
            L&P Soluções Ambientais
          </h1>
        </div>
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="space-x-2">
          {/* Home */}
          <NavigationMenuItem>
            <Link 
              to="/" 
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-eco-green/10 hover:text-eco-green-dark focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              onMouseEnter={() => setHoveredItem("home")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Início
            </Link>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <Link 
              to="/about" 
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-eco-green/10 hover:text-eco-green-dark focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              onMouseEnter={() => setHoveredItem("about")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Sobre Nós
            </Link>
          </NavigationMenuItem>

          {/* Services */}
          <NavigationMenuItem>
            <Link 
              to="/services" 
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-eco-green/10 hover:text-eco-green-dark focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              onMouseEnter={() => setHoveredItem("services")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Serviços
            </Link>
          </NavigationMenuItem>

          {/* FAQ */}
          <NavigationMenuItem>
            <Link 
              to="/faq" 
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-eco-green/10 hover:text-eco-green-dark focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              onMouseEnter={() => setHoveredItem("faq")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              FAQ
            </Link>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <Link 
              to="/contact" 
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-eco-green/10 hover:text-eco-green-dark focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              onMouseEnter={() => setHoveredItem("contact")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Contato
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA Button */}
      <div className="flex items-center space-x-4">
        <Link
          to="/request-quote"
          className="inline-flex items-center justify-center rounded-md bg-eco-green px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-eco-green-dark hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eco-green"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </div>
  );
}
