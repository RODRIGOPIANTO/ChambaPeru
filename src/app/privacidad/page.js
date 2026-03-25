export default function PrivacidadPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem', maxWidth: '800px' }}>
      <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }}>
        <h1 className="heading-1" style={{ fontSize: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem' }}>Política de Privacidad</h1>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>En ChambaPeru, nos tomamos muy en serio la privacidad de nuestros candidatos y empresas empleadoras. Esta política describe qué datos recopilamos y cómo los resguardamos.</p>
          
          <h3 style={{ color: 'white', fontSize: '1.3rem', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Información Recopilada</h3>
          <p style={{ marginBottom: '1.5rem' }}>Al subir tu Currículum Vitae (CV) o registrarte mediante Google/Facebook, recopilamos tu nombre, correo electrónico, foto de perfil, historial laboral, educación y datos de contacto de manera automatizada a través de nuestro <em>Resume Parser</em> IA.</p>

          <h3 style={{ color: 'white', fontSize: '1.3rem', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Tratamiento de Datos Personales (Ley 29733)</h3>
          <p style={{ marginBottom: '1.5rem' }}>De conformidad con la Ley de Protección de Datos Personales de Perú, toda la información ingresada a nuestra base de datos se mantiene cifrada (encryption-at-rest). No compartimos, vendemos, ni exponemos rutinas de contacto a terceros ajenos a los procesos de reclutamiento formales.</p>
          
          <h3 style={{ color: 'white', fontSize: '1.3rem', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Derechos ARCO</h3>
          <p style={{ marginBottom: '1.5rem' }}>Como candidato, tienes absoluto control de eliminar permanentemente tu cuenta y anexos en cualquier momento haciendo clic en "Eliminar Cuenta" en tu Dashboard.</p>

          <p style={{ marginTop: '3rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>Última actualización: Marzo 2026. Revisión V2.</p>
        </div>
      </div>
    </div>
  );
}
