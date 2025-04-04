
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-eco-green/90 to-eco-blue/90 py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200&h=600')" }}>
          </div>
          <div className="absolute inset-0 bg-opacity-5 leaf-pattern mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-blue/20"></div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm animate-float">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-up" style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.2)"
                }}>Contato</h1>
                <p className="text-white/90 mt-4 max-w-3xl animate-fade-up" style={{ 
                  fontFamily: "'Roboto', sans-serif", 
                  animationDelay: "0.1s"
                }}>
                  Entre em contato com nossa equipe para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <section className="container py-16 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <ContactForm />
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-md animate-fade-up" style={{ animationDelay: "0.3s" }}>
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
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[21/9] bg-muted animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3565895841186!2d-43.17971084897154!3d-22.90369084349275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981da517e0946%3A0xab5d97a5e5c76ee2!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1649884532527!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
