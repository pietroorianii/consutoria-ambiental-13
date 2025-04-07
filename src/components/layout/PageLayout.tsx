
import { ReactNode } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

interface PageLayoutProps {
  children: ReactNode;
  withLeafPattern?: boolean;
  withFluidElements?: boolean;
  className?: string;
}

export function PageLayout({
  children,
  withLeafPattern = true,
  withFluidElements = true,
  className = "",
}: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className={`relative overflow-hidden ${className}`}>
        {withLeafPattern && (
          <div className="absolute inset-0 leaf-pattern opacity-20 mix-blend-overlay -z-10"></div>
        )}
        
        {withFluidElements && (
          <>
            <div className="absolute top-0 right-0 w-96 h-96 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
          </>
        )}
        
        {children}
      </main>
      <Footer />
    </>
  );
}
