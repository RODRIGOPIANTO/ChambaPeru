'use client';

import { signIn } from 'next-auth/react';
import { Mail } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{marginTop: '-80px'}}>
      <div className="glass-panel p-8 w-full max-w-md text-center">
        <h1 className="heading-2 mb-2">Bienvenido a ChambaPeru</h1>
        <p className="text-muted mb-8">Ingresa para potenciar tu búsqueda de empleo</p>

        <div className="space-y-4">
          <button 
            onClick={() => signIn('google', { callbackUrl: '/dashboard/candidato' })}
            className="w-full btn btn-outline flex items-center justify-center gap-3 py-3"
            style={{background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)'}}
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continuar con Google
          </button>

          <button 
            onClick={() => signIn('facebook', { callbackUrl: '/dashboard/candidato' })}
            className="w-full btn btn-outline flex items-center justify-center gap-3 py-3"
            style={{background: '#1877F2', borderColor: '#1877F2', color: 'white'}}
          >
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 filter brightness-0 invert" />
            Continuar con Facebook
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-sm text-gray-500">O ingresa con tu email</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="tu@correo.com" 
              className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors"
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-gray-500 focus:border-secondary focus:outline-none transition-colors"
            />
            <button 
              type="button" 
              onClick={() => signIn('credentials', { email: 'test@test.com', password: 'password', callbackUrl: '/dashboard/candidato' })}
              className="w-full btn btn-primary py-3"
            >
              <Mail className="inline mr-2" size={18}/> Iniciar Sesión con Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
