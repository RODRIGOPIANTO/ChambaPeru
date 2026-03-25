import { NextResponse } from 'next/server';

// Base de datos Mock para el MVP
const mochJobs = [
  { id: 1, title: 'Desarrollador Full Stack', company: 'Tech Peru SAC', location: 'Lima', type: 'Remoto', salary: 6500, source: 'LinkedIn', date: '2026-03-22' },
  { id: 2, title: 'Agente Call Center Bilingüe', company: 'Konecta', location: 'Miraflores', type: 'Presencial', salary: 2500, source: 'Computrabajo', date: '2026-03-22' },
  { id: 3, title: 'Asesor de Ventas Telemarketing', company: 'Atento', location: 'Lima', type: 'Híbrido', salary: 1500, source: 'Bumeran', date: '2026-03-21' },
  { id: 4, title: 'Analista de Datos Jr', company: 'BCP', location: 'San Isidro', type: 'Híbrido', salary: 4000, source: 'Laborum', date: '2026-03-20' },
  { id: 5, title: 'Especialista en QA Automation', company: 'Globant', location: 'Arequipa', type: 'Remoto', salary: 5500, source: 'LinkedIn', date: '2026-03-21' },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q');
  
  let results = [...mochJobs];

  // Simulación de búsqueda
  if (search) {
    results = results.filter(job => 
      job.title.toLowerCase().includes(search.toLowerCase()) || 
      job.company.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json({
    status: 'success',
    totalFiltered: results.length,
    data: results
  });
}
