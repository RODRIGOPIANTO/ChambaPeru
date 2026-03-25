import Link from 'next/link';
import { FileText, Sparkles, Upload, ArrowRight } from 'lucide-react';

export default function CrearCVPage() {
  return (
    <div className="container py-12" style={{ paddingBottom: '6rem' }}>
      <div className="text-center max-w-2xl mx-auto" style={{ margin: '0 auto 4rem' }}>
        <h1 className="heading-1 mb-4" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Crea tu <span className="text-gradient">CV Inteligente</span></h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          En ChambaPeru utilizamos Inteligencia Artificial para destacar tu perfil. 
          Sube tu documento actual o créalo desde cero con nuestro asistente.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Card 1: Subir CV */}
        <div className="glass-panel group" style={{ padding: '3rem 2rem', textAlign: 'center', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'border-color 0.3s', cursor: 'pointer' }}
             onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
             onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
            <Upload size={32} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ya tengo un CV</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1 }}>Sube tu PDF o Word. Nuestra IA leerá tu experiencia y rellenará tu perfil automáticamente.</p>
          <Link href="/login" className="btn btn-outline" style={{ width: '100%', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            Subir Documento <ArrowRight size={16} />
          </Link>
        </div>

        {/* Card 2: Armar CV IA */}
        <div className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(99, 102, 241, 0.1) 100%)', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#818cf8' }}>
            <Sparkles size={32} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Asistente IA</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1 }}>Construye un currículum ganador respondiendo algunas preguntas. Te sugeriremos habilidades y un resumen perfecto.</p>
          <Link href="/login" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            Iniciar Creador <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
