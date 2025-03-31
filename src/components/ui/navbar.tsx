
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Licenciamento e Autorizações",
    href: "/services/licensing",
    description: "Licenciamentos Ambientais e Autorizações"
  },
  {
    title: "Monitoramento e Análises",
    href: "/services/monitoring",
    description: "Acompanhamento de condicionantes e análises ambientais"
  },
  {
    title: "Planos e Relatórios",
    href: "/services/reports",
    description: "Elaboração de planos e relatórios ambientais"
  },
  {
    title: "Acompanhamento e Consultoria",
    href: "/services/consulting",
    description: "Acompanhamento de projetos e consultoria ambiental"
  },
  {
    title: "Treinamentos",
    href: "/services/training",
    description: "Treinamentos e capacitações ambientais"
  },
  {
    title: "Gestão e Manutenção",
    href: "/services/management",
    description: "Gestão contínua e manutenção ambiental"
  }
];

const legislation = [
  {
    title: "Indústrias",
    href: "/legislation/industry",
    description: "Legislação ambiental para o setor industrial"
  },
  {
    title: "Construção Civil",
    href: "/legislation/construction",
    description: "Normas ambientais para construção civil"
  },
  {
    title: "Agricultura",
    href: "/legislation/agriculture",
    description: "Leis e decretos para o setor agrícola"
  },
  {
    title: "Recursos Hídricos",
    href: "/legislation/water",
    description: "Legislação para gestão de recursos hídricos"
  }
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco-green to-eco-blue">
              EcoConsult
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}>
                    Início
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Legislação</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {legislation.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}>
                    Sobre Nós
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}>
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button asChild className="ml-4 bg-eco-green hover:bg-eco-green-dark">
            <Link to="/contact">Solicitar Orçamento</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
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
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">Serviços</h3>
                  {services.map((service) => (
                    <Link 
                      key={service.title}
                      to={service.href}
                      onClick={() => setIsOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors pl-2"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">Legislação</h3>
                  {legislation.map((item) => (
                    <Link 
                      key={item.title}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors pl-2"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-semibold">
                  Sobre Nós
                </Link>
                
                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-semibold">
                  Contato
                </Link>
                
                <Button asChild className="mt-4 bg-eco-green hover:bg-eco-green-dark">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
