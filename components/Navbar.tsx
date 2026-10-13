"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Struktur", href: "#struktur" },
  { label: "Kegiatan", href: "#program-galeri" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#EDEBDD]/90 backdrop-blur-md border-b border-[#DDD8C5] transition-all">
      <div className="sticky top-0 z-50 flex items-center justify-between w-full px-6 md:px-12 max-w-7xl mx-auto h-16">
        {/* Left: Brand Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="#beranda" className="flex items-center group">
            <div className="relative h-9 md:h-10 w-36 md:w-44 flex items-center">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtofKUYqMTn5--kgWDtsnqhw6MyD8r6V0lJFqSJMqWCicYkOoSGFatnHdkM0MZn0UqAA_r2bYcFyO4tIAmq8xobwa-F5AELeCfLp01PaI2_ySosG22qug97hksuzX0oh8egc1OsWEEbN8eAtUMPG_geODiwKN7J8ICG8CYbyTV6sjb_t4dQuliQ4sGxSHfSenjELHGO62AirV4Eq3W5oqxDYOqBzgEXc9FjATpd2ENaYxHIt5bcGqOj_NgZnmwmzC2Fy8"
                alt="SCREENSHOT - Multimedia & Journalistic of Computer Science"
                fill
                sizes="(max-width: 768px) 144px, 176px"
                className="object-contain object-left flex-shrink-0 transition-transform duration-150 group-hover:scale-105"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center gap-6">
          <Link
            href="#tentang"
            className="text-[#930000] border-b-2 border-[#930000] font-heading text-sm pb-1 font-bold transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="#struktur"
            className="text-[#5B403C] hover:text-[#930000] font-heading text-sm pb-1 transition-colors"
          >
            Struktur
          </Link>
          <Link
            href="#program-galeri"
            className="text-[#5B403C] hover:text-[#930000] font-heading text-sm pb-1 transition-colors"
          >
            Kegiatan
          </Link>
        </nav>

        {/* Right: Call To Action */}
        <div className="flex-1 flex items-center justify-end gap-2">
          <Link
            href="#recruitment"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#930000] text-white font-heading text-sm font-semibold hover:bg-[#7a0000] transition-colors duration-150 active:scale-95 shadow-sm"
          >
            <span>Join Us</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#1C1C14] hover:bg-[#F6F4E6] transition-colors"
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
        <div className="lg:hidden bg-[#EDEBDD] border-b border-[#DDD8C5] px-6 py-4 space-y-3 shadow-md">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block font-heading text-sm font-semibold text-[#1C1C14] hover:text-[#930000] py-1"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#recruitment"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#930000] text-white font-heading text-sm font-semibold hover:bg-[#7a0000]"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
