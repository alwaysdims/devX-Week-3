# Pembagian Tugas Tim (50 / 50)
## Project: ScreenShot UNNES Official Landing Page

Dokumen pembagian kerja pengembangan frontend landing page ScreenShot UNNES (*Multimedia & Journalistic of Computer Science*) antara **Dimas** (Bagian Atas) dan **Lutfi** (Bagian Bawah).

---

## Ringkasan Alokasi

| Pengembang | Porsi | Cakupan Komponen | File Target |
|---|---|---|---|
| **Dimas** | 50% (Bagian Atas) | Setup Global, TopNavbar, Hero Section, Tentang Kami & Visi Misi | `app/globals.css`, `components/Navbar.tsx`, `components/Hero.tsx`, `components/About.tsx` |
| **Lutfi** | 50% (Bagian Bawah) | Struktur Organisasi (Tree), Galeri Kegiatan (Cards), Recruitment Hub (Collage CTA), Footer | `components/Organization.tsx`, `components/Activities.tsx`, `components/Recruitment.tsx`, `components/Footer.tsx` |

---

## 1. Dimas — Bagian Atas (Upper Half)

### 1.1 Fondasi & Setup Bersama
- **Tugas**:
  - Konfigurasi token desain global dari `DESIGN.md` dan `tailwind.theme.json`.
  - Import font Google: `Plus Jakarta Sans`, `Hanken Grotesk`, `JetBrains Mono`.
  - Siapkan wrapper layout responsif: max-width `1280px`, grid 12-kolom, margin halaman `3rem` (desktop) / `1.25rem` (mobile).
  - Siapkan file tipe bersama `types/index.ts`.

### 1.2 Section 1: Header & TopNavBar (`components/Navbar.tsx`)
- **Tugas**:
  - Implementasi sticky navbar dengan backdrop blur (`rgba(250, 250, 250, 0.85)` + `backdrop-filter: blur(8px)`).
  - Tampilkan logo ScreenShot UNNES dan badge status `JetBrains Mono`: `[ONLINE]`.
  - Navigasi menu: `Beranda` (`#beranda`), `Tentang` (`#tentang`), `Struktur` (`#struktur`), `Kegiatan` (`#kegiatan`), `Kontak` (`#kontak`).
  - Button CTA cepat *"Join Us"*.
  - Responsive hamburger drawer untuk layar tablet & mobile (< 768px).

### 1.3 Section 2: Hero Section (`components/Hero.tsx`)
- **Tugas**:
  - Category pill badge: `BATCH_2026 // OPEN_STUDIO` (`JetBrains Mono`).
  - Headline utama (H1): *"Multimedia & Journalistic of Computer Science"* (`Plus Jakarta Sans`, 56px, tracking `-0.03em`).
  - Sub-headline penjelasan komunitas kreatif & teknologi Ilkom UNNES (`Hanken Grotesk`).
  - Dual action buttons:
    - Primer: *"Eksplorasi Karya"* (anchor scroll ke `#kegiatan`).
    - Sekunder: *"Daftar Anggota"* (anchor scroll ke `#kontak`).
  - Metric bar / status ticker:
    - `4 Divisi Teknis` | `50+ Anggota Aktif` | `100+ Karya & Liputan`.

### 1.4 Section 3: Tentang Kami & Visi Misi (`components/About.tsx`)
- **Tugas**:
  - Section anchor: `#tentang`.
  - Blok teks narasi profil sejarah & visi-misi ScreenShot HIMA ILKOM UNNES.
  - Komponen interaktif *Floating Polaroids*:
    - Foto bertumpuk (overlapping layers) dengan sedikit rotasi offset halus.
    - Caption foto gaya polaroid klasik dengan metadata tag.

---

## 2. Lutfi — Bagian Bawah (Lower Half)

