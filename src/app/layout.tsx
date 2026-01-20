import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Versad Plastics | Moldeo por Inyección de Plásticos',
  description: 'Servicio integral de moldeo por inyección con más de 8 años de experiencia. Tiempos de respuesta rápidos, costos de producción competitivos y soluciones innovadoras.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-V7LG8YTRQ4" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-V7LG8YTRQ4');
        `}
      </Script>
    </html>
  );
}
