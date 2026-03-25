export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { supabase } from '@/lib/supabase';

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    // CHEQUEO CRÍTICO DE SEGURIDAD SERVER-SIDE
    // Verificamos que exista una sesión y que provenga de proveedor válido
    if (!session || (session.user.provider !== 'google' && session.user.provider !== 'facebook')) {
      return NextResponse.json({ error: 'Acceso Denegado. Solo cuentas sociales autorizadas pueden publicar.' }, { status: 401 });
    }

    const data = await req.json();

    // Inserción en la base de datos Supabase
    const { data: insertedData, error } = await supabase
      .from('empleos')
      .insert({
        titulo: data.titulo,
        empresa: session.user.name || 'Empresa Privada',
        logo_url: session.user.image || null, // Guardamos la foto del auth como logo temporalmente
        descripcion: data.descripcion,
        requisitos: null,
        region: data.region,
        ciudad: data.ciudad,
        tipo_oferta: data.tipo_oferta,
        modalidad: data.modalidad,
        fecha_publicacion: new Date().toISOString(),
        id_empresa: session.user.db_id, // Vinculación hard-coded al ID interno verificado
        es_destacado: false,
        estado: 'activo'
      })
      .select();

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, empleo: insertedData }, { status: 201 });

  } catch (error) {
    console.error("Error al publicar empleo:", error);
    return NextResponse.json({ error: 'Error interno de servidor al publicar.' }, { status: 500 });
  }
}
