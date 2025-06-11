
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
              alt="PRISMA Logo" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold" style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#2A6F47" // Verde Primário PRISMA
              }}>
                PRISMA
              </span>
              <span className="text-sm font-medium" style={{
                fontFamily: "'Montserrat', sans-serif", 
                color: "#0077C2" // Azul Secundário PRISMA
              }}>
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
