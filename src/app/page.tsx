import Decoder from './components/Decoder';
import InfoSection from './components/InfoSection';

export const metadata = {
  title: 'URL Decoder — Buka link asli tanpa redirect',
  description: 'Ekstrak dan decode URL asli dari shortlink (ouo.io, adf.ly, bit.ly, dll). Aman, cepat, tanpa AI.',
  openGraph: {
    title: 'URL Decoder — Buka link asli tanpa redirect',
    description: 'Ekstrak dan decode link asli dari shortlink dengan aman dan cepat.',
    url: 'https://yourdomain.com',
    siteName: 'URL Decoder',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-sky-400">URL Decoder 🔗</h1>
      <p className="text-gray-400 mt-2 max-w-2xl">
        Decode dan ekstrak link asli dari shortlink seperti <code>ouo.io</code> — tanpa redirect & tanpa risiko iklan berbahaya.
      </p>

      <div className="mt-8">
        <Decoder />
      </div>

      <InfoSection />
    </main>
  );
}
