
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
        title="Contato - Axis Soluções Ambientais"
        description="Entre em contato com nossa equipe para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços de consultoria ambiental."
        keywords="contato axis, consultoria ambiental contato, orçamento ambiental, Axis Soluções Ambientais"
      />
      
      {/* Page Header */}
      <PageBanner 
        title="Fale com a gente"
        description="Atendemos por WhatsApp, e-mail ou formulário. Resposta em até 1 dia útil."
        icon={<MessageSquare />}
        variant="contact"
      />
      
      {/* Contact Section */}
      <section className="container py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl border border-brand-dark/10 bg-white p-8">
            <ContactForm />
          </div>
          <div className="rounded-2xl border border-brand-dark/10 bg-white p-8">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map or decorative element */}
      <section className="relative pb-20 overflow-hidden">

        <div className="container relative z-10">
          <div className="overflow-hidden rounded-2xl border border-brand-dark/10 aspect-[4/3] sm:aspect-[21/9] bg-brand-silver/40">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5914003190997!2d-50.16066632383453!3d-25.08783794308761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e8190899958217%3A0x8d961a14c36d2e51!2sR.%20Sete%20de%20Setembro%2C%201322%20-%20Centro%2C%20Ponta%20Grossa%20-%20PR%2C%2084010-350!5e0!3m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Mapa de localização - Rua Sete de Setembro 1322, Centro, Ponta Grossa"
              aria-label="Localização da Axis Soluções Ambientais no mapa"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
