
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8 animate-fade-up">
      <div>
        <h2 className="text-2xl font-bold mb-3 font-sora">
          Como nos encontrar
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed font-inter">
          Fale direto com nossa equipe técnica.
        </p>

        <div className="space-y-6">
          {/* Telefone / WhatsApp */}
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 font-sora">
                Telefone / WhatsApp
              </h3>
              <p className="text-muted-foreground font-inter">
                <a
                  href="tel:+554233338000"
                  className="hover:text-brand-accent transition-colors"
                >
                  (42) 3333-8000
                </a>
                <br />
                <a
                  href="https://wa.me/5542999998000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  (42) 99999-8000 — WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-6 w-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 font-sora">
                E-mail
              </h3>
              <p className="text-muted-foreground font-inter">
                <a
                  href="mailto:contato@solari.com.br"
                  className="hover:text-brand-accent transition-colors"
                >
                  contato@solari.com.br
                </a>
                <br />
                <a
                  href="mailto:comercial@solari.com.br"
                  className="hover:text-brand-accent transition-colors"
                >
                  comercial@solari.com.br
                </a>
              </p>
            </div>
          </div>

          {/* Endereço */}
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 font-sora">
                Endereço
              </h3>
              <p className="text-muted-foreground leading-relaxed font-inter">
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
        <div className="h-12 w-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
          <Clock className="h-6 w-6 text-brand-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1 font-sora">
            Horário de Atendimento
          </h3>
          <p className="text-muted-foreground font-inter">
            Segunda a Sexta: 08:00 – 18:00<br />
            Sábado e Domingo: Fechado
          </p>
        </div>
      </div>
    </div>
  );
}
