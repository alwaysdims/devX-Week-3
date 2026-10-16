"use client";

import { useState } from "react";
import Image from "next/image";

export default function Recruitment() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    division: "Fotosin",
    portfolio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const divisionMap: Record<string, string> = {
      Fotosin: "Divisi Fotosin (Fotografi & Sinematografi)",
      Jurnalistik: "Divisi Jurnalistik (Reportase & Warta)",
      DKV: "Divisi DKV (Desain Komunikasi Visual)",
      PH: "Divisi Pengurus Harian (PH)",
    };
    const divisionName = divisionMap[formData.division] || formData.division;

    const message = `Halo Admin ScreenShot UNNES, saya ingin mendaftar sebagai calon anggota baru:\n\n• Nama: ${formData.name}\n• NIM: ${formData.nim}\n• Pilihan Divisi: ${divisionName}\n• Portofolio: ${formData.portfolio.trim() ? formData.portfolio.trim() : "-"}\n\nMohon informasi terkait briefing dan tahapan berikutnya. Terima kasih!\n\n_Write, Camera, Action, Semangat Berkarya!!_`;

    const waUrl = `https://wa.me/6281391028767?text=${encodeURIComponent(message)}`;
    setLastWaUrl(waUrl);

    // Buka WhatsApp langsung di tab baru
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowApplyModal(false);
      setFormData({ name: "", nim: "", division: "Fotosin", portfolio: "" });
    }, 4000);
  };

  return (
    <section id="kontak" className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-24">
      {/* Invisible anchor target for backwards compatibility */}
      <div id="recruitment" className="relative -top-20 pointer-events-none" />

      {/* Main Container dengan alur vertikal yang lapang */}
      <div className="relative w-full flex flex-col items-center">
        {/* ========================================================================= */}
        {/* 1. FOTO DIATAS (Top Photos Row)                                          */}
        {/* ========================================================================= */}
        <div className="w-full flex items-center justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-14 pb-2 z-0">
          {/* Foto 1 (Kiri): sata2.JPG */}
          <div className="transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl shrink-0">
            <div className="w-28 sm:w-48 md:w-60 lg:w-72 aspect-4/3 rounded-2xl overflow-hidden border-2 border-white shadow-md p-1 sm:p-1.5 bg-surface-card-warm">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/hero/main_hero.webp"
                  alt="Foto Bersama Komunitas ScreenShot"
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 192px, 288px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Foto 2 (Tengah): sidak kata.JPG */}
          <div className="transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl -translate-y-2 sm:-translate-y-4 shrink-0">
            <div className="w-32 sm:w-52 md:w-64 lg:w-80 aspect-16/10 rounded-2xl overflow-hidden border-2 border-white shadow-md p-1 sm:p-1.5 bg-surface-card-warm">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/kegiatan/sidak_kata.webp"
                  alt="Sidak Kata Wawancara Spontan"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 208px, 320px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Foto 3 (Kanan): Divisi PH */}
          <div className="transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl shrink-0">
            <div className="w-24 sm:w-40 md:w-52 lg:w-60 aspect-4/5 rounded-2xl overflow-hidden border-2 border-white shadow-md p-1 sm:p-1.5 bg-surface-card-warm">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/join_us/camera.webp"
                  alt="Divisi Pengurus Harian ScreenShot"
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 160px, 240px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. AREA TEKS TENGAH (JOIN US) DENGAN JARAK AMAN & TERBUKA PENUH          */}
        {/* ========================================================================= */}
        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center px-4">

          {/* Headline Display */}
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-on-surface tracking-tight uppercase leading-none mb-4">
            JOIN US
          </h2>

          {/* Deskripsi ajakan kolaborasi */}
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-md mb-8">
            Jadilah bagian dari komunitas kami yang dinamis, ikuti agenda photo walk, sesi hunting foto
            bersama, dan berkolaborasi dalam proyek visual berdampak di ScreenShot HIMA ILKOM UNNES.
          </p>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={() => setShowApplyModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-heading text-sm font-bold hover:bg-primary-hover hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-primary/25 cursor-pointer"
          >
            <span>Daftar Calon Anggota Sekarang</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 3. FOTO DIBAWAH (Bottom Photos Row)                                       */}
        {/* ========================================================================= */}
        <div className="w-full flex items-center justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-14 pt-2 z-0">
          {/* Foto 4 (Kiri): Divisi Jurnalistik */}
          <div className="transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl shrink-0">
            <div className="w-24 sm:w-40 md:w-52 lg:w-60 aspect-4/5 rounded-2xl overflow-hidden border-2 border-white shadow-md p-1 sm:p-1.5 bg-surface-card-warm">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/join_us/journalistik.webp"
                  alt="Divisi Jurnalistik ScreenShot"
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 160px, 240px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Foto 5 (Tengah): Divisi Fotosin */}
          <div className="transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl translate-y-2 sm:translate-y-4 shrink-0">
            <div className="w-32 sm:w-52 md:w-64 lg:w-80 aspect-16/10 rounded-2xl overflow-hidden border-2 border-white shadow-md p-1 sm:p-1.5 bg-surface-card-warm">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/join_us/selfie.webp"
                  alt="Divisi Fotografi dan Sinematografi ScreenShot"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 208px, 320px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Foto 6 (Kanan): Divisi DKV */}
          <div className="transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl shrink-0">
            <div className="w-24 sm:w-40 md:w-52 lg:w-60 aspect-4/5 rounded-2xl overflow-hidden border-2 border-white shadow-md p-1 sm:p-1.5 bg-surface-card-warm">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/join_us/expo.webp"
                  alt="Liputan Jurnalistik ScreenShot"
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 160px, 240px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reactive Apply Modal dengan Integrasi WhatsApp */}
      {showApplyModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => !formSubmitted && setShowApplyModal(false)}
        >
          <div
            className="relative w-full max-w-lg bg-surface-card rounded-3xl border border-border-subtle shadow-2xl p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {!formSubmitted ? (
              <>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Tutup Formulir"
                >
                  &times;
                </button>

                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[11px] font-semibold mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>WhatsApp Instant Forward</span>
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold text-on-surface">
                    Registrasi Calon Anggota
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant mt-1">
                    Isi data Anda di bawah ini. Setelah dikirim, data akan langsung diteruskan ke WhatsApp resmi ScreenShot UNNES.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-heading text-xs font-bold text-on-surface mb-1.5">
                      Nama Lengkap
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: Budi Pratama"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface-card-warm text-sm text-on-surface focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-xs font-bold text-on-surface mb-1.5">
                      NIM (Nomor Induk Mahasiswa)
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: 4611424001"
                      value={formData.nim}
                      onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface-card-warm text-sm text-on-surface focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-xs font-bold text-on-surface mb-1.5">
                      Pilihan Divisi Peminatan
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface-card-warm text-sm text-on-surface focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="Fotosin">Divisi Fotosin (Fotografi &amp; Sinematografi)</option>
                      <option value="Jurnalistik">Divisi Jurnalistik (Reportase &amp; Warta)</option>
                      <option value="DKV">Divisi DKV (Desain Komunikasi Visual)</option>
                      <option value="PH">Divisi Pengurus Harian (PH)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-heading text-xs font-bold text-on-surface mb-1.5">
                      Tautan Portofolio / Akun Instagram Karya (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="https://instagram.com/karyasaya atau link drive"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-subtle bg-surface-card-warm text-sm text-on-surface focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-heading text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Kirim ke WhatsApp</span>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.813 2.796.814 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.828c0 5.523-4.477 10-10 10-1.74 0-3.37-.449-4.793-1.233l-5.207 1.367 1.393-5.093c-.878-1.48-1.393-3.21-1.393-5.041 0-5.523 4.477-10 10-10s10 4.477 10 10z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowApplyModal(false)}
                      className="py-3 px-4 rounded-xl border border-border-subtle text-on-surface-variant font-heading text-sm font-semibold hover:bg-surface-container-low transition-colors cursor-pointer"
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mb-4 animate-bounce">
                  💬
                </div>
                <h3 className="font-heading text-2xl font-bold text-on-surface mb-2">
                  Mengarahkan ke WhatsApp...
                </h3>
                <p className="font-body text-sm text-on-surface-variant max-w-sm mb-4">
                  Pesan pendaftaran untuk <strong>{formData.name || "Calon Anggota"}</strong> telah disiapkan. Jika chat WhatsApp tidak terbuka otomatis, silakan klik tombol di bawah:
                </p>
                {lastWaUrl && (
                  <a
                    href={lastWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-heading text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <span>Buka Chat WhatsApp Sekarang</span>
                    <span>&rarr;</span>
                  </a>
                )}
                <div className="font-mono text-xs text-primary font-bold">
                  Write, Camera, Action, Semangat Berkarya!!
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
