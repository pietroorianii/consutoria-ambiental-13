
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco-green to-eco-blue">
                EcoConsult
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Consultoria ambiental especializada para empresas que buscam sustentabilidade e conformidade legal em seus processos.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/licensing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Licenciamento Ambiental
                </Link>
              </li>
              <li>
                <Link to="/services/monitoring" className="text-muted-foreground hover:text-foreground transition-colors">
                  Monitoramento Ambiental
                </Link>
              </li>
              <li>
                <Link to="/services/reports" className="text-muted-foreground hover:text-foreground transition-colors">
                  Planos e Relatórios
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-muted-foreground hover:text-foreground transition-colors">
                  Consultoria Especializada
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-muted-foreground hover:text-foreground transition-colors">
                  Treinamentos
                </Link>
              </li>
              <li>
                <Link to="/services/management" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gestão Ambiental
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legislação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/legislation/industry" className="text-muted-foreground hover:text-foreground transition-colors">
                  Indústrias
                </Link>
              </li>
              <li>
                <Link to="/legislation/construction" className="text-muted-foreground hover:text-foreground transition-colors">
                  Construção Civil
                </Link>
              </li>
              <li>
                <Link to="/legislation/agriculture" className="text-muted-foreground hover:text-foreground transition-colors">
                  Agricultura
                </Link>
              </li>
              <li>
                <Link to="/legislation/water" className="text-muted-foreground hover:text-foreground transition-colors">
                  Recursos Hídricos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Av. Paulista, 1000, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  (11) 5555-5555
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary shrink-0" />
                <a href="mailto:contato@ecoconsult.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  contato@ecoconsult.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EcoConsult. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
