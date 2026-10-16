# Product Requirements Document (PRD) — Internal
## Official Landing Page ScreenShot UNNES — v0.1

> **Status:** Draft — perlu ditinjau tim dan mentor. Dokumen ini menjadi acuan ringkas untuk kebutuhan produk, implementasi, kolaborasi, pengujian, dan penyerahan proyek. Informasi yang belum pasti ditandai **Perlu ditentukan**.

## Informasi Dokumen

| Item                        | Detail                                                              |
| --------------------------- | ------------------------------------------------------------------- |
| Nama proyek                 | Official Landing Page ScreenShot UNNES                              |
| Program                     | Final Project Pelatihan Dev Experience UNNES                        |
| Jenis produk                | Landing page single-page                                            |
| Penulis/PIC perencanaan     | Lutfi (Project Development)                                         |
| Tim pengembang              | Lutfi (Project Development), Dimas (Frontend Development)           |
| Mentor                      | Kak Ariel                                                           |
| Versi / status              | v0.1 - Draft                                                        |
| Tanggal dibuat / diperbarui | 13-10-2026                                                          |
| Deadline penyerahan         | 16-10-2026                                                          |
| Tech stack                  | Next.js 15+ (App Router), TypeScript (`strict: true`), Tailwind CSS |
| GitHub                      | https://github.com/alwaysdims/devX-Week-3                           |
| Trello                      | https://trello.com/b/4N4W1XlZ/final-project-screenshot-ilkom        |
| Desain UI                   | https://stitch.withgoogle.com/projects/11244511597303021329         |
| Demo publik                 | https://dev-x-week-3.vercel.app/ (Vercel)                           |

### Riwayat Perubahan

| Versi | Tanggal | Perubahan |
|---|---|---|
| v0.1 | 13-10-2026 | Draft awal berdasarkan konteks tugas, sumber resmi organisasi, desain mentor, tech stack tim, target kualitas, dan alur kolaborasi. |

---

## 1. Ringkasan Produk dan Keberhasilan

### 1.1 Ringkasan dan Tujuan

**ScreenShot UNNES** adalah komunitas otonom di bawah Himpunan Mahasiswa Ilmu Komputer (HIMA ILKOM), Universitas Negeri Semarang, yang bergerak di bidang multimedia, jurnalisme kampus, dan teknologi kreatif. Motto organisasi adalah *“Write, Camera, Action, Semangat Berkarya!!”*.

Proyek ini bertujuan memudahkan mahasiswa mendapatkan informasi tentang ScreenShot UNNES, mengenal identitas dan kegiatannya, serta menemukan kanal kontak atau informasi bergabung. Website berupa satu landing page yang mengikuti desain UI dari Kak Ariel dan dapat digunakan pada desktop, tablet, maupun mobile.

Tujuan utama:
1. Menyajikan informasi organisasi, visi-misi, struktur, divisi, dan kegiatan secara jelas.
2. Membantu calon anggota menemukan informasi bergabung atau kanal kontak resmi.
3. Mengimplementasikan desain mentor secara responsif dan fungsional.

### 1.2 Target Pengguna

| Pengguna | Kebutuhan utama |
|---|---|
| Mahasiswa baru dan calon anggota (utama) | Mengenal organisasi, divisi, kegiatan, karya, dan informasi bergabung. |
| Anggota aktif dan pengurus | Menampilkan dokumentasi kegiatan dan program kerja. |
| Alumni dan civitas akademika UNNES | Melihat kegiatan, publikasi, dan rekam jejak organisasi. |
| Mitra atau pihak eksternal | Menemukan kanal kontak untuk kolaborasi atau kegiatan. |

### 1.3 Kriteria Penerimaan

