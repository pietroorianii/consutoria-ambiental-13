
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
              src="/lovable-uploads/20af9ca8-439a-4c69-a3a3-4e79814b104b.png" 
              alt="PRISMA Soluções Ambientais" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-prisma-green via-prisma-blue to-prisma-green bg-clip-text text-transparent group-hover:from-prisma-blue group-hover:to-prisma-green transition-all duration-300" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>
                PRISMA
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-prisma-blue to-prisma-green bg-clip-text text-transparent" style={{
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
