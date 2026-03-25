import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region');
    const ciudad = searchParams.get('ciudad');

    // Consultamos solo los empleos no eliminados ("activos")
    let query = supabase.from('empleos').select('*').eq('estado', 'activo');

    // Aplicar filtros dinámicos
    if (region) {
      query = query.eq('region', region);
    }
    if (ciudad) {
      query = query.eq('ciudad', ciudad);
    }

    // Ordenar: primero destacados, luego los más recientes
    query = query
      .order('es_destacado', { ascending: false })
      .order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json({ success: true, count: data.length, data });
  } catch (error) {
    console.error('Error fetching empleos:', error);
    return NextResponse.json({ success: false, error: 'Error al obtener empleos' }, { status: 500 });
  }
}
