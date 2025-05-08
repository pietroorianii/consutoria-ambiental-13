
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { LegislationItem as LegislationItemType } from "@/data/legislation/types";
import React, { useEffect, useRef } from "react";

interface LegislationItemProps {
  item: LegislationItemType;
  index: number;
}

export const LegislationItem = ({ item, index }: LegislationItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Generate a unique ID for this item based on its title
  const itemId = `legislation-item-${item.title.replace(/\s+/g, '-').toLowerCase()}`;
  
  useEffect(() => {
    if (item.isSelected && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      itemRef.current.classList.add('highlight-item');
      
      // Remove highlight class after animation completes
      setTimeout(() => {
        if (itemRef.current) {
          itemRef.current.classList.remove('highlight-item');
        }
      }, 4000);
    }
  }, [item.isSelected]);
  
  // Function to highlight text that matches the search term
  const highlightText = (text: string, searchTerm?: string): React.ReactNode => {
    if (!searchTerm || searchTerm.length < 2) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => {
      if (part.toLowerCase() === searchTerm.toLowerCase()) {
        return <span key={i} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">{part}</span>;
      }
      return part;
    });
  };

  return (
    <Card 
      id={itemId}
      ref={itemRef}
      className={`eco-card bg-background/80 backdrop-blur-sm border-eco-green/10 hover:border-eco-green/30 shadow-md hover:shadow-lg transition-all animate-fade-up ${item.isSelected ? 'border-eco-green border-2' : ''} ${item.shouldHighlight ? 'ring-2 ring-yellow-300 dark:ring-yellow-500' : ''}`} 
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
    >
      <CardHeader className="pb-3">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-eco-green" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {highlightText(item.title, item.searchTerm)}
          </h3>
          <div className="h-0.5 w-16 bg-eco-green/30 mt-2 mb-3"></div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
          {highlightText(item.description, item.searchTerm)}
        </p>
        <div className="pt-2 border-t border-border/40">
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-eco-green hover:text-eco-green-dark transition-colors flex items-center gap-2 group mt-2"
          >
            Acessar legislação <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
