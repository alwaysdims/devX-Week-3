import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative px-6 md:px-12 max-w-7xl mx-auto overflow-hidden py-16 md:py-20"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(147, 0, 0, 0.06) 1px, transparent 1px), linear-gradient(rgba(147, 0, 0, 0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(at 50% 35%, black 45%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(at 50% 35%, black 45%, transparent 85%)",
        }}
      />

      <div className="flex flex-col items-start max-w-4xl relative z-10">
        {/* Status Pill with Pulsing Red Dot */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DDD8C5] bg-[#FFFFFF] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#930000] animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wide text-[#1C1C14]">
            BATCH_2026 // OPEN_STUDIO
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="hidden md:block font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1C1C14] tracking-tight mb-6 leading-tight">
          Multimedia &amp;{" "}
          <span className="underline decoration-[#930000] decoration-4 underline-offset-8">
            Journalistic
          </span>{" "}
          of Computer Science
        </h1>
        <h1 className="md:hidden font-heading text-3xl sm:text-4xl font-extrabold text-[#1C1C14] tracking-tight mb-6 leading-tight">
          Multimedia &amp;{" "}
          <span className="text-[#930000]">Journalistic</span> of Computer Science
        </h1>

        {/* Description */}
        <p className="font-body text-base sm:text-lg text-[#5B403C] max-w-3xl mb-8 leading-relaxed">
          Wadah mahasiswa Ilmu Komputer UNNES yang fokus di bidang multimedia — mulai dari fotografi,
          sinematografi, desain grafis, hingga jurnalistik untuk menyalurkan kreativitas dan karya nyata.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <Link
            href="#recruitment"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-[#930000] text-white font-heading text-sm font-semibold hover:bg-[#7a0000] hover:-translate-y-0.5 transition-all duration-150 active:scale-95 shadow-md"
          >
            <span>Gabung Hunting &amp; Seleksi</span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>

          <Link
            href="#program-galeri"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg border border-[#DDD8C5] bg-[#FFFFFF] text-[#1C1C14] font-heading text-sm font-semibold hover:bg-[#F6F4E6] transition-all duration-150 active:scale-95 shadow-xs"
          >
            <span>Jelajahi Program Hunting</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
