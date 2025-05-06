
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { LegislationItem as LegislationItemType } from "@/data/legislationData";

interface LegislationItemProps {
  item: LegislationItemType;
  index: number;
}

export const LegislationItem = ({ item, index }: LegislationItemProps) => {
  return (
    <Card 
      key={index} 
      className="eco-card bg-background/80 backdrop-blur-sm border-eco-green/10 hover:border-eco-green/30 shadow-md hover:shadow-lg transition-all animate-fade-up" 
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <CardHeader>
        <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
          {item.description}
        </p>
        <div>
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-eco-green hover:text-eco-green-dark transition-colors flex items-center gap-2 group"
          >
            Acessar legislação <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
