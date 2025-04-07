
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { ServiceItem } from "@/data/serviceCategories";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceListProps {
  services: ServiceItem[];
}

export const ServiceList = ({
  services
}: ServiceListProps) => {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="eco-card border-eco-green/10 hover:border-eco-green/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
          >
            <CardHeader>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-eco-green/10 p-2 rounded-full">
                  <Leaf className="h-4 w-4 text-eco-green" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </div>
              <CardDescription className="mt-2 text-base text-left">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                <Link to="/request-quote" className="flex items-center gap-1">
                  Solicitar orçamento <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
