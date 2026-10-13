# Product Requirements Document (PRD)
## ScreenShot UNNES Official Landing Page

---

## 1. Executive Summary & Product Overview

### 1.1 Latar Belakang & Identitas
**ScreenShot UNNES** adalah komunitas otonom di bawah naungan Himpunan Mahasiswa Ilmu Komputer (HIMA ILKOM) Universitas Negeri Semarang yang bergerak di bidang multimedia, jurnalisme kampus, dan teknologi kreatif. Mengusung motto *"Write, Camera, Action, Semangat Berkarya!!"*, ScreenShot menjadi inkubator bagi mahasiswa yang memiliki minat pada fotografi, sinematografi, desain komunikasi visual (DKV), serta reportase jurnalistik.

### 1.2 Visi & Nilai Produk
Membangun landing page modern bergaya **Contemporary Neo-Studio / Kinetic Lab Minimal** yang mencerminkan etos keteknikan dan estetika visual mahasiswa Ilmu Komputer. Website ini memadukan ketelitian komputasi dengan ekspresi seni visual tinggi, menepis kesan web organisasi kampus generik.

### 1.3 Target Pengguna
1. **Mahasiswa Baru & Calon Anggota (Primary)**: Mencari info rekrutmen, kultur komunitas, pembagian divisi, dan karya.
2. **Anggota Aktif & Pengurus**: Menampilkan dokumentasi kegiatan resmi dan portofolio program kerja.
3. **Alumni & Civitas Akademika UNNES**: Memantau perkembangan, rekam jejak liputan acara kampus, dan publikasi.
4. **Mitra & Klien Kolaborasi Eksternal**: Menghubungi sekretariat untuk liputan, dokumentasi event, sponsorship, atau workshop.

---

## 2. Sasaran & Metrik Keberhasilan (OKRs / KPIs)

| Sasaran (Objective) | Key Result (KPI) | Target Metrik |
|---|---|---|
| **Daya Tarik Rekrutmen** | Peningkatan konversi klik CTA *"Gabung ScreenShot"* | > 30% CTR pengunjung baru |
| **Kinerja Web & Aksesibilitas** | Google Lighthouse Score di semua metrik | 95+ (Performance, A11y, SEO, Best Practices) |
| **Kecepatan Muat (Core Web Vitals)**| First Contentful Paint (FCP) & Largest Contentful Paint (LCP) | FCP < 1.0s, LCP < 1.8s, CLS = 0 |
| **Brand Recognition** | Konsistensi tipografi & token palet warna | 100% patuh token `DESIGN.md` (WCAG AA) |

---

## 3. Arsitektur Informasi & Rincian Struktur Halaman

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Header & Navigation Bar (Sticky Glassmorphism)           │
├─────────────────────────────────────────────────────────────┤
│ 2. Hero Section (Dynamic Badges, Headline, Action Row)      │
├─────────────────────────────────────────────────────────────┤
│ 3. Tentang Kami & Visi Misi (Floating Polaroid Showcase)    │
├─────────────────────────────────────────────────────────────┤
│ 4. Struktur Kepengurusan & Divisi (Interactive Tree Node)   │
├─────────────────────────────────────────────────────────────┤
│ 5. Program Kerja & Galeri Kegiatan (Modular Showcase Cards) │
├─────────────────────────────────────────────────────────────┤
│ 6. Recruitment Hub & Kontak (Scattered Collage CTA)         │
├─────────────────────────────────────────────────────────────┤
│ 7. Footer (Sekretariat, Legal, Social Links)                │
└─────────────────────────────────────────────────────────────┘
```

### 3.1 Bagian 1: Header & Navigation Bar
- **Posisi**: Sticky top bar dengan backdrop blur (`rgba(250, 250, 250, 0.85)` + `backdrop-filter: blur(8px)`).
- **Elemen Kiri**: Logo ScreenShot UNNES & Monospace Status Indicator (`[ONLINE]`).
- **Elemen Tengah**: Anchor navigation links (`Beranda`, `Tentang`, `Struktur`, `Kegiatan`, `Kontak`).
- **Elemen Kanan**: Button CTA cepat *"Join Us"* (varian `button-accent` atau `button-primary`).

### 3.2 Bagian 2: Hero Section
- **Badge Kategori**: Monospace pill `JetBrains Mono` bertuliskan `BATCH_2026 // OPEN_STUDIO`.
- **Headline Utama (H1)**: *"Multimedia & Journalistic of Computer Science"*.
- **Sub-headline**: Narasi penjelas wadah mahasiswa Ilmu Komputer UNNES dalam merajut estetika visual, lensa kamera, dan jurnalistik.
- **Aksi Cepat (CTA Cluster)**:
  - Tombol Primer: *"Eksplorasi Karya"* (Scroll to Kegiatan).
  - Tombol Sekunder: *"Daftar Anggota"* (Scroll / link rekrutmen).
