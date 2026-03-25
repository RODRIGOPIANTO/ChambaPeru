export const dynamic = 'force-dynamic';

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// Usamos Service Role Key para hacer la inserción saltando RLS, o el Anon Key.
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Esquema de validación usando Zod
const empleoSchema = z.object({
  titulo: z.string().min(1, 'El título es obligatorio'),
  tipo_oferta: z.enum(['cas_estado', 'privado', 'freelance']).default('cas_estado'),
  modalidad: z.string().default('Presencial'),
  region: z.string().default('Piura'),
  ciudad: z.string().default('Piura'),
  descripcion: z.string().default('Sin descripción'),
  url_origen: z.string().url().optional().or(z.literal('')),
});

export async function POST(request) {
  try {
    // 1. Verificación del Token Secreto para seguridad
    const authHeader = request.headers.get('authorization');
    const secret = process.env.N8N_WEBHOOK_SECRET;

    if (!secret || authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ success: false, error: 'No autorizado' }, { status: 401 });
    }

    // 2. Extraer el body (JSON proporcionado por n8n)
    const body = await request.json();
    const ofertas = Array.isArray(body) ? body : [body];
    const ofertasFormateadas = [];
    
    // 3. Validación y Mapeo
    for (const of of ofertas) {
      const validacion = empleoSchema.safeParse(of);
      if (!validacion.success) {
        console.warn('Oferta descartada por validación:', validacion.error.errors);
        continue; // Saltamos ofertas inválidas y continuamos con las demás
      }
      
      ofertasFormateadas.push({
        ...validacion.data,
        es_destacado: false, // Por defecto no son destacadas
        estado: 'activo'
      });
    }

    if (ofertasFormateadas.length === 0) {
      return NextResponse.json({ success: false, error: 'Ninguna oferta pasó la validación de Zod' }, { status: 400 });
    }

    // 4. Insertar en Supabase
    const { data, error } = await supabase.from('empleos').insert(ofertasFormateadas).select();

    if (error) throw error;

    return NextResponse.json({ success: true, insertadas: ofertasFormateadas.length, data });
  } catch (error) {
    console.error('Error en webhook n8n:', error);
    return NextResponse.json({ success: false, error: 'Error interno del servidor' }, { status: 500 });
  }
}
