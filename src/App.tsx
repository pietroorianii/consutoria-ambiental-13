
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import RequestQuotePage from "./pages/RequestQuotePage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import ServiceGroupPage from "./pages/ServiceGroupPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import LicensesAuthorizationsPage from "./pages/LicensesAuthorizationsPage";
import FAQPage from "./pages/FAQPage";
import TeamPage from "./pages/TeamPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 60 * 1000, gcTime: 10 * 60 * 1000, retry: 1, refetchOnWindowFocus: false },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/group/:groupId" element={<ServiceGroupPage />} />
          <Route path="/services/:categoryId" element={<ServiceCategoryPage />} />
          <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/licenses-authorizations" element={<LicensesAuthorizationsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
