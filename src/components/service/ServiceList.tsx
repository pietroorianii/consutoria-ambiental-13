
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { ServiceItem } from "@/data/serviceCategories";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceListProps {
  services: ServiceItem[];
}

export const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <section className="container py-16 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="eco-card border-eco-green/10 hover:border-eco-green/30 transition-all duration-300 bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm h-full flex flex-col"
          >
            <CardHeader className="text-center pb-4">
              <div className="flex items-center gap-2 mb-2 justify-center">
                <div className="bg-eco-green/10 p-2 rounded-full">
                  <Leaf className="h-4 w-4 text-eco-green" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
              <CardDescription className="mt-2 text-base text-center">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow px-5 pb-0">
              <p className="text-muted-foreground text-sm mb-4">
                {service.details || "Nossos especialistas fornecem consultoria personalizada para atender às necessidades específicas do seu negócio."}
              </p>
            </CardContent>
            <CardContent className="flex justify-center pt-4 pb-6 mt-auto border-t border-gray-100 dark:border-gray-700/50 bg-gray-100">
              <Button 
                asChild 
                variant="link" 
                className="p-0 h-auto font-medium text-eco-green hover:text-eco-green-dark group transition-all duration-300"
              >
                <Link 
                  to="/request-quote" 
                  className="flex items-center gap-1 hover:underline group-hover:scale-105 transition-transform duration-300"
                >
                  Solicitar orçamento <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
