import { Mail, Phone } from "lucide-react";
export function ContactInfo() {
  return <div className="space-y-8 animate-fade-up" style={{
    animationDelay: "0.3s"
  }}>
      <div>
        <h2 className="text-2xl font-bold mb-6" style={{
        fontFamily: "'Poppins', sans-serif"
      }}>Informações de Contato</h2>
        <p className="text-muted-foreground mb-8" style={{
        fontFamily: "'Roboto', sans-serif"
      }}>
          Estamos à disposição para responder suas dúvidas e fornecer mais informações sobre nossos serviços de consultoria ambiental.
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-eco-green" />
            </div>
            <div>
              <h3 className="text-lg font-medium" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>Telefone</h3>
              <p className="text-muted-foreground" style={{
              fontFamily: "'Lato', sans-serif"
            }}>
                +55 (11) 5555-5555<br />
                +55 (11) 98765-4321
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-6 w-6 text-eco-green" />
            </div>
            <div>
              <h3 className="text-lg font-medium" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>E-mail</h3>
              <p className="text-muted-foreground" style={{
              fontFamily: "'Lato', sans-serif"
            }}>
                contato@ecoconsult.com<br />
                comercial@ecoconsult.com
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6" style={{
        fontFamily: "'Poppins', sans-serif"
      }}>Horário de Atendimento</h2>
        <p className="text-muted-foreground" style={{
        fontFamily: "'Roboto', sans-serif"
      }}>
          Segunda a Sexta: 08:00 - 18:00<br />
          Sábado e Domingo: Fechado
        </p>
      </div>
      
      <div className="hidden md:block relative h-48 w-48 mx-auto animate-float">
        <img src="/lovable-uploads/47db2abf-fda2-4030-848d-000f9ddac075.png" alt="Sustentabilidade" className="w-full h-full object-fill" />
      </div>
    </div>;
}