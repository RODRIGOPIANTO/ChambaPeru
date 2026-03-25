'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Briefcase, Filter, ChevronDown } from 'lucide-react';
import GoogleAd from '../../components/GoogleAd';
import './buscar.css';

const initialJobs = [
  { id: 1, title: 'Desarrollador React Native Senior', company: 'Empresa Tecnológica SAC', source: 'Computrabajo', mode: 'Híbrido', salary: 6000, time: 'Hace 1 hora', location: 'San Isidro, Lima' },
  { id: 2, title: 'Analista de Datos Jr.', company: 'Banco Perú', source: 'LinkedIn', mode: 'Remoto', salary: 2500, time: 'Hace 2 horas', location: 'Remoto, Perú' },
  { id: 3, title: 'Asesor Call Center', company: 'Teleperformance', source: 'Bumeran', mode: 'Presencial', salary: 1200, time: 'Hace 3 horas', location: 'Miraflores, Lima' },
  { id: 4, title: 'Especialista en Marketing', company: 'Agencia Digital', source: 'Empleos Perú', mode: 'Híbrido', salary: 3500, time: 'Hace 5 horas', location: 'San Borja, Lima' },
  { id: 5, title: 'Líder Técnico Node.js', company: 'Startup Fintech', source: 'Computrabajo', mode: 'Remoto', salary: 8000, time: 'Hace 12 horas', location: 'Remoto, Perú' },
  { id: 6, title: 'Contador Público', company: 'Estudio Contable', source: 'LinkedIn', mode: 'Presencial', salary: 4500, time: 'Hace 24 horas', location: 'Surco, Lima' }
];

