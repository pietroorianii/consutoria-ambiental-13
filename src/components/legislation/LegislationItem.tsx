
import React from "react";
import { LegislationItemType } from "@/data/legislation/types";
import { Badge } from "@/components/ui/badge";

interface LegislationItemProps {
  item: LegislationItemType;
}

export function LegislationItem({ item }: LegislationItemProps) {
  return (
    <div className="glass-card mb-6 overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-eco-green" style={{fontFamily: "'Poppins', sans-serif"}}>
              {item.number} - {item.title}
            </h3>
          </div>
          
          <div className="md:text-right">
            <Badge className="bg-eco-green/10 border-eco-green/20 text-eco-green py-1.5 px-3 text-xs">
              {item.category}
            </Badge>
          </div>
        </div>
        
        <div className="mb-4 text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {item.description}
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-muted/50">
          <div className="text-sm text-muted-foreground">
            Publicação: <span className="font-medium">{item.date}</span>
          </div>
          
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-eco-blue hover:text-eco-blue-dark flex items-center gap-2 transition-colors group"
          >
            <span>Acessar</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
