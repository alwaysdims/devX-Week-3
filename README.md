# ScreenShot UNNES Official Landing Page
> *"Write, Camera, Action, Semangat Berkarya!!"*

Official landing page untuk **ScreenShot HIMA ILKOM UNNES** (*Multimedia & Journalistic of Computer Science*) — komunitas otonom mahasiswa Ilmu Komputer Universitas Negeri Semarang yang berfokus pada fotografi, sinematografi, desain komunikasi visual (DKV), dan reportase jurnalistik kampus.

---

## 🎨 Konsep Desain & Referensi Stitch

Website ini mengusung estetika **Contemporary Neo-Studio / Kinetic Lab Minimal** yang dirancang melalui Google Stitch:
* **Project Stitch**: `Remix of ScreenShot UNNES Landing Page` (ID: `5740034972268609710`)
* **Warna Utama**:
  * Canvas: `#EDEBDD` (*Warm Editorial Paper*)
  * Brand Crimson: `#930000` (Aksen resmi ScreenShot)
  * Darkroom / Banner: `#171614` / `#1A1917`
  * Hairline Borders: `#DDD8C5`
* **Tipografi**:
  * Headings: `Plus Jakarta Sans` (Weight: 700 & 800)
  * Body: `Hanken Grotesk`
  * Badges & Data: `JetBrains Mono`

---

## 🏗️ Struktur Arsitektur Komponen

Halaman utama (`app/page.tsx`) tersusun atas 7 modul komponen yang saling terhubung secara reaktif:

```
app/page.tsx
├── 1. Navbar.tsx        (Sticky Glassmorphism, [ONLINE] Live Status, Active Scroll Tracker)
├── 2. Hero.tsx          (Batch Badge, Display Headline, Metric Bar Ticker, Dual CTA)
├── 3. About.tsx         (Visi Misi, Big Dark Banner, Floating Polaroids)
├── 4. Organization.tsx   (Leadership BPH, Animated SVG Tree Nodes, 4 Kartu Divisi, Detail Modal)
├── 5. Activities.tsx     (Asymmetric 12-Col Grid, Category Filter Tabs, Lightbox Preview)
├── 6. Recruitment.tsx   (Scattered Polaroid Collage Physics, Application Modal, Hub Kontak)
└── 7. Footer.tsx        (Identitas Afiliasi HIMA ILKOM, Social Badges, Scroll to Top)
```

---

## 👥 Pembagian Tugas Tim (50 / 50)

| Pengembang | Porsi | Cakupan Komponen | File Implementasi |
|---|---|---|---|
| **Dimas** | 50% (Bagian Atas) | Setup Global, TopNavbar, Hero Section, Tentang Kami | `components/Navbar.tsx`, `components/Hero.tsx`, `components/About.tsx` |
| **Lutfi** | 50% (Bagian Bawah) | Struktur Organisasi (Tree), Galeri Kegiatan, Recruitment Hub, Footer | `components/Organization.tsx`, `components/Activities.tsx`, `components/Recruitment.tsx`, `components/Footer.tsx` |

Untuk detail lengkap pembagian tugas teknis dan kontrak antar bagian, lihat [tugas.md](tugas.md).

---

## 📚 Indeks Dokumen Proyek

* 📋 [PRD.md](PRD.md) — *Product Requirements Document* resmi (Target Audiens, KPIs, FR, NFR, Roadmap)
* 🎨 [DESIGN.md](DESIGN.md) — Desain Sistem Resmi (Color Tokens, Typography Scale, Spacing, Do's & Don'ts)
* 🤝 [tugas.md](tugas.md) — Matriks Pembagian Kerja Tim & Interface Contract
* 🏷️ [types/index.ts](types/index.ts) — Definisi tipe data bersama TypeScript

---

## 🚀 Memulai Pengembangan

### 1. Prasyarat
* Node.js versi 20+
* npm / yarn / pnpm

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### 4. Build Produksi
```bash
npm run build
npm run start
```

---

## 📍 Sekretariat & Kontak Resmi
* **Alamat**: Gedung PKM FMIPA UNNES, Kampus Sekaran, Gunungpati, Kota Semarang 50229
* **Email**: [screenshot@unnes.ac.id](mailto:screenshot@unnes.ac.id)
* **WhatsApp**: +62 813-9102-8767
* **Afiliasi**: Himpunan Mahasiswa Ilmu Komputer (HIMA ILKOM) Universitas Negeri Semarang

&copy; 2026 ScreenShot UNNES. All rights reserved.
