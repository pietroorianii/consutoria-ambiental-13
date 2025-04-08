
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
    <section className="container py-16 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {services.map((service, index) => (
          <Card key={index} className="eco-card border-eco-green/10 hover:border-eco-green/30 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2 justify-center">
                <div className="bg-eco-green/10 p-2 rounded-full">
                  <Leaf className="h-4 w-4 text-eco-green" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </div>
              <CardDescription className="mt-2 text-base text-center">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
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
