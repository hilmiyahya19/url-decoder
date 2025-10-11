export default function InfoSection() {
  return (
    <div className="mt-10 space-y-5 text-gray-300">
      <section>
        <h3 className="text-xl font-semibold text-sky-400">💡 Link yang Bisa & Tidak Bisa Didecode</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><b>Bisa didecode:</b> URL dengan parameter seperti <code>?s=</code> atau <code>?url=</code>.</li>
          <li><b>Tidak bisa didecode:</b> jika shortlink sudah menghapus parameter (contoh: ouo.io setelah klik).</li>
          <li>Jika link sudah di-redirect server-side, gunakan fitur <b>Resolve</b> di bawah.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-sky-400">🧭 Cara Menyalin Link Mentah (Tanpa Redirect)</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><b>Mobile:</b> tekan & tahan tautan → pilih <i>Salin tautan</i>.</li>
          <li><b>Desktop:</b> klik kanan → pilih <i>Copy link address</i>.</li>
        </ul>
        <p className="mt-2 text-gray-400">
          Ini memastikan kamu menyalin link mentah sebelum shortener melakukan redirect atau enkripsi.
        </p>
      </section>
    </div>
  );
}
