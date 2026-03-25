import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PreciosPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <h1 className="heading-1" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Planes diseñados para tu <span className="text-gradient">Crecimiento</span></h1>
        <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>
          Desde startups a corporativos. Escoge el plan de reclutamiento que mejor se adapte a tu necesidad de contratación en Perú.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Tier 1 */}
        <div className="glass-panel" style={{ padding: '3rem 2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Plan Básico</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Gratis</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--text-secondary)', flex: 1 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#34d399" /> 1 Oferta Activa</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#34d399" /> Visibilidad Estándar</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#34d399" /> Recepción de CVs</li>
          </ul>
          <Link href="/login" className="btn btn-outline" style={{ textAlign: 'center', textDecoration: 'none' }}>Empezar Gratis</Link>
        </div>

        {/* Tier 2 */}
        <div className="glass-panel" style={{ padding: '3rem 2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(59, 130, 246, 0.15) 100%)', borderColor: 'rgba(59, 130, 246, 0.4)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 'bold' }}>MÁS POPULAR</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Pro Reclutador</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>S/ 199 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/mes</span></div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--text-secondary)', flex: 1 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'white' }}><Check size={18} color="#3b82f6" /> 10 Ofertas Activas</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'white' }}><Check size={18} color="#3b82f6" /> Ofertas Destacadas (Arriba)</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#3b82f6" /> Match IA de Candidatos</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#3b82f6" /> Panel de Empresa VIP</li>
          </ul>
          <Link href="/login" className="btn btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>Suscribirse</Link>
        </div>

        {/* Tier 3 */}
        <div className="glass-panel" style={{ padding: '3rem 2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Suscripción XML</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>A Medida</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--text-secondary)', flex: 1 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#34d399" /> Ingesta vía API / XML</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#34d399" /> Publicaciones Ilimitadas</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#34d399" /> Agregación Automática</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Check size={18} color="#34d399" /> Soporte Dedicado 24/7</li>
          </ul>
          <Link href="/contacto" className="btn btn-outline" style={{ textAlign: 'center', textDecoration: 'none' }}>Contactar Ventas</Link>
        </div>

      </div>
    </div>
  );
}
