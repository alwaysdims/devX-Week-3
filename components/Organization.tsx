"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DivisionItem, LeaderItem } from "@/types";

const LEADERS: LeaderItem[] = [
  {
    id: "ketua",
    name: "Hafizh",
    role: "Ketua Umum ScreenShot 2026",
    period: "Periode 2026/2027",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUH6gcsJb_wzCKVA_jGWkm9QxQrpvo1nxuFFr-_6luH3nrq1rA1HfqVH5dyHDKZkITh25qAbCxBHTreVqtzCD-xQrpTIVvsKSP-8yerbgTTjzgby0PQakp1BPG43yAiUfGXVSYIASgLHHnZt3bD04n8oHLtxRRklnDZsFzTv3Uxn1-NzTvgOL1te0pIKN8_dG6MlSuEeWcyHxggSOy_n1KlOJLUyaejTampFgixb3iP-pQyT83TS4IZ1f7Hx48VT1w7rA",
    quote: "Menjadikan ScreenShot sebagai episentrum kreativitas visual dan jurnalisme bermartabat di Ilkom UNNES.",
  },
  {
    id: "wakil",
    name: "Kinanthi",
    role: "Wakil Ketua Umum ScreenShot 2026",
    period: "Periode 2026/2027",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABJBMg1BWKFF_7ub2FEdPT0fhCNXPkLlD1uqR-TjQQBZL4WTfTYDU7GvYodvWlZcUp6x3360tr78o0B7_yJP6JzXyL6LU4cJDA9FvlV9OTBUR7hI6YQaMUlG3e95jdeGIa4tw_oZlmBzKLXOSpXpFh427HnBRsOQS5qW7XDznB9rAvKYKa3sl_JXjb95wGobqpzT12aJXDmunYp5WV2faMfrAGO0MGBkZs5TqrqbPpKcj96mG2E2tEjfSWfWc7Kb6ACUk",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA589Pzgn9d5tkywUSsEgUHuW073hPHBC1YehRu2Y10hxVl7vr3As9myacuisogtHz7FTxlltbPRpAJ-L2vPZ_wv-gQKL8rBUCwUkchihZPy02nNAgaltirzxfhPTJQU4I69iW4PRSvel5JHHNVEPTptUmFls_YL1NpMHOOD8H7O_kbJOz9glogkfmMA8rFbmdSOyed20zKCK6Qwp_4gYqEvSqm411H_yM_ug05TQ5jutG7jeHTqmA3SBzmn4fZcU0wmFo",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPewdp_ItkULN4sz50jOCIrHKgHPWo-R5XCjn88TAnTgN2lD4-le5CdMQ1C_7Ax11yBr1TsbTx-mP2dF_by9B4OYcxOol_73lgq5DbKf7EJ_FNiviq83vJWLBbWRL39YVzXADGkOS45ZGEf5NJyuSujn32syZWtrWWI00jvP-PztBSN3RT4CwqEq1gvImRRJKA9X74MTtT-GC-LLEEMnZXN703pID_RVvyOFqb33y5--YLLIM0UzWTEZlAR6rcD-xzUcI",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAYMJrluSHMoUZAirQBDu2RULV5qveQpT0-XU6tEY2YqHBveDSYNAhX1oMIfzRo6CfcpOQ_dl0l5PPzyXU3QSTBmR2dufHQ86ueKwY2SONeW3sG8xhslMgWqFBy5kmGKTTfysQp_0fvvAvWXKnAhci9H7y_GJfZ659um1rpSCBursxbPQXohamzi3FcMdozwesJ7n5hNFGe47mpnLGSN8uDS0dOWQhKjDQqLBN2y0a_0kmgKJMo_LruDgo0Hrap4eflMw",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADYtvMEb5EBPAoZ7_icFemibmBaFQ9btpruwZn5uIN1It64FaVT4si19B08iEdXHqsBqarzdAEcNxyCPMtkDjSgYDYRM8c9w7rG4S5eEsClCs4k_OkG3iiu-nwjCPXcMpE1a3RsW6XwHkaRq_FBw93Iz3_AKUSf5ywoSofVbjiZpjJDd9OhBEC8mp6vBjfzx9Q3FcItC4FtpuqWoqApZeOAfvxkH34Cecn2KkA1i3v07njAcDEK7UQ2PNgs238Hf3IEfk",
  },
];

