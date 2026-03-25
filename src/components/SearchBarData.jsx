'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Lista simulada para el Autocompletado (En prod viene de Supabase / Prisma)
  const popularKeywords = [
    'Desarrollador Frontend', 'Desarrollador Backend', 'Atención al Cliente', 
    'Ventas Call Center', 'Analista de Datos', 'Contabilidad', 
    'Soporte Técnico', 'Diseñador UX/UI', 'Marketing Digital', 'Ingeniero Civil'
  ];

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = popularKeywords
        .filter(k => k.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 10); // Límite de 10 como pediste
      setSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [query]);

  // Cerrar dropdown si hace clic afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/buscar?q=${encodeURIComponent(query)}`);
  };

  const selectSuggestion = (term) => {
    setQuery(term);
    setShowDropdown(false);
    router.push(`/buscar?q=${encodeURIComponent(term)}`);
  };

  return (
    <form className="hero-search glass-panel" onSubmit={handleSearch} ref={dropdownRef}>
      <div className="search-input-group position-relative" style={{position: 'relative', width: '100%'}}>
        <Search className="search-icon text-muted" size={20} />
        <input 
          type="text" 
          placeholder="Cargo, habilidad o empresa... (ej. Ventas)" 
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 1 && setShowDropdown(true)}
          maxLength={27} // Capacidad visible aprox óptima en móviles
        />
        
        {/* Dropdown de Autocompletado */}
        {showDropdown && suggestions.length > 0 && (
          <div className="autocomplete-dropdown glass-panel" style={{
            position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '0.5rem', 
            zIndex: 100, padding: '0.5rem', borderRadius: '8px', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)', background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)'
          }}>
            {suggestions.map((sug, idx) => (
              <div 
                key={idx} 
                onClick={() => selectSuggestion(sug)}
                style={{
                  padding: '0.75rem 1rem', cursor: 'pointer', borderRadius: '4px',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--text-primary)', transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <Search size={14} color="var(--text-secondary)" /> {sug}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="search-divider"></div>
      <div className="search-input-group">
        <MapPin className="search-icon text-muted" size={20} />
        <input type="text" placeholder="Ciudad o región" className="search-input" />
      </div>
      <button type="submit" className="btn btn-primary search-btn">Buscar</button>
    </form>
  );
}
