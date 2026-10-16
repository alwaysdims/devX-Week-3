"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
                <FaLocationDot className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  Gedung PKM FMIPA UNNES, Kampus Sekaran, Gunungpati, Kota Semarang, Jawa Tengah 50229
                </p>
              </div>

              {/* Instagram di bawah lokasi */}
              <div className="flex items-center gap-2.5">
                <FaInstagram className="w-4 h-4 text-primary shrink-0" />
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
                <FaEnvelope className="w-4 h-4 text-primary shrink-0" />
                <a
                  className="hover:text-primary transition-colors duration-150"
                  href="mailto:screenshot@unnes.ac.id"
                >
                  screenshot@unnes.ac.id
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4 h-4 text-primary shrink-0" />
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

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <p>&copy; 2026 ScreenShot UNNES. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Scroll to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Kembali ke Atas"
        className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer ${
          isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
