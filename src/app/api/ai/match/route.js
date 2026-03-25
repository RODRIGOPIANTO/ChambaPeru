import { NextResponse } from 'next/server';

// Endpoint para evaluar qué tan compatible es un candidato con una vacante usando IA
export async function POST(req) {
  try {
    const { jobDescription, candidateSkills, candidateRole, candidateExperience } = await req.json();

    if (!jobDescription || !candidateSkills) {
      return NextResponse.json({ error: 'Faltan datos para el matching' }, { status: 400 });
    }

    // --- PROCESO ---
    // En Producción calcularíamos los embeddings de texto del Job y del Candidate en Supabase (pgvector),
    // o enviaríamos ambos a Gemini solicitando un puntaje del 1 al 100 con justificación.

    /*
      const prompt = `Evalúa la compatibilidad entre el candidato (Rol: ${candidateRole}, Skills: ${candidateSkills.join(',')}) y la vacante: "${jobDescription}". 
      Devuelve un JSON con "score" (0-100) y "reason" (breve justificación en español).`;
    */

    // Simulación del motor de Inteligencia Artificial (Matching Engine)
    await new Promise(r => setTimeout(r, 800));

    const matchScore = 88; // 88% de compatibilidad
    const reason = "El candidato posee fuerte dominio de React Native y TypeScript requerido por la vacante, y cumple con el rol Senior. Le falta experiencia documentada en publicación en App Store, lo que reduce ligeramente el puntaje ideal.";

    return NextResponse.json({
      success: true,
      match: {
        score: matchScore,
        category: matchScore >= 80 ? 'Highly Recommended' : matchScore >= 60 ? 'Recommended' : 'Low Match',
        reason: reason
      }
    });

  } catch (error) {
    return NextResponse.json({ error: 'Error calculando el Matching score' }, { status: 500 });
  }
}
