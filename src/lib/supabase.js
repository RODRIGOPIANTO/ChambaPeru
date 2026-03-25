import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
// Usamos el rol de servicio o la llave anon dependiendo del contexto, priorizamos service role para tareas de backend interno.
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn("Faltan credenciales de Supabase en .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
