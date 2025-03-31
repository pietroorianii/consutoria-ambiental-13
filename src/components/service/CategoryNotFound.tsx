
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export const CategoryNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
        <p className="text-muted-foreground mb-8">A categoria de serviço solicitada não existe.</p>
        <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
          <Link to="/services">Ver Todos os Serviços</Link>
        </Button>
      </div>
      <Footer />
    </>
  );
};
