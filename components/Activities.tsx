"use client";

import { useState } from "react";
import Image from "next/image";
import { ActivityItem } from "@/types";

const ACTIVITIES: ActivityItem[] = [
  {
    id: "vibe-up",
    title: "VIBE UP!",
    category: "karya",
    badgeText: "Rubrik Karya Kreatif",
    description:
      "Wadah karya kreatif original anggota ScreenShot, dari foto, visual grafis, hingga tulisan jurnalistik.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_-QKusmyCF0_faf4wBC1_ebrCvAmWoCYFb_CulnlWy_FgUOyYuSheRJYZQsEMADVkyFYEwFcaEFUbAoV7XN--JMZjPwu9R0EEwpjnLyWOKyoHl_qXbBqsnHd3kO6MGAiUlzRLNFCY8l7UpySWJsra4z6QcfqbzNf77FLbc04kZf0uWMvo9YwsjkeYE_BmSvd5AoZmFJ2oD9KAM0XHP40a4Gj_grPiz-AcOX5rpcuaHMMJhp0LV5smCA",
    batchOrDate: "BATCH // 2026",
    division: "Divisi DKV & Jurnalistik",
    format: "Edisi Mingguan",
  },
  {
    id: "sidak-kata",
    title: "SIDAK KATA",
    category: "opini",
    badgeText: "Street Interview & Opini Publik",
    description:
      "Sesi wawancara spontan ke narasumber acak di ruang publik dan kampus, mengemas opini publik jadi konten video dan visual yang segar serta komunikatif.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDie0gUrt2CtGgtzBQcSKBOrnbctGZlYhgAZx_wWXdXcFh9yUR0Cjemm6o1su8LobYKHQpIYS5NnlIxdzVpoWfcY4GrL2UZOp9bKPu0L43EoecR3YCLAldhk6Br5Wc7OXJEMLt2VRURKjTKBXRl0C4SkiN--HJDdHc6QcszNDztFuBnac772rxmIHRc4oHeifNOHldzTEjPjM_qH50b5tlr8UWFGmI2xYy5gJcm-gFwIiiuaNT9T32u6A",
    batchOrDate: "REELS // TIKTOK",
    division: "Liputan Lapangan & Multimedia",
    format: "Format Reels & TikTok",
  },
  {
    id: "liputan",
    title: "LIPUTAN",
    category: "reportase",
    badgeText: "Liputan Kampus Terpadu",
    description:
      "Dokumentasi visual dan reportase jurnalistik agenda strategis di dalam maupun luar civitas Ilmu Komputer UNNES seperti Jemput Maba.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLxq8SYpQ988jK9BANx6YEtIel4l6Bj6HdwOGAGHu9XU0hjY3yUYliUIJJd0UXHpvWLAvT43Dtldnta3ZhBxfqugYl-jWy7b2Ug-cWZ2i4TzS3frhKZbbXF6vwNug1azigm8h9-V6vd7rryTBd1X1D1SNLeppRt3ScrksHFkjvBNir9jHY-nSiZPh0w2iqWD_Nc1EzTdHVSveuFFDKK3wH6h2bLTAHqW-G8ci1k4KbxgXXIBhc2-DA2A",
    batchOrDate: "EVENT // COVERAGE",
    division: "Divisi Jurnalistik & Fotosin",
    format: "Warta Visual",
  },
  {
    id: "grand-launching",
    title: "GRAND LAUNCHING SS 2026",
    category: "karya",
    badgeText: "Peluncuran Akbar 2026",
    description:
      "Perkenalan fungsionaris periode 2026 sekaligus peluncuran identitas visual resmi ScreenShot yang baru diiringi semangat kolaborasi sinematografi dan jurnalistik.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJdFCw62H7749y1SAD2vuPpJn5bRkvgpcX1w3j6w16pEv1fH5eQxyi_BFH2_p6E6XJSSlZsBRTZ7QHmvWNuQokDWojxNUndnj5sLin3I67AZ0bsIg-wK2wsqVyrnovi3ezDp_T170UMmPOuG-24RU0THxih7J7WcvfR7F8hFHcDDjDvRxHSNZjGdU25O7_BSIRu6TB3I50Qk5PmL4HAQHUmk-W-8lkJGOnrioXr7dBDRdenRJ3U8UTDA",
    batchOrDate: "MILESTONE // 2026",
    division: "Semua Divisi Kepengurusan",
    format: "Official Milestone",
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Program" },
  { id: "karya", label: "Karya Kreatif" },
  { id: "opini", label: "Street Interview" },
  { id: "reportase", label: "Liputan Kampus" },
];

export default function Activities() {
  const [filter, setFilter] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const filteredActivities =
    filter === "all"
      ? ACTIVITIES
      : ACTIVITIES.filter((act) => act.category === filter);

  return (
    <section
      id="kegiatan"
      className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-24"
    >
      {/* Invisible anchor target for backwards compatibility with Stitch template */}
      <div id="program-galeri" className="relative -top-20 pointer-events-none" />

      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-card mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs font-semibold tracking-wider text-primary">
              CURATED SHOWCASE // ARCHIVE
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
            GALERI KEGIATAN
          </h2>
        </div>
        <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md mt-4 md:mt-0 leading-relaxed">
          Rangkaian program terpadu dan rekam jejak dokumentasi nyata aktivitas hunting, kurasi,
          workshop, serta pameran visual mahasiswa Ilmu Komputer UNNES.
        </p>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-full font-heading text-xs font-semibold transition-all duration-200 active:scale-95 ${
              filter === cat.id
                ? "bg-primary text-white shadow-sm"
                : "bg-surface-card border border-border-subtle text-on-surface-variant hover:border-primary/50 hover:text-on-surface"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Asymmetric 12-Column Grid from Stitch */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {filteredActivities.map((act) => {
          // Layout asymmetry: Card 1 & 3 are 4 cols, Card 2 & 4 are 8 cols
          const isWide = act.id === "sidak-kata" || act.id === "grand-launching";
          return (
            <div
              key={act.id}
              onClick={() => setSelectedActivity(act)}
              className={`${
                isWide
                  ? "md:col-span-8 aspect-video md:aspect-21/10"
                  : "md:col-span-4 aspect-4/5"
              } group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-subtle hover:border-primary flex flex-col justify-end bg-cta-banner cursor-pointer`}
            >
              {/* Background Photo */}
              <Image
                src={act.image}
                alt={act.title}
                fill
                sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />

              {/* Top Floating Badge & Action Indicator */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[#ffdad4] border border-white/20">
                  {act.batchOrDate}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110 shadow-xs">
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </div>

              {/* Content Cluster */}
              <div className="relative z-10 p-5 md:p-6 flex flex-col text-white">
                <div className="font-mono text-[11px] text-[#ffdad4] uppercase tracking-wider mb-1 font-bold">
                  {act.badgeText}
                </div>
                <h3
                  className={`font-heading font-extrabold text-white mb-2 leading-tight ${
                    isWide ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                  }`}
                >
                  {act.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-surface-canvas/85 leading-relaxed line-clamp-2 mb-4">
                  {act.description}
                </p>

                {/* Card Meta Bar */}
                <div className="pt-3 border-t border-white/20 flex items-center justify-between font-mono text-[11px] text-border-subtle/90">
                  <span className="truncate pr-2">{act.division}</span>
                  <span className="text-[#ffdad4] font-bold shrink-0">{act.format}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reactive Lightbox Modal for Activities */}
      {selectedActivity && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-surface-card rounded-3xl border border-border-subtle shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-video w-full bg-cta-banner overflow-hidden">
              <Image
                src={selectedActivity.image}
                alt={selectedActivity.title}
                fill
                sizes="(max-width: 768px) 100vw, 680px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-primary flex items-center justify-center text-lg transition-colors z-20"
                aria-label="Tutup Pratinjau"
              >
                &times;
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white z-10">
                <span className="font-mono text-xs text-[#ffdad4] uppercase tracking-wider font-semibold">
                  {selectedActivity.badgeText}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedActivity.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              <p className="font-body text-sm sm:text-base text-on-surface leading-relaxed mb-6">
                {selectedActivity.description}
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-surface-container-low border border-border-subtle mb-6 font-mono text-xs">
                <div>
                  <span className="text-on-surface-variant block mb-1">Divisi Pelaksana:</span>
                  <span className="font-bold text-on-surface">{selectedActivity.division}</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block mb-1">Kategori Publikasi:</span>
                  <span className="font-bold text-primary">{selectedActivity.format}</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-2.5 rounded-xl border border-border-subtle text-on-surface-variant font-heading text-sm font-semibold hover:bg-surface-container-low transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
