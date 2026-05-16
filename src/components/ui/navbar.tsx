
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { MobileNav } from "@/components/navbar/MobileNav";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled || !isHome
        ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-brand-primary/10" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/d411c434-c49d-4917-ae05-49dc59580547.png" 
              alt="Solari Soluções Ambientais" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent tracking-tight whitespace-nowrap font-sora"
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
