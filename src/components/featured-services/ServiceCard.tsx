
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
      className={`group relative overflow-hidden transition-all duration-500 bg-gradient-to-br ${styles.bgGradient} backdrop-blur-sm border-2 ${styles.borderColor} h-full flex flex-col hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] scroll-trigger`}
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
    >
      <CardHeader className="text-center pb-4 relative z-10">
        <div className={`mb-4 bg-opacity-15 p-3 rounded-xl w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-md`}>
          {styles.icon}
        </div>
        <div className="mb-2">
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-opacity-15 text-gray-600 group-hover:text-gray-800 transition-colors`}>
            {styles.badge}
          </span>
        </div>
        <CardTitle className="font-secondary text-lg group-hover:text-eco-green-dark transition-colors leading-tight">
          {serviceData.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-6 pb-6 flex-grow relative z-10 flex flex-col">
        <ul className="space-y-2 text-left mb-4 flex-grow">
          {serviceData.services.slice(0, 3).map((subService, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-eco-green mt-1 flex-shrink-0" />
              <span className="font-body text-sm text-gray-700">{subService.title}</span>
            </li>
          ))}
          {serviceData.services.length > 3 && (
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-eco-green/50 mt-1 flex-shrink-0" />
              <span className="font-body text-sm text-gray-500">e mais...</span>
            </li>
          )}
        </ul>
      </CardContent>
      
      <CardFooter className="mt-auto pt-4 pb-6 flex flex-col gap-3 border-t border-gray-100 bg-gray-50/60 relative z-10">
        <Button 
          asChild 
          className={`w-full ${styles.buttonColor} text-white group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm`}
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
