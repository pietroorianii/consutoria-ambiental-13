
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { LegislationItem as LegislationItemType } from "@/data/legislationData";

interface LegislationItemProps {
  item: LegislationItemType;
  index: number;
}

export const LegislationItem = ({ item, index }: LegislationItemProps) => {
  // Extrair informações do título (número da lei e ano)
  const titleParts = item.title.match(/([^\d]+)([\d.\/]+)(?:\D+(\d{4}))?/);
  const lawType = titleParts?.[1]?.trim() || "";
  const lawNumber = titleParts?.[2] || "";
  const lawYear = titleParts?.[3] || "";

  return (
    <Card 
      key={index} 
      className="eco-card bg-background/80 backdrop-blur-sm border-eco-green/10 hover:border-eco-green/30 shadow-md hover:shadow-lg transition-all animate-fade-up" 
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <CardHeader className="pb-2 border-b border-border/40">
        <CardTitle className="flex flex-col gap-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <div className="flex items-center justify-between">
            <span className="text-xl">{lawType}</span>
            <div className="flex items-center gap-2">
              <span className="text-eco-green font-bold">{lawNumber}</span>
              {lawYear && (
                <span className="bg-eco-green/10 text-eco-green text-sm px-2 py-0.5 rounded-full">
                  {lawYear}
                </span>
              )}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
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
