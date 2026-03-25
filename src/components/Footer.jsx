import Link from 'next/link';
import { Briefcase, Twitter, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Briefcase className="logo-icon" size={24} />
              Chamba<span className="text-gradient">Peru</span>
            </Link>
            <p className="footer-desc text-muted">
              El agregador número uno de ofertas laborales de todo el Perú. 
              Encuentra tu próximo desafío profesional con nosotros.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" className="social-link"><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter" className="social-link"><Twitter size={20} /></a>
              <a href="#" aria-label="Facebook" className="social-link"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Candidatos</h4>
            <Link href="/buscar" className="footer-link">Buscar Empleos</Link>
            <Link href="/buscar?q=Call%20Center" className="footer-link">Zona Call Center</Link>
            <Link href="/crear-cv" className="footer-link">Crear CV</Link>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Empresas</h4>
            <Link href="/publicar" className="footer-link">Publicar Oferta</Link>
            <Link href="/buscar-talentos" className="footer-link">Buscar Talentos</Link>
            <Link href="/precios" className="footer-link">Precios</Link>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Legal</h4>
            <Link href="/legal" className="footer-link">Términos de Servicio</Link>
            <Link href="/privacidad" className="footer-link">Privacidad</Link>
            <Link href="/contacto" className="footer-link">Contacto</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-muted">© {new Date().getFullYear()} ChambaPeru. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
