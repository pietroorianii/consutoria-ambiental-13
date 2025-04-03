
import { ContactSubmissions } from "@/components/admin/ContactSubmissions";

const AdminDashboardPage = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-eco-green">Painel Administrativo</h1>
      <ContactSubmissions />
    </div>
  );
};

export default AdminDashboardPage;
