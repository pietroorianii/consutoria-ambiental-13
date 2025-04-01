
import { Mail, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
        <p className="text-muted-foreground mb-8">
          Estamos à disposição para responder suas dúvidas e fornecer mais informações sobre nossos serviços de consultoria ambiental.
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-eco-green" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Telefone</h3>
              <p className="text-muted-foreground">
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
              <h3 className="text-lg font-medium">E-mail</h3>
              <p className="text-muted-foreground">
                contato@ecoconsult.com<br />
                comercial@ecoconsult.com
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Horário de Atendimento</h2>
        <p className="text-muted-foreground">
          Segunda a Sexta: 08:00 - 18:00<br />
          Sábado e Domingo: Fechado
        </p>
      </div>
    </div>
  );
}
