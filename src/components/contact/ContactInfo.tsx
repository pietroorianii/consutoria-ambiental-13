
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
      <div>
        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Informações de Contato
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
          Estamos à disposição para responder suas dúvidas e fornecer mais informações sobre nossos serviços de consultoria ambiental no Paraná.
        </p>

        <div className="space-y-6">
          {/* Telefone / WhatsApp */}
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-eco-green" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Telefone / WhatsApp
              </h3>
              <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                <a
                  href="tel:+554233338000"
                  className="hover:text-eco-green transition-colors"
                >
                  (42) 3333-8000
                </a>
                <br />
                <a
                  href="https://wa.me/5542999998000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-eco-green transition-colors"
                >
                  (42) 99999-8000 — WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-6 w-6 text-eco-green" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                E-mail
              </h3>
              <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                <a
                  href="mailto:contato@solari.com.br"
                  className="hover:text-eco-green transition-colors"
                >
                  contato@solari.com.br
                </a>
                <br />
                <a
                  href="mailto:comercial@solari.com.br"
                  className="hover:text-eco-green transition-colors"
                >
                  comercial@solari.com.br
                </a>
              </p>
            </div>
          </div>

          {/* Endereço */}
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-eco-green" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Endereço
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Rua Sete de Setembro, 1322<br />
                Centro — Ponta Grossa, PR<br />
                CEP 84010-350
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horário */}
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-full bg-eco-green/10 flex items-center justify-center flex-shrink-0">
          <Clock className="h-6 w-6 text-eco-green" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Horário de Atendimento
          </h3>
          <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Segunda a Sexta: 08:00 – 18:00<br />
            Sábado e Domingo: Fechado
          </p>
        </div>
      </div>
    </div>
  );
}