- **Metric Bar / Micro Badges**:
  - `4 Divisi Teknis` | `50+ Anggota Aktif` | `100+ Karya & Dokumentasi Liputan`.

### 3.3 Bagian 3: Tentang Kami & Visi Misi
- **Konten Naratif**: Penjelasan sejarah singkat ScreenShot HIMA ILKOM UNNES sebagai rumah kolaborasi visual dan literasi jurnalistik.
- **Visi & Misi**:
  - Menghasilkan talenta multimedia berdaya saing di industri kreatif dan komputasi.
  - Menjadi pilar dokumentasi resmi dan jurnalisme terpercaya di lingkungan Ilkom UNNES.
- **Visual Display**: Modul interaktif *Floating Polaroids* tumpuk tindih bertema hunting foto, live shooting, dan desain studio.

### 3.4 Bagian 4: Struktur Kepengurusan & 4 Divisi
- **Format Tampilan**: Layout hirarki organisasi 2-tingkat (Top Tier & Bottom Grid).
- **Top Tier (Pimpinan Harian)**:
  - Ketua & Wakil Ketua Komunitas.
  - Sekretaris & Bendahara.
- **Connector Nodes**: Garis hairline minimalis 1px `#DDD8C5` dengan junction node pusat.
- **Bottom Tier (4 Divisi Utama)**:
  1. **Divisi Pengurus Harian (PH)**: Administrasi, tata kelola internal, relasi organisasi.
  2. **Divisi Jurnalistik**: Reportase event, penulisan artikel, wawancara, kurasi konten editorial.
  3. **Divisi Fotosin (Fotografi & Sinematografi)**: Dokumentasi acara, video cinematic, photo walk, hunting foto.
  4. **Divisi DKV (Desain Komunikasi Visual)**: Identitas visual, poster feed IG, motion graphics, branding aset.

### 3.5 Bagian 5: Program Kerja & Galeri Kegiatan
- **Card 1: VIBE UP!**: Wadah unjuk karya orisinal anggota (foto tematik, ilustrasi digital, esai visual).
- **Card 2: SIDAK KATA**: Sesi wawancara mikro spontan ke narasumber kampus mengenai tren terkini dan opini mahasiswa.
- **Card 3: LIPUTAN**: Liputan resmi agenda kampus, seminar, Dies Natalis, dan lomba IT.
- **Card 4: GRAND LAUNCHING SS 2026**: Peluncuran identitas visual baru dan perkenalan fungsionaris periode berjalan.
- **Fitur Card**: Metadata tag (`JetBrains Mono`), foto preview high-res, ringkasan capaian, dan tombol link detail.

### 3.6 Bagian 6: Rekrutmen & Hub Kontak (Scattered Collage CTA)
- **Komposisi Visual**: *Scattered Photo Collage* dengan 6 foto candid berserak di latar belakang yang berotasi halus (`-4°` s.d. `+6°`).
- **Cluster Inti**: Box penawaran rekrutmen dengan headline *"JOIN US"*, deskripsi ajakan gabung, dan tombol form pendaftaran.
- **Informasi Kontak & Sekretariat**:
  - Alamat: Gedung PKM FMIPA UNNES, Kampus Sekaran, Gunungpati, Kota Semarang, Jawa Tengah 50229.
  - Email & Channel Resmi (Instagram, YouTube, TikTok, GitHub).

### 3.7 Bagian 7: Footer
- Identitas kepemilikan dan afiliasi dengan HIMA ILKOM UNNES.
- Copyright 2026 ScreenShot UNNES.
- Tautan pintas privasi & dokumentasi internal.