| ID | Kriteria | Cara verifikasi |
|---|---|---|
| AC-01 | Lima tujuan navigasi utama tersedia: Home, About, Struktur, Kegiatan, dan Contact. | Periksa navigasi dan seluruh section. |
| AC-02 | Header, Hero, About, Struktur, Kegiatan, Recruitment/Contact, dan Footer mengikuti desain mentor. | Review visual terhadap desain acuan. |
| AC-03 | Konten organisasi, divisi, program, alamat, serta kontak sesuai sumber resmi. | Cocokkan konten dan URL. |
| AC-04 | Seluruh menu, tombol CTA, dan tautan eksternal mengarah ke tujuan yang benar. | Uji semua tautan dan tombol. |
| AC-05 | Layout berfungsi pada desktop, tablet, dan mobile tanpa overlap atau overflow horizontal yang tidak diharapkan. | Uji beberapa ukuran viewport. |
| AC-06 | Interaksi dan efek visual sesuai desain serta tidak mengganggu penggunaan. | Uji dengan mouse, keyboard, dan layar sentuh. |
| AC-07 | Build berhasil dan script lint yang tersedia telah diperiksa. | Jalankan script pada `package.json`. |
| AC-08 | Repository, instruksi menjalankan proyek, dan demo Vercel publik siap ditinjau. | Periksa README, repository, dan URL demo. |

### 1.4 Target Kualitas dan Baseline PageSpeed

Target berikut adalah **sasaran kualitas tim**, bukan ketentuan resmi pelatihan kecuali dikonfirmasi Kak Ariel.

| Metrik | Target tim | Catatan |
|---|---:|---|
| Lighthouse Performance | ≥ 90 | Uji Mobile dan Desktop; prioritaskan Mobile. |
| Lighthouse Accessibility | ≥ 90 | Lengkapi audit otomatis dengan pemeriksaan manual. |
| Lighthouse Best Practices | ≥ 90 | Tinjau dan perbaiki temuan relevan. |
| Lighthouse SEO | ≥ 90 | Periksa SEO dasar dan metadata. |
| First Contentful Paint (FCP) | ≤ 1,8 detik | Hasil pengujian lab. |
| Largest Contentful Paint (LCP) | ≤ 2,5 detik | Hasil lab bisa berbeda dari pengalaman pengguna nyata. |
| Cumulative Layout Shift (CLS) | ≤ 0,1 | Hindari pergeseran layout yang tidak diharapkan. |
| Total Blocking Time (TBT) | ≤ 200 ms pada Mobile | Indikator responsivitas dalam pengujian lab. |
| Interaction to Next Paint (INP) | ≤ 200 ms jika data lapangan tersedia | Tidak diukur langsung oleh audit Lighthouse lab. |

**Baseline Desktop, 13-10-2026** — laporan awal untuk `https://dev-x-week-3.vercel.app/`:

| Metrik | Hasil Desktop | Status terhadap target |
|---|---:|---|
| Performance | 83 | Belum mencapai target ≥ 90. |
| Accessibility | 98 | Mencapai target. |
| Best Practices | 100 | Mencapai target. |
| SEO | 100 | Mencapai target. |
| FCP | 0,5 detik | Mencapai target. |
| LCP | 0,9 detik | Mencapai target. |
| CLS | 0,00 | Mencapai target. |
| TBT | 350 ms | Baseline Desktop; perlu dibandingkan dengan hasil Mobile sebelum menyimpulkan target Mobile. |

