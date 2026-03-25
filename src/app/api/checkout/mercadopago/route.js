export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { items, companyId } = body; // Recibimos el servicio (ej. 'Anuncio Destacado' o 'CV Access')

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    const origin = process.env.NEXTAUTH_URL || 'http://localhost:3000';

    if (!accessToken) {
      throw new Error('Variables de entorno de MercadoPago faltantes');
    }

    // Configurar la preferencia
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 30);

    const preferenceBody = {
      items: items.map(item => ({
        id: item.id || "SERV-01",
        title: item.title || "Servicio ChambaPeru",
        quantity: 1,
        unit_price: Number(item.price),
        currency_id: "PEN",
      })),
      payer: {
        email: "payer@email.com", // Para prod se obtiene de la sesión de empresa
      },
      back_urls: {
        success: `${origin}/dashboard/empresa?payment=success`,
        failure: `${origin}/dashboard/empresa?payment=failure`,
        pending: `${origin}/dashboard/empresa?payment=pending`
      },
      auto_return: "approved",
      date_of_expiration: expirationDate.toISOString(),
      external_reference: companyId || "COMP-DEFAULT", 
      notification_url: `${origin}/api/webhooks/mercadopago`
    };

    // Creación de preferencia (Método crudo Fetch como en el proyecto de referencia)
    const mpResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(preferenceBody)
    });

    if (!mpResponse.ok) {
      const errorData = await mpResponse.text();
      return NextResponse.json({ error: 'Fallo al contactar MP', details: errorData }, { status: 400 });
    }

    const data = await mpResponse.json();
    return NextResponse.json({ preferenceId: data.id });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
