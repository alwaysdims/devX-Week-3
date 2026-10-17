import Image from "next/image";
import { DivisionItem, LeaderItem } from "@/types";
import DivisionSection from "./DivisionSection";

const LEADERS: LeaderItem[] = [
  {
    id: "ketua",
    name: "Hafizh",
    role: "Ketua Umum ScreenShot 2026",
    period: "Periode 2026/2027",
    image:
      "/kepengurusan/ketua.webp",
    quote: "Menjadikan ScreenShot sebagai episentrum kreativitas visual dan jurnalisme bermartabat di Ilkom UNNES.",
  },
  {
    id: "wakil",
    name: "Kinanthi",
    role: "Wakil Ketua Umum ScreenShot 2026",
    period: "Periode 2026/2027",
    image:
      "/kepengurusan/wakil.webp",
    quote: "Merajut sinergi antar divisi demi karya multimedia yang berdampak dan menginspirasi generasi.",
  },
];

const DIVISIONS: DivisionItem[] = [
  {
    id: "ph",
    name: "Pengurus Harian",
    abbreviation: "PH",
    description:
      "Mengawal tata kelola organisasi, koordinasi internal fungsionaris, hubungan kelembagaan HIMA ILKOM, dan legalitas komunitas.",
    skills: ["Tata Kelola", "Arsip Internal", "Public Relations", "Manajemen Event"],
    tools: ["Notion", "Google Workspace", "Trello", "Spreadsheets"],
    icon: "assignment",
    head: "BPH & Sekretariat",
    focus: "Governance & Partnership",
    image:
      "/kepengurusan/ph.webp",
  },
  {
    id: "jurnalistik",
    name: "Jurnalistik",
    abbreviation: "JURNAL",
    description:
      "Pusat reportase dan literasi visual: meliput agenda strategis kampus, menulis artikel mendalam, wawancara narasumber, dan editorial warta.",
    skills: ["Reportase Lapangan", "Penulisan Feature", "Wawancara", "Editorial Press"],
    tools: ["Medium", "Substack", "Grammarly", "Google Docs"],
    icon: "article",
    head: "Koordinator Jurnalistik",
    focus: "Investigasi & Storytelling",
    image:
      "/kepengurusan/jurnalistik.webp",
  },
  {
    id: "fotosin",
    name: "Fotografi & Sinematografi",
    abbreviation: "FOTOSIN",
    description:
      "Inkubator eksplorasi lensa: dokumentasi live agenda, produksi film pendek & video reels, color grading, dan hunting foto luar ruang (photo walk).",
    skills: ["Live Shooting", "Cinematography", "Color Grading", "Studio Lighting"],
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Adobe Lightroom", "Sony Alpha"],
    icon: "videocam",
    head: "Koordinator Fotosin",
    focus: "Visual Motion & Stills",
    image:
      "/kepengurusan/fotosin.webp",
  },
  {
    id: "dkv",
    name: "Desain Komunikasi Visual",
    abbreviation: "DKV",
    description:
      "Garda depan identitas grafis: merancang feed Instagram resmi, branding merchandise, tipografi poster, motion graphics, dan kurasi visual pameran.",
    skills: ["Brand Identity", "Tipografi & Layout", "Motion Graphics", "Poster Design"],
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects"],
    icon: "palette",
    head: "Koordinator DKV",
    focus: "Visual Graphic & Layout",
    image:
      "/kepengurusan/dkv.webp",
  },
];

export default function Organization() {

  return (
    <section
      id="struktur"
      className="relative px-6 md:px-12 max-w-7xl mx-auto overflow-hidden py-16 md:py-24"
    >
      {/* Background Dot Matrix Pattern from Stitch */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(147, 0, 0, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(black 40%, transparent 85%)",
        }}
      />

      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 relative z-10">
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            STRUKTUR ORGANISASI
          </h2>
        </div>
        <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md mt-4 md:mt-0 leading-relaxed">
          Kolektif kepemimpinan kreatif yang menyatukan visi, eksplorasi lensa, kurasi jurnalistik,
          dan estetika visual ScreenShot HIMA ILKOM UNNES.
        </p>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Top Tier: Leadership (Ketua & Wakil Ketua) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl w-full justify-center">
            {LEADERS.map((leader) => (
              <div
                key={leader.id}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-border-subtle hover:border-primary transition-all duration-300 hover:-translate-y-1 bg-surface-card p-2.5 flex flex-col"
              >
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-surface-container">
                  <Image
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Leader Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-primary text-[10px] font-mono font-semibold tracking-wider mb-1">
                      {leader.period}
                    </span>
                    <h3 className="font-heading text-lg font-bold tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="font-body text-xs text-white/80 line-clamp-1">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Micro Quote Footer */}
                <div className="pt-2 px-1">
                  <p className="font-body text-[11px] text-on-surface-variant italic line-clamp-2">
                    &ldquo;{leader.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Division Section & Connector Lines */}
          <DivisionSection divisions={DIVISIONS} />
        </div>
      </div>
    </section>
  );
}