### 2.1 Section 4: Struktur Kepengurusan & 4 Divisi (`components/Organization.tsx`)
- **Tugas**:
  - Section anchor: `#struktur`.
  - Header section *"STRUKTUR ORGANISASI"*.
  - **Top Tier (Leadership BPH)**:
    - Card Ketua & Wakil Ketua Komunitas.
    - Card Sekretaris & Bendahara.
  - **Connector Tree**:
    - Garis konektor hairline 1px `#DDD8C5` dengan junction pulse node di tengah.
  - **Bottom Tier (4 Divisi Utama)**:
    1. *Divisi Pengurus Harian (PH)*
    2. *Divisi Jurnalistik*
    3. *Divisi Fotosin (Fotografi & Sinematografi)*
    4. *Divisi DKV (Desain Komunikasi Visual)*
    - Tiap kartu memuat tupoksi divisi, skill tags, dan icon representatif.

### 2.2 Section 5: Program Kerja & Galeri Kegiatan (`components/Activities.tsx`)
- **Tugas**:
  - Section anchor: `#kegiatan`.
  - Header section *"GALERI KEGIATAN"*.
  - 4 Modular Cards program kerja unggulan:
    1. **VIBE UP!**: Wadah karya orisinal anggota (foto, grafis, esai visual).
    2. **SIDAK KATA**: Wawancara spontan narasumber kampus & konten video publik.
    3. **LIPUTAN**: Dokumentasi & reportase agenda strategis kampus / lomba.
    4. **GRAND LAUNCHING SS 2026**: Peluncuran fungsionaris & identitas visual baru.
  - Desain kartu:
    - Image container rasio presisi.
    - Tag badge status & tanggal (`JetBrains Mono`).
    - Efek hover: elevasi translasi `translateY(-3px)` + border shift `#CBD5E1`.
    - Tombol action outbound link icon arrow `↗`.

### 2.3 Section 6: Recruitment CTA & Kontak (`components/Recruitment.tsx`)
- **Tugas**:
  - Section anchor: `#kontak`.
  - Komposisi visual *Scattered Photo Collage*:
    - 6 foto dokumentasi candid berserak di latar belakang dengan rotasi acak halus (`-4°` s.d. `+6°`).
  - Action box tengah *"JOIN US"*:
    - Headline ajakan kolaborasi *"Ayo Berkolaborasi & Berkarya Bersama ScreenShot"*.
    - Tombol CTA utama link form pendaftaran anggota.
  - Informasi Kontak & Sekretariat:
    - Lokasi: Gedung PKM FMIPA UNNES, Kampus Sekaran, Gunungpati, Kota Semarang 50229.
    - Tautan narahubung & email resmi.

### 2.4 Section 7: Footer (`components/Footer.tsx`)
- **Tugas**:
  - Identitas resmi komunitas & afiliasi HIMA ILKOM UNNES.
  - Social media icons link: Instagram, YouTube, TikTok, GitHub.
  - Copyright line: `© 2026 ScreenShot UNNES. All rights reserved.`
  - Navigasi cepat kembali ke atas (*Scroll to Top*).

---

## 3. Kontrak & Aturan Kolaborasi Teknis

1. **Desain Token Mutlak (`DESIGN.md`)**:
   - Seluruh warna, ukuran font, border-radius, dan padding wajib mengacu pada token `DESIGN.md`. Dilarang menggunakan warna arbitrary di luar palet.
2. **Anchor Navigation Synchronization**:
   - Dimas bertanggung jawab atas ID `#beranda` dan `#tentang`.
   - Lutfi bertanggung jawab atas ID `#struktur`, `#kegiatan`, dan `#kontak`.
   - Navbar yang dibuat Dimas harus mengarah tepat ke ID yang dibuat Lutfi.
3. **Data Type Sharing (`types/index.ts`)**:
   - Struktur data divisi dan proker didefinisikan satu pintu di `types/index.ts` agar tidak terjadi conflict merge.
4. **Merge & Review**:
   - Branching terpisah: `feature/upper-dimas` dan `feature/lower-lutfi`.
   - Main page integrasi: `app/page.tsx` menyusun komponen secara berurutan:
     ```tsx
     <Navbar />
     <main>
       <Hero />         {/* Dimas */}
       <About />        {/* Dimas */}
       <Organization /> {/* Lutfi */}
       <Activities />   {/* Lutfi */}
       <Recruitment />  {/* Lutfi */}
     </main>
     <Footer />         {/* Lutfi */}
     ```
