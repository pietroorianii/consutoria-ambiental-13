
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
