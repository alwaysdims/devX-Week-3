"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Struktur", href: "#struktur" },
  { label: "Kegiatan", href: "#kegiatan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["kontak", "kegiatan", "struktur", "tentang", "beranda"];
      const scrollPosition = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-surface-canvas/95 backdrop-blur-md border-border-subtle shadow-xs"
          : "bg-surface-canvas/85 backdrop-blur-sm border-border-subtle"
      }`}
    >
      <div className="flex items-center justify-between w-full px-6 md:px-12 max-w-7xl mx-auto h-16">
        {/* Left: Brand Logo & Status Indicator */}
        <div className="flex-1 flex items-center justify-start gap-3">
          <Link href="#beranda" className="flex items-center group">
            <div className="relative h-9 md:h-10 w-36 md:w-44 flex items-center">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtofKUYqMTn5--kgWDtsnqhw6MyD8r6V0lJFqSJMqWCicYkOoSGFatnHdkM0MZn0UqAA_r2bYcFyO4tIAmq8xobwa-F5AELeCfLp01PaI2_ySosG22qug97hksuzX0oh8egc1OsWEEbN8eAtUMPG_geODiwKN7J8ICG8CYbyTV6sjb_t4dQuliQ4sGxSHfSenjELHGO62AirV4Eq3W5oqxDYOqBzgEXc9FjATpd2ENaYxHIt5bcGqOj_NgZnmwmzC2Fy8"
                alt="SCREENSHOT - Multimedia & Journalistic of Computer Science"
                fill
                sizes="(max-width: 768px) 144px, 176px"
                className="object-contain object-left shrink-0 transition-transform duration-150 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Monospace Status Indicator Badge [ONLINE] */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-border-subtle bg-white/70 text-[11px] font-mono text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold tracking-wider">[ONLINE]</span>
          </div>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-heading text-sm py-1 font-semibold transition-colors duration-150 ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-in fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Call To Action */}
        <div className="flex-1 flex items-center justify-end gap-2">
          <Link
            href="#kontak"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-white font-heading text-sm font-semibold hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-150 active:scale-95 shadow-sm"
          >
            <span>Join Us</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-surface-canvas border-b border-border-subtle px-6 py-4 space-y-3 shadow-md animate-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle/60 sm:hidden">
            <span className="font-mono text-xs text-on-surface-variant flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              STUDIO STATUS: [ONLINE]
            </span>
            <span className="font-mono text-[10px] text-primary font-bold">BATCH 2026</span>
          </div>

          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block font-heading text-sm font-semibold py-1.5 transition-colors ${
                  isActive ? "text-primary font-bold pl-2 border-l-2 border-primary" : "text-on-surface hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-white font-heading text-sm font-semibold hover:bg-primary-hover active:scale-98 transition-transform"
            >
              <span>Join Us — Daftar Anggota</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
