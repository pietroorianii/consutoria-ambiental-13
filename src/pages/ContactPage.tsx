
import { PageWrapper } from "@/components/ui/page-wrapper";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MessageSquare } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";

const ContactPage = () => {
  return (
    <PageWrapper>
      {/* Page Header */}
      <PageBanner 
        title="Contato"
        description="Entre em contato com nossa equipe para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços."
        icon={<MessageSquare />}
        iconColor="blue"
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      {/* Contact Section */}
      <section className="container py-16 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-eco-green/10 hover:border-eco-green/20 transition-all animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
            <ContactForm />
          </div>
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-eco-blue/10 hover:border-eco-blue/20 transition-all animate-fade-up" style={{
            animationDelay: "0.3s"
          }}>
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map or decorative element */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 leaf-pattern"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-[21/9] bg-muted animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5914003190997!2d-50.16066632383453!3d-25.08783794308761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e8190899958217%3A0x8d961a14c36d2e51!2sR.%20Sete%20de%20Setembro%2C%201322%20-%20Centro%2C%20Ponta%20Grossa%20-%20PR%2C%2084010-350!5e0!3m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Mapa de localização - Rua Sete de Setembro 1322, Centro, Ponta Grossa" 
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
