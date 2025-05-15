
import React from "react";
import { Badge } from "@/components/ui/badge";

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    specialties: string[];
  };
}

export function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <div className="glass-card overflow-hidden hover-grow transition-all duration-500 scroll-trigger group">
      <div className="relative overflow-hidden h-72">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
            <p className="text-white/80 text-sm">{member.role}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
        <p className="text-eco-green font-medium mb-4">{member.role}</p>
        
        <p className="text-muted-foreground mb-5 text-sm leading-relaxed line-clamp-3">
          {member.bio}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {member.specialties && member.specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="bg-eco-green/10 text-eco-green border-eco-green/20 py-1 px-3">
              {specialty}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
