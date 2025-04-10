
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  link: string;
  index: number;
}

export const ServiceCategory = ({ icon, title, description, items, link, index }: ServiceCategoryProps) => {
  return (
    <div className="animate-fade-up max-w-4xl w-full" style={{
      animationDelay: `${0.1 + index * 0.1}s`
    }}>
      <div className="space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-eco-green/10 hover:border-eco-green/20 transition-all">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-eco-green/10 p-4 rounded-full animate-float">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-center" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>{title}</h2>
        </div>
        
        <p className="text-muted-foreground text-lg text-center" style={{
          fontFamily: "'Lato', sans-serif"
        }}>
          {description}
        </p>
        
        <ul className="space-y-3 mx-auto max-w-lg">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 rounded-md">
              <div className="rounded-full bg-eco-green/20 p-1 mt-0.5">
                <div className="rounded-full bg-eco-green w-2 h-2"></div>
              </div>
              <span style={{
                fontFamily: "'Lato', sans-serif"
              }} className="text-muted-foreground text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-center">
          <Button asChild className="bg-eco-green hover:bg-eco-green-dark shimmer-button">
            <Link to={link} className="flex items-center gap-2">
              Ver detalhes <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
