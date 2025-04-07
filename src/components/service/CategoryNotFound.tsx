
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";

export const CategoryNotFound = () => {
  return (
    <PageLayout>
      <div className="flex-grow container py-16 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
        <p className="text-muted-foreground mb-8">A categoria de serviço solicitada não existe.</p>
        <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
          <Link to="/services">Ver Todos os Serviços</Link>
        </Button>
      </div>
    </PageLayout>
  );
};