[Laporan PageSpeed Insights — Desktop](https://pagespeed.web.dev/analysis/https-dev-x-week-3-vercel-app/uczznj5t31?form_factor=desktop)

Untuk evaluasi akhir, jalankan PageSpeed Insights pada Mobile dan Desktop setelah deployment, ulangi tiga kali dalam kondisi serupa, lalu catat median dan temuan di Trello. Data lapangan/Core Web Vitals mungkin belum tersedia jika trafik belum mencukupi.

---

## 2. Ruang Lingkup dan Kebutuhan Produk

### 2.1 Ruang Lingkup

**Termasuk:** satu landing page; lima tujuan navigasi; implementasi desain mentor; konten dan aset resmi; navigasi anchor dan CTA; layout responsif; pengujian; kolaborasi GitHub/Trello; serta demo publik melalui Vercel.

**Tidak termasuk untuk saat ini:** backend, database, atau formulir pendaftaran yang menyimpan data sendiri. Jika ruang lingkup berubah, tim perlu menyepakatinya terlebih dahulu bersama mentor.

### 2.2 Struktur Halaman

| Area/komponen | Kebutuhan utama |
|---|---|
| Header & Navigation | Navbar sticky dengan backdrop blur, navigasi anchor, CTA “Join Us”, serta navigasi mobile sesuai desain. |
| Home / Hero | Headline “Multimedia & Journalistic of Computer Science”, teks pengantar, CTA “Eksplorasi Karya” dan “Daftar Anggota”, serta statistik organisasi yang telah diverifikasi. |
| About | Pengenalan ScreenShot dan visi-misi, dengan visual floating polaroids sesuai desain. |
| Struktur | Ketua, Wakil Ketua, Sekretaris, Bendahara, serta empat divisi organisasi. |
| Kegiatan | Kartu VIBE UP!, SIDAK KATA, LIPUTAN, dan GRAND LAUNCHING SS 2026; tampilkan gambar, ringkasan, metadata, dan tautan detail jika tersedia. |
| Recruitment / Contact | CTA “JOIN US”, tautan pendaftaran jika tersedia, kolase foto sesuai desain, alamat sekretariat, dan kanal kontak resmi. |
| Footer | Afiliasi HIMA ILKOM UNNES, copyright 2026, dan tautan sosial resmi yang tersedia. |

Anchor navigasi yang disepakati: `#beranda` → Hero, `#tentang` → About, `#struktur` → Struktur, `#kegiatan` → Kegiatan, dan `#kontak` → Recruitment/Contact.

### 2.3 Konten Organisasi

**Identitas:** ScreenShot UNNES merupakan komunitas otonom di bawah HIMA ILKOM UNNES yang berfokus pada multimedia, jurnalisme kampus, dan teknologi kreatif. Minat yang ditampilkan meliputi fotografi, sinematografi, desain komunikasi visual, dan reportase jurnalistik.

**Visi-misi ringkas:** menghasilkan talenta multimedia berdaya saing di industri kreatif dan komputasi, serta menjadi pilar dokumentasi dan jurnalisme terpercaya di lingkungan Ilkom UNNES. Redaksi final mengikuti materi resmi organisasi.

**Divisi:**
- **Pengurus Harian (PH):** administrasi, tata kelola internal, dan relasi organisasi.
- **Jurnalistik:** reportase, penulisan artikel, wawancara, dan kurasi editorial.
- **Fotosin:** fotografi, sinematografi, dokumentasi, dan video.
- **DKV:** identitas visual, desain media sosial, motion graphics, dan aset branding.

**Program kerja/kegiatan:**
- **VIBE UP!:** wadah unjuk karya orisinal anggota.
- **SIDAK KATA:** wawancara spontan seputar tren dan opini kampus.
- **LIPUTAN:** liputan agenda dan kegiatan kampus.
- **GRAND LAUNCHING SS 2026:** peluncuran identitas visual dan pengenalan fungsionaris periode berjalan.

**Alamat dan kanal kontak yang dicantumkan:**
- Sekretariat: Gedung PKM FMIPA UNNES, Kampus Sekaran, Gunungpati, Kota Semarang, Jawa Tengah 50229.
- Instagram: https://instagram.com/screenshotilkom
- Email: [screenshot@unnes.ac.id](mailto:screenshot@unnes.ac.id)
- WhatsApp: [+62 813-9102-8767](https://wa.me/6281391028767)

Pastikan angka statistik, teks visi-misi, foto, tautan pendaftaran, dan detail kontak yang ditampilkan tetap sesuai sumber resmi dan desain final.

### 2.4 Persyaratan Desain

Desain dari Kak Ariel adalah acuan utama; spesifikasi di bawah tidak menjadi izin untuk mengubah desain.

- **Arah visual:** Contemporary Neo-Studio / Kinetic Lab Minimal.
- **Navbar:** sticky, latar semi-transparan (`rgba(250, 250, 250, 0.85)`), backdrop blur `8px`, logo, anchor links, dan CTA.
- **Tipografi:** Plus Jakarta Sans, Hanken Grotesk, dan JetBrains Mono sesuai peran pada desain.
- **About:** floating polaroid-style showcase.
- **Struktur:** hierarki kepengurusan dan empat kartu divisi.
- **Kegiatan:** kartu modular dengan metadata, gambar, ringkasan, dan efek hover ringan bila sesuai desain.
- **Recruitment/Contact:** kolase foto dan CTA “JOIN US”.
- **Responsivitas:** pertahankan hierarki dan kemudahan penggunaan pada desktop, tablet, dan mobile.
- **Warna, ukuran, jarak, dan komposisi akhir:** ikuti desain mentor. Lucide Icons/Material Symbols, metode pemuatan font, dan design tokens digunakan sesuai implementasi repository.

---

## 3. Persyaratan Teknis dan Kualitas

### 3.1 Persyaratan Fungsional

| ID | Persyaratan | Kriteria pemeriksaan |
|---|---|---|
| FR-01 | Navigasi anchor menuju section yang sesuai. | Semua menu mengarah ke target yang benar. |
| FR-02 | CTA internal dan eksternal berfungsi. | Tujuan CTA diverifikasi; tidak ada tautan rusak yang diketahui. |
| FR-03 | Kartu kegiatan menampilkan informasi dan efek interaksi sesuai desain. | Konten tampil benar; tautan detail hanya jika tersedia. |
| FR-04 | Layout responsif pada desktop, tablet, dan mobile. | Tidak ada overlap atau overflow yang tidak diharapkan. |
| FR-05 | Konten dan tautan resmi ditampilkan secara akurat. | Dicocokkan dengan sumber resmi sebelum penyerahan. |

### 3.2 Tech Stack dan Tools

| Kategori | Pilihan tim | Catatan |
|---|---|---|
| Framework | Next.js 15+ (App Router) | Pilihan tech stack tim. |
| Bahasa | TypeScript (`strict: true`) | Ikuti konfigurasi repository. |
| Styling | Tailwind CSS | Mengacu desain mentor. |
| Version control | Git dan GitHub | Branch, commit, dan review dikoordinasikan tim. |
| Manajemen pekerjaan | Trello | Task memiliki PIC, prioritas, kriteria selesai, dan status. |
| Desain | Referensi UI Kak Ariel | https://stitch.withgoogle.com/projects/11244511597303021329 |
| Demo | Vercel, publik | https://dev-x-week-3.vercel.app/ |

### 3.3 Persyaratan Non-Fungsional

| ID | Kategori | Persyaratan dan verifikasi |
|---|---|---|
| NFR-01 | Responsivitas | Konten dan navigasi dapat digunakan pada desktop, tablet, dan mobile; uji beberapa viewport. |
| NFR-02 | Kesesuaian desain | Warna, tipografi, komposisi, dan efek mengikuti desain mentor; lakukan review visual. |
| NFR-03 | Performa | Usahakan memenuhi target pada Bagian 1.4; ukur melalui PageSpeed Insights/Lighthouse. |
| NFR-04 | Aksesibilitas | Periksa kontras, fokus keyboard, navigasi keyboard, dan alt text gambar informatif. |
| NFR-05 | SEO dasar | Periksa title, description, dan metadata berbagi sosial sesuai kebutuhan final. |
| NFR-06 | Stabilitas | Tidak ada bug yang diketahui dan menghambat alur utama; periksa console, terminal, build, dan lint jika tersedia. |
| NFR-07 | Privasi konten | Foto, nama, alamat, dan kontak yang dipublikasikan harus berasal dari sumber resmi/yang disetujui. |

---

## 4. Tim dan Kolaborasi

### 4.1 Tanggung Jawab

| Peran | Anggota | Tanggung jawab utama |
|---|---|---|
| Project Development | Lutfi | Mengelola PRD, memecah kebutuhan menjadi task, mengatur prioritas/progres Trello, mengoordinasikan klarifikasi dengan mentor, membantu QA/integrasi, dan berkontribusi pada implementasi frontend untuk bagian yang menjadi tanggung jawabnya. |
| Frontend Development | Dimas | Mengimplementasikan desain dengan tech stack tim, menyiapkan fondasi/shared UI, mengembangkan bagian atas halaman, menjaga responsivitas, serta membantu integrasi dan review kode. |
| Mentor | Kak Ariel | Memberikan arahan/feedback terkait desain, konten, prioritas, dan ketentuan penilaian. |

### 4.2 Pembagian Komponen

| Pemilik | Area/komponen | Catatan |
|---|---|---|
| Dimas | Setup/fondasi UI bersama, `Navbar.tsx`, `Hero.tsx`, `About.tsx` | Fondasi tema, navigasi, dan bagian atas halaman. |
| Lutfi | `Organization.tsx`, `Activities.tsx`, `Recruitment.tsx`, `Footer.tsx` | Kontribusi frontend sekaligus tanggung jawab koordinasi, acceptance criteria, integrasi, dan QA. |
| Bersama | Shared types/props, komponen UI, integrasi section, review dan pengujian responsif | Perubahan kontrak komponen dan anchor ID dikomunikasikan sebelum merge. |

### 4.3 Alur Kerja Trello

Kolom yang digunakan/disarankan: **Backlog → Ready → In Progress → Review/QA → Done**. Setiap kartu memuat tujuan, komponen, PIC, prioritas, acceptance criteria, dan tautan branch/PR/commit jika tersedia. Pindahkan task ke **Done** setelah kriteria selesai dipenuhi dan statusnya diperbarui.

Board: https://trello.com/b/4N4W1XlZ/final-project-screenshot-ilkom

### 4.4 Alur Kerja GitHub dan Komunikasi

1. Jaga `main` sebagai branch utama yang stabil.
2. Kerjakan perubahan di branch deskriptif, misalnya `feat/hero-section` atau `fix/mobile-navigation`.
3. Tulis commit message yang menjelaskan perubahan; periksa diff dan uji sebelum merge.
4. Gunakan pull request/review bila sesuai dengan kesepakatan tim.
5. Hubungkan kartu Trello dengan branch, PR, atau commit agar progres bisa dilacak.
6. Komunikasikan perubahan pada shared types, komponen bersama, anchor ID, dan kebutuhan integrasi sebelum merge.
7. Klarifikasi kebutuhan/desain/konten yang ambigu kepada Kak Ariel. Catat perubahan scope di Trello dan sepakati dampaknya sebelum dikerjakan.
8. Jangan memasukkan token, API key, password, atau rahasia ke repository.

---

## 5. Pengujian dan Penyerahan

### 5.1 Checklist QA

| ID | Pemeriksaan | Status awal |
|---|---|---|
| QA-01 | Semua section dan navigasi tersedia serta mengarah ke target yang benar. | Belum diperiksa |
| QA-02 | Tombol CTA dan tautan eksternal mengarah ke URL resmi yang benar. | Belum diperiksa |
| QA-03 | Desain, navbar, floating polaroids, struktur, kartu kegiatan, CTA, dan footer sesuai acuan. | Belum diperiksa |
| QA-04 | Layout diuji pada desktop, tablet, dan mobile tanpa overlap/overflow yang tidak diharapkan. | Belum diperiksa |
| QA-05 | Gambar tampil dengan benar; gambar informatif memiliki alt text yang sesuai. | Belum diperiksa |
| QA-06 | Konten organisasi, kegiatan, statistik, alamat, dan kontak sudah diverifikasi. | Belum diperiksa |
| QA-07 | Efek hover/animasi tidak menghalangi penggunaan pada perangkat mobile/keyboard. | Belum diperiksa |
| QA-08 | Console browser dan terminal diperiksa; error yang menghambat fungsi utama ditangani. | Belum diperiksa |
| QA-09 | Build dan script lint yang tersedia dijalankan dan hasilnya dicatat. | Belum diperiksa |
| QA-10 | PageSpeed diuji pada Mobile dan Desktop; hasil dan temuan disimpan di Trello. | Belum diperiksa |
| QA-11 | Repository, README, dan URL Vercel dapat ditinjau; demo terbuka tanpa login. | Belum diperiksa |

### 5.2 Definition of Done

Task dinyatakan **Done** jika:
1. Hasilnya memenuhi deskripsi dan acceptance criteria pada kartu Trello.
2. Implementasi mengikuti desain mentor dan tidak merusak fitur/section lain.
3. Tampilan diperiksa pada ukuran layar yang relevan.
4. Tidak ada masalah yang diketahui dan menghambat fungsi utama task.
5. Perubahan disimpan ke GitHub sesuai alur tim dan direview bila diperlukan.
6. Status Trello serta tautan commit/PR diperbarui.

### 5.3 Syarat Penyerahan

- Semua section dalam scope selesai dan telah diperiksa.
- Build berhasil; lint diperiksa jika tersedia.
- Konten, gambar, dan semua tautan diverifikasi.
- README menjelaskan cara instalasi dan menjalankan proyek berdasarkan script repository.
- Repository GitHub berisi kode yang diperlukan.
- Demo Vercel dapat dibuka publik tanpa login dan telah diuji melalui jendela privat/incognito.
- URL demo, board Trello, dan bukti QA siap ditinjau sesuai arahan Kak Ariel.

---

## 6. Jadwal, Risiko, dan Referensi

### 6.1 Jadwal/Milestone

| Milestone | Hasil yang diharapkan | Pelacakan |
|---|---|---|
| Konfirmasi kebutuhan dan aset | Scope, desain, konten, serta CTA terkonfirmasi. | Status aktual di Trello. |
| Implementasi bagian atas | Fondasi UI, Navbar, Hero, dan About siap. | Status aktual di Trello. |
| Implementasi bagian bawah | Struktur, Kegiatan, Recruitment/Contact, dan Footer siap. | Status aktual di Trello. |
| Integrasi dan responsivitas | Section terintegrasi; navigasi dan layout diuji. | Status aktual di Trello. |
| QA dan perbaikan | Checklist QA diselesaikan dan temuan penting diperbaiki. | Status aktual di Trello. |
| Penyerahan | Repository, README, bukti pengujian, dan demo publik siap ditinjau. | **Deadline: 16-10-2026.** |

### 6.2 Risiko Utama

| Risiko | Mitigasi | Pemilik |
|---|---|---|
| Aset atau URL final belum lengkap | Buat daftar kebutuhan dan konfirmasi kepada pihak terkait. | Lutfi dan Dimas |
| Implementasi berbeda dari desain | Review visual per section menggunakan desain mentor. | Dimas; Lutfi membantu review |
| Masalah responsivitas ditemukan terlambat | Uji mobile/tablet selama implementasi, bukan hanya di akhir. | Dimas dan Lutfi |
| Konflik saat integrasi komponen | Sepakati file, props, anchor ID, dan branch; komunikasikan sebelum merge. | Dimas dan Lutfi |
| Bug atau deployment gagal menjelang deadline | Jalankan QA/build berkala dan cek URL Vercel sebelum penyerahan. | Dimas dan Lutfi |

### 6.3 Referensi

| Referensi | Kegunaan | Tautan |
|---|---|---|
| Desain UI mentor | Acuan visual dan komposisi halaman | https://stitch.withgoogle.com/projects/11244511597303021329 |
| Repository GitHub | Kode dan riwayat perubahan | https://github.com/alwaysdims/devX-Week-3 |
| Board Trello | Task, PIC, status, dan acceptance criteria | https://trello.com/b/4N4W1XlZ/final-project-screenshot-ilkom |
| Ketentuan final project | Acuan pelatihan | https://s.id/FinalProjectProject-Dev |
| Lighthouse scoring | Interpretasi skor Lighthouse | https://developer.chrome.com/docs/lighthouse/performance/performance-scoring |
| Web Vitals | Acuan LCP, INP, CLS | https://web.dev/articles/vitals |
| FCP | Acuan FCP | https://web.dev/articles/fcp |
| TBT | Interpretasi TBT Lighthouse | https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time |
| PageSpeed Insights | Pengujian URL publik | https://pagespeed.web.dev/ |
| Vercel deployment | Dokumentasi demo/deployment | https://vercel.com/docs/deployments/overview |

### Persetujuan Dokumen

| Nama | Peran | Keputusan | Tanggal |
|---|---|---|---|
| Lutfi | Project Development | Perlu ditinjau | Perlu ditentukan |
| Dimas | Frontend Development | Perlu ditinjau | Perlu ditentukan |
| Kak Ariel | Mentor | Perlu ditinjau | Perlu ditentukan |
