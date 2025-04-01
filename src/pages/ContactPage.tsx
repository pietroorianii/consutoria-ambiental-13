
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Contato"
          description="Entre em contato com nossa equipe para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços."
        />
        
        {/* Contact Section */}
        <section className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
