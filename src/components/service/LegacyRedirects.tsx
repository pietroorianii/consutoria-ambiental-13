import { Navigate, useParams } from "react-router-dom";
import { legacyCategoryRedirects } from "@/data/serviceCatalog";

/** /services/<categoria antiga> → página do serviço oficial (evita páginas duplicadas). */
export function CategoryRedirect() {
  const { categoryId = "" } = useParams();
  const target = legacyCategoryRedirects[categoryId];
  return <Navigate to={target ? `/service/${target}` : "/services"} replace />;
}
