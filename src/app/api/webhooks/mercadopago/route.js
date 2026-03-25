import { MercadoPagoConfig, Payment } from 'mercadopago';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const url = new URL(req.url);
    const body = await req.json();

    const topic = url.searchParams.get('topic') || body.type;
    const id = url.searchParams.get('id') || body.data?.id;

    if (topic === 'payment' && id) {
      const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
      if (!accessToken) throw new Error('Missing MP Access Token');

      const client = new MercadoPagoConfig({ accessToken: accessToken });
      const paymentClient = new Payment(client);
      
      const paymentInfo = await paymentClient.get({ id });
      
      const externalRef = paymentInfo.external_reference; // Company ID
      const status = paymentInfo.status; // 'approved', 'rejected', etc.

      if (status === 'approved') {
        // En Producción: 
        // 1. Instanciar Prisma `prisma.subscription.update(...)`
        // 2. Marcar la orden como PAGADA.
        // 3. Otorgar beneficios a la Empresa (Promover anuncio o liberar base de datos).
        console.log(`[Webhook] Pago aprobado para la Empresa: ${externalRef}`);
      }

      return NextResponse.json({ status: 'ok', msg: 'webhook procesado' }, { status: 200 });
    }

    return NextResponse.json({ status: 'ignored' }, { status: 200 });

  } catch (error) {
    console.error('Error procesando Webhook de MP', error);
    return NextResponse.json({ error: 'Error interno de webhook' }, { status: 500 });
  }
}
