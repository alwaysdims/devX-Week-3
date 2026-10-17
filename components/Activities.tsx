import { ActivityItem } from "@/types";
import ActivitiesGallery from "./ActivitiesGallery";

const ACTIVITIES: ActivityItem[] = [
  {
    id: "vibe-up",
    title: "VIBE UP!",
    category: "karya",
    badgeText: "Rubrik Karya Kreatif",
    description:
      "Wadah karya kreatif original anggota ScreenShot, dari foto, visual grafis, hingga tulisan jurnalistik.",
    image:
      "/kegiatan/vibe_up.webp",
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
      "/kegiatan/sidak_kata.webp",
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
      "/kegiatan/jemput_maba.webp",
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
    image: "/kegiatan/grand_launching.webp",
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
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
            GALERI KEGIATAN
          </h2>
        </div>
        <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md mt-4 md:mt-0 leading-relaxed">
          Rangkaian program terpadu dan rekam jejak dokumentasi nyata aktivitas hunting, kurasi,
          workshop, serta pameran visual mahasiswa Ilmu Komputer UNNES.
        </p>
      </div>

      {/* Interactive Gallery with Filter & Lightbox */}
      <ActivitiesGallery activities={ACTIVITIES} categories={CATEGORIES} />
    </section>
  );
}
