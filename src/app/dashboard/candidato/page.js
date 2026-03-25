import Link from 'next/link';
import { Upload, FileText, UserCircle, Briefcase, Settings, Star } from 'lucide-react';
import '../dashboard.css';

export default function CandidatoDashboard() {
  return (
    <div className="container dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar glass-panel">
        <div className="profile-summary">
          <div className="avatar-circle">
             <UserCircle size={64} className="text-muted" />
          </div>
          <h3 className="heading-3 mt-4">Juan Pérez</h3>
          <p className="text-muted text-sm">Desarrollador Frontend</p>
        </div>
        
        <nav className="dashboard-nav">
          <Link href="#" className="dash-link active"><UserCircle size={18}/> Mi Perfil</Link>
          <Link href="#" className="dash-link"><FileText size={18}/> Mis Postulaciones (4)</Link>
          <Link href="#" className="dash-link"><Star size={18}/> Empleos Guardados</Link>
          <Link href="#" className="dash-link"><Settings size={18}/> Configuración</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-content">
        <h1 className="heading-2 mb-4">Gestión de CV y Perfil</h1>
        
        {/* Resume Parser / Upload Zone */}
        <div className="upload-zone glass-panel mb-4 text-center p-8">
          <Upload size={48} className="text-primary mb-4 mx-auto" />
          <h3 className="heading-3">Sube o actualiza tu currículum</h3>
          <p className="text-muted mb-4">Aceptamos PDF y Word (Max 5MB). Al subirlo, nuestra IA extraerá automáticamente tus habilidades para destacar tu perfil.</p>
          <button className="btn btn-primary">Seleccionar Archivo (PDF/DOCX)</button>
        </div>

        {/* Extracted Skills Section */}
        <div className="glass-panel p-6">
          <h3 className="heading-3 mb-4">Habilidades Extraídas por IA</h3>
          <p className="text-muted text-sm mb-4">Estas habilidades fueron detectadas en tu último CV subido. Sirven para el sistema de Matching con empresas.</p>
          <div className="tags">
            <span className="tag border-primary">React.js</span>
            <span className="tag border-primary">Next.js</span>
            <span className="tag border-primary">Tailwind CSS</span>
            <span className="tag border-primary">JavaScript ES6+</span>
            <span className="tag border-primary">Git / GitHub</span>
            <span className="tag border-primary">Node.js (Básico)</span>
          </div>
        </div>
      </main>
    </div>
  );
}
