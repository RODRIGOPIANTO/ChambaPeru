import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Configurar Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    // MercadoPago envía datos como query string (topic=payment&id=1234)
    const url = new URL(request.url);
    const topic = url.searchParams.get('topic') || url.searchParams.get('type');
    const paymentId = url.searchParams.get('data.id') || url.searchParams.get('id');

    // Si no es un evento de pago, retornamos 200 rápido para que MP no reintente
    if (topic !== 'payment' || !paymentId) {
      return NextResponse.json({ success: true, message: 'Evento ignorado' }, { status: 200 });
    }

    // --- INTEGRACIÓN REAL CON MP (Comentado hasta instalar el SDK) ---
    // import { MercadoPagoConfig, Payment } from 'mercadopago';
    // const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
    // const payment = new Payment(client);
    // const paymentData = await payment.get({ id: paymentId });
    // const mockPaymentStatus = paymentData.status;
    // const mockUserId = paymentData.metadata.id_usuario; // Asumiendo que envías id_usuario en metadata

    // --- MOCK TEMPORAL PARA COMPROBAR ARQUITECTURA ---
    const mockPaymentStatus = 'approved'; 
    const mockUserId = 'REEMPLAZAR_CON_UUID_DE_USUARIO_REAL'; 
    
    // 1. Registramos la transacción en Supabase
    const { error: txError } = await supabase.from('transacciones').insert({
      id_usuario: mockUserId, // NOTA: Esto fallará en dev si el UUID no existe en "usuarios" (Foreing Key Constraints)
      id_mercadopago: paymentId,
      tipo_plan: 'DESTACADO',
      monto: 0.0, // Reemplazar con el monto real
      estado_pago: mockPaymentStatus
    });

    if (txError) {
      console.error('Error registrando transacción:', txError.message);
    }

    // 2. Si es aprobado, actualizamos "es_destacado" = true en su perfil freelance
    if (mockPaymentStatus === 'approved') {
      const { error: updateError } = await supabase
        .from('perfiles_freelance')
        .update({ es_destacado: true })
        .eq('id_usuario', mockUserId);
        
      if (updateError) {
         console.error('Error destacando perfil:', updateError.message);
      }
    }

    // MercadoPago requiere SIEMPRE un status 200 (OK) lo más rápido posible
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error procesando webhook de MP:', error);
    return NextResponse.json({ success: false, error: 'Error procesando webhook' }, { status: 500 });
  }
}
