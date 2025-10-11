import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URL Decoder — Aman & Cepat',
  description: 'Dekode tautan yang disamarkan dan dapatkan link asli tanpa redirect.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
