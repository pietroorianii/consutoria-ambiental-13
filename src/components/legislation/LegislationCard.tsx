
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LegislationCategory } from "@/data/legislationData";

interface LegislationCardProps {
  category: LegislationCategory;
  index: number;
}

export const LegislationCard: React.FC<LegislationCardProps> = ({ 
  category,
  index
}) => {
  const IconComponent = category.icon;
  
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow scroll-trigger" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
      <div className="h-48 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${category.image}')` }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 p-4 rounded-full">
            <IconComponent size={24} className="h-10 w-10 text-eco-green" />
          </div>
        </div>
      </div>
      
      <CardHeader className="bg-white">
        <h3 className="text-xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>{category.title}</h3>
        <p className="text-muted-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>{category.description}</p>
      </CardHeader>
      
      <CardContent className="bg-white pt-0">
        <ul className="space-y-2 my-4">
          {category.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="rounded-full bg-eco-green/20 p-1 mt-1">
                <div className="rounded-full bg-eco-green w-1.5 h-1.5"></div>
              </div>
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="bg-white pt-0">
        <Button asChild variant="outline" className="w-full border-eco-green text-eco-green hover:bg-eco-green/10 hover:text-eco-green-dark group">
          <Link to={category.link} className="flex items-center justify-center gap-1">
            Ver legislação <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
