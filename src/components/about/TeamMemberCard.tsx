
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  // Get initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="eco-card bg-background/80 backdrop-blur-sm border-eco-green/10 hover:border-eco-green/30 shadow-md hover:shadow-lg transition-all h-full flex flex-col">
      <CardHeader className="flex flex-col items-center pt-8">
        <Avatar className="h-24 w-24 mb-4 border-2 border-eco-green/20">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback className="bg-eco-green/10 text-eco-green text-lg">
            {getInitials(member.name)}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h3 className="text-xl font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>{member.name}</h3>
          <p className="text-muted-foreground">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">
          {member.bio}
        </p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 justify-center border-t border-border/40 pt-4">
        {member.specialties.map((specialty, index) => (
          <Badge key={index} variant="outline" className="bg-eco-green/5 text-eco-green border-eco-green/20">
            {specialty}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
