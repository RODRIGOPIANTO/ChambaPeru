import { Mail, MapPin } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
        <h1 className="heading-1" style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Contáctanos</h1>
        <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>
          ¿Tienes problemas publicando, o eres un agregador XML? Escríbenos.
        </p>
      </div>

      <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', borderRadius: '16px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Nombre Completo</label>
            <input type="text" className="input-base" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Correo Electrónico</label>
            <input type="email" className="input-base" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Mensaje</label>
            <textarea rows="5" className="input-base" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', resize: 'vertical' }}></textarea>
          </div>
          <button type="button" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem', fontWeight: 'bold' }}>Enviar Mensaje</button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}><Mail size={18} /> soporte@chambaperu.com</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}><MapPin size={18} /> Lima, Perú</div>
        </div>
      </div>
    </div>
  );
}
