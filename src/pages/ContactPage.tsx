
import { PageWrapper } from "@/components/ui/page-wrapper";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MetaTags } from "@/components/layout/MetaTags";
import { MessageSquare } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";

const ContactPage = () => {
  return (
    <PageWrapper>
      <MetaTags 
        title="Contato - Solari Soluções Ambientais"
        description="Entre em contato com nossa equipe para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços de consultoria ambiental."
        keywords="contato solari, consultoria ambiental contato, orçamento ambiental, Solari Soluções Ambientais"
      />
      
      {/* Page Header */}
      <PageBanner 
        title="Fale com a gente"
        description="Atendemos por WhatsApp, e-mail ou formulário. Resposta em até 1 dia útil."
        icon={<MessageSquare />}
        iconColor="blue"
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      {/* Contact Section */}
      <section className="container py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-background rounded-xl border border-brand-accent/15 p-8 shadow-sm hover:border-brand-accent/30 transition-colors animate-fade-up">
            <ContactForm />
          </div>
          <div className="bg-background rounded-xl border border-brand-accent/15 p-8 shadow-sm hover:border-brand-accent/30 transition-colors animate-fade-up">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map or decorative element */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-[21/9] bg-muted animate-fade-up">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5914003190997!2d-50.16066632383453!3d-25.08783794308761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e8190899958217%3A0x8d961a14c36d2e51!2sR.%20Sete%20de%20Setembro%2C%201322%20-%20Centro%2C%20Ponta%20Grossa%20-%20PR%2C%2084010-350!5e0!3m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Mapa de localização - Rua Sete de Setembro 1322, Centro, Ponta Grossa"
              aria-label="Localização da Solari Soluções Ambientais no mapa"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
