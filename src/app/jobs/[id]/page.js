'use client';

import Link from 'next/link';
import { MapPin, Briefcase, DollarSign, Clock, Building, CheckCircle, Zap } from 'lucide-react';
import '../jobs.css';

// Usualmente fetchearías la base de datos aquí basado en `params.id`
export default function JobDetailsPage({ params }) {
  const { id } = params;

  return (
    <div className="job-details-page container">
      {/* Botón Volver */}
      <div className="job-back-wrapper">
        <Link href="/buscar" className="job-back-link">
          &larr; Volver a resultados
        </Link>
      </div>

      <div className="job-details-grid">
        {/* Main Info */}
        <div className="job-main-column">
          <div className="job-detail-card glass-panel">
            <div className="job-card-topbar">
              <div className="company-logo-large">
                <Building size={32} className="text-muted" />
              </div>
              <span className="job-source bg-computrabajo-source">Via Computrabajo</span>
            </div>
            
            <h1 className="job-main-title">Desarrollador React Native Senior</h1>
            <Link href="/empresa/tech-innovators" className="company-name-link">
              Tech Innovators SAC <CheckCircle size={14} color="var(--success)" />
            </Link>

            <div className="job-quick-stats">
              <div className="stat-item"><MapPin size={18} className="text-primary"/> San Isidro, Lima (Híbrido)</div>
              <div className="stat-item"><Briefcase size={18} className="text-primary"/> Tiempo Completo</div>
              <div className="stat-item"><DollarSign size={18} className="text-primary"/> S/ 6000 - S/ 9000 mensuales</div>
              <div className="stat-item"><Clock size={18} className="text-primary"/> Publicado hace 2 días</div>
            </div>
          </div>

          <div className="job-detail-card glass-panel">
            <h3 className="section-title">Descripción del Empleo</h3>
            <p className="job-paragraph">
              Buscamos un Desarrollador React Native Senior para unirse a nuestro equipo core y liderar la construcción de la nueva billetera digital del Perú, impactando a millones de usuarios.
            </p>
            
            <h4 className="list-title">Responsabilidades:</h4>
            <ul className="job-unordered-list">
              <li>Liderar el desarrollo de la aplicación móvil en React Native.</li>
              <li>Trabajar muy de cerca con el equipo de producto y diseñadores UI/UX.</li>
              <li>Asegurar el rendimiento, calidad y capacidad de respuesta de la aplicación.</li>
            </ul>

            <h4 className="list-title mt-4">Requisitos:</h4>
            <ul className="job-unordered-list">
              <li>+4 años de experiencia demostrable en React Native.</li>
              <li>Conocimiento sólido de TypeScript, Redux o Zustand.</li>
              <li>Experiencia publicando aplicaciones en App Store y Google Play.</li>
            </ul>
          </div>
        </div>

        {/* Floating Apply Card (Sticky Desktop, Fixed Bottom Mobile) */}
        <div className="job-sidebar-column">
          <div className="apply-card glass-panel">
            <h3 className="section-title">Resumen</h3>
            <div className="apply-summary-text">
              <p><strong>Modalidad:</strong> Híbrido (3 días presencial)</p>
              <p><strong>Experiencia:</strong> Semi Senior / Senior</p>
              <p><strong>Beneficios:</strong> EPS 100%, Bono de desempeño.</p>
            </div>

            {/* Mobile Optimized 1-Click Apply */}
            <button className="btn fast-apply-btn">
              <Zap size={20} /> Aplica Ahora (1-clic)
            </button>
            <p className="cv-notice">Usaremos el CV: <strong>Mi-CV-2026.pdf</strong></p>

            <div className="share-section">
              <p className="share-title">¿Conoces a alguien ideal?</p>
              <div className="share-buttons">
                <button className="btn btn-outline share-btn">Copiar Link</button>
                <button className="btn btn-outline share-btn">WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
