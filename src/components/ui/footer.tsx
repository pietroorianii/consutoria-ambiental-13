
import { Facebook, Instagram, Linkedin, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prisma-gray-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-prisma-gray-light via-white to-prisma-gray-light opacity-50"></div>
      
      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-2"
                >
              <Leaf className="h-5 w-5 text-eco-green" />
              <span className="text-yellow-700">Solari</span>{' '}
              <span className="text-eco-green">Soluções Ambientais</span>
            </h3>
            <p className="text-prisma-gray-text/80 mb-4 leading-relaxed" >
              Consultoria ambiental especializada para empresas que buscam excelência em sustentabilidade e conformidade legal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-prisma-gray-text" >Links Rápidos</h3>
            <ul className="space-y-2" >
              <li>
                <Link to="/" className="text-prisma-gray-text/70 hover:text-eco-green transition-colors link-hover">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-prisma-gray-text/70 hover:text-eco-green transition-colors link-hover">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-prisma-gray-text/70 hover:text-eco-green transition-colors link-hover">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-prisma-gray-text/70 hover:text-eco-green transition-colors link-hover">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-prisma-gray-text/70 hover:text-eco-green transition-colors link-hover">
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-prisma-gray-text/70 hover:text-eco-green transition-colors link-hover">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-prisma-gray-text" >Contato</h3>
            <ul className="space-y-3" >
              <li className="flex items-start gap-2 text-prisma-gray-text/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-eco-green" />
                <span>Av. Rio Branco, 1500<br />Centro, Rio de Janeiro - RJ<br />CEP: 20040-002</span>
              </li>
              <li className="flex items-center gap-2 text-prisma-gray-text/80">
                <Phone className="h-5 w-5 flex-shrink-0 text-eco-green" />
                <span>(14) 99713-3722</span>
              </li>
              <li className="flex items-center gap-2 text-prisma-gray-text/80">
                <Mail className="h-5 w-5 flex-shrink-0 text-eco-green" />
                <span>contato@solariambiental.com.br</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-prisma-gray-text" >Redes Sociais</h3>
            <ul className="space-y-3" >
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-prisma-gray-text/80 hover:text-eco-green transition-colors">
                  <Facebook className="h-5 w-5 text-eco-green" />
                  <span>Solari Brasil</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-prisma-gray-text/80 hover:text-eco-green transition-colors">
                  <Instagram className="h-5 w-5 text-eco-green" />
                  <span>@solariambiental</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-prisma-gray-text/80 hover:text-eco-green transition-colors">
                  <Linkedin className="h-5 w-5 text-eco-green" />
                  <span>Solari Soluções Ambientais</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-prisma-gray-light/60 mt-8 pt-8 text-center text-prisma-gray-text/60">
          <p >
            &copy; {currentYear} Solari Soluções Ambientais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
