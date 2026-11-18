
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { TexturedBackground } from "@/components/ui/textured-background";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  // Ativar o efeito de animação ao rolar
  useScrollAnimation();

  const { hash } = useLocation();
  // Topo da página ao entrar; se houver âncora (#radar, #team), rola até ela.
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const t = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 120);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      {/* Background texturizado com elementos decorativos */}
      <TexturedBackground />
      
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppFloat />
    </div>
  );
}
