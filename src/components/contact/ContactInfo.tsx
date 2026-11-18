import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, fullAddress, whatsappUrl } from "@/config/company";

const rows = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: (
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-accent hover:underline">
        Conversar agora
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Telefone",
    content: <a href={`tel:${company.phoneE164}`} className="hover:text-brand-accent">{company.phoneDisplay}</a>,
  },
  {
    icon: Mail,
    title: "E-mail",
    content: <a href={`mailto:${company.email}`} className="hover:text-brand-accent">{company.email}</a>,
  },
  { icon: MapPin, title: "Endereço", content: <span>{fullAddress()}</span> },
  { icon: Clock, title: "Atendimento", content: <span>{company.hours}. Resposta em {company.responseTime}.</span> },
];

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-brand-dark">Fale direto com a equipe</h2>
      <span className="axis-rule mt-4" />
      <ul className="mt-8 space-y-6">
        {rows.map(({ icon: Icon, title, content }) => (
          <li key={title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-accent/10 text-brand-accent">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div className="text-sm leading-relaxed text-brand-dark/75">
              <p className="font-display text-base font-semibold text-brand-dark">{title}</p>
              {content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
