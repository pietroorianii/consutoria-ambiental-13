
import React from "react";
import { Link } from "react-router-dom";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { MobileNav } from "@/components/navbar/MobileNav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-eco-green/20">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/d411c434-c49d-4917-ae05-49dc59580547.png" 
              alt="Solari Soluções Ambientais" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent tracking-tight whitespace-nowrap"
              style={{ fontFamily: "'Playfair Display', 'Poppins', serif" }}
            >
              SOLARI SOLUÇÕES AMBIENTAIS
            </span>
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
