
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
export function CompanyIntro() {
  return <section className="container py-24 lg:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-organic-pattern opacity-20 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 leaf-decoration animate-pulse-slow opacity-20"></div>
      <div className="absolute bottom-40 left-20 leaf-decoration animate-pulse-slow opacity-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 scroll-trigger">
          <div className="inline-block px-4 py-2 bg-eco-green/10 rounded-full text-eco-green font-medium text-sm uppercase tracking-wider">
            Nossa Expertise
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800 dark:text-gray-100" style={{
          fontFamily: "'Poppins', sans-serif"
        }}>
            Expertise em Soluções Ambientais
          </h2>
          
          <div className="h-1 w-20 bg-eco-accent-teal rounded-full"></div>
          
          <p className="text-muted-foreground text-lg">
            A L&P Soluções Ambientais oferece serviços de consultoria e assessoria ambiental completa, 
            proporcionando às empresas o suporte necessário para atender às exigências da legislação ambiental 
            vigente de forma eficiente e sustentável.
          </p>
          
          <p className="text-muted-foreground text-lg">
            Nossa equipe de profissionais qualificados atua em todo o território nacional, 
            oferecendo soluções personalizadas para cada cliente, sempre buscando a excelência 
            e a inovação em todos os projetos que desenvolvemos.
          </p>
          
          <div className="pt-6">
            <Button asChild variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green/5 py-6 px-8 rounded-lg text-base">
              <Link to="/about#team" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Conhecer Nossa Equipe
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative scroll-trigger h-[550px]">
          <div className="absolute top-10 right-10 w-72 h-72 bg-eco-accent-teal/10 eco-blob rounded-3xl -z-10"></div>
          
          {/* Main image with glass card overlay */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-soft hover-grow">
            <img src="/lovable-uploads/9a64c487-4744-489a-9762-3739eb5961ad.png" alt="Nossa empresa em ação" className="w-full h-full object-cover" />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-eco-green/40 to-eco-blue/30 mix-blend-multiply"></div>
            
            {/* Content card */}
            <div className="absolute bottom-0 left-0 right-0 p-8 glass-blur-dark">
              <h3 className="text-white text-xl font-semibold mb-2">Compromisso com o futuro sustentável</h3>
              <p className="text-white/90">Atuando para equilibrar desenvolvimento e preservação ambiental</p>
            </div>
          </div>
          
          {/* Decorative card */}
          <div className="absolute -bottom-8 -left-8 glass-card p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="text-3xl text-eco-green font-bold">15+</div>
              <div className="text-sm">Anos de<br />experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
