import Link from 'next/link';
import { Building, LayoutDashboard, Search, DollarSign, PenTool, Video, CheckCircle } from 'lucide-react';
import '../dashboard.css';

export default function EmpresaDashboard() {
  return (
    <div className="container dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar glass-panel">
        <div className="profile-summary">
          <div className="avatar-circle">
             <Building size={64} className="text-muted" />
          </div>
          <h3 className="heading-3 mt-4">Tech Innovators SAC</h3>
          <p className="text-muted text-sm border-b pb-2 w-full text-center border-gray-600">Empresa Verificada <CheckCircle size={14} color="var(--success)" className="inline" /></p>
        </div>
        
        <nav className="dashboard-nav">
          <Link href="#" className="dash-link active"><LayoutDashboard size={18}/> Panel Principal</Link>
          <Link href="#" className="dash-link"><PenTool size={18}/> Búsqueda Inteligente (ATS)</Link>
          <Link href="#" className="dash-link"><Video size={18}/> Employer Branding</Link>
          <Link href="#" className="dash-link"><DollarSign size={18}/> Campañas y Pagos</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-content">
        <h1 className="heading-2 mb-4">Employer Branding y Reclutamiento</h1>
        
        <div className="grid grid-cols-2 mb-8">
          <div className="stat-card glass-panel" style={{padding: '1.5rem'}}>
            <h3 className="stat-number text-gradient" style={{fontSize: '2rem'}}>42</h3>
            <p className="stat-label">Candidatos Nuevos</p>
          </div>
          <div className="stat-card glass-panel" style={{padding: '1.5rem'}}>
            <h3 className="stat-number text-gradient" style={{fontSize: '2rem'}}>3</h3>
            <p className="stat-label">Vacantes Activas</p>
          </div>
        </div>

        {/* ATS y Multimedia Zone */}
        <section className="glass-panel p-6 mb-8">
          <h3 className="heading-3 mb-2">Tu Propuesta de Valor (EVP)</h3>
          <p className="text-muted mb-4">Personaliza cómo te ven los candidatos. Sube un video de tu cultura corporativa o fotos de tus oficinas. Las empresas con videos reciben 40% más postulaciones.</p>
          
          <div className="upload-zone mb-4" style={{padding: '2rem'}}>
            <Video size={32} className="text-primary mb-2 mx-auto" />
            <p className="text-sm">Enlace a YouTube o archivo MP4</p>
          </div>
          <button className="btn btn-outline">Guardar Perfil Corporativo</button>
        </section>

        {/* Promociones / Monetizacion */}
        <section className="premium-ad-banner" style={{padding: '2rem'}}>
          <div className="ad-content">
            <span className="ad-badge">Atrae Mejor Talento</span>
            <h2 style={{fontSize: '1.5rem'}}>Destaca tus ofertas con Mercado Pago</h2>
            <p className="text-sm">Consigue resultados x5 veces más rápido figurando en los primeros puestos por solo S/ 50.</p>
            <button className="btn btn-primary mt-4">Promocionar Vacante</button>
          </div>
        </section>

      </main>
    </div>
  );
}
