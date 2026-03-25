import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ChambaPeru | El mejor portal de empleos en el Perú',
  description: 'Encuentra las mejores ofertas de trabajo en Perú de todas las bolsas (Computrabajo, LinkedIn, Sector Público) en un solo lugar. Empleos Freelance, TI, ventas y más.',
  keywords: 'trabajo peru, empleos peru, chamba, computrabajo peru, freelance peru, trabajos lima, bolsa de trabajo',
  openGraph: {
    title: 'ChambaPeru | Tu próximo empleo está aquí',
    description: 'El agregador número uno de ofertas laborales de todo el Perú.',
    url: 'https://chambaperu.com',
    siteName: 'ChambaPeru',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
