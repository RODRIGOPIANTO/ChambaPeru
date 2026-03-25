import Link from 'next/link';
import { Search } from 'lucide-react';

export default function BuscarTalentosPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
      <div className="glass-panel" style={{ padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: '#60a5fa' }}>
          <Search size={36} />
        </div>
        <h1 className="heading-1" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Base de Datos de <span className="text-gradient">Talentos</span></h1>
        <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '3rem' }}>
          La visualización proactiva de currículums y la búsqueda directa de candidatos pasivos requiere un nivel de acceso Empresas Premium o suscripción "Pro Reclutador".
        </p>
        <Link href="/precios" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', textDecoration: 'none' }}>
          Ver Planes de Reclutamiento
        </Link>
      </div>
    </div>
  );
}
