import Link from 'next/link';
import { Briefcase, Layout, Code, Search, MapPin } from 'lucide-react';
import GoogleAd from '../../components/GoogleAd';

export default function FreelancePage() {
  return (
    <div className="home-container">
      <section className="hero-section" style={{ background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.1), transparent)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#10b981' }}>
            <Briefcase size={36} />
          </div>
          <h1 className="heading-1" style={{ fontSize: '3rem', margin: '0 auto 1.5rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>Proyectos <span className="text-gradient">Freelance</span></h1>
          <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.6', margin: '0 auto 2.5rem', maxWidth: '600px' }}>
            Encuentra proyectos independientes en diseño, programación, redacción y más. Trabaja por objetivos y maneja tus propios horarios.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/buscar?q=freelance" className="btn btn-primary" style={{ padding: '1rem 2rem', textDecoration: 'none' }}>Ver Proyectos</Link>
            <Link href="/buscar-talentos" className="btn btn-outline" style={{ padding: '1rem 2rem', textDecoration: 'none' }}>Buscar Freelancers</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #10b981' }}>
            <Code size={28} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Desarrollo & IT</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Proyectos de desarrollo web, apps móviles, scripts y mantenimiento de sistemas para clientes locales y globales.</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6' }}>
            <Layout size={28} color="#60a5fa" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Diseño & Creatividad</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Oportunidades en diseño gráfico, edición de video, branding y creación de contenido visual para redes sociales.</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #f59e0b' }}>
            <Search size={28} color="#fbbf24" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Marketing & Redacción</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Gestión de comunidades (Community Management), SEO, copy para blogs y traducción de documentos especializados.</p>
          </div>
        </div>

        <div>
          <h2 className="heading-2" style={{ marginBottom: '2rem', textAlign: 'center' }}>¿Eres Freelancer o buscas uno?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Registra tu Perfil</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Muestra tu portafolio</div>
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Publica un Proyecto</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Encuentra al experto ideal</div>
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Seguridad en Pagos</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Protección garantizada</div>
              </div>
            </div>
          </div>
        </div>
        
        <GoogleAd slotId="FREELANCE_FOOTER_ADS" autoRefresh={true} refreshInterval={60000} />
      </section>
    </div>
  );
}

