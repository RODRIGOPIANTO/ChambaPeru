export const dynamic = 'force-dynamic';

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { supabase } from "@/lib/supabase"; 

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "mock-google-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-google-secret",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "mock-facebook-id",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "mock-facebook-secret",
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Al iniciar sesión, registramos al usuario en nuestra tabla de Supabase (sin Prisma)
    async signIn({ user, account, profile }) {
      if (account.provider === "google" || account.provider === "facebook") {
        try {
          const { data: existingUser, error: findError } = await supabase
            .from('usuarios')
            .select('*')
            .eq('email', user.email)
            .single();

          if (!existingUser) {
            // Usuario nuevo, lo insertamos
            const { error: insertError, data } = await supabase
              .from('usuarios')
              .insert({
                tipo_usuario: 'empresa', // Por defecto "empresa" temporalmente para publicar
                nombre: user.name,
                email: user.email,
                auth_id: null 
              })
              .select('*')
              .single();
              
            if (insertError) {
              console.error("Error inserting user to Supabase:", insertError);
              return false; // bloquea el inicio de sesión
            }
            user.db_id = data.id; 
          } else {
            // Usuario existente
            user.db_id = existingUser.id; 
          }
          user.provider = account.provider;
          return true;
        } catch (err) {
          console.error("SignIn error:", err);
          return false; // bloquea el acceso si hay error catastrófico
        }
      }
      return false; // Bloquea otros proveedores que no sean sociales
    },
    async jwt({ token, user, account }) {
      // Inyección en el JSON Web Token
      if (account && user) {
        token.provider = account.provider;
        token.db_id = user.db_id;
      }
      return token;
    },
    async session({ session, token }) {
      // Pasar data del JWT a la sesión pública del cliente
      if (token && session.user) {
        session.user.provider = token.provider;
        session.user.db_id = token.db_id;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "chambaperu_super_secret_jwt_key_2026",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
