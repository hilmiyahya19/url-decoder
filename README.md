# 🔗 URL Decoder — Buka Link Asli Tanpa Redirect

Aplikasi web berbasis **Next.js 14 + TypeScript + TailwindCSS** yang memungkinkan pengguna untuk men-*decode* link asli dari URL shortener seperti **ouo.io**, **adf.ly**, **bit.ly**, dan sejenisnya — tanpa perlu klik atau redirect.  
Aplikasi ini berjalan sepenuhnya di sisi client, dengan opsi resolve server-side untuk mengikuti redirect HTTP secara aman.

---

## ✨ Fitur Utama

- 🧩 **Decode otomatis** parameter umum seperti `?s=`, `?url=`, `?u=`, dan `?r=`.
- 🚫 **Tanpa AI & tanpa backend tambahan** — seluruh decoding dilakukan di browser.
- 🌍 **Server-side URL resolver (opsional)**: mengikuti redirect HTTP menggunakan API bawaan Next.js.
- 📱 **Responsif penuh** — UI menggunakan TailwindCSS, tampak bagus di desktop & mobile.
- 🔐 **Aman dari iklan shortlink** — tidak membuka ouo/adf/bit.ly secara langsung.
- ⚡ **Ramah SEO** — menggunakan metadata bawaan App Router Next.js (`app/page.tsx` dan `layout.tsx`).

---

## 🏗️ Struktur Folder

```

url-decoder-next/
├─ app/
│  ├─ api/
│  │  └─ resolve/route.ts       # API endpoint untuk follow redirect (server-side)
│  ├─ components/
│  │  ├─ Decoder.tsx            # Komponen utama untuk decode link
│  │  └─ InfoSection.tsx        # Penjelasan edukatif tentang link & cara salin mentah
│  ├─ lib/
│  │  └─ decode.ts              # Logika utama ekstraksi dan validasi URL
│  ├─ globals.css               # TailwindCSS global
│  ├─ layout.tsx                # Layout global dan metadata dasar
│  └─ page.tsx                  # Halaman utama + SEO metadata
├─ public/
│  ├─ favicon.ico
│  ├─ robots.txt (opsional)
│  └─ sitemap.xml (opsional)
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
├─ next.config.mjs
└─ package.json

````

---

## ⚙️ Instalasi & Jalankan Proyek

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/url-decoder-next.git
cd url-decoder-next
````

### 2️⃣ Install Dependencies

```bash
npm install
# atau
yarn install
```

### 3️⃣ Jalankan Development Server

```bash
npm run dev
```

Lalu buka [`http://localhost:3000`](http://localhost:3000).

### 4️⃣ Build untuk Production

```bash
npm run build
npm start
```

---

## 🧠 Penjelasan Teknis

### 🔍 Client-side Decode

File: `app/lib/decode.ts`
Berisi fungsi `extractCandidates()` yang mencari URL asli dari string menggunakan:

* Parameter `?s=`, `?url=`, `?u=`, `?r=`
* Pola `https?://` dalam teks
* Validasi dan decoding bertingkat (`decodeURIComponent` dua kali)

### 🧭 Server-side Resolve

File: `app/api/resolve/route.ts`
Endpoint yang bisa digunakan untuk “mengikuti” redirect HTTP secara aman:

```bash
POST /api/resolve
Body: { "url": "https://short.link/example" }
```

Response: `{ "finalUrl": "https://destination.com/file.mp4" }`

### 🎨 Tampilan & UX

Komponen utama (`Decoder.tsx`) memiliki:

* Input textarea
* Tombol **Decode** dan **Clear**
* Daftar hasil link asli
* Tampilan responsif & dark mode

---

## 💡 Catatan Penting

### ✅ Link yang Bisa Didecode

* URL yang masih memiliki parameter seperti `?s=` atau `?url=`
* Contoh:

  ```
  http://ouo.io/st/OzrJR6aX/?s=https%3A%2F%2Fwww.mediafire.com%2Ffile%2Fr5n...%2Ffile
  ```

### 🚫 Link yang Tidak Bisa Didecode

* Link yang sudah *diproteksi* shortener (parameter `s=` sudah hilang)
* Misalnya setelah kamu klik tombol “Download” pada ouo.io — sistemnya otomatis menghapus parameternya

### 📱 Cara Salin Link Mentah Tanpa Redirect

* **Mobile:** tekan & tahan link → pilih **Salin tautan**
* **Desktop:** klik kanan → pilih **Copy link address**

Dengan cara ini kamu mendapatkan *link mentah* sebelum shortlink melakukan redirect atau encode ulang.

---

## 🧭 SEO Optimization

Aplikasi ini sudah dioptimalkan untuk SEO:

* Gunakan `metadata` di `page.tsx` dan `layout.tsx`
* `openGraph` + `description` + `title` sudah lengkap
* Tambahkan file berikut untuk hasil maksimal:

  * `public/robots.txt`
  * `public/sitemap.xml`
* Gunakan domain dengan HTTPS (mis. Vercel auto-https)

---

## 🚀 Deployment

### 🔹 Vercel (Direkomendasikan)

1. Push repo ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new)
3. Import repository ini.
4. Deploy → otomatis live (mis. `https://url-decoder.vercel.app`)

### 🔹 Manual (Node.js Server)

```bash
npm run build
npm start
```

Server production akan berjalan di `http://localhost:3000`.

---

## 📜 Lisensi

MIT License © 2025 — Dibuat oleh Hilmi Yahya
Gunakan dengan bijak. Aplikasi ini **tidak mem-bypass proteksi shortener**, hanya melakukan parsing & decoding publik.
