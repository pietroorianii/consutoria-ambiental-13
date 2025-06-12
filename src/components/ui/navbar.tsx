
import React from "react";
import { Link } from "react-router-dom";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { MobileNav } from "@/components/navbar/MobileNav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-prisma-gray-light/30">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/510063e3-c0ae-41ce-88e9-a835f4ecffcd.png" 
              alt="PRISMA Logo" 
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-prisma-green group-hover:text-prisma-green transition-colors" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>
                PRISMA
              </span>
              <span className="text-sm font-medium text-prisma-blue" style={{
                fontFamily: "'Montserrat', sans-serif"
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
