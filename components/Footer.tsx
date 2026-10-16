"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full text-on-surface relative overflow-hidden bg-surface-canvas border-t border-border-subtle py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border-subtle">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-10 md:h-12 w-48">
                <Image
                  src="/logo.png"
                  alt="ScreenShot Logo"
                  fill
                  sizes="192px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="font-body text-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
              Wadah eksplorasi visual dan jurnalistik mahasiswa Ilmu Komputer UNNES, merangkai karya,
              fotografi, sinematografi, desain grafis, dan cerita bermakna.
            </p>

          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="font-heading text-base font-bold text-on-surface tracking-tight mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 font-heading text-sm text-on-surface-variant">
              <li>
                <Link href="#beranda" className="hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="hover:text-primary transition-colors">
                  Tentang Kami &amp; Visi Misi
                </Link>
              </li>
              <li>
                <Link href="#struktur" className="hover:text-primary transition-colors">
                  Struktur Kepengurusan
                </Link>
              </li>
              <li>
                <Link href="#kegiatan" className="hover:text-primary transition-colors">
                  Galeri Program Kerja
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="hover:text-primary transition-colors">
                  Hub Rekrutmen &amp; Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Secretariat & Contact Details */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-heading text-base font-bold text-on-surface tracking-tight mb-4">
              Sekretariat &amp; Kontak
            </h4>
            <div className="flex flex-col gap-3.5 font-body text-xs text-on-surface-variant">
              {/* Lokasi */}
              <div className="flex items-start gap-2.5">
                <span className="text-primary font-bold text-base mt-0.5 shrink-0">📍</span>
                <p className="leading-relaxed">
                  Gedung PKM FMIPA UNNES, Kampus Sekaran, Gunungpati, Kota Semarang, Jawa Tengah 50229
                </p>
              </div>

              {/* Instagram di bawah lokasi */}
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-primary shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a
                  className="hover:text-primary transition-colors duration-150 font-medium"
                  href="https://instagram.com/screenshotilkom"
                  target="_blank"
                  rel="noreferrer"
                >
                  screenshotilkom
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <span className="text-primary font-bold text-base shrink-0">✉️</span>
                <a
                  className="hover:text-primary transition-colors duration-150"
                  href="mailto:screenshot@unnes.ac.id"
                >
                  screenshot@unnes.ac.id
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <span className="text-primary font-bold text-base shrink-0">💬</span>
                <a
                  className="hover:text-primary transition-colors duration-150"
                  href="https://wa.me/6281391028767"
                  target="_blank"
                  rel="noreferrer"
                >
                  +62 813-9102-8767 (Official WA)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <p>&copy; 2026 ScreenShot UNNES. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-card text-on-surface hover:text-primary hover:border-primary transition-all duration-150 active:scale-95 shadow-2xs cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <span>&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
