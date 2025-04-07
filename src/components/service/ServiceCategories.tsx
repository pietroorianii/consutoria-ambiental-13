
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories, ServiceCategoryType } from "@/data/serviceCategories";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ServiceCategories = () => {
  return (
    <section className="container py-16 md:py-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(serviceCategories).map(([key, category], index) => (
          <Card 
            key={key}
            className="border border-border/70 eco-card flex flex-col bg-white/90 backdrop-blur-sm hover:shadow-lg hover:shadow-eco-green/5 hover:border-eco-green/20 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            <CardHeader>
              <div className="mb-4 bg-eco-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                {category.icon}
              </div>
              <CardTitle style={{ fontFamily: "'Poppins', sans-serif" }}>
                {category.title}
              </CardTitle>
              <CardDescription style={{ fontFamily: "'Lato', sans-serif" }}>
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-4">
              <Button asChild variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group">
                <Link to={`/services/${key}`} className="flex items-center gap-1">
                  Ver serviços <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
