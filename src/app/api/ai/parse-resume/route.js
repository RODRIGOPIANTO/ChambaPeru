import { NextResponse } from 'next/server';

// Endpoint para Parsing de Currículums con IA (Simulación / Preparación para Gemini)
export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('resumeFile'); // Archivo PDF o Word
    
    if (!file) {
      return NextResponse.json({ error: 'No se envió ningún CV' }, { status: 400 });
    }

    // --- PROCESO ---
    // 1. Usaríamos `pdf-parse` para extraer todo el texto bruto del PDF enviado.
    // 2. Enviaríamos este texto a Gemini indicándole un system prompt estricto:
    
    /* 
      const prompt = `Extrae los siguientes datos de este CV en un JSON estricto:
      - skills (array de strings)
      - yearsOfExperience (numero)
      - currentRole (string)
      - phone (string)
      CV Body: ${extractedText}`;
      // const aiResponse = await geminiModel.generateContent(prompt);
    */

    // Simulación del resultado retornado por la IA en < 2 segundos
    await new Promise(r => setTimeout(r, 1500));
    
    const aiParsedData = {
      skills: ["React Native", "TypeScript", "Node.js", "Zustand", "Redux", "Metodologías Ágiles"],
      yearsOfExperience: 5,
      currentRole: "Desarrollador Móvil Senior",
      inferredSeniority: "Senior",
      phone: "+51 987654321"
    };

    // 3. Este JSON se guarda directamente en la DB (Supabase/Prisma) vinculando al Candidato.
    // ej. prisma.user.update({ where: { id: userId }, data: { extractedSkills: aiParsedData.skills.join(',') } })

    return NextResponse.json({ success: true, parsedData: aiParsedData });

  } catch (error) {
    return NextResponse.json({ error: 'Error procesando el CV' }, { status: 500 });
  }
}
