
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export function CompanyIntro() {
  const highlights = [
    "Equipe técnica especializada e multidisciplinar",
    "Mais de 15 anos de experiência no mercado",
    "Atendimento personalizado para cada cliente",
    "Soluções ambientais adaptadas às necessidades específicas"
  ];

  return (
    <section className="container py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800&h=500" 
              alt="Consultoria ambiental" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Consultoria Ambiental Especializada
            </h2>
            <div className="h-1 w-20 bg-eco-green mt-4"></div>
          </div>
          
          <p className="text-muted-foreground">
            A EcoConsult é uma empresa de consultoria ambiental que oferece soluções completas para empresas que buscam sustentabilidade e conformidade legal em seus processos. Com uma equipe técnica altamente qualificada, trabalhamos para garantir que nossos clientes estejam em dia com todas as exigências ambientais, otimizando recursos e promovendo práticas sustentáveis.
          </p>
          
          <ul className="space-y-3">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <Button asChild className="mt-4 bg-eco-green hover:bg-eco-green-dark">
            <Link to="/about">Conheça Nossa Equipe</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
