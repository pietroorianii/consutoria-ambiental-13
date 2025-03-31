
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/serviceCategories";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceListProps {
  services: ServiceItem[];
}

export const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="eco-card">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="mt-2 text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                <Link to="/contact" className="flex items-center gap-1">
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
