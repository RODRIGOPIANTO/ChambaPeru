'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Briefcase, Search, Headset, TrendingUp, Menu, X, Mail, Zap } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <Zap className="logo-icon" size={28} fill="currentColor" />
          Chamba<span className="text-gradient">Peru</span>
        </Link>
        
        <div className="nav-links desktop-only">
          <Link href="/buscar" className={`nav-link ${pathname.includes('/buscar') ? 'active' : ''}`}>
            <span className="link-content">
              <Search size={18} /> Buscar Empleos
            </span>
          </Link>
          <Link href="/freelance" className={`nav-link ${pathname.includes('/freelance') ? 'active' : ''}`}>
            <span className="link-content">
              <Briefcase size={18} /> Freelance
            </span>
          </Link>
          <Link href="/tendencias" className={`nav-link ${pathname.includes('/tendencias') ? 'active' : ''}`}>
            <span className="link-content">
              <TrendingUp size={18} /> Tendencias
            </span>
          </Link>
        </div>

        <div className="nav-actions">
          <button onClick={() => setIsLoginOpen(true)} className="btn desktop-only" style={{ marginRight: '1rem', color: 'var(--text-secondary)' }}>
            Iniciar Sesión
          </button>
          <Link href="/publicar" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            Publicar Oferta
          </Link>
          <button className="btn mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {isLoginOpen && (
        <div className="login-modal-overlay flex items-center justify-center p-4">
          <div className="login-modal-content glass-panel p-8 w-full max-w-md text-center relative shadow-2xl">
            <button onClick={() => setIsLoginOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
              <X size={24} />
            </button>

            <h2 className="heading-2 mb-2" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Bienvenido a ChambaPeru</h2>
            <p className="text-muted mb-8" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Ingresa para potenciar tu búsqueda de empleo</p>

            <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button 
                onClick={() => signIn('google', { callbackUrl: '/dashboard/candidato' })}
                className="btn btn-outline"
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '0.75rem' }}
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
                Continuar con Google
              </button>

              <button 
                onClick={() => signIn('facebook', { callbackUrl: '/dashboard/candidato' })}
                className="btn btn-outline"
                style={{ width: '100%', background: '#1877F2', borderColor: '#1877F2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '0.75rem' }}
              >
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                Continuar con Facebook
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>O ingresa con tu email</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input 
                  type="email" 
                  placeholder="tu@correo.com" 
                  style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 0', color: 'white', outline: 'none' }}
                />
                <input 
                  type="password" 
                  placeholder="Contraseña" 
                  style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 0', color: 'white', outline: 'none' }}
                />
                <button 
                  type="button" 
                  onClick={() => signIn('credentials', { email: 'test@test.com', password: 'password', callbackUrl: '/dashboard/candidato' })}
                  className="btn btn-primary"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.8rem', marginTop: '0.5rem' }}
                >
                  <Mail size={18}/> Iniciar Sesión con Email
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