---

## 4. Persyaratan Fungsional (Functional Requirements)

1. **FR-01: Navigasi Halus (Smooth Scrolling)**
   - Setiap link di navbar harus mengarahkan pengguna ke section target secara mulus tanpa layout shift.
2. **FR-02: Responsive Breakpoint Adaptive**
   - Menyesuaikan struktur 12-kolom (desktop) menjadi 8-kolom (tablet) dan 4-kolom stack (mobile).
3. **FR-03: Interaktivitas Kartu Program Kerja**
   - Efek hover kartu dengan elevasi halus (`translateY(-3px)`), perubahan outline border, dan transisi micro-shadow.
4. **FR-04: Filter / Tab Divisi (Opsional/Tahap 2)**
   - Memungkinkan pengguna mengklik divisi untuk melihat daftar anggota atau portofolio divisi terkait.
5. **FR-05: Integrasi Pendaftaran & Social Redirect**
   - Tombol CTA mengarah langsung ke Google Form rekrutmen atau WhatsApp bot sekretariat tanpa tautan rusak.

---

## 5. Persyaratan Non-Fungsional (Non-Functional Requirements)

1. **NFR-01: Performa Rendering**
   - Skor Core Web Vitals LCP < 1.8 detik pada jaringan 4G standar.
   - Kompresi gambar format Next-Gen (`.webp` / `.avif`) dengan loading lazy default.
2. **NFR-02: Aksesibilitas (WCAG 2.1 AA)**
   - Rasio kontras teks terhadap background minimal 4.5:1.
   - Semua elemen interaktif memiliki fokus keyboard yang jelas (`ring-2 ring-teal-500`).
   - Tag `alt` deskriptif pada seluruh elemen gambar.
3. **NFR-03: SEO & Social Share Preview**
   - Meta tag Open Graph (`og:title`, `og:description`, `og:image`) dan Twitter Card yang valid.
   - Schema markup `Organization` untuk ScreenShot UNNES.
4. **NFR-04: Cross-Browser Compatibility**
   - Tampilan identik pada Google Chrome, Mozilla Firefox, Safari, Edge, dan browser mobile (Chrome Mobile, iOS Safari).

---

## 6. Arsitektur Teknis & Dependensi

- **Core Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS / Vanilla CSS dengan panduan token dari `DESIGN.md` & `tailwind.theme.json`
- **Tipografi**:
  - `@fontsource/plus-jakarta-sans` atau Google Fonts WebLoader
  - `@fontsource/hanken-grotesk`
  - `@fontsource/jetbrains-mono`
- **Icon Set**: Lucide Icons / Material Symbols Outlined
- **Deployment Platform**: Vercel / Cloudflare Pages

---

## 7. Roadmap Implementasi

| Fase | Durasi | Ruang Lingkup | Deliverable |
|---|---|---|---|
| **Fase 1: Foundation & Specs** | Hari 1 | Integrasi MCP Stitch, penulisan `DESIGN.md` & `PRD.md`, setup token. | `DESIGN.md`, `PRD.md`, `tailwind.theme.json` |
| **Fase 2: Layout & Core Sections** | Hari 2 | Implementasi Navbar, Hero Section, Tentang Kami, dan Visi Misi. | Komponen Navbar & Hero responsif |
| **Fase 3: Struktur & Program Kerja**| Hari 3 | Komponen Organization Tree & Modular Program Kerja Cards. | Struktur Organisasi & Galeri Kegiatan |
| **Fase 4: CTA & Recruitment Hub** | Hari 4 | Scattered Polaroid Collage, Contact Info, Footer. | Recruitment Section & Footer |
| **Fase 5: Audit & Peluncuran** | Hari 5 | Audit Lighthouse, perbaikan kontras, SEO check, deploy staging. | Web production live |

---

## 8. Pembagian Tanggung Jawab Tim (Work Breakdown: 50 / 50)

Alokasi dibagi adil berdasarkan hirarki vertikal (Upper Half vs Lower Half) dengan bobot kompleksitas komponen yang setara:

### 8.1 Dimas (Bagian Atas / Upper Half)
**Fokus**: Fondasi antarmuka, navigasi global, visual entrance, dan storytelling pengenalan komunitas.

