
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { serviceStyles, defaultStyles } from "./serviceStyles";

interface ServiceData {
  title: string;
  services: Array<{
    title: string;
    description: string;
  }>;
}

interface ServiceCardProps {
  serviceKey: string;
  serviceData: ServiceData;
  index: number;
}

export function ServiceCard({ serviceKey, serviceData, index }: ServiceCardProps) {
  const styles = serviceStyles[serviceKey] || defaultStyles;

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-500 bg-white backdrop-blur-sm border-2 border-prisma-gray-light/30 hover:border-prisma-green/40 h-full flex flex-col hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] scroll-trigger shadow-soft`}
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
    >
      {/* Linha de acento no topo do card */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-prisma-green to-prisma-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="text-center pb-4 relative z-10">
        <div className="mb-4 bg-prisma-gray-light/20 p-4 rounded-xl w-18 h-18 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-md group-hover:bg-prisma-green/10">
          {React.cloneElement(styles.icon as React.ReactElement, {
            className: "h-8 w-8 text-prisma-green group-hover:text-prisma-green transition-colors duration-300"
          })}
        </div>
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-prisma-yellow/15 text-prisma-gray-text group-hover:bg-prisma-yellow/25 transition-colors" style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>
            {styles.badge}
          </span>
        </div>
        <CardTitle className="text-lg group-hover:text-prisma-green transition-colors leading-tight" style={{
          fontFamily: "'Poppins', sans-serif",
          color: "#333333"
        }}>
          {serviceData.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-6 pb-6 flex-grow relative z-10 flex flex-col">
        <ul className="space-y-3 text-left mb-4 flex-grow">
          {serviceData.services.slice(0, 3).map((subService, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-prisma-green mt-1 flex-shrink-0" />
              <span className="text-sm text-prisma-gray-text/90 leading-relaxed" style={{
                fontFamily: "'Montserrat', sans-serif"
              }}>{subService.title}</span>
            </li>
          ))}
          {serviceData.services.length > 3 && (
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-prisma-green/50 mt-1 flex-shrink-0" />
              <span className="text-sm text-prisma-gray-text/60 leading-relaxed" style={{
                fontFamily: "'Montserrat', sans-serif"
              }}>e mais {serviceData.services.length - 3} serviços...</span>
            </li>
          )}
        </ul>
      </CardContent>
      
      <CardFooter className="mt-auto pt-4 pb-6 flex flex-col gap-3 border-t border-prisma-gray-light/40 bg-prisma-gray-light/20 relative z-10">
        <Button 
          asChild 
          className="w-full prisma-btn-primary group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm"
        >
          <Link to={`/services/${serviceKey}`} className="flex items-center justify-center gap-2">
            Saiba mais 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
