
import { Facebook, Instagram, Linkedin, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern opacity-5"></div>
      
      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <Leaf className="h-5 w-5 text-eco-green" />
              EcoConsult
            </h3>
            <p className="text-muted-foreground mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Consultoria ambiental especializada para empresas que buscam excelência em sustentabilidade e conformidade legal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Links Rápidos</h3>
            <ul className="space-y-2" style={{ fontFamily: "'Lato', sans-serif" }}>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors link-hover">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors link-hover">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors link-hover">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/legislation" className="text-muted-foreground hover:text-foreground transition-colors link-hover">
                  Legislação
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-muted-foreground hover:text-foreground transition-colors link-hover">
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors link-hover">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Contato</h3>
            <ul className="space-y-3" style={{ fontFamily: "'Lato', sans-serif" }}>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-eco-green flex-shrink-0 mt-0.5" />
                <span>Av. Rio Branco, 1500<br />Centro, Rio de Janeiro - RJ<br />CEP: 20040-002</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span>(21) 3333-4444</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span>contato@ecoconsult.com.br</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Redes Sociais</h3>
            <ul className="space-y-3" style={{ fontFamily: "'Lato', sans-serif" }}>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5 text-eco-green" />
                  <span>EcoConsult Brasil</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5 text-eco-green" />
                  <span>@ecoconsult_br</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-eco-green" />
                  <span>EcoConsult Consultoria Ambiental</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground/80">
          <p style={{ fontFamily: "'Lato', sans-serif" }}>
            &copy; {currentYear} EcoConsult. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
