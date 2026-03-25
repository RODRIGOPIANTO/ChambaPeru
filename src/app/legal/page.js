export default function LegalPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem', maxWidth: '800px' }}>
      <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }}>
        <h1 className="heading-1" style={{ fontSize: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem' }}>Políticas y Términos</h1>
        
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <h3 style={{ color: 'white', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Términos de Servicio</h3>
          <p>Bienvenido a ChambaPeru. Al utilizar nuestra plataforma, aceptas recopilar, publicar, y gestionar datos estrictamente asociados a fines de empleo y contratación. No se permite el web-scraping no autorizado de nuestra base de perfiles por parte de entidades de terceros.</p>

          <h3 style={{ color: 'white', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Tratamiento de Datos (Privacidad)</h3>
          <p>Tus datos (CVs, nombres, números de identificación, correo electrónico) se mantienen estrictamente en bases de datos cifradas bajo las leyes de Protección de Datos Personales del Perú. Solo serán accesibles por compañías registradas a las cuales tú les apliques de manera directa o mediante algoritmos de matching.</p>
          
          <h3 style={{ color: 'white', fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Uso de Inteligencia Artificial</h3>
          <p>Nuestros servicios de Resume Parsing e indicadores Semánticos son sugerencias algorítmicas y no decisiones absolutas. Siempre serás evaluado primariamente bajo criterios humanos en el paso posterior de la empresa.</p>

          <p style={{ marginTop: '3rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)' }}>Última actualización: Marzo 2026</p>
        </div>
      </div>
    </div>
  );
}