1. **Setup & Fondasi Bersama**:
   - Konfigurasi tema global, font (`Plus Jakarta Sans`, `Hanken Grotesk`, `JetBrains Mono`), dan token `DESIGN.md`.
   - Setup wrapper kontainer responsif (`1280px` max-width, responsive grid & margin).
2. **Section 1: Header & TopNavBar (`components/Navbar.tsx`)**:
   - Sticky navbar dengan backdrop blur (`rgba(250, 250, 250, 0.85)`).
   - Brand logo ScreenShot, status badge monospaced `[ONLINE]`.
   - Nav links desktop & mobile hamburger menu drawer.
   - Button CTA *"Join Us"*.
3. **Section 2: Hero Section (`components/Hero.tsx`)**:
   - Category badge pill `BATCH_2026 // OPEN_STUDIO`.
   - Headline H1 *"Multimedia & Journalistic of Computer Science"*.
   - Sub-headline & CTA button group (*"Eksplorasi Karya"* + *"Daftar Anggota"*).
   - Metrics/stats ticker (`4 Divisi Teknis`, `50+ Anggota`, `100+ Karya`).
4. **Section 3: Tentang Kami & Visi Misi (`components/About.tsx`)**:
   - Narasi pengenalan ScreenShot HIMA ILKOM UNNES.
   - Poin Visi & Misi komunitas.
   - Komponen interaktif *Floating Polaroids* dengan overlapping layer & rotasi subtle.

---

### 8.2 Lutfi (Bagian Bawah / Lower Half)
**Fokus**: Arsitektur hirarki organisasi, display galeri program kerja, call-to-action rekrutmen, dan kontak footer.

1. **Section 4: Struktur Organisasi & 4 Divisi (`components/Organization.tsx`)**:
   - Header section *"STRUKTUR ORGANISASI"*.
   - Top Tier: Modul BPH / Leadership (Ketua, Wakil, Sekretaris, Bendahara).
   - Connector tree: Hairline SVG / CSS lines 1px `#DDD8C5` dengan central junction pulse node.
   - Bottom Tier Grid: 4 Kartu Divisi (PH, Jurnalistik, Fotosin, DKV) beserta deskripsi tupoksi & tag skill.
2. **Section 5: Program Kerja & Galeri Kegiatan (`components/Activities.tsx`)**:
   - Header section *"GALERI KEGIATAN"*.
   - 4 Modular Cards program unggulan:
     1. *VIBE UP!* (Karya orisinal & visual showcase)
     2. *SIDAK KATA* (Wawancara spontan & opini publik)
     3. *LIPUTAN* (Reportase agenda strategis kampus)
     4. *GRAND LAUNCHING SS 2026* (Peluncuran fungsionaris & identitas)
   - Metadata badges (`JetBrains Mono`), image container, hover elevation (`translateY(-3px)`), dan direct link arrows (`↗`).
3. **Section 6: Recruitment CTA & Kontak (`components/Recruitment.tsx`)**:
   - Komponen *Scattered Photo Collage* (6 foto polaroid acak dengan variasi rotasi `-4°` s.d. `+6°`).
   - Centered action box *"JOIN US"* dengan copy ajakan dan tombol link formulir.
   - Modul informasi Sekretariat (Gedung PKM FMIPA UNNES) & kontak resmi.
4. **Section 7: Footer (`components/Footer.tsx`)**:
   - Identitas afiliasi HIMA ILKOM UNNES, social media links (IG, YT, TikTok, GitHub), dan copyright notice 2026.

---

### 8.3 Matriks Kontrak Antar Bagian (Interface Contract)
- **Shared Props / Types (`types/index.ts`)**: Dimas dan Lutfi berbagi definisi tipe umum untuk data divisi, proker, dan link navigasi.
- **Section ID Anchoring**:
  - `#beranda` -> Dimas (Hero)
  - `#tentang` -> Dimas (About)
  - `#struktur` -> Lutfi (Organization)
  - `#kegiatan` -> Lutfi (Activities)
  - `#kontak` -> Lutfi (Recruitment / Footer)
- **Komponen UI Bersama (`components/ui/`)**: Button, Badge/Pill, dan CardBase mengacu 100% pada token `DESIGN.md`.
