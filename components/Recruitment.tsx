"use client";

import { useState } from "react";
import Image from "next/image";

export default function Recruitment() {
  const [showApplyModal, setShowApplyModal] = useState(false);

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

      {/* Registration Closed Modal */}
      {showApplyModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowApplyModal(false)}
        >
          <div
            className="relative w-full max-w-xl bg-[#F8FAFC] rounded-3xl border border-slate-200/80 shadow-2xl p-8 sm:p-12 overflow-hidden animate-in zoom-in-95 duration-200 text-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 15%, rgba(147, 0, 0, 0.08) 0%, transparent 45%), radial-gradient(circle at 95% 55%, rgba(147, 0, 0, 0.12) 0%, transparent 50%)",
            }}
          >
            <button
              type="button"
              onClick={() => setShowApplyModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight mb-4 leading-tight">
              Pendaftaran telah ditutup!
            </h3>

            <p className="font-body text-sm sm:text-base text-[#334155] leading-relaxed max-w-lg mx-auto">
              Ikuti akun Instagram kami{" "}
              <a
                href="https://www.instagram.com/screenshotilkom"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-primary hover:underline"
              >
                @screenshotilkom
              </a>{" "}
              agar kamu tidak ketinggalan informasi mengenai gelombang pendaftaran selanjutnya dan berbagai acara menarik lainnya.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
