
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
              src="/lovable-uploads/2886d1f7-ded4-4a6e-bd2b-cb94db54d220.png" 
              alt="PRISMA Soluções Ambientais"
              className="h-10 w-10"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-prisma-green" style={{
                fontFamily: "'Poppins', sans-serif"
              }}>
                PRISMA
              </span>
              <span className="text-xs text-prisma-blue font-medium -mt-1" style={{
                fontFamily: "'Montserrat', sans-serif"
              }}>
                SOLUÇÕES AMBIENTAIS
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