export default function Organization() {
  const [hoveredDivision, setHoveredDivision] = useState<number | null>(null);
  const [selectedDivision, setSelectedDivision] = useState<DivisionItem | null>(null);

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-card/80 mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs font-semibold tracking-wider text-primary">
              GOVERNANCE // 2026_TIER
            </span>
          </div>
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

          {/* Minimalist SVG Connector Lines with Interactive Reactivity */}
          <div className="w-full max-w-5xl my-4 hidden md:block">
            <div className="relative w-full py-1 flex items-center justify-center">
              <svg
                className="w-full h-20 text-primary overflow-visible"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1000 70"
              >
                {/* Static Base Guide Lines */}
                <path
                  d="M 320 0 L 320 18 Q 320 24 332 24 L 490 24 Q 500 24 500 28"
                  stroke="#DDD8C5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M 680 0 L 680 18 Q 680 24 668 24 L 510 24 Q 500 24 500 28"
                  stroke="#DDD8C5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />

                {/* Animated / Active Primary Spine */}
                <path
                  d="M 320 0 L 320 18 Q 320 24 332 24 L 490 24 Q 500 24 500 28"
                  stroke="#930000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M 680 0 L 680 18 Q 680 24 668 24 L 510 24 Q 500 24 500 28"
                  stroke="#930000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />

                {/* Central Stem and Upper Node */}
                <line
                  stroke="#930000"
                  strokeWidth="2"
                  x1="500"
                  x2="500"
                  y1="24"
                  y2="46"
                />
                <circle
                  cx="500"
                  cy="24"
                  fill="#EDEBDD"
                  r="4"
                  stroke="#930000"
                  strokeWidth="2"
                />

                {/* Horizontal Distribution Rail */}
                <path
                  d="M 125 46 L 875 46"
                  stroke="#DDD8C5"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M 125 46 L 875 46"
                  stroke="#930000"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />

                {/* Central Intersection Pulse Node */}
                <circle
                  cx="500"
                  cy="46"
                  fill="#930000"
                  r="4.5"
                  stroke="#EDEBDD"
                  strokeWidth="2"
                  className="animate-pulse"
                />

                {/* 4 Division Branch Drops (X coordinates: 125, 375, 625, 875) */}
                {/* Branch 0: PH */}
                <path
                  d="M 125 46 L 125 70"
                  stroke={hoveredDivision === 0 ? "#930000" : "#DDD8C5"}
                  strokeLinecap="round"
                  strokeWidth={hoveredDivision === 0 ? "2.5" : "1.5"}
                  className="transition-colors duration-200"
                />
                <circle
                  cx="125"
                  cy="70"
                  fill={hoveredDivision === 0 ? "#930000" : "#DDD8C5"}
                  r={hoveredDivision === 0 ? "4.5" : "3"}
                  stroke="#EDEBDD"
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                />

                {/* Branch 1: Jurnalistik */}
                <path
                  d="M 375 46 L 375 70"
                  stroke={hoveredDivision === 1 ? "#930000" : "#DDD8C5"}
                  strokeLinecap="round"
                  strokeWidth={hoveredDivision === 1 ? "2.5" : "1.5"}
                  className="transition-colors duration-200"
                />
                <circle
                  cx="375"
                  cy="70"
                  fill={hoveredDivision === 1 ? "#930000" : "#DDD8C5"}
                  r={hoveredDivision === 1 ? "4.5" : "3"}
                  stroke="#EDEBDD"
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                />

                {/* Branch 2: Fotosin */}
                <path
                  d="M 625 46 L 625 70"
                  stroke={hoveredDivision === 2 ? "#930000" : "#DDD8C5"}
                  strokeLinecap="round"
                  strokeWidth={hoveredDivision === 2 ? "2.5" : "1.5"}
                  className="transition-colors duration-200"
                />
                <circle
                  cx="625"
                  cy="70"
                  fill={hoveredDivision === 2 ? "#930000" : "#DDD8C5"}
                  r={hoveredDivision === 2 ? "4.5" : "3"}
                  stroke="#EDEBDD"
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                />

                {/* Branch 3: DKV */}
                <path
                  d="M 875 46 L 875 70"
                  stroke={hoveredDivision === 3 ? "#930000" : "#DDD8C5"}
                  strokeLinecap="round"
                  strokeWidth={hoveredDivision === 3 ? "2.5" : "1.5"}
                  className="transition-colors duration-200"
                />
                <circle
                  cx="875"
                  cy="70"
                  fill={hoveredDivision === 3 ? "#930000" : "#DDD8C5"}
                  r={hoveredDivision === 3 ? "4.5" : "3"}
                  stroke="#EDEBDD"
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                />
              </svg>
            </div>
          </div>

          {/* Bottom Tier: 4 Divisions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
            {DIVISIONS.map((div, idx) => (
              <div
                key={div.id}
                onMouseEnter={() => setHoveredDivision(idx)}
                onMouseLeave={() => setHoveredDivision(null)}
                onClick={() => setSelectedDivision(div)}
                className={`group relative rounded-2xl overflow-hidden shadow-md border transition-all duration-300 p-2.5 bg-surface-card flex flex-col cursor-pointer ${
                  hoveredDivision === idx
                    ? "border-primary -translate-y-2 shadow-xl ring-2 ring-primary/10"
                    : "border-border-subtle hover:border-primary hover:-translate-y-1.5"
                }`}
              >
                {/* Photo Container */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-surface-container mb-3">
                  {div.image && (
                    <Image
                      src={div.image}
                      alt={div.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs font-mono text-[10px] font-bold text-primary shadow-xs">
                      DIVISI {idx + 1}
                    </span>
                  </div>

                  {/* Bottom Image Label */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
                    <span className="font-mono text-[11px] text-[#ffdad4] uppercase font-bold tracking-wider">
                      {div.abbreviation}
                    </span>
                    <h4 className="font-heading text-base font-bold leading-tight drop-shadow-xs">
                      {div.name}
                    </h4>
                  </div>
                </div>

                {/* Division Brief */}
                <div className="flex-1 flex flex-col justify-between px-1 pb-1">
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-3">
                    {div.description}
                  </p>

                  {/* Skill Badges */}
                  <div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {div.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-surface-container-low border border-border-subtle font-mono text-[10px] text-on-surface-variant"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Click Trigger */}
                    <button
                      type="button"
                      className="w-full py-1.5 px-3 rounded-lg border border-border-subtle bg-surface-card-warm text-primary font-heading text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-1 group-hover:border-primary"
                    >
                      <span>Lihat Tupoksi &amp; Portofolio</span>
                      <span className="text-xs transition-transform group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reactive Interactive Division Detail Modal (FR-04 PRD) */}
      {selectedDivision && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedDivision(null)}
        >
          <div
            className="relative w-full max-w-xl bg-surface-card rounded-3xl border border-border-subtle shadow-2xl p-6 md:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDivision(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-canvas flex items-center justify-center transition-colors"
              aria-label="Tutup Modal"
            >
              &times;
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded-full bg-primary text-white font-mono text-xs font-bold">
                {selectedDivision.abbreviation}
              </span>
              <span className="font-mono text-xs text-on-surface-variant">
                {selectedDivision.focus}
              </span>
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-on-surface mb-3">
              Divisi {selectedDivision.name}
            </h3>

            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5">
              {selectedDivision.description}
            </p>

            {/* Skills & Competencies */}
            <div className="mb-5">
              <h5 className="font-mono text-xs uppercase tracking-wider text-primary font-bold mb-2">
                Keahlian &amp; Ruang Lingkup:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {selectedDivision.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-surface-container-low border border-border-subtle font-mono text-xs text-on-surface"
                  >
                    &bull; {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Ecosystem */}
            {selectedDivision.tools && (
              <div className="mb-6">
                <h5 className="font-mono text-xs uppercase tracking-wider text-primary font-bold mb-2">
                  Tools &amp; Software Utama:
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDivision.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-white border border-border-subtle font-mono text-xs text-on-surface-variant shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Cluster */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-border-subtle">
              <Link
                href="#kontak"
                onClick={() => setSelectedDivision(null)}
                className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-heading text-sm font-semibold hover:bg-primary-hover text-center transition-colors shadow-sm"
              >
                Daftar ke Divisi {selectedDivision.name}
              </Link>
              <button
                type="button"
                onClick={() => setSelectedDivision(null)}
                className="py-3 px-5 rounded-xl border border-border-subtle bg-surface-container-low text-on-surface-variant font-heading text-sm font-semibold hover:bg-surface-canvas transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
