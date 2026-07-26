
import React from "react";
import { Link } from "react-router-dom";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { MobileNav } from "@/components/navbar/MobileNav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-primary/15 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between gap-4 overflow-hidden">
        <div className="flex min-w-0 items-center">
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <img 
              src="/lovable-uploads/d411c434-c49d-4917-ae05-49dc59580547.png" 
              alt="Solari Soluções Ambientais" 
              className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 md:h-11"
            />
            <span className="hidden max-w-[58vw] truncate bg-gradient-to-r from-yellow-400 via-lime-500 to-brand-secondary bg-clip-text font-sora text-base font-extrabold leading-none text-transparent sm:block md:text-lg xl:max-w-none xl:text-xl">
              SOLARI SOLUÇÕES AMBIENTAIS
            </span>
          </Link>
        </div>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
