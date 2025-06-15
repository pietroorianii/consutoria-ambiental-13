
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
              src="/lovable-uploads/2841475c-8c0a-45ba-b310-8788db19c7ea.png" 
              alt="Solari Soluções Ambientais" 
              className="h-12 w-auto transition-transform duration-300"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-600 to-eco-green bg-clip-text text-transparent tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Poppins', serif" }}
              >
                Solari
              </span>
              <span
                className="text-lg md:text-xl font-medium text-eco-green"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.03em" }}
              >
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
