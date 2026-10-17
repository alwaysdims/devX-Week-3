import Image from "next/image";
import RecruitmentAction from "./RecruitmentAction";

export default function Recruitment() {

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
                  src="/hero/main_hero1.webp"
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

          <RecruitmentAction />
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

    </section>
  );
}
