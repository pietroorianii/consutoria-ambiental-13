
import React, { useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { TexturedBackground } from "@/components/ui/textured-background";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  // Ativar o efeito de animação ao rolar
  useScrollAnimation();

  // Voltar ao topo da página quando o componente for montado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      {/* Background texturizado com elementos decorativos */}
      <TexturedBackground />
      
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
