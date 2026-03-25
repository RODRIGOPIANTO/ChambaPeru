'use client';

import { useSession, signIn } from 'next-auth/react';
import { useState } from 'react';
import { Briefcase, MapPin, AlignLeft, ShieldAlert } from 'lucide-react';

export default function PublicarPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  if (status === 'loading') {
    return <div className="container py-24 text-center">Cargando verificación de seguridad...</div>;
  }

  // BARRERA DE SEGURIDAD CLIENT-SIDE: Solo cuentas sociales
  const isSocialAuth = session?.user?.provider === 'google' || session?.user?.provider === 'facebook';

  if (!session || !isSocialAuth) {
    return (
      <div className="container py-24 flex flex-col items-center max-w-lg mx-auto text-center">
        <div className="p-4 rounded-full text-red-500 mb-6" style={{ background: 'rgba(239, 68, 68, 0.1)' }}>
          <ShieldAlert size={48} />
        </div>
        <h1 className="heading-2 mb-4" style={{ fontSize: '2rem' }}>Acceso Restringido</h1>
        <p className="text-muted mb-8 text-lg" style={{ lineHeight: '1.6', marginBottom: '2rem' }}>
          Para garantizar la calidad de las ofertas y prevenir spam, solo permitimos registrar 
          publicaciones a usuarios verificados mediante cuentas sociales oficiales.
        </p>
        
        <div className="flex flex-col gap-4 w-full" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
          <button 
            onClick={() => signIn('google')} 
            className="flex items-center justify-center gap-3 bg-white hover:bg-gray-200 transition-colors py-4 font-bold rounded-xl"
            style={{ color: 'black', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '0.75rem', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '24px', height: '24px' }} />
            Continuar con Google
          </button>
          
          <button 
            onClick={() => signIn('facebook')} 
            className="flex items-center justify-center gap-3 transition-colors py-4 font-bold rounded-xl"
            style={{ color: 'white', background: '#1877F2', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}
          >
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" style={{ width: '24px', height: '24px' }} />
            Continuar con Facebook
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/empleos/publicar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        setSuccess(true);
        e.target.reset();
      } else {
        const err = await res.json();
        alert(err.error || "Ocurrió un error al publicar la oferta.");
      }
    } catch (err) {
      alert("Error de conexión al servidor.");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="container py-24 text-center">
        <div className="glass-panel p-12 rounded-2xl max-w-lg mx-auto" style={{ border: '1px solid rgba(16, 185, 129, 0.3)', padding: '3rem', borderRadius: '1rem' }}>
          <div className="mx-auto flex justify-center mb-6">
             <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                <Briefcase size={40} color="#10b981" />
             </div>
          </div>
          <h2 className="heading-2 mb-4" style={{ color: '#10b981' }}>¡Oferta Publicada!</h2>
          <p className="text-muted mb-8">Tu publicación ya está activa en ChambaPeru y visible para nuestros candidatos.</p>
          <button onClick={() => setSuccess(false)} className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>Publicar otra oferta</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h1 className="heading-1 mb-2 text-center" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Publicar Empleo o Proyecto</h1>
      <p className="text-center text-muted mb-8" style={{ marginBottom: '2.5rem' }}>
        Publicando verificadamente como: <strong style={{ color: 'white' }}>{session.user.name || session.user.email}</strong> 
        <span style={{ fontSize: '0.85rem', marginLeft: '0.5rem', opacity: 0.7, background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
          By {session.user.provider}
        </span>
      </p>

      <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label className="block text-sm font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Briefcase size={16} /> Título de la Oferta / Proyecto
          </label>
          <input required name="titulo" type="text" placeholder="Ej: Desarrollador Backend Node.js" className="input-base" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Tipo de Oferta</label>
            <select required name="tipo_oferta" className="input-base" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.5rem', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
              <option value="privado">Empleo Privado</option>
              <option value="cas_estado">Vacante del Estado (CAS)</option>
              <option value="freelance">Proyecto Freelance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Modalidad</label>
            <select required name="modalidad" className="input-base" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.5rem', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
              <option value="Presencial">Presencial</option>
              <option value="Híbrido">Híbrido</option>
              <option value="Remoto">Remoto</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div>
            <label className="block text-sm font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <MapPin size={16} /> Región
            </label>
            <input required name="region" type="text" placeholder="Ej: Piura, Lima..." className="input-base" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Ciudad / Distrito</label>
            <input required name="ciudad" type="text" placeholder="Ej: Talara" className="input-base" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <AlignLeft size={16} /> Descripción Completa y Requisitos
          </label>
          <textarea required name="descripcion" rows="7" placeholder="Detalla los requisitos, funciones a realizar, y lo que ofreces al candidato o freelancer..." className="input-base" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', resize: 'vertical' }}></textarea>
        </div>

        <button disabled={loading} type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', fontWeight: 'bold', borderRadius: '0.75rem', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Procesando Publicación...' : 'Publicar Oferta Ahora'}
        </button>
      </form>
    </div>
  );
}
