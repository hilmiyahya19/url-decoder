import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URL Decoder — Aman & Cepat',
  description: 'Dekode tautan yang disamarkan dan dapatkan link asli tanpa redirect.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta 
          name="google-site-verification" 
          content="MciGTuZyFvZaVvx4m45aXcPteDAX1Y4gS_7hxmBX6Hs"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
