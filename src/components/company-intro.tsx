
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Leaf, Users } from "lucide-react";

export function CompanyIntro() {
  return (
    <section className="container py-16 lg:py-24 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight scroll-trigger opacity-0" style={{fontFamily: "'Poppins', sans-serif"}}>
            Expertise em Soluções Ambientais
          </h2>
          
          <div className="h-1 w-20 bg-eco-green scroll-trigger opacity-0"></div>
          
          <p className="text-muted-foreground text-lg scroll-trigger opacity-0">
            A L&P Soluções Ambientais oferece serviços de consultoria e assessoria ambiental completa, 
            proporcionando às empresas o suporte necessário para atender às exigências da legislação ambiental 
            vigente de forma eficiente e sustentável.
          </p>
          
          <p className="text-muted-foreground scroll-trigger opacity-0">
            Nossa equipe de profissionais qualificados atua em todo o território nacional, 
            oferecendo soluções personalizadas para cada cliente, sempre buscando a excelência 
            e a inovação em todos os projetos que desenvolvemos.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4 scroll-trigger opacity-0">
            <Button asChild className="btn-gradient">
              <Link to="/services" className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Nossos Serviços
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green/10">
              <Link to="/about#team" className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Conhecer Nossa Equipe
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative lg:h-[500px] h-[400px] rounded-lg overflow-hidden scroll-trigger opacity-0">
          <img 
            src="/lovable-uploads/9a64c487-4744-489a-9762-3739eb5961ad.png" 
            alt="Nossa empresa em ação" 
            className="w-full h-full object-cover rounded-lg shadow-xl" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-eco-green/30 to-eco-blue/30 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-xl font-semibold">Compromisso com o futuro sustentável</h3>
            <p className="text-white/80">Atuando para equilibrar desenvolvimento e preservação ambiental</p>
          </div>
        </div>
      </div>
    </section>
  );
}
