import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { navData } from "./navData";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  const linkClass = (path: string) => cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm md:text-base font-medium transition-colors hover:bg-brand-primary/10 hover:text-brand-primary focus:bg-brand-primary/10 focus:text-brand-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative font-inter",
    isActive(path) ? "text-brand-primary font-semibold" : "text-foreground/80"
  );

  const activeIndicator = (path: string) => isActive(path) && (
    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
  );

  return (
    <div className="hidden md:flex items-center justify-between w-full">
      {/* Navigation Menu */}
      <div className="flex-1 flex justify-end mr-6">
        <NavigationMenu>
          <NavigationMenuList className="space-x-1">
            {navData.mainNav.map((item) => {
              if (item.title === "Serviços") {
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className={cn(linkClass(item.href), "bg-transparent h-10")}>
                      {item.title}
                      {activeIndicator(item.href)}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
                        {navData.services.map((service) => (
                          <li key={service.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-primary/5 hover:text-brand-primary focus:bg-brand-primary/5 focus:text-brand-primary"
                              >
                                <div className="text-sm font-semibold leading-none font-sora text-brand-dark mb-2">{service.title}</div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground font-inter">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.title}>
                  <Link 
                    to={item.href} 
                    className={linkClass(item.href)}
                  >
                    {item.title}
                    {activeIndicator(item.href)}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA Button */}
      <div className="flex items-center">
        <Link
          to="/request-quote"
          className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-brand-accent/90 hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ripple-button font-inter"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </div>
  );
}
