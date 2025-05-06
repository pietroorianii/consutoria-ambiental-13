
import { PageWrapper } from "@/components/ui/page-wrapper";

export const CategoryNotFound = () => {
  return (
    <PageWrapper>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
        <p className="text-muted-foreground mb-8">A categoria de legislação solicitada não existe.</p>
      </div>
    </PageWrapper>
  );
};
