
import React from "react";
import { Link } from "react-router-dom";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { MobileNav } from "@/components/navbar/MobileNav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/510063e3-c0ae-41ce-88e9-a835f4ecffcd.png" 
              alt="PRISMA Soluções Ambientais" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-prisma-green font-poppins">
                PRISMA
              </span>
              <span className="text-xs text-prisma-blue font-montserrat uppercase tracking-wider">
                Soluções Ambientais
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
