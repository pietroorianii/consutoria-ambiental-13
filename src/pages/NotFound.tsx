
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageWrapper>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center bg-background/80 backdrop-blur-sm p-12 rounded-lg shadow-lg border border-eco-green/10 scroll-trigger">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Página não encontrada</p>
          <Button asChild className="bg-eco-green hover:bg-eco-green-dark shimmer-button">
            <Link to="/">Voltar ao Início</Link>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
