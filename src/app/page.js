import Link from 'next/link';
import { ChevronRight, MapPin, Briefcase } from 'lucide-react';
import SearchBar from '../components/SearchBarData';
import GoogleAd from '../components/GoogleAd';
import './page.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="container hero-content animate-fade-in">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            Más de 50,000 ofertas en todo el Perú
          </div>
          <h1 className="heading-1 hero-title">
            Encuentra la <span className="text-gradient">Chamba</span><br />
            que mereces
          </h1>
          <p className="hero-subtitle text-muted">
            Buscamos en las principales bolsas de trabajo del Perú y del Estado 
            para traerte las mejores oportunidades en un solo lugar.
          </p>

          <SearchBar />

          <div className="popular-searches">
            <span className="text-muted text-sm">Búsquedas populares:</span>
            <div className="tags">
              <Link href="/buscar?q=Desarrollador" className="tag">Desarrollador Web</Link>
              <Link href="/freelance" className="tag">Freelance</Link>
              <Link href="/buscar?q=Ventas" className="tag">Ventas</Link>
              <Link href="/buscar?q=Contabilidad" className="tag">Contabilidad</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ad Slot */}
      <div className="container">
        <GoogleAd slotId="HOME_TOP_ADSENSE" />
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-gradient">+150K</h3>
              <p className="stat-label">Candidatos Activos</p>
            </div>
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-gradient">20K</h3>
              <p className="stat-label">Empresas Contratando</p>
            </div>
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-gradient">+500</h3>
              <p className="stat-label">Nuevos Empleos Hoy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Jobs Preview */}
      <section className="jobs-preview container">
        <div className="section-header">
          <h2 className="heading-2">Últimas Ofertas Recopiladas</h2>
          <Link href="/buscar" className="view-all-link">
            Ver todas las ofertas <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="jobs-grid">
          {/* Skeleton/Placeholder Job Cards */}
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="job-card glass-panel group">
              <div className="job-card-header">
                <div className="company-logo-placeholder"></div>
                <div className="job-meta">
                  <span className="job-time">Hace 2 horas</span>
                  <span className="job-source bg-computrabajo">Computrabajo</span>
                </div>
              </div>
              <h3 className="job-title group-hover:text-primary">Desarrollador Full Stack Senior</h3>
              <p className="company-name text-muted">Tech Innovators SAC</p>
              
              <div className="job-details">
                <span className="detail-tag"><MapPin size={14}/> Lima / Híbrido</span>
                <span className="detail-tag"><Briefcase size={14}/> Tiempo Completo</span>
              </div>
              
              <div className="job-card-footer">
                <span className="salary-range">S/ 5000 - S/ 8000</span>
                <button className="btn btn-outline">Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Ad Space */}
      <section className="ad-section container">
        <div className="premium-ad-banner glass-panel">
          <div className="ad-content">
            <span className="ad-badge">Anuncio Patrocinado</span>
            <h2>Impulsa tu carrera con certificaciones Tech</h2>
            <p>Conviértete en el perfil más buscado por las empresas tech en Perú con nuestros bootcamps acelerados.</p>
            <button className="btn btn-primary mt-4">Conocer más</button>
          </div>
          <div className="ad-visual">
            <div className="ad-illustration"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
