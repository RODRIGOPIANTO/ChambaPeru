'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { TrendingUp, Users, DollarSign, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import GoogleAd from '../../components/GoogleAd';
import './tendencias.css';

// Mocks Data (En producción vendría de Supabase)
const demandasData = [
  { name: 'Desarrollador Full Stack', ofertas: 1450 },
  { name: 'Call Center / Ventas', ofertas: 3200 },
  { name: 'Asistente Contable', ofertas: 980 },
  { name: 'Diseñador UI/UX', ofertas: 650 },
  { name: 'Marketing Digital', ofertas: 1100 },
];

const salarioData = [
  { exp: 'Junior', promedio: 1500, max: 2500 },
  { exp: 'Semi-Senior', promedio: 3000, max: 4500 },
  { exp: 'Senior', promedio: 6000, max: 8500 },
  { exp: 'Lead/Manager', promedio: 9000, max: 15000 },
];

const ultimosEmpleos = [
  { id: '1', title: 'Analista de Datos Jr.', company: 'Fintech Soluciones', location: 'Remoto', type: 'Remoto', salary: 2500, time: 'Hace 30 min' },
  { id: '2', title: 'Agente Bilingüe Inbound', company: 'Teleperformance', location: 'Lima, Perú', type: 'Híbrido', salary: 1800, time: 'Hace 1 hora' },
  { id: '3', title: 'Diseñador Gráfico', company: 'Agencia Creativa', location: 'Piura, Perú', type: 'Presencial', salary: 1600, time: 'Hace 3 horas' }
];

export default function TendenciasPage() {
  return (
    <div className="home-container">
      {/* Hero Header */}
      <section className="hero-section" style={{ background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent)', padding: '5rem 0' }}>
        <div className="container text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge-pill" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>
            <span className="badge-dot" style={{ backgroundColor: '#a855f7' }}></span>
            Actualizado Diciembre 2026
          </div>
          <h1 className="heading-1 mb-4" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Termómetro <span className="text-gradient">Laboral</span> del Perú
          </h1>
          <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
            Descubre cuáles son los roles más demandados y cuánto están pagando realmente las empresas. Datos extraídos de más de 50,000 ofertas activas.
          </p>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="container mt-8 mb-12">
        <div className="stats-grid" style={{ marginBottom: '3rem' }}>
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-500/20 text-blue-400"><Users size={28}/></div>
            <div>
              <p className="text-muted text-sm">Vacantes Activas Hoy</p>
              <h3 className="text-2xl font-bold" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>12,450</h3>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 rounded-full bg-green-500/20 text-green-400"><TrendingUp size={28}/></div>
            <div>
              <p className="text-muted text-sm">Crecimiento Mensual</p>
              <h3 className="text-2xl font-bold" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>+18.5%</h3>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 rounded-full bg-purple-500/20 text-purple-400"><DollarSign size={28}/></div>
            <div>
              <p className="text-muted text-sm">Salario Promedio General</p>
              <h3 className="text-2xl font-bold" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>S/ 2,850</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Main Charts Area */}
      <section className="container mb-12" style={{ marginBottom: '3rem' }}>
        <div className="grid grid-cols-1 lg-grid-cols-2 gap-8">
          
          {/* Chart 1 */}
          <div className="glass-panel p-6 rounded-2xl chart-card" style={{ padding: '1.5rem' }}>
            <h3 className="heading-3 mb-6" style={{ marginBottom: '1.5rem' }}>Perfiles Más Demandados</h3>
            <div style={{ width: '100%', height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demandasData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                  <XAxis type="number" stroke="rgba(255,255,255,0.4)" />
                  <YAxis dataKey="name" type="category" width={140} stroke="rgba(255,255,255,0.8)" style={{ fontSize: '0.85rem' }} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="ofertas" fill="#60a5fa" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Spacer for Ads on Mobile, or Side-by-side Ad */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center text-center items-center" style={{ padding: '2rem' }}>
            <h3 className="text-xl font-bold mb-2" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Potencia tu perfil</h3>
            <p className="text-muted mb-6" style={{ marginBottom: '1.5rem' }}>Las tendencias cambian. Únete a las formaciones más valoradas en este momento.</p>
            {/* IN-ARTICLE AD: Alta retención porque los usuarios pasan tiempo leyendo gráficos. */}
            <div style={{ width: '100%' }}>
              <GoogleAd slotId="TENDENCIAS_IN_ARTICLE" format="fluid" autoRefresh={true} refreshInterval={45000} />
            </div>
          </div>

        </div>
      </section>

      {/* Chart 2: Salaries */}
      <section className="container mb-16" style={{ marginBottom: '4rem' }}>
        <div className="glass-panel p-6 rounded-2xl w-full" style={{ padding: '2rem' }}>
          <h3 className="heading-3 mb-6" style={{ marginBottom: '2rem' }}>Expectativa Salarial por Experiencia (Soles)</h3>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salarioData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPromedio" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="exp" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="promedio" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorPromedio)" name="Promedio Base" />
                <Line type="monotone" dataKey="max" stroke="#fbbf24" strokeWidth={2} dot={{ r: 4 }} name="Techo Salarial (Top 10%)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="text-muted text-sm mt-4 text-center" style={{ marginTop: '1.5rem' }}>
            <span style={{color: '#10b981', fontWeight: 'bold'}}>■</span> Salario Promedio Base &nbsp;&nbsp;&nbsp; 
            <span style={{color: '#fbbf24', fontWeight: 'bold'}}>—</span> Techo Salarial
          </div>
        </div>
      </section>

      {/* Call to Action: Recent Jobs */}
      <section className="container mb-24" style={{ marginBottom: '5rem' }}>
        <div className="flex justify-between items-center mb-6 border-b pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
          <h2 className="heading-2" style={{ fontSize: '1.5rem' }}>Basado en tu lectura: Nuevas Ofertas</h2>
          <Link href="/buscar" className="text-primary hover:underline flex items-center gap-1" style={{ color: '#60a5fa', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            Ver todas <ChevronRight size={16}/>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md-grid-cols-3 gap-6" style={{ marginBottom: '3rem' }}>
          {ultimosEmpleos.map(job => (
            <div key={job.id} className="glass-panel p-5 rounded-xl hover-border-primary flex flex-col h-full" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
               <div className="flex justify-between items-start mb-4" style={{ marginBottom: '1rem' }}>
                 <span className="text-xs bg-white-10 px-2 py-1 rounded text-white-70" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>{job.time}</span>
               </div>
               <h3 className="text-lg font-bold mb-1" style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{job.title}</h3>
               <p className="text-muted text-sm mb-4" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>{job.company}</p>
               
               <div className="mt-auto space-y-2 mb-6" style={{ marginTop: 'auto', marginBottom: '1.5rem' }}>
                 <div className="flex items-center gap-2 text-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <MapPin size={14} color="#60a5fa" /> {job.location}
                 </div>
                 <div className="flex items-center gap-2 text-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <Briefcase size={14} color="#a855f7" /> {job.type}
                 </div>
               </div>
               
               <div className="flex justify-between items-center pt-4 border-t mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <span className="font-bold text-success" style={{ color: '#10b981', fontWeight: 'bold' }}>S/ {job.salary}</span>
                 <Link href={`/jobs/${job.id}`} className="btn btn-outline" style={{ padding: '0.4rem 1rem', textDecoration: 'none' }}>Postular</Link>
               </div>
            </div>
          ))}
        </div>
        
        <div style={{ paddingBottom: '2rem' }}>
          <GoogleAd slotId="TENDENCIAS_BOTTOM" format="auto" />
        </div>
      </section>

    </div>
  );
}