export default function BuscarPage() {
  const [jobs] = useState(initialJobs);
  const [sourceFilter, setSourceFilter] = useState(['Computrabajo', 'LinkedIn', 'Bumeran']);
  const [modeFilter, setModeFilter] = useState(['Híbrido']);
  const [salaryFilter, setSalaryFilter] = useState('Todos');

  const handleSourceToggle = (source) => {
    setSourceFilter(prev => 
      prev.includes(source) ? prev.filter(s => s !== source) : [...prev, source]
    );
  };

  const handleModeToggle = (mode) => {
    setModeFilter(prev => 
      prev.includes(mode) ? prev.filter(m => m !== mode) : [...prev, mode]
    );
  };

  const filteredJobs = jobs.filter(job => {
    const matchSource = sourceFilter.length === 0 || sourceFilter.includes(job.source);
    const matchMode = modeFilter.length === 0 || modeFilter.includes(job.mode);
    const matchSalary = salaryFilter === 'Todos' || 
      (salaryFilter === '1000-2000' && job.salary >= 1000 && job.salary <= 2000) ||
      (salaryFilter === '2000-4000' && job.salary > 2000 && job.salary <= 4000) ||
      (salaryFilter === '>4000' && job.salary > 4000);
      
    return matchSource && matchMode && matchSalary;
  });

  return (
    <div className="search-page container">
      <div className="search-header">
        <h1 className="heading-2 search-main-title">Encuentra tu próximo empleo</h1>
        
        <form className="search-bar glass-panel search-bar-centered">
          <div className="search-input-group">
            <Search className="text-muted" size={20} />
            <input type="text" placeholder="Cargo o empresa" className="search-input" defaultValue="Desarrollador" />
          </div>
          <div className="search-divider"></div>
          <div className="search-input-group">
            <MapPin className="text-muted" size={20} />
            <input type="text" placeholder="Ubicación" className="search-input" defaultValue="Lima" />
          </div>
          <button className="btn btn-primary search-submit-btn">Refinar Búsqueda</button>
        </form>
      </div>

      <div className="search-layout">
        <aside className="search-filters glass-panel">
          <div className="filter-header">
            <h3 className="heading-3 filter-main-title">Filtros</h3>
            <Filter size={18} className="text-muted" />
          </div>
          
          <div className="filter-group">
            <h4 className="filter-title">Fuente <ChevronDown size={14} /></h4>
            {['Computrabajo', 'LinkedIn', 'Bumeran', 'Empleos Perú'].map(source => (
              <label key={source} className="filter-label">
                <input 
                  type="checkbox" 
                  checked={sourceFilter.includes(source)}
                  onChange={() => handleSourceToggle(source)}
                /> {source}
              </label>
            ))}
          </div>

          <div className="filter-group filter-margin-top">
            <h4 className="filter-title">Modalidad <ChevronDown size={14} /></h4>
            {['Remoto', 'Híbrido', 'Presencial'].map(mode => (
              <label key={mode} className="filter-label">
                <input 
                  type="checkbox" 
                  checked={modeFilter.includes(mode)}
                  onChange={() => handleModeToggle(mode)}
                /> {mode}
              </label>
            ))}
          </div>

          <div className="filter-group filter-margin-top">
            <h4 className="filter-title">Salario Mensual <ChevronDown size={14} /></h4>
            <label className="filter-label">
              <input type="radio" name="salary" checked={salaryFilter === 'Todos'} onChange={() => setSalaryFilter('Todos')} /> Todos
            </label>
            <label className="filter-label">
              <input type="radio" name="salary" checked={salaryFilter === '1000-2000'} onChange={() => setSalaryFilter('1000-2000')} /> S/ 1000 - S/ 2000
            </label>
            <label className="filter-label">
              <input type="radio" name="salary" checked={salaryFilter === '2000-4000'} onChange={() => setSalaryFilter('2000-4000')} /> S/ 2000 - S/ 4000
            </label>
            <label className="filter-label">
              <input type="radio" name="salary" checked={salaryFilter === '>4000'} onChange={() => setSalaryFilter('>4000')} /> Más de S/ 4000
            </label>
          </div>

          <div className="filter-margin-top">
            <GoogleAd slotId="SEARCH_SIDEBAR_AD" format="vertical" autoRefresh={true} refreshInterval={45000} />
          </div>
        </aside>

        <section className="search-results">
          <div className="results-header">
            <p className="text-muted results-count-text">
              Mostrando <span className="text-primary-bold">{filteredJobs.length}</span> resultados para "Desarrollador" en Lima
            </p>
            <select className="sort-select input-base sort-dropdown">
              <option>Más recientes</option>
              <option>Mayor salario</option>
              <option>Relevancia</option>
            </select>
          </div>

          <div className="results-list fade-in">
            {filteredJobs.length > 0 ? filteredJobs.map((job, index) => {
               const isAdSlot = (index + 1) % 4 === 0;
               return (
                 <div key={`job-wrap-${job.id}`}>
                   <div className="job-card glass-panel">
                      <div className="job-card-header">
                        <div className="job-meta-time">{job.time}</div>
                        <span className={`job-source ${
                          job.source === 'Computrabajo' ? 'bg-source-computrabajo' : 
                          job.source === 'LinkedIn' ? 'bg-source-linkedin' : 
                          'bg-source-other'
                        }`}>
                          {job.source}
                        </span>
                      </div>
                      
                      <Link href={`/jobs/${job.id}`} className="job-title-link">
                        <h3 className="job-title">{job.title}</h3>
                      </Link>
                      <p className="company-name">{job.company}</p>
                      
                      <div className="job-details">
                        <span className="detail-tag"><MapPin size={16}/> {job.location}</span>
                        <span className="detail-tag"><Briefcase size={16}/> {job.mode}</span>
                      </div>
                      
                      <div className="job-card-footer">
                        <span className="salary-range">S/ {job.salary}</span>
                        <Link href={`/jobs/${job.id}`} className="btn btn-outline btn-postular">Postular</Link>
                      </div>
                   </div>
                   
                   {isAdSlot && (
                     <GoogleAd slotId={`IN_FEED_${index}`} format="fluid" autoRefresh={true} refreshInterval={60000} />
                   )}
                 </div>
               );
            }) : (
              <div className="empty-results">
                No se encontraron empleos que coincidan con estos filtros.
              </div>
            )}
          </div>
          
          <div className="pagination">
            <button className="btn btn-outline" disabled>Anterior</button>
            <button className="btn btn-primary">1</button>
            <button className="btn btn-outline">2</button>
            <button className="btn btn-outline">Siguiente</button>
          </div>
        </section>
      </div>
    </div>
  );
}
