import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative px-6 md:px-12 max-w-7xl mx-auto overflow-hidden py-16 md:py-24"
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

        {/* Display Headline */}
        <h1 className="hidden md:block font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-on-surface tracking-tight mb-6 leading-[1.12]">
          Multimedia &amp;{" "}
          <span className="relative inline-block">
            <span className="underline decoration-primary decoration-4 underline-offset-8">
              Journalistic
            </span>
          </span>{" "}
          of Computer Science
        </h1>
        <h1 className="md:hidden font-heading text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-6 leading-tight">
          Multimedia &amp;{" "}
          <span className="text-primary">Journalistic</span> of Computer Science
        </h1>

        {/* Description */}
        <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-3xl mb-8 leading-relaxed">
          Wadah mahasiswa Ilmu Komputer UNNES yang fokus di bidang multimedia — mulai dari fotografi,
          sinematografi, desain grafis, hingga jurnalistik untuk menyalurkan kreativitas dan karya nyata.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <Link
            href="#kontak"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-lg bg-primary text-white font-heading text-sm font-semibold hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-150 active:scale-95 shadow-md shadow-primary/15"
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
            href="#kegiatan"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-lg border border-border-subtle bg-surface-card text-on-surface font-heading text-sm font-semibold hover:bg-surface-container-low hover:border-primary/40 transition-all duration-150 active:scale-95 shadow-xs"
          >
            <span>Eksplorasi Karya &amp; Kegiatan</span>
            <svg
              className="w-4 h-4 text-on-surface-variant"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>

        {/* Metric Bar / Status Ticker (PRD & tugas.md requirement) */}
        <div className="mt-12 pt-8 border-t border-border-subtle w-full grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
          <div className="flex flex-col group">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-primary tracking-tight group-hover:scale-105 transition-transform origin-left">
              4 Divisi
            </span>
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider mt-0.5">
              Bidang Teknis
            </span>
          </div>

          <div className="flex flex-col group border-l border-border-subtle pl-4 sm:pl-6">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-primary tracking-tight group-hover:scale-105 transition-transform origin-left">
              50+
            </span>
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider mt-0.5">
              Anggota Aktif
            </span>
          </div>

          <div className="flex flex-col group border-l border-border-subtle pl-4 sm:pl-6">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-primary tracking-tight group-hover:scale-105 transition-transform origin-left">
              100+
            </span>
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider mt-0.5">
              Karya &amp; Liputan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
