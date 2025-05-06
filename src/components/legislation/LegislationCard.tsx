
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface LegislationCategory {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  items: string[];
  link: string;
}

interface LegislationCardProps {
  category: LegislationCategory;
  index: number;
}

export const LegislationCard: React.FC<LegislationCardProps> = ({ category, index }) => {
  return (
    <Card 
      className="eco-card h-full border-eco-green/10 hover:border-eco-green/30 transition-all duration-300 scroll-trigger bg-background/80 backdrop-blur-sm shadow-md hover:shadow-lg" 
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="aspect-[3/2] w-full overflow-hidden rounded-t-lg relative">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute inset-0 leaf-pattern opacity-10"></div>
        <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
          {category.icon}
        </div>
      </div>
      <CardHeader>
        <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>{category.title}</CardTitle>
        <CardDescription style={{ fontFamily: "'Lato', sans-serif" }}>{category.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {category.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="rounded-full bg-eco-green/20 p-1 mt-0.5">
                <div className="rounded-full bg-eco-green w-2 h-2"></div>
              </div>
              <span className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-start pt-2">
          <Link to={category.link} className="inline-flex items-center gap-1 text-eco-green hover:text-eco-green-dark transition-colors font-medium mt-4 group">
            Ver legislações <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
