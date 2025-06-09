
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavListItem from "./NavListItem";
import { navData } from "./navData";
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
          <p className="text-xs text-muted-foreground font-body">
            Consultoria especializada
          </p>
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

          {/* Services with dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="hover:bg-eco-green/10 hover:text-eco-green-dark data-[state=open]:bg-eco-green/15"
              onMouseEnter={() => setHoveredItem("services")}
            >
              Serviços
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-0 top-0 w-full md:w-[500px] lg:w-[600px]">
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-3">
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-eco-green/50 to-eco-green p-6 no-underline outline-none focus:shadow-md">
                    <Leaf className="h-6 w-6 text-white" />
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Nossos Serviços
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Soluções ambientais completas para sua empresa
                    </p>
                  </div>
                </div>
                <div className="grid gap-2">
                  {navData.services.slice(0, 4).map((service) => (
                    <NavListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </NavListItem>
                  ))}
                </div>
                <div className="grid gap-2">
                  {navData.services.slice(4).map((service) => (
                    <NavListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </NavListItem>
                  ))}
                  <NavListItem
                    title="Ver Todos os Serviços"
                    href="/services"
                    className="font-medium text-eco-green-dark border-t pt-2"
                  >
                    Explore nossa gama completa de soluções
                  </NavListItem>
                </div>
              </div>
            </NavigationMenuContent>
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
