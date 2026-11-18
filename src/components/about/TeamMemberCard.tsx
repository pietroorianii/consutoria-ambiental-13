
import React from "react";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    specialties: string[];
    registro?: string; // CREA, CRQ ou outro registro profissional
  };
}

export function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-dark/10 bg-white transition-shadow duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden h-80">
        {member.image ? (
        <OptimizedImage
          src={member.image}
          alt={`Foto de ${member.name}`}
          className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        ) : (
          <div className="axis-navy-surface grid h-full w-full place-items-center">
            <span className="font-display text-6xl font-semibold text-brand-lime">
              {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
            <p className="text-white/80 text-sm">{member.role}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="font-display text-xl font-semibold text-brand-dark mb-1">{member.name}</h4>
        <p className="text-brand-accent font-medium mb-1">{member.role}</p>

        {/* Registro profissional — opcional */}
        {member.registro && (
          <p className="text-xs font-medium text-brand-dark/50 mb-4">
            {member.registro}
          </p>
        )}
        
        <p className="text-muted-foreground mb-5 text-sm leading-relaxed line-clamp-3">
          {member.bio}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {member.specialties && member.specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="bg-brand-accent/10 text-brand-accent border-brand-accent/20 py-1 px-3">
              {specialty}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
