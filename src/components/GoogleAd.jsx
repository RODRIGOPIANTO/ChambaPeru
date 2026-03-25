'use client';

import { useEffect, useRef } from 'react';

// Reusable Google AdSense Component
// Usage: <GoogleAd slotId="1234567890" format="auto" autoRefresh={true} refreshInterval={45000} />
export default function GoogleAd({ slotId, format = 'auto', responsive = true, autoRefresh = false, refreshInterval = 45000 }) {
  const adContainerRef = useRef(null);

  useEffect(() => {
    let intervalId;
    let observer;

    const loadAd = () => {
      try {
        if (adContainerRef.current) {
          // Limpiar el contenedor antes de inyectar un nuevo ad (necesario para React y AdSense en SPA)
          adContainerRef.current.innerHTML = '';
          const ins = document.createElement('ins');
          ins.className = 'adsbygoogle relative z-10';
          ins.style.display = 'block';
          ins.style.width = '100%';
          ins.dataset.adClient = 'ca-pub-YYYYYYYYYYYYYYYY'; // Sustituir por tu ID
          ins.dataset.adSlot = slotId;
          ins.dataset.adFormat = format;
          ins.dataset.fullWidthResponsive = responsive ? "true" : "false";
          adContainerRef.current.appendChild(ins);
          
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('AdSense Error:', e);
      }
    };

    // Primera carga
    loadAd();

    // Lógica para auto-refresco seguro (Solo si se habilita, y solo si es 50% visible)
    if (autoRefresh) {
      let isVisible = false;
      
      observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
      }, { threshold: 0.5 }); 
      
      if (adContainerRef.current) {
        observer.observe(adContainerRef.current);
      }

      intervalId = setInterval(() => {
        if (isVisible) {
          loadAd();
          // Consola opcional para debuggear el refresh en Dev
          // console.log(`[AdSense] Auto-refreshed slot ${slotId}`);
        }
      }, refreshInterval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (observer) observer.disconnect();
    };
  }, [slotId, format, responsive, autoRefresh, refreshInterval]);

  return (
    <div 
      className="google-ad-container my-6 text-center overflow-hidden rounded-lg bg-black/10 border border-white/5" 
      style={{minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}
    >
      <span className="text-xs text-muted absolute z-0 pointer-events-none uppercase tracking-widest" style={{ opacity: 0.4 }}>Espacio Publicitario</span>
      <div ref={adContainerRef} className="w-full relative z-10" />
    </div>
  );
}
